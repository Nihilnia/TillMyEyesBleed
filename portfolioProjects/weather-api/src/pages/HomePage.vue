<template>
  <section>
    <div class="card">
      <img
        :src="getWeatherImage(weather.condition.text)"
        :alt="weather.condition.text"
        class="card-image"
        v-if="weather"
      />
      <div class="card-content">
        <h2 class="card-title">
          {{ userCity || location.city }},
          {{ region || location.region_name || "N/A" }}
        </h2>
        <div class="card-description" v-if="weather">
          <div>{{ weather.temp_c }}°C, {{ weather.condition.text }}</div>
        </div>
        <p class="card-description" v-else>Fetching weather data...</p>
      </div>
    </div>
    <div id="user-query">
      <user-input @emit-user-input="getUserQuery"></user-input>
    </div>
  </section>
</template>

<script>
import UserInput from "@/components/UserInput.vue";

export default {
  components: {
    UserInput,
  },
  data() {
    return {
      location: null, // Auto-detected location
      weather: null, // Weather data
      userCity: null, // User-input city
      region: null, // Dynamically updated region
      ipstackApiKey: "763ec676fbc50bd1fd83954615e43db9",
      weatherApiKey: "013d2cfbc2f745c7b4253500251701",
    };
  },
  created() {
    this.getUserLocation(); // Auto-detect location on component creation
  },
  methods: {
    async getUserLocation() {
      try {
        const response = await fetch(
          `http://api.ipstack.com/check?access_key=${this.ipstackApiKey}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.location = data;

        // Fetch weather for auto-detected city if no user input exists
        if (!this.userCity && this.location.city) {
          this.getWeatherData(this.location.city);
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    },
    async getWeatherData(city) {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${this.weatherApiKey}&q=${city}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.weather = data.current;

        // Update region dynamically from WeatherAPI's location data
        this.region = data.location.region;
        console.log("Weather data:", this.weather);
        console.log("Region updated to:", this.region);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    },
    getWeatherImage(condition) {
      // Map weather conditions to image paths
      const images = {
        Sunny: require("@/assets/sunny.jpg"),
        "Partly cloudy": require("@/assets/partly-cloudy.jpg"),
        Rain: require("@/assets/rainy.jpg"),
        // Add more mappings as needed
      };

      // Return the corresponding image or a default image
      return images[condition] || require("@/assets/default.jpg");
    },
    getUserQuery(city) {
      this.userCity = city; // Update userCity with the input
      if (this.userCity) {
        this.getWeatherData(this.userCity); // Fetch weather for user-provided city
      }
    },
  },
};
</script>

<style>
/* Section styling */
section {
  max-width: fit-content;
  margin: auto;
  margin-top: 10% !important;
}

/* Card styling */
.card {
  width: 300px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Card image styling */
.card-image {
  width: 100%;
  height: 200px;
  object-fit: contain; /* Ensures icons fit without cropping */
  background-color: #f0f0f0; /* Neutral background in case of missing images */
  overflow: hidden; /* Ensures no overflow issues with border-radius */
}

/* Card content styling */
.card-content {
  padding: 20px;
}

.card-title {
  margin: 0 0 10px;
  font-size: 24px;
  color: #333;
}

.card-description {
  margin: 0;
  color: #666;
  line-height: 1.5;
}
</style>
