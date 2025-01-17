<template>
  <section id="desktop">
    <header>
      <div>
        <img
          src="../../assets/pics/nihilZone.jpg"
          alt=""
          :style="{ maxWidth: imgMaxWidth }"
        />
      </div>
      <div>
        <side-button
          fa-icon="fa-solid fa-square-caret-left"
          @click="handleGridLayout"
        ></side-button>
      </div>
    </header>
    <div id="pages">
      <div>
        <side-button
          :class="{ active: activeButton === 'Home' }"
          @click="setActiveButton('Home')"
          title="Home"
          fa-icon="fas fa-home"
        ></side-button>
      </div>
      <div>
        <side-header title="Projects"></side-header>
        <div class="abc">
          <side-button
            :class="{ active: activeButton === 'Front-End' }"
            @click="setActiveButton('Front-End')"
            title="Front-End"
            route="projects"
            fa-icon="fas fa-folder"
          ></side-button>
          <side-button
            :class="{ active: activeButton === 'Full-Stack' }"
            @click="setActiveButton('Full-Stack')"
            title="Full-Stack"
            route="projects"
            fa-icon="fas fa-folder"
          ></side-button>
          <side-button
            :class="{ active: activeButton === 'This project' }"
            @click="setActiveButton('This project')"
            title="This project"
            route="this-project"
            fa-icon="fas fa-project-diagram"
          ></side-button>
        </div>
      </div>
      <div>
        <side-header title="Lab"></side-header>
        <div class="abc">
          <side-button
            :class="{ active: activeButton === 'Lab' }"
            @click="setActiveButton('Lab')"
            title="Lab"
            route="lab"
            fa-icon="fas fa-flask"
          ></side-button>
          <side-button
            :class="{ active: activeButton === 'Useful Links' }"
            @click="setActiveButton('Useful Links')"
            title="Useful Links"
            route="useful-links"
            fa-icon="fas fa-link"
          ></side-button>
        </div>
      </div>
      <div>
        <side-header title="Nihil"></side-header>
        <div class="abc">
          <side-button
            :class="{ active: activeButton === 'About Me' }"
            @click="setActiveButton('About Me')"
            title="About Me"
            route="about-me"
            fa-icon="fas fa-user"
          ></side-button>
        </div>
      </div>
    </div>
  </section>
  <section id="tablet-mobile">
    <div id="btn-hamburger" @click="handleHamburger" :class="hamburgerStyles">
      <img src="../../assets/pics/grid.svg" alt="" />
    </div>
    <div id="pages" :class="hamburgerMenuStyles">
      <div>
        <side-button
          :class="{ active: activeButton === 'Home' }"
          @click="setActiveButton('Home')"
          title="Home"
          fa-icon="fas fa-home"
        ></side-button>
      </div>
      <div>
        <side-header title="Projects"></side-header>
        <div class="abc">
          <side-button
            :class="{ active: activeButton === 'Front-End' }"
            @click="setActiveButton('Front-End')"
            title="Front-End"
            route="projects"
            fa-icon="fas fa-folder"
          ></side-button>
          <side-button
            :class="{ active: activeButton === 'Full-Stack' }"
            @click="setActiveButton('Full-Stack')"
            title="Full-Stack"
            route="projects"
            fa-icon="fas fa-folder"
          ></side-button>
          <side-button
            :class="{ active: activeButton === 'This project' }"
            @click="setActiveButton('This project')"
            title="This project"
            route="this-project"
            fa-icon="fas fa-project-diagram"
          ></side-button>
        </div>
      </div>
      <div>
        <side-header title="Lab"></side-header>
        <div class="abc">
          <side-button
            :class="{ active: activeButton === 'Lab' }"
            @click="setActiveButton('Lab')"
            title="Lab"
            route="lab"
            fa-icon="fas fa-flask"
          ></side-button>
          <side-button
            :class="{ active: activeButton === 'Useful Links' }"
            @click="setActiveButton('Useful Links')"
            title="Useful Links"
            route="useful-links"
            fa-icon="fas fa-link"
          ></side-button>
        </div>
      </div>
      <div>
        <side-header title="Nihil"></side-header>
        <div class="abc">
          <side-button
            :class="{ active: activeButton === 'About Me' }"
            @click="setActiveButton('About Me')"
            title="About Me"
            route="about-me"
            fa-icon="fas fa-user"
          ></side-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SideButton from "../UI/SideButton.vue";
import SideHeader from "../UI/SideHeader.vue";

export default {
  components: {
    SideButton,
    SideHeader,
  },
  inject: ["setGridLayout"],
  data() {
    return {
      activeButton: "Home",
      imgMaxWidth: "30%",
      isHamburger: false,
    };
  },
  methods: {
    setActiveButton(buttonTitle) {
      this.activeButton = buttonTitle;
      this.isHamburger = false;
    },
    handleGridLayout() {
      this.imgMaxWidth = this.imgMaxWidth === "30%" ? "60%" : "30%";
      this.setGridLayout();
    },
    handleHamburger() {
      this.isHamburger = !this.isHamburger;
    },
  },
  computed: {
    hamburgerStyles() {
      return this.isHamburger ? "bg-black" : "bg-transparent";
    },
    hamburgerMenuStyles() {
      return this.isHamburger ? "show" : "hide";
    },
  },
};
</script>

<style scoped>
#desktop {
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
}

#desktop > header {
  display: flex;
  justify-content: space-between;
}

#desktop img {
  max-width: 30%;
  border-radius: 50%;
}

#desktop #pages > div {
  margin-top: 50px;
}

#desktop .abc {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-top: 7px;
}

#desktop .active {
  border: 1px solid #fff;
  border-radius: 5px;
  animation: borderPulse 1.44s infinite;
}

@keyframes borderPulse {
  0%,
  100% {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
}

#tablet-mobile {
  display: none;
}

@media all and (max-width: 1200px) {
  #desktop {
    display: none;
  }

  #btn-hamburger > img {
    max-width: 5%;
    width: 100%;
    filter: invert(100%) brightness(200%);
  }

  #tablet-mobile {
    display: block;
    max-width: 100%;
    width: 100%;
    z-index: 9999;
  }

  .bg-black {
    background-color: #000;
  }

  .bg-transparent {
    background-color: transparent;
  }

  .show {
    display: block;
    position: fixed;
    max-width: 100%;
    width: 100%;
    background-color: #000;
    padding: 20px;
  }

  .hide {
    display: none;
  }
}
</style>
