<template>
  <section>
    <base-card>
      <form @submit.prevent="getFormData">
        <div class="form-control">
          <label>Title</label>
          <input type="text" ref="title" />
        </div>
        <div class="form-control">
          <label>Description</label>
          <textarea name="" id="" rows="3" ref="description"></textarea>
        </div>
        <div class="form-control">
          <label>Link</label>
          <input type="url" ref="link" />
        </div>
        <base-button :type="submit">Add</base-button>
        <base-dialog
          v-if="isDialogOpen"
          title="Invalid Input"
          @emitHandleDialog="handleDialog"
        >
          <template #default>
            <p>You should provide all the informations.</p>
          </template>
          <template #actions> </template>
        </base-dialog>
      </form>
    </base-card>
  </section>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';

export default {
  inject: ['addNewResource'],
  provide() {
    return {
      handleDialog: this.handleDialog,
    };
  },
  components: {
    BaseButton,
    BaseDialog,
  },
  data() {
    return {
      isDialogOpen: false,
    };
  },
  methods: {
    getFormData() {
      const enteredTitle = this.$refs.title.value;
      const enteredDescription = this.$refs.description.value;
      const enteredLink = this.$refs.link.value;

      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredLink.trim() === ''
      ) {
        this.isDialogOpen = true;
      } else {
        this.addNewResource(enteredTitle, enteredDescription, enteredLink);
      }
    },
    handleDialog() {
      this.isDialogOpen = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
