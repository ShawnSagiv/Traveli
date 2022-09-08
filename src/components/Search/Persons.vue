<template>
  <div class="search-area">
    <div
      class="search-filter cursor-pointer"
      @click="showDropdown = !showDropdown"
    >
      <div class="d-flex align-center">
        <img class="mr-1" src="@/assets/icons/group.png" />
        <h4>Who?</h4>
      </div>

      <h5 v-if="people">
        <span v-if="people.adults && people.adults > 0">
          {{ people.adults }} Adults,
        </span>
        <span v-if="people.kids && people.kids > 0">
          {{ people.kids }} Kids,
        </span>
        <span v-if="people.rooms && people.rooms > 0">
          {{ people.rooms }} Rooms
        </span>
      </h5>
    </div>
    <div
      v-if="showDropdown"
      class="search-dropdown"
      v-click-outside="onClickOutside"
    >
      <div class="d-flex align-center justify-space-between">
        <div>
          <h3>Adults</h3>
          <h4>17+</h4>
        </div>
        <div class="number-input">
          <button class="plus" @click="addAdult">+</button>
          <input
            type="number"
            min="1"
            v-model="persons.adults"
            oninput="validity.valid||(value='');"
          />
          <button class="minus" @click="reduceAdult">-</button>
        </div>
      </div>
      <v-divider class="my-4" />
      <div class="d-flex align-center justify-space-between">
        <div>
          <h3>Kids</h3>
          <h4>0-17</h4>
        </div>
        <div class="number-input">
          <button class="plus" @click="addKid">+</button>
          <input
            type="number"
            min="0"
            v-model="persons.kids"
            oninput="validity.valid||(value='');"
          />
          <button class="minus" @click="reduceKid">-</button>
        </div>
      </div>
      <v-divider class="my-4" />
      <div class="d-flex align-center justify-space-between">
        <div>
          <h3>Rooms</h3>
        </div>
        <div class="number-input">
          <button class="plus" @click="addRoom">+</button>
          <input
            type="number"
            min="1"
            v-model="persons.rooms"
            oninput="validity.valid||(value='');"
          />
          <button class="minus" @click="reduceRoom">-</button>
        </div>
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

.number-input button {
  padding: 3px 10px;
  text-align: center;
  border: 1px solid #ddd;
  margin-top: 5px;
  font-weight: bold;
}

button.plus {
  border-radius: 6px 0 0 6px;
}

button.minus {
  border-radius: 0px 6px 6px 0px;
}

.number-input input {
  width: 60px;
  border: 1px solid #ddd;
  border-right: 0;
  border-left: 0;
  text-align: center;
  outline: none;
  padding: 3px 10px;
  font-weight: bold;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      people: null,
      type: null,
      persons: {
        kids: 0,
        adults: 2,
        rooms: 1,
      },
    };
  },
  methods: {
    onClickOutside() {
      this.showDropdown = false;
    },
    addAdult() {
      this.persons.adults++;
    },
    reduceAdult() {
      if (this.persons.adults > 1) {
        this.persons.adults--;
      }
    },
    addKid() {
      this.persons.kids++;
    },
    reduceKid() {
      if (this.persons.kids > 0) {
        this.persons.kids--;
      }
    },
    addRoom() {
      this.persons.rooms++;
    },
    reduceRoom() {
      if (this.persons.rooms > 1) {
        this.persons.rooms--;
      }
    },
    cancel() {
      this.showDropdown = false;
      this.people = null;
    },
    save() {
      this.showDropdown = false;
      this.people = { ...this.persons };
    },
  },
};
</script>
