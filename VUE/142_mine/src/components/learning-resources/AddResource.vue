<template>
  <base-card>
    <form @submit.prevent="handleFormData">
      <div>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" ref="resTitle" />
      </div>
      <div>
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          ref="resDescription"
        />
      </div>
      <div>
        <label for="link">Link</label>
        <input type="text" name="link" id="link" ref="resLink" />
      </div>
      <base-button type="submit">Add</base-button>
    </form>
    <base-dialog v-if="isModel" @emit-handle-dialog="handleDialog">
      <template #header>
        <h4>Something went wrong</h4>
      </template>
      <template #body>
        <p>You need to fill out all the input fields.</p>
      </template>
      <template #footer>
        <base-button @click="handleDialog">Okay</base-button>
      </template>
    </base-dialog>
  </base-card>
</template>

<script>
export default {
  inject: ["handleNewRes", "handleSelectedTab"],
  data() {
    return {
      isModel: false,
    };
  },
  methods: {
    handleFormData() {
      const resTitle = this.$refs.resTitle.value;
      const resDescription = this.$refs.resDescription.value;
      const resLink = this.$refs.resLink.value;

      if (
        resTitle.trim() === "" ||
        resDescription.trim() === "" ||
        resLink.trim() === ""
      ) {
        this.isModel = true;
      } else {
        this.handleNewRes(resTitle, resDescription, resLink);
        console.log("New res sent.");
        this.handleSelectedTab("stored-resources");
      }
    },
    handleDialog() {
      this.isModel = false;
    },
  },
};
</script>

<style scoped>
input {
  display: block;
}
</style>
