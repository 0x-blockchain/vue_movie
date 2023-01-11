<template>
  <div class="m-2">
    <button
      class="btn-toggle text-white text-uppercase"
      :class="[showItem1 ? 'active' : '']"
      @click="toggle"
    >
      {{ item1 }}
    </button>
    <button
      class="btn-toggle text-white text-uppercase"
      :class="[!showItem1 ? 'active' : '']"
      @click="toggle"
    >
      {{ item2 }}
    </button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BaseToggleButton',
  props: {
    item1: {
      type: String,
      default: 'item1',
    },
    item2: {
      type: String,
      default: 'item2',
    },
  },
  data() {
    return {
      showItem1: true,
    }
  },
  methods: {
    toggle() {
      this.showItem1 = !this.showItem1
    },
  },
}
</script>
<style>
.btn-toggle {
  border: none;
  padding: 10px 20px;
  background-color: #495252;
  opacity: 0.7;
}
.active {
  opacity: 1;
  background-color: rgb(235 104 104) !important;
}
</style>
