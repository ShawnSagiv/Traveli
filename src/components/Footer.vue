<template>
  <v-footer class="grey lighten-4 py-10">
    <v-container>
      <v-row>
        <v-col cols="12" lg="3" class="text-center">
            <img src="@/assets/logo.png" width="150px" alt="Traveli">
        </v-col>
        <v-col cols="12" md="4" lg="3">
          <strong class="black--text">Traveli</strong>
          <div class="menu">
            <ul>
              <li>Our story</li>
              <li>why should you order with us?</li>
              <li>Talk to us</li>
              <li>Questions and answers</li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="4" lg="3">
          <strong class="black--text">Useful information</strong>
          <div class="menu">
            <ul>
              <li>Website Terms</li>
              <li>Privacy policy and information security on the website</li>
              <li>Instructions for flying and refunding from abroad</li>
              <li>Accessibility statement</li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="4" lg="3">
          <strong class="black--text">Orders</strong>
          <div class="menu">
            <ul>
              <li>We compare price</li>
              <li>Refund service in unexpected 100% cases</li>
              <li>
                Cancellation form according to the Consumer Protection Law
              </li>
              <li>Application form for the refund of port issues</li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
ul {
  padding: 0;
}
ul li {
  list-style-type: none;
  color: grey;
  padding-top: 10px;
  font-size: 14px;
}

ul li:hover {
  cursor: pointer;
}
</style>
