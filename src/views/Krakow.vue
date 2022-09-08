<template>
  <div class="country krakow">
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
        <h1 class="black--text">Vacation in Krakow</h1>
        <p>Find a flight and hotel deal in Krakow that suits you.</p>
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
        <h2 class="black--text mb-3">Krakow</h2>
        <p class="black--text">
          Get to know Krakow. It is neither the capital of Poland nor the
          largest city, but it is everything that matters: the scientific,
          cultural and artistic center of Poland and more importantly - the
          center of the country's nightlife. Thanks to this, it is loved not
          only by the Poles, but by tourists from all over the world who come to
          experience a city with an honorable and rich history on the one hand,
          and with a young, kicking and intriguing character on the other.
        </p>
        <p class="black--text">
          This city, on the banks of the Vistula River, was in the past the home
          of many kings and rulers who brought with them wealth and a lot of
          influence. You can find evidence of this in abundance in the old city,
          with the Gothic buildings, basilicas, citadels and stone streets. It
          is so impressive that it has been declared a World Heritage Site by
          the United Nations Organization UNESCO.
        </p>
        <p class="black--text">
          In the past, Krakow was also a city with a significant Jewish presence
          and a rich Jewish life. Most of them were concentrated in the Jewish
          quarter, known as Kazimierz. This is the same district that became the
          Krakow ghetto and was finally emptied of its inhabitants. If you are
          interested in delving into this side of Krakow, you can go to the
          creepy chair monument in Shilohim Square or tour Oskar Schindler's
          factory, which has been turned into a museum. To this day, three
          synagogues operate in the district, as well as quite a few kosher
          restaurants.
        </p>
        <p class="black--text">
          Part of the city's charm and unique character stems from the large
          number of young people who come to study at the city's excellent
          university. A large part of them, by the way, settled in the Jewish
          quarter. Following them, a special culture of night life, cafes and
          art developed in the place. This is probably the reason why the Old
          Town of Krakow holds the title "the place has the highest
          concentration of pubs in the world". So if you imagine Krakow as a
          gray city - it's time to recalculate your route. There are even those
          who firmly claim that it is the new Berlin.
        </p>
        <p class="black--text">
          Krakow is also a great option for those who like to combine a vacation
          abroad with replenishing their wardrobe. It has large shopping malls.
          with brands from all over the world at Eastern European prices. Krakow
          is also an excellent option for families looking for a beautiful city,
          pleasant, suitable for children and not a pain in the pocket It can be
          said that Krakow is a city where everyone can find something to enjoy.
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
        <h2 class="black--text mb-3">Sites in Krakow</h2>
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
            <v-card class="mt-3" color="info" flat rounded>
              <v-card-text>
                <h2 class="black--text">
                  <strong>{{ places.length }}</strong> places to shop
                  in Krakow
                </h2>
              </v-card-text>
            </v-card>
            <v-card class="mt-3" color="grey lighten-4" flat rounded>
              <v-card-text>
                <div
                  class="item mb-3"
                  v-for="item in places"
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
import Pic1 from '@/assets/images/krakow/pic1.jpeg';
import Pic2 from '@/assets/images/krakow/pic2.jpeg';
import Pic4 from '@/assets/images/krakow/pic4.jpeg';
import Pic3 from '@/assets/images/krakow/pic3.webp';
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
          title: 'The central square',
          text: `Also known as the market square, it is the beating heart of the old city and around it you can see the cloth hall, the city hall tower and other important sites. The area is also full of cafes, bars and a wonderful urban atmosphere.`,
        },
        {
          id: 2,
          title: 'But the fabrics',
          text: `An impressive building that for 800 years was a thriving center of commerce and some claim that it is the oldest shopping center in the world. Today it is used as a market. On its second floor there is a museum that displays works by the best Polish painters.`,
        },
        {
          id: 3,
          title: 'Wawel Castle',
          text: `A citadel on the Vistula River that combines different architectural styles. In the past it was used by rulers and kings and today it is a museum where you can see the treasures of the Polish royal house.`,
        },
        {
          id: 4,
          title: 'The Jewish Quarter',
          text: `Evidence of the rich past of the Jewish community in the city. Visit the streets of the district, the monument in the Shilohim square and the synagogues. The area is now one of the considered parts of the city, with lots of young people, art and bars.`,
        },
        {
          id: 5,
          title: 'Jewish culture festival',
          text: `If you are in Krakow at the beginning of the summer, you might have the opportunity to enjoy the fun event in the Jewish quarter, which combines performances by famous musicians, klezmers and also various cultural activities.`,
        },
        {
          id: 6,
          title: 'Try the local cuisine',
          text: `Polish food has a bad image and you will be surprised to find out how different it is from reality. Traditional restaurants will serve you excellent pierogi and stuffed cabbage, along with vodka or beer of your choice.`,
        },
        {
          id: 7,
          title: 'Barbican',
          text: `Among the only remains of the medieval naval fortifications that surrounded Krakow. This red and round building was once the most advanced military technology and today various shows are held in it.`,
        },
        {
          id: 8,
          title: 'Look for street art',
          text: `Like any young and rejuvenating city, Krakow also has a particularly successful graffiti scene. The best place to look for wall art is in the Jewish Quarter, but you can also take a guided tour.`,
        },
        {
          id: 9,
          title: 'Visit one of the oldest universities in the world',
          text: `The Higlon University was established in 1364 and is considered one of the best in Europe. Tour the campus and enjoy the impressive Gothic buildings.`,
        },
        {
          id: 10,
          title: `Oskar Schindler's factory`,
          text: `One of the most popular museums in all of Poland is located in the place where the Righteous Among the Nations saved the lives of many Jews. There you can learn not only about Schindler's work, but about Polish Jewry in general.`,
        },
      ],
      attractions: [
        {
          id: 1,
          title: `Dragon's Cave`,
          text: 'According to local legend, the dragon of Wavel lived in a cave near Givat Wavel. Both children and adults can enjoy a visit to the invested cave, at the end of which there is a statue of a fire-breathing dragon.',
        },
        {
          id: 2,
          title: 'The salt mines in Wieliczka',
          text: `For hundreds of years these mines were an important part of the local economy and today you can tour them and discover the underground life. You will see there churches carved out of salt, statues and art. don't miss`,
        },
        {
          id: 3,
          title: 'Plenty Park',
          text: `A beautiful and green park that surrounds the old city and is full of statues, fountains, towers and a pleasant atmosphere. An excellent place to enjoy a picnic with the kids after a day of shopping or just to take a break from the city.`,
        },
        {
          id: 4,
          title: 'Cruise on the Vistula',
          text: `If the little ones get tired of walking, take them on one of the tours on the river. A fun experience and a great opportunity to enjoy the views of the city from a slightly different angle.`,
        },
        {
          id: 5,
          title: `Kosciuszko Hill`,
          text: `One of the most famous sites in all of Poland. It is a hill at the end of which there is an excellent panoramic view of the city, with a winding climbing path. The space itself is open and large and children can play and run.`,
        },
      ],
      places: [
        {
            id: 1,
            title: `Krakow Gallery`,
            text: `A modern and large mall located right in the center of Krakow. Branches of well-known international chains and some local ones are waiting for you. The price range in these stores is quite reasonable.`
        },
        {
            id: 2,
            title: `Bonarka`,
            text: `A shopping center located in a relatively remote area of the city and this is also its advantage - significantly less people and crowding. Another advantage: brands in a wide range of prices, from accessible to luxury.`
        },
        {
            id: 3,
            title: `The Jewish Quarter`,
            text: `This young and cool area is the place to stock up on clothes from local designers, thrift stores and handmade art pieces.`
        },
        {
            id: 4,
            title: `Hala Targowa`,
            text: `This is a true flea market with almost every type of merchandise imaginable. Bargain hunters will have a lot of fun at this market.`
        },
        {
            id: 5,
            title: `Florianska St`,
            text: `The place to stock up on art and local souvenirs, but also with decent food and local alcohol which are the best souvenirs of all.`
        }
      ],
      discoveries: [
        {
          id: 1,
          title: `What is Krakow famous for?`,
          text: `Krakow is famous for its Old Town, which is recognized in its entirety as a World Heritage Site, for its rich Jewish history and the important Jewish Quarter, and also for its modern, young atmosphere and cool nightlife.`,
        },
        {
          id: 2,
          title: `Is Krakow suitable for tourists?`,
          text: `Krakow is a tourist destination that is gaining popularity. It is a young and cool university town with a beautiful old town, nightlife and successful shopping opportunities. Bonus: the city is cheap and suitable for vacations on a low budget.`,
        },
        {
          id: 3,
          title: `do you speak english there?`,
          text: `Yes, as expected from a city full of students and young people, most of the residents will talk to you in English without a problem.`,
        },
        {
          id: 4,
          title: `Is Krakow dangerous?`,
          text: `Krakow is a fairly safe city and you can walk around it without fear. As anywhere, it is always recommended to avoid dark and empty places and beware of pickpockets.`,
        },
        {
          id: 5,
          title: `Where should you stay in Krakow?`,
          text: `The best areas to stay in Krakow are the Old Town area, which is close to most of the important sites and is full of great places to hang out and eat. If you're looking for a slightly more interesting option, the Jewish Quarter is also centrally located, but offers a special, more vocal character, with plenty of specialty cafes and street art.`,
        },
        {
          id: 6,
          title: `What is the best time to visit Krakow?`,
          text: `The weather in winter is quite cold and the summer is hot and full of tourists, so the recommended time to visit Krakow is in September to November or March to June. During these periods the weather is good and the prices are good .`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.country-header {
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
}
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
  background: url('@/assets/images/block/Krakow.jpeg');
  background-repeat: no-repeat;
  height: 100%;
  background-position: left;
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
</style>
