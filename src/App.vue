<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/Footer';
export default {
  name: 'App',
  components: { Footer },
  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  scroll-behavior: smooth;
}
.cursor-pointer:hover {
  cursor: pointer !important;
}

.search-dropdown {
  box-shadow: 0px 20px 24px rgba(153, 155, 168, 0.18) !important;
}

.country-header {
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
}

.country-header .header-overlay {
  position: absolute;
  background: #b2ebf2;
  width: 100%;
  border-radius: 40%;
  top: -250px;
  left: 30% !important;
  z-index: 2;
  width: 100%;
  height: 1500px;
}

.logo-image {
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 3;
}

.content {
  position: absolute;
  bottom: 125px;
  left: 40%;
  z-index: 3;
}

.item .point {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgb(175, 175, 175);
  font-weight: bold;
  font-size: 16px;
  color: white;
  text-align: center;
}

@media screen and (max-width: 960px) {
  .country-header .image-overlay {
    display: none;
  }

  .country-header .header-overlay {
    left: 0 !important;
    border-radius: 0;
  }
  .content {
    position: relative;
    bottom: -150px;
    left: 0%;
  }
}

.item-text {
  font-size: 13px;
  font-weight: 600;
}

.search-dropdown::-webkit-scrollbar {
  width: 6px;
}

/* Track */
.search-dropdown::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

/* Handle */
.search-dropdown::-webkit-scrollbar-thumb {
  background: #b2ebf2;
}

/* Handle on hover */
.search-dropdown::-webkit-scrollbar-thumb:hover {
  background: #67e5f6;
}

.vue-daterange-picker .form-control {
  border-radius: 6px !important;
  width: 350px !important;
  margin-top: 5px;
}
</style>
