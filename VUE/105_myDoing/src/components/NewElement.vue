<template>
  <section>
    <form @keyup.enter="$emit('emit-new-element', name, description)">
      <input type="text" v-model="name" />
      <input type="text" v-model="description" />
    </form>
  </section>
</template>

<script>
export default {
  emit: ["emit-new-element"],
  data() {
    return {
      name: "",
      description: "",
    };
  },
};
</script>
