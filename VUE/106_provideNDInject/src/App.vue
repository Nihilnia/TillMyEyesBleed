<template>
  <section>
    <active-element
      :id="selectedElement && selectedElement.id"
      :name="selectedElement && selectedElement.name"
      :description="selectedElement && selectedElement.description"
    ></active-element>
    <element-base
      :elements="elements"
      @emit-select-element="getSelectedElement"
    ></element-base>
    <new-element @emit-new-element="getNewElement"></new-element>
  </section>
</template>

<script>
import ActiveElement from "./components/ActiveElement.vue";
import ElementBase from "./components/ElementBase.vue";
import NewElement from "./components/NewElement.vue";
export default {
  components: { ActiveElement, ElementBase, NewElement },
  data() {
    return {
      selectedElement: null,
      elements: [
        { id: 0, name: "Gloria", description: "ai" },
        { id: 1, name: "Alt", description: "Rogue AI" },
      ],
    };
  },
  methods: {
    getSelectedElement(ID) {
      console.log("Incomi ID");
      console.log(ID);
      this.selectedElement = this.elements.find((f) => f.id == ID);
    },
    getNewElement(elName, elDesc) {
      this.elements.unshift({
        id: new Date().toISOString(),
        name: elName,
        description: elDesc,
      });
      console.log("New element added.");
    },
  },
  // provide: {
  //   elements: [
  //     { id: 0, name: "Gloria", description: "ai" },
  //     { id: 1, name: "Alt", description: "Rogue AI" },
  //   ],
  // },
  provide() {
    return {
      elements: this.elements,
    };
  },
};
</script>

<style>
section {
  border: 10px solid black;
}
</style>
