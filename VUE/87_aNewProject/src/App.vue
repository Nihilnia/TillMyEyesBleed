<template>
  <section>
    <contact-form @emit-new-contact="getNewContact"></contact-form>
    <header>
      <h1>Friends List</h1>
    </header>
    <friend-contact
      v-for="friend in friends"
      :id="friend.id"
      :key="friend.id"
      :name="friend.name"
      :emailAddress="friend.email"
      :phoneNumber="friend.phoneNumber"
      :isFavorite="friend.isFav"
      @emit-favorite="changeFavorite"
      @emit-remove="removeFriend"
    ></friend-contact>
  </section>
</template>

<script>
import ContactForm from "./components/ContactForm.vue";
import FriendContact from "./components/FriendContact.vue";
export default {
  components: { FriendContact, ContactForm },
  data() {
    return {
      friends: [],
    };
  },
  methods: {
    changeFavorite(friendID) {
      let foundFriend = this.friends.find((f) => f.id == friendID);
      if (foundFriend != null) {
        console.log(`Friend found: ${foundFriend.name}`);
        console.log(foundFriend);
        foundFriend.isFav = !foundFriend.isFav;
        console.log(
          `${foundFriend.name}' s isFav value changed as: ${
            foundFriend.isFav ? true : false
          }`
        );
        console.log(this.friends);
      }
    },
    getNewContact(ncName, ncPhone, ncEmail) {
      this.friends.push({
        id: new Date().toISOString(),
        name: ncName,
        phoneNumber: ncPhone,
        email: ncEmail,
      });
    },
    removeFriend(ID) {
      this.friends = this.friends.filter((f) => f.id !== ID);
    },
  },
  mounted() {
    console.log(`VUE app mounted.. And here is your friends object:`);
    console.log(this.friends);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
  list-style: none;
}

form div > div {
  margin-bottom: 10px;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
