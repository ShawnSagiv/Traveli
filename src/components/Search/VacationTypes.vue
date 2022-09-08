<template>
  <div class="search-area">
    <div
      class="search-filter cursor-pointer"
      @click="showDropdown = !showDropdown"
    >
      <div class="d-flex align-center">
        <img class="mr-1" src="@/assets/icons/suitcase.png" />
        <h4>Type of vacation</h4>
      </div>

      <h5>{{ type && type.name }}</h5>
    </div>
    <div
      v-if="showDropdown"
      class="search-dropdown"
      v-click-outside="onClickOutside"
    >
      <v-row no-gutters>
        <v-col
          cols="6"
          class="px-2"
          v-for="category in categories"
          :key="category.id"
        >
          <v-checkbox
            v-model="category.selected"
            color="info darken-4"
            @change="setSelected($event, category)"
            :label="category.name"
            hide-details
          >
            <template #label>
              <strong class="black--text item-text">{{ category.name }}</strong>
            </template>
          </v-checkbox>
        </v-col>
      </v-row>
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
  width: auto;
  min-width: 450px;
  max-width: 100%;
  height: auto;
  max-height: 300px;
  overflow-y: scroll;
}

@media screen and (max-width: 650px) {
  .search-dropdown {
    min-width: 100%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      selected: null,
      type: null,
      categories: [
        {
          id: 1,
          selected: false,
          name: 'All kind of vacations',
          redirect: '/dubai',
        },
        {
          id: 2,
          selected: false,
          name: 'Sunbathing',
          redirect: '/istanbul',
        },
        {
          id: 3,
          selected: false,
          name: 'Sunbathing with children',
          redirect: '/greece',
        },
        {
          id: 4,
          selected: false,
          name: 'municipal vacation',
          redirect: '/newyork',
        },
        {
          id: 5,
          selected: false,
          name: 'municipal vacation with children',
          redirect: '/greece',
        },
        {
          id: 6,
          selected: false,
          name: 'romantic',
          redirect: '/greece',
        },
        {
          id: 7,
          selected: false,
          name: 'Honeymoon',
          redirect: '/greece',
        },
        {
          id: 8,
          selected: false,
          name: 'Shopping',
          redirect: '/newyork',
        },
        {
          id: 9,
          selected: false,
          name: 'Casino',
          redirect: '/amsterdam',
        },
        {
          id: 10,
          selected: false,
          name: 'Night life',
          redirect: '/newyork',
        },
        {
          id: 11,
          selected: false,
          name: 'Bachelor/ette Party',
          redirect: '/greece',
        },
        {
          id: 12,
          selected: false,
          name: 'distant destinations',
          redirect: '/newyork',
        },
        {
          id: 13,
          selected: false,
          name: 'All the family',
          redirect: '/newyork',
        },
        {
          id: 14,
          selected: false,
          name: 'Culture and museums',
          redirect: '/budapest',
        },
        {
          id: 15,
          selected: false,
          name: 'exotic destinations',
          redirect: '/dubai',
        },
        {
          id: 16,
          selected: false,
          name: 'Extreme',
          redirect: '/istanbul',
        },
      ],
    };
  },
  methods: {
    onClickOutside() {
      this.showDropdown = false;
    },
    cancel() {
      this.showDropdown = false;
      this.selected = null;
      this.type = null;
      this.$emit('cancel', null);
    },
    save() {
      this.showDropdown = false;
      this.type = (this.selected && { ...this.selected }) || null;
      this.$emit('save', this.type);
    },
    async setSelected(event, category) {
      if (event) {
        this.selected = { ...category };
      } else {
        this.selected = null;
      }

      if (this.selected) {
        const categories = this.categories.map((cat) => {
          if (cat.id !== this.selected.id) {
            cat.selected = false;
          }

          return cat;
        });

        this.categories = JSON.parse(JSON.stringify(categories));
      }
    },
  },
};
</script>
