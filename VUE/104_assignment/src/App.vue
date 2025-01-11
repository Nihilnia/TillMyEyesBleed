<template>
  <section id="grid-main">
    <div>
      <user-data @emit-send-user="getUser"></user-data>
      <br />
      <h4>{{ calcTotalUsers }}</h4>
    </div>
    <div>
      <active-user
        v-for="user in users"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        :age="user.age"
      ></active-user>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getUser(uName, uAge) {
      this.users.unshift({
        id: new Date().toISOString(),
        name: uName,
        age: uAge,
      });
    },
  },
  computed: {
    calcTotalUsers() {
      let userCount = this.users.length;
      if (userCount > 0) {
        return `Total users: ${userCount}`;
      } else {
        return `Theres no user/ s yet`;
      }
    },
  },
};
</script>

<style scoped>
#grid-main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
}
</style>
