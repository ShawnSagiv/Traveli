<template>
  <div class="search-area">
    <div
      class="search-filter cursor-pointer"
      @click="showDropdown = !showDropdown"
    >
      <div class="d-flex align-center">
        <img class="mr-1" src="@/assets/icons/tool.png"><h4>Where?</h4>
      </div>
    
      <h5>{{ type && type.name }}</h5>
    </div>
    <div
      v-if="showDropdown"
      class="search-dropdown"
      v-click-outside="onClickOutside"
    >
      <v-row no-gutters>
        <v-col cols="12" class="mt-3">
            <v-text-field
                v-model="search"
                outlined
                dense
                color="info darken-4"
                prepend-inner-icon="mdi-magnify"
                label="Where is your location ? Type or choose from the list."
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <h4>Top destinations by location:</h4>
        </v-col>
        <v-col
          cols="6"
          sm="4"
          class="px-2"
          v-for="country in locations"
          :key="country.id"
        >
          <v-checkbox
            v-model="country.selected"
            color="info darken-4"
            @change="setSelected($event, country)"
            :label="country.name"
            hide-details
          >
            <template #label>
              <strong class="black--text item-text">{{ country.name }}</strong>
            </template>
          </v-checkbox>
        </v-col>
      </v-row>
      <v-row no-gutters class="mt-3 mb-3">
        <v-col cols="12">
            <h4>Traveli's Choice:</h4>
        </v-col>
        <v-col
          cols="6"
          sm="4"
          class="px-2"
          v-for="country in choices"
          :key="country.id"
        >
          <v-checkbox
            v-model="country.selected"
            color="info darken-4"
            @change="setSelected($event, country)"
            :label="country.name"
            hide-details
          >
            <template #label>
              <strong class="black--text item-text">{{ country.name }}</strong>
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
        >Clear</v-btn
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
  width: 100%;
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
  min-width: 550px;
  max-width: 100%;
  height: auto;
  max-height: 350px;
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
      search: null,
      locations: [
        {
          id: 1,
          selected: false,
          name: 'Greek Islands',
        },
        {
          id: 2,
          selected: false,
          name: 'Classic Europe',
        },
        {
          id: 3,
          selected: false,
          name: 'North America',
        },
        {
          id: 4,
          selected: false,
          name: 'The far east',
        },
        {
          id: 5,
          selected: false,
          name: 'The Mediterranean basin',
        },
        {
          id: 6,
          selected: false,
          name: 'East Europe',
        },
        {
          id: 7,
          selected: false,
          name: 'North of Italy',
        },
        {
          id: 8,
          selected: false,
          name: 'Central America',
        },
        {
          id: 9,
          selected: false,
          name: 'United Arab Emirates',
        },
        {
          id: 10,
          selected: false,
          name: 'West Europe',
        },
        {
          id: 11,
          selected: false,
          name: 'Thailand',
        },
        {
          id: 12,
          selected: false,
          name: 'South America',
        },
      ],
      choices: [
        {
          id: 1,
          selected: false,
          name: 'Barcelona',
        },
        {
          id: 2,
          selected: false,
          name: 'Amsterdam',
        },
        {
          id: 3,
          selected: false,
          name: 'Dubai',
        },
        {
          id: 4,
          selected: false,
          name: 'Prague',
        },

        {
          id: 5,
          selected: false,
          name: 'Faro Islands',
        },
        {
          id: 6,
          selected: false,
          name: 'Bhutan',
        },
        {
          id: 7,
          selected: false,
          name: 'Istanbul',
        },
        {
          id: 8,
          selected: false,
          name: 'Abu Dhabi',
        },
        {
          id: 9,
          selected: false,
          name: 'Budapest',
        },

        {
          id: 10,
          selected: false,
          name: 'Krakow',
        },
        {
          id: 11,
          selected: false,
          name: 'Baku',
        },
        {
          id: 12,
          selected: false,
          name: 'Iceland',
        }
      ],
      countries: [

      ]
    };
  },
  methods: {
    onClickOutside() {
      this.showDropdown = false;
    },
    onSearch() {
        const allLocations = JSON.parse(JSON.stringify(this.locations))
        const allChoices = JSON.parse(JSON.stringify(this.choices))
        const loc = this.search && this.search.toLowerCase()
        if (loc) {
            
        } else {

        }
    },
    cancel() {
      this.showDropdown = false;
      this.selected = null;
      this.type = null
    },
    save() {
      this.showDropdown = false;
      this.type = (this.selected && { ...this.selected }) || null;
    },
    async setSelected(event, country) {
      if (event) {
        this.selected = { ...country };
      } else {
        this.selected = null;
      }

      if (this.selected) {
        const locations = this.locations.map((loc) => {
          if (loc.id !== this.selected.id) {
            loc.selected = false;
          }

          return loc;
        });

        const choices = this.choices.map((loc) => {
          if (loc.id !== this.selected.id) {
            loc.selected = false;
          }

          return loc;
        });

        this.locations = JSON.parse(JSON.stringify(locations));
        this.choices = JSON.parse(JSON.stringify(choices));
      }
    },
  },
};
</script>
