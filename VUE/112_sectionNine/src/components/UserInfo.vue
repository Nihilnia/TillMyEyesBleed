<template>
  <card-base>
    <template v-slot:slotHeader>
      <h3>{{ fullName }}</h3>
      <base-badge
        :type="role"
        :caption="role.toUpperCase()"
        @click="$emit('change-role-type')"
        class="Gloria"
      ></base-badge>
    </template>
    <template v-slot:default>
      <p>{{ infoText }}</p>
    </template>
  </card-base>
</template>

<script>
import CardBase from "./CardBase.vue";
import BaseBadge from "./BaseBadge.vue";

export default {
  components: {
    CardBase,
    BaseBadge,
  },
  props: ["fullName", "infoText", "role"],
};
</script>

<style scoped>
section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.Gloria {
  cursor: pointer;
}
</style>
