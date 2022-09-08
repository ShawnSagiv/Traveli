<template>
  <div class="country istanbul">
    <div class="country-header">
      <div class="header-overlay"></div>
      <div class="image-overlay"></div>
      <div class="logo-image">
        <img
          class="cursor-pointer"
          @click="$router.push('/')"
          src="@/assets/logo.png"
          width="100"
          alt="Traveli"
        />
      </div>
      <div class="content text-center text-lg-right">
        <h1 class="black--text">Vacation in Istanbul</h1>
        <p>Find a flight and hotel deal in Istanbul that suits you.</p>
        <v-btn
          href="https://www.skyscanner.co.il/"
          target="_blank"
          depressed
          x-large
          color="primary"
          class="black--text text-capitalize"
          ><strong>Book Now</strong></v-btn
        >
      </div>
    </div>

    <!-- Country Content -->
    <v-container class="mt-10">
      <article>
        <h2 class="black--text mb-3">Istanbul</h2>
        <p class="black--text">
          Welcome to Istanbul, the largest city in Turkey and the whole of
          Europe. In this impressive achievement she holds while a part of her
          is even in Asia. This special city is divided between two continents,
          with one of the world's most important straits crossing it in the
          middle - the Bosphorus strait, which connects the Black Sea with the
          Sea of Marble (Marmara). With such an important location, is it any
          wonder that it was the capital of the Byzantine Empire and then of the
          dreaded Ottoman Empire for almost 500 years?
        </p>
        <p class="black--text">
          The truth is that Istanbul is a fairly recent name that the city
          received only in the 19th century. Before that it was Constantinople
          and in the more distant past - Byzantium. When you walk the streets of
          the old city you will find evidence of many eras and rulers and even
          religions: Hagia Sophia, the church that became a mosque and then a
          museum, Yerbatan which is an ancient water reservoir where concerts
          are held today or the ancient Galata Tower which was built in Italian
          style. In short, Istanbul is a salad of periods and styles - and like
          everything prepared in Istanbul - this salad is also simply excellent.
        </p>
        <p class="black--text">
            For quite a few visitors, Istanbul is first and foremost a perfect culinary destination. Turkish food is known all over the world to be mouth-watering and Istanbul is a great place to sample it. From the food stalls that will serve you fresh doner or hot knapa, through traditional restaurants to more modern and western places. Istanbul is not the city where you stay hungry.
        </p>
        <p class="black--text">
            Besides filling your stomach, Istanbul is also a great city to fill your suitcases. The shopping options in the city - from the authentic bazaars that should not be missed to luxury brands that can be obtained at particularly good prices - are endless. You should also leave room for at least one box of baklava or Turkish delight.
        </p>
        <p class="black--text">
            Although it is a busy city that feels like a bazaar that is constantly bustling and noisy, it is still suitable for family trips. The city offers things to do for children of all ages and its special beauty catches the eye of both young and old.
        </p>
      </article>

      <v-row no-gutters>
        <v-col cols="12" md="4" lg="5">
          <v-card
            tile
            flat
            :img="pic1"
            height="150"
            class="mt-1 mt-lg-0"
          ></v-card>
          <v-card
            tile
            class="d-none d-lg-block mt-1"
            flat
            :img="pic2"
            height="150"
          ></v-card>
        </v-col>
        <v-col cols="12" md="4" class="d-block d-lg-none py-1 px-md-1">
          <v-card tile flat :img="pic2" height="150"></v-card>
        </v-col>
        <v-col cols="12" md="4" lg="7" class="pl-lg-1 py-1 py-lg-0">
          <v-card
            flat
            tile
            :img="pic3"
            :height="$vuetify.breakpoint.lgAndUp ? 304 : 150"
          ></v-card>
        </v-col>
      </v-row>

      <section class="mt-10">
        <h2 class="black--text mb-3">Sites in Istanbul</h2>
        <v-row no-gutters>
          <v-col cols="12" lg="6" class="px-2">
            <v-card color="info" flat rounded>
              <v-card-text>
                <h2 class="black--text">
                  <strong>{{ things.length }}</strong> things not to be missed
                </h2>
              </v-card-text>
            </v-card>
            <v-card class="mt-3" color="grey lighten-4" flat rounded>
              <v-card-text>
                <div class="item mb-3" v-for="item in things" :key="item.id">
                  <div class="item-heading d-flex align-center">
                    <div class="point">{{ item.id }}</div>
                    <div class="title ml-3 black--text">{{ item.title }}</div>
                  </div>
                  <div class="item-content mt-3">
                    <p>
                      {{ item.text }}
                    </p>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="6" class="px-2">
            <v-card color="info" flat rounded>
              <v-card-text>
                <h2 class="black--text">
                  <strong>{{ attractions.length }}</strong> attractions for
                  families
                </h2>
              </v-card-text>
            </v-card>
            <v-card class="mt-3" color="grey lighten-4" flat rounded>
              <v-card-text>
                <div
                  class="item mb-3"
                  v-for="item in attractions"
                  :key="item.id"
                >
                  <div class="item-heading d-flex align-center">
                    <div class="point">{{ item.id }}</div>
                    <div class="title ml-3 black--text">{{ item.title }}</div>
                  </div>
                  <div class="item-content mt-3">
                    <p>
                      {{ item.text }}
                    </p>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <v-row no-gutters class="mt-10">
        <v-col cols="12" class="px-2">
          <v-card flat tile height="400" :img="pic4"></v-card>
        </v-col>
      </v-row>

      <section class="mt-10">
        <v-row no-gutters>
          <v-col
            v-for="item in discoveries"
            :key="item.id"
            cols="12"
            class="px-2 mb-3"
          >
            <v-card flat rounded color="info" class="mb-3">
              <v-card-text>
                <h2 class="black--text">{{ item.title }}</h2>
              </v-card-text>
            </v-card>
            <v-card flat rounded color="grey lighten-4">
              <v-card-text>
                <p class="black--text">{{ item.text }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </div>
</template>

<script>
import Pic1 from '@/assets/images/istanbul/pic1.jpeg';
import Pic2 from '@/assets/images/istanbul/pic2.jpeg';
import Pic4 from '@/assets/images/istanbul/pic4.jpeg';
import Pic3 from '@/assets/images/istanbul/pic3.jpg';
export default {
  data() {
    return {
      pic1: Pic1,
      pic2: Pic2,
      pic3: Pic3,
      pic4: Pic4,
      things: [
        {
          id: 1,
          title: 'Hagia Sophia Mosque',
          text: `It was built in the Byzantine period as a church and became a mosque under the Ottoman Empire. But it doesn't matter how you pray inside, from the outside this building is still one of the most special and impressive in the city.`,
        },
        {
          id: 2,
          title: 'The Blue Mosque',
          text: `One of the most beautiful architectural works in the city. The framer got its name thanks to Aznik's ceramics, decorated and special blue-colored tiles. You should also listen to the reading of the music instead.`,
        },
        {
          id: 3,
          title: 'Topkapi Palace',
          text: `In the palace, which is a collection of buildings, the sultans of the empire lived for 400 years. The entire complex and also the items displayed in it reflect the wealth and majesty of the rulers of the empire.`,
        },
        {
          id: 4,
          title: 'Istanbul Archeology Museum',
          text: `Presents an impressive collection of items from the history of Turkey and the entire Middle East. You can see there sarcophagi, tombs, items of Islamic art and also items from the Land of Israel.`,
        },
        {
          id: 5,
          title: `The Grand Bazaar`,
          text: `One of the oldest and most authentic original markets in the world. The atmosphere, the colors, the sounds are an experience not to be missed even if you don't come to buy. If you have decided to buy something - don't forget to bargain.`,
        },
        {
          id: 6,
          title: 'Go to the hammam',
          text: `You said Hammam, you said Turkish. This is a great way to get to know the Turkish tradition and also to strengthen the body. If you want to invest, try the beautiful and pampering Kılıc Ali Pasa Hamam.`,
        },
        {
          id: 7,
          title: 'Cruise the Bosphorus',
          text: `Beyond the great importance of this strait, which connects the Black Sea with the Sea of Marble, the main reason to get on the ferry is to see Istanbul from the water. Spectacular view.`,
        },
        {
          id: 8,
          title: `The spice market`,
          text: `Next to the Grand Bazaar is the Spice Bazaar which is also a must visit. Piles of spices, dried fruits and of course the smell of Turkish delight. If you want to buy souvenirs - this is the place.`,
        }
      ],
      attractions: [
        {
          id: 1,
          title: `Istanbul Aquarium`,
          text: `An underwater zoo with 15,000 living creatures from 1,500 different species. Each part of the aquarium represents a different sea or ocean and you can spend half a day there with children, without any problem.`,
        },
        {
          id: 2,
          title: 'Besiktas Stadium',
          text: `If the kids are into soccer, take them to the stadium of the successful city team. There is also a museum where all the trophies won by the team are displayed.`,
        },
        {
          id: 3,
          title: `Cruise on the Bosphorus`,
          text: `Both a beautiful view of the city and a great opportunity to learn about this important strait. If you wish, you can also feed the many seagulls on the water.`,
        },
        {
          id: 4,
          title: 'Visit a nostalgic candy store',
          text: `Altan Şekerleme is a family-owned shop that has been operating since 1865 and has a selection of excellent quality sweets, far beyond Turkish Delight. Guaranteed fun for children and adults.`,
        },
        {
          id: 5,
          title: `Golana Park`,
          text: `One of the largest parks in the city and undoubtedly one of the most beautiful. It has playgrounds for children, a zoo and cafes. In the spring it is completely covered with tulips and in the summer concerts are held there.`,
        },
        {
          id: 6,
          title: `Museum Rahmi M. thorn`,
          text: `A museum focusing on the history of transportation, industry and communication. The children will be able to see up close an antique plane, vintage cars, trains and other fascinating exhibits.`,
        },
        {
          id: 7,
          title: `Legoland Discovery Center`,
          text: `An excellent place that allows children (mainly aged 3 - 14) to discover their creative side in the endless world of Lego.`,
        },
        {
          id: 8,
          title: `Ride the old train`,
          text: `The tunnel holds the title of "the second oldest subway in the world". The ride lasts 90 seconds and will take you from Karakoy to Bayolo. Short, but worth it.`,
        }
      ],
      discoveries: [
        {
          id: 1,
          title: `What is Istanbul famous for?`,
          text: `The city that sits between two seas and connects two continents, Istanbul, is known for the old city that was the glory of the Ottoman Empire, lively bazaars as before, the Bosphorus Strait and amazing local food. Istanbul is also loved by tourists thanks to the many possibilities for shopping at good prices .`,
        },
        {
          id: 2,
          title: `Is Istanbul suitable for tourists?`,
          text: `Istanbul is a great city to visit. Its old city is full of admirable sites, there are diverse attractions for the whole family and a large selection of hotels and restaurants that are suitable for any type of vacation, affordable or expensive.`,
        },
        {
          id: 3,
          title: `do you speak english there?`,
          text: `In the tourist areas of Istanbul, you will have no problem communicating with service providers in the English language.`,
        },
        {
          id: 4,
          title: `Is Istanbul dangerous?`,
          text: `A certain amount of caution is required in Istanbul. When traveling, you should focus on the touristy parts of the city and try not to go to the lesser known areas of the city. It is also recommended to beware of pickpockets in crowded places and avoid dark areas. Of course, before each visit you should be updated on the travel warnings published by the Ministry of Foreign Affairs.`,
        },
        {
          id: 5,
          title: `Where should you sleep in Istanbul?`,
          text: `In general, the European part of Istanbul is the one to focus on. To be specific, the best area in terms of proximity to historical and cultural centers is the Sultanahmet neighborhood, which is also the old city. Other good options are the Grand Bazaar area or the Ceremonial area.`,
        },
        {
          id: 6,
          title: `What is the best time to visit Istanbul?`,
          text: `The best time to travel in Istanbul is in September - November or March - May, thanks to relatively pleasant weather and lower prices than the peak season, which is summer.`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.country-header .image-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: '';
  background: url('@/assets/images/istanbul/pic1.jpeg');
  background-repeat: no-repeat;
  height: 100%;
  background-position: left;
}
</style>
