<template>
  <ul>
    <li v-for="friend in friends" :key="friend.id">
      <h3>{{ friend.id }}</h3>
      <h3>{{ friend.name }}</h3>
      <h3>{{ friend.phone }}</h3>
      <h3>{{ friend.eMail }}</h3>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 0,
          name: "Gloria",
          phone: "123 456",
          eMail: "Gloria@AI.com",
        },
        {
          id: 1,
          name: "ALT",
          phone: "654 321",
          eMail: "ALT@rogueAI.com",
        },
      ],
    };
  },
};
</script>
