<template>
  <div class="home">
    <v-row tag="header" class="header" align="end" justify="center" no-gutters>
      <v-col cols="12">
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" sm="6" md="4" lg="2" xl="2" class="px-1 mt-2">
              <VacationTypes @save="onVacationTypeSelect" @cancel="onCancelVacationType" />
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="2" xl="2" class="px-1 mt-2">
              <Destinations />
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="2" xl="2" class="px-1 mt-2">
              <Dates />
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="2" xl="2" class="px-1 mt-2">
              <Persons />
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="2" xl="2" class="px-1 mt-2">
              <Price />
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="2" xl="2" class="px-1 mt-2">
              <v-btn color="primary" class="black--text" @click="search" depressed block x-large><v-icon>mdi-magnify</v-icon> Search</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <v-container>
      <!-- Refund Service -->
      <v-card flat color="accent" class="mt-10" rounded="xl">
        <v-card-text>
          <h3 class="white--text">
            Refund service in unexpected casees (including corona cases) 100%.
          </h3>
          <div class="mt-2 white--text">
            New in Traveli - now you can add to every offer the option to cancel
            until the day of the flight in case of unexpected cancellation and
            receive a 100% refund of the price of the vacation.
          </div>
        </v-card-text>
      </v-card>

      <v-row class="mt-5">
        <v-col cols="12" md="4" class="mt-5">
          <v-card flat color="grey lighten-4" rounded="lg" height="160">
            <v-card-text>
              <div class="d-flex align-center mb-3">
                <img src="@/assets/icons/search.png">
                <h3 class="ml-2">1. Find out</h3>
              </div>
              <p>
                Let Traveli offer you great vacations that include flight and
                hotel to the destinations. dates and vacation types that best
                fit your budget.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="mt-5">
          <v-card flat color="grey lighten-4" rounded="lg" height="160">
            <v-card-text>
              <div class="d-flex align-center mb-3">
                <img src="@/assets/icons/heart.png">
                <h3 class="ml-2">2. Adapt</h3>
              </div>
              <p>
                Change the number of days. The departure date and the requested
                flight. until you find the ideal vacation for you. Pay attention
                to our recommendations on offers and especially profitable
                dates.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="mt-5">
          <v-card flat color="grey lighten-4" rounded="lg" height="160">
            <v-card-text>
              <div class="d-flex align-center mb-3">
                <img src="@/assets/icons/travelling.png">
                <h3 class="ml-2">3. Order</h3>
              </div>
              <p>
                Book both the flight and the hotel with us at the click of a
                button and save time and money. We are here for you any question
                before during and after the order.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Block 2 - Get Out of the box -->

      <v-row class="mt-5">
        <v-col cols="12" class="mt-5">
          <h1>Get out of the box</h1>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="mt-5">
          <v-card href="https://www.visitmorocco.com/en" target="_blank" height="200" :img="morroco" rounded="xl">
            <v-card-text class="country-section d-flex flex-row">
              <h2 class="white--text">Morroco</h2>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="6" class="mt-5">
          <v-card href="https://visitnamibia.com.na/" target="_blank" height="200" :img="namibia" rounded="xl">
            <v-card-text class="country-section d-flex flex-row">
              <h2 class="white--text">Namibia</h2>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="mt-5">
          <v-card href="https://www.lonelyplanet.com/azerbaijan/baku-baki" target="_blank" height="200" :img="baku" rounded="xl">
            <v-card-text class="country-section d-flex flex-row">
              <h2 class="white--text">Baku</h2>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="mt-5">
          <v-card href="https://www.tourism.gov.bt/" target="_blank" height="200" :img="bhutan" rounded="xl">
            <v-card-text class="country-section d-flex flex-row">
              <h2 class="white--text">Bhutan</h2>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="mt-5">
          <v-card href="https://www.visiticeland.com/" target="_blank" height="200" :img="iceland" rounded="xl">
            <v-card-text class="country-section d-flex flex-row">
              <h2 class="white--text">Iceland</h2>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="6" class="mt-5">
          <v-card href="https://visitfaroeislands.com/en" target="_blank" height="200" :img="faro" rounded="xl">
            <v-card-text class="country-section d-flex flex-row">
              <h2 class="white--text">Faro islands</h2>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Block 3 - Trending in Traveli -->

      <v-row class="mt-5">
        <v-col cols="12" class="mt-5">
          <h1>Trending in Traveli</h1>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="mt-5">
          <v-card to="/amsterdam" height="250" :img="amsterdam" rounded="xl">
            <v-card-text class="country-section d-flex flex-row">
              <h2 class="white--text">Amsterdam</h2>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" class="mt-5">
          <v-card to="/krakow" height="250" :img="krakow" rounded="xl">
            <v-card-text class="country-section d-flex flex-row">
              <h2 class="white--text">Krakow</h2>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" class="mt-5">
          <v-card to="/budapest" height="250" :img="budapest" rounded="xl">
            <v-card-text class="country-section d-flex flex-row">
              <h2 class="white--text">Budapest</h2>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" class="mt-5">
          <v-card to="/istanbul" height="250" :img="istanbul" rounded="xl">
            <v-card-text class="country-section d-flex flex-row">
              <h2 class="white--text">Istanbul</h2>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" class="mt-5">
          <v-card to="/prague" height="250" :img="parague" rounded="xl">
            <v-card-text class="country-section d-flex flex-row">
              <h2 class="white--text">Prague</h2>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" class="mt-5">
          <v-card to="/dubai" height="250" :img="dubai" rounded="xl">
            <v-card-text class="country-section d-flex flex-row">
              <h2 class="white--text">Dubai</h2>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VacationTypes from '@/components/Search/VacationTypes';
