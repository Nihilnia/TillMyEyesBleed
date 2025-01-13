<template>
  <section>
    <h2>new res</h2>
    <form>
      <div>
        <label>Title</label>
        <input type="text" v-model="newResTitle" />
      </div>
      <div>
        <label>Description</label>
        <input type="text" v-model="newResDesc" />
      </div>
      <div>
        <label>Link</label>
        <input type="text" v-model="newResLink" />
      </div>
      <button @click.prevent="sendNewResource">Add New Res</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      newResTitle: null,
      newResDesc: null,
      newResLink: null,
    };
  },
  methods: {
    sendNewResource() {
      this.id = new Date().toISOString();
      this.$emit(
        'emit-new-res',
        this.id,
        this.newResTitle,
        this.newResDesc,
        this.newResLink
      );
      console.log('New res info sent to app');
    },
  },
};
</script>

<style scoped></style>
