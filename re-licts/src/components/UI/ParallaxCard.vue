<template>
  <div>
    <div
      ref="cardRef"
      class="pc"
      :style="cardStyle"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <div>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParallaxCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "No description provided.",
    },
    bgImage: {
      type: String,
      default: "a.jpg",
    },
  },
  data() {
    return {
      rotation: {
        rotateX: 0,
        rotateY: 0,
        translateZ: 0,
      },
    };
  },
  computed: {
    cardStyle() {
      return {
        transform: `perspective(1000px) rotateX(${this.rotation.rotateX}deg) rotateY(${this.rotation.rotateY}deg) translateZ(${this.rotation.translateZ}px)`,
        backgroundImage: `url(${require(`@/assets/pics/${this.bgImage}`)})`,
        backgroundSize: "30%",
        backgroundPositionX: "50%",
        backgroundPositionY: "20%",
        backgroundRepeat: "no-repeat",
      };
    },
  },
  methods: {
    handleMouseMove(event) {
      const card = this.$refs.cardRef; // Access cardRef through this.$refs
      if (!card) return;

      const { left, top, width, height } = card.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;

      this.rotation.rotateX = -(mouseY / height) * 20; // Max rotation of 20 degrees
      this.rotation.rotateY = (mouseX / width) * 20;
      this.rotation.translateZ = 50;
    },
    handleMouseLeave() {
      this.rotation.rotateX = 0;
      this.rotation.rotateY = 0;
      this.rotation.translateZ = 0;
    },
  },
};
</script>

<style scoped>
.pc {
  height: 300px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
}

.pc > div {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