import Destinations from '@/components/Search/Destinations';
import Persons from '@/components/Search/Persons';
import Price from '@/components/Search/Price';
import Dates from '@/components/Search/Dates';
import Budapest from '@/assets/images/block/Budapest.jpeg';
import Dubai from '@/assets/images/block/dubai.jpeg';
import Morroco from '@/assets/images/block/morroco.webp';
import Baku from '@/assets/images/block/baku.jpeg';
import Amsterdam from '@/assets/images/block/Amsterdam.jpeg';
import Krakow from '@/assets/images/block/Krakow.jpeg';
import Greece from '@/assets/images/block/greece.jpeg';
import Istanbul from '@/assets/images/block/istanbul.jpg';
import NewYork from '@/assets/images/block/newyork.jpeg';
import Parague from '@/assets/images/block/parague.jpeg';
import Iceland from '@/assets/images/block/Iceland.webp';
import Namibia from '@/assets/images/block/namibia.jpeg';
import Bhutan from '@/assets/images/block/bhutan.webp';
import Faro from '@/assets/images/block/faro.jpeg';
export default {
  name: 'Home',

  components: {
    VacationTypes,
    Destinations,
    Persons,
    Price,
    Dates
  },
  data() {
    return {
      morroco: Morroco,
      budapest: Budapest,
      dubai: Dubai,
      baku: Baku,
      amsterdam: Amsterdam,
      krakow: Krakow,
      greece: Greece,
      istanbul: Istanbul,
      newyork: NewYork,
      parague: Parague,
      iceland: Iceland,
      bhutan: Bhutan,
      namibia: Namibia,
      faro: Faro,

      vacationType: null,
    };
  },
  methods: {
    onVacationTypeSelect(value) {
      this.vacationType = { ...value }
    },
    onCancelVacationType() {
      this.vacationType = null
    },
    search() {
      if (this.vacationType && this.vacationType.redirect) {
        this.$router.push(this.vacationType.redirect)
      }
    }
  }
};
</script>

<style scoped>
.header {
  background: url('@/assets/images/home-banner.jpg');
  background-repeat: no-repeat;
  width: 100%;
  height: 500px;
  background-size: 100% 100%;
}

.country-section {
  height: 200px;
}
</style>
