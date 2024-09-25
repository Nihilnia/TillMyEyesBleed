// Import required modules
const puppeteer = require("puppeteer");
const fs = require("fs");
const axios = require("axios");
const path = require("path");

// Function to download an image
async function downloadImage(url, filepath) {
  const writer = fs.createWriteStream(filepath);

  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

// Replace with the URL you want to process
const pageUrl = "https://www.artstation.com/demark";

(async () => {
  try {
    // Fetch and process the page
    const imageUrls = await processPage(pageUrl);

    // Folder where images will be saved
    const folder = path.join(__dirname, "images");

    // Create the folder if it doesn't exist
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }

    // Download all images
    for (let i = 0; i < imageUrls.length; i++) {
      const imageUrl = imageUrls[i];
      // Extract the file name from the URL
      const filename = path.basename(new URL(imageUrl).pathname);
      const filepath = path.resolve(folder, filename);

      try {
        await downloadImage(imageUrl, filepath);
        console.log(`Downloaded ${imageUrl} to ${filepath}`);
      } catch (err) {
        console.error(`Failed to download ${imageUrl}: ${err.message}`);
      }
    }
  } catch (error) {
    console.error("Error in main function:", error);
  }
})();

async function processPage(url) {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64)");

    await page.goto(url, { waitUntil: "networkidle2" });

    await autoScroll(page);

    const imageUrls = await page.evaluate(() => {
      const imgElements = Array.from(document.querySelectorAll("img"));
      return imgElements.map((img) => img.src || img.getAttribute("data-src"));
    });

    console.log("Image URLs collected:", imageUrls);

    await browser.close();

    return imageUrls;
  } catch (error) {
    console.error("Error fetching or processing the page:", error);
    return [];
  }
}

// Function to auto-scroll the page to load dynamic content
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const { scrollHeight } = document.body;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}
