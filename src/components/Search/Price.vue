<template>
  <div class="search-area">
    <div
      class="search-filter cursor-pointer"
      @click="showDropdown = !showDropdown"
    >
    <div class="d-flex align-center">
        <img class="mr-1" src="@/assets/icons/money.png" />
        <h4>Budget</h4>
      </div>

      <h5 v-if="price">${{ price[0] }} - ${{ price[1] }}</h5>
    </div>
    <div
      v-if="showDropdown"
      class="search-dropdown"
      v-click-outside="onClickOutside"
    >
      <h4>Budget per person (hotel + flight)</h4>
      <v-range-slider
        v-model="cost"
        :max="3000"
        :min="100"
        color="info darken-4"
        thumb-label
        track-color="info"
        hide-details
        class="align-center mt-4"
      >
      </v-range-slider>
      <div class="d-flex align-center justify-space-between">
        <h5>Min: $100</h5>
        <h5>Max: $3000</h5>
      </div>
      <v-divider class="my-4" />
      <v-btn
        outlined
        color="info darken-4"
        depressed
        class="text-capitalize"
        @click="save"
        >Save</v-btn
      >
      <v-btn
        outlined
        color="info darken-4"
        depressed
        class="text-capitalize ml-3"
        @click="cancel"
        >Cancel</v-btn
      >
    </div>
  </div>
</template>

<style scoped>
.search-filter {
  background: white;
  border-radius: 8px 8px 0px 0px;
  padding: 10px;
  height: 55px;
  overflow: hidden;
}

.search-area {
  position: relative;
}

.search-dropdown {
  position: absolute;
  background: white;
  top: 70px;
  left: 0;
  z-index: 2;
  border-radius: 8px;
  padding: 10px;
  min-width: 350px;
  max-width: auto;
  height: auto;
  max-height: 300px;
}
</style>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      cost: [100, 3000],
      price: null,
    };
  },
  methods: {
    onClickOutside() {
      this.showDropdown = false;
    },
    cancel() {
      this.showDropdown = false;
      this.price = null;
    },
    save() {
      this.showDropdown = false;
      this.price = this.cost;
    },
  },
};
</script>
