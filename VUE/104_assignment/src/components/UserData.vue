<template>
  <section>
    <form action="" @submit.prevent="sendUser">
      <div>
        <label for="">Name</label>
        <input type="text" name="" id="" v-model="name" />
      </div>
      <div>
        <label for="">Age</label>
        <input type="text" name="" id="" v-model="age" />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["emit-send-user"],
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    sendUser() {
      if (this.name.length > 0 && this.age.length > 0) {
        this.$emit("emit-send-user", this.name, this.age);
        console.log(this.name);
        console.log(this.age);
      } else {
        alert("Fill the inputs mfs");
      }
      this.name = "";
      this.age = "";
    },
  },
};
</script>

<style scoped>
form > div {
  display: flex;
  justify-content: space-between;
}
</style>
