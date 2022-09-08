<template>
  <div class="country budapest">
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
        <h1 class="black--text">Vacation in Budapest</h1>
        <p>Find a flight and hotel deal in Budapest that suits you.</p>
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
        <h2 class="black--text mb-3">Budapest</h2>
        <p class="black--text">
          Budapest is the capital city of Hungary, one of the largest cities in
          Europe and undoubtedly one of the most beautiful. It is hard to think
          of Budapest and not immediately imagine its unique landscapes with its
          elegant buildings, stone streets and castles. Budapest was founded
          about 150 years ago, as a union of three different cities named Buda,
          Pest and Óbuda, but the streets of the city tell the history of
          Hungary for centuries, which includes Roman settlement, 150 years of
          Ottoman occupation, a thriving Austro-Hungarian Empire and also two
          wars world.
        </p>
        <p class="black--text">
          The Danube River - the beating heart of the city - not only crosses
          Budapest, it literally divides it into two parts. While the eastern
          side is relatively flat, the western side is entirely hilly - from
          there, especially from the castle hill, you can overlook the
          spectacular beauty of the city known as "the pearl on the Danube". If
          you like, you can divide Budapest in a simple way: the west side is
          where most of the important historical sites are located, while the
          east side is full of restaurants, entertainment places and shops.
        </p>
        <p class="black--text">
          Budapest is great to soak up a European atmosphere, admire the
          architecture and learn about its rich past. Among the palaces,
          churches and cathedrals you will also find memories of a vibrant
          Jewish community. For example, the Great Synagogue of Budapest, which
          is the largest in Europe and undoubtedly one of the most special
          synagogues in their design.
        </p>
        <p class="black--text">
          Along with all the historical monuments, Budapest is also a city where
          you can find relaxation and time for yourself. Beautiful and large
          parks are scattered throughout the city and the offer of hot baths is
          one of the largest in the world. In fact, Budapest holds the title of
          the hot spa capital of the world.
        </p>
        <p class="black--text">
          Don't be fooled by its elegance and history, Budapest is also a lively
          city, with irresistible culinary offerings and a vibrant nightlife. A
          huge variety of restaurants awaits you in the city, from places that
          serve Golash in the best tradition to restaurants with modern food and
          trendy cafes. The city is also known for its love of sweets, so
          prepare yourself for lots of cakes, special sweets and pastries. And
          yes, there is also strudel.
        </p>
        <p>
          <strong class="black--text">
            If you come to the city as a family, you will be happy to know that the city is prepared to entertain
            all members of the family - from the young to the old, with a
            multitude of museums, attractions and open spaces.
          </strong>
        </p>
        <p class="black--text">
          Although it is full of attractions and very popular among tourists,
          Budapest still offers very affordable prices to its visitors. The hotels are not expensive and also restaurants and
          entertainment are priced at very reasonable prices, certainly compared
          to the rest of Europe.
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
        <h2 class="black--text mb-3">Sites in Budapest</h2>
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
import Pic1 from '@/assets/images/budapest/pic1.jpeg';
import Pic2 from '@/assets/images/budapest/pic2.jpeg';
import Pic4 from '@/assets/images/budapest/pic4.jpeg';
import Pic3 from '@/assets/images/budapest/pic3.jpeg';
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
          title: 'The Hungarian Parliament building',
          text: `The Hungarian Parliament building - on the banks of the Danube stands one of the most beautiful and famous buildings in all of Europe. It was built as a symbol of Hungary's power and at the time they finished building it, it was considered the largest building in the world. You can book a tour of the place and it is recommended to come see the building twice: during the day and in the evening, when it is all lit up.`,
        },
        {
          id: 2,
          title: 'The Great Synagogue',
          text: `The Great Synagogue - This is the largest synagogue in Europe and is a symbol of the rich past of the Jewish community that once thrived in the city. The building, which is designed in a neo-Moorish style, is known for its great beauty and also for the fact that Herzl's State Councilor Herzl celebrated his Bar Mitzvah there.`,
        },
        {
          id: 3,
          title: 'opera house',
          text: `The Opera House - This spectacular building was built in Renaissance style and designed to convey cultural as well as material wealth - with exterior decorations of pure gold. Beyond beauty, it also offers a selection of fine concerts for fans of the genre.`,
        },
        {
          id: 4,
          title: 'The city park',
          text: `The City Park - Budapest's City Park is much more than pastoral grassy spaces. It has an artificial lake, museums suitable for the whole family, a circus, a zoo and many other facilities and attractions.`,
        },
        {
          id: 5,
          title: `Heroes' Square`,
          text: `Heroes' Square - one of the UNESCO World Heritage Sites in Budapest. In the center of the large and impressive square stands the Millennium Monument with statues of important figures from a thousand years of Hungarian history.`,
        },
        {
          id: 6,
          title: 'The shoe monument on the banks of the Danube',
          text: `The Shoe Monument on the banks of the Danube - a famous monument erected in memory of hundreds of the city's Jews who were murdered on the banks of the river by Hungarian soldiers in 1944-1945.`,
        },
        {
          id: 7,
          title: 'Hungarian food',
          text: `Hungarian food - the local cuisine is known mainly to the right surfer, but the truth is that it offers a surprising culinary feast. Enter one of the traditional restaurants in the city and order paprikash, stuffed cabbage and cold fruit soup. In the many cafes you will find tantalizing strudels, curtoche and a selection of cakes. The local wines are also particularly successful.`,
        },
        {
          id: 8,
          title: `St. Stephen's Basilica`,
          text: `St. Stephen's Basilica - Budapest is full of beautiful buildings, but St. Stephen's Basilica is recommended not to be missed thanks to the wonderful observation point at the end of the building. After climbing 400 steps you will get to see Budapest from above, in all its glory.`,
        },
        {
          id: 9,
          title: 'Buda Castle',
          text: `Buda Castle - The castle, also known as Buda Palace, was once the royal palace of the rulers of Hungary and today is home to the National Gallery, the National Library and the Budapest History Museum. The palace stands on a hill and it can be reached via a cable car ride, which is also not to be missed.`,
        },
        {
          id: 10,
          title: `Hot baths`,
          text: `Hot baths - the Ottoman rule in the city left its mark with the culture of the baths, which remained popular even hundreds of years after his departure. You are welcome to pamper yourself in the hot water or choose one of the treatments with health benefits.`,
        },
      ],
      attractions: [
        {
          id: 1,
          title: `Budapest Zoo`,
          text: 'The Budapest Zoo - no less than 2,000 species of animals of all sizes and from all over the world await you in the giant garden. Each animal was given a living environment that mimics the area it came from - from a hot desert to the frozen Antarctic, so the visit is actually a tour around the world.',
        },
        {
          id: 2,
          title: 'Ice Skating',
          text: `Ice skating - the lake in the city park freezes during the cold winter months and turns into a large ice skating rink suitable for children and adults.`,
        },
        {
          id: 3,
          title: `The children's train`,
          text: `The children's train - this is not just a train suitable for children, but a train that is actually operated by children (supervised by professionals, of course). The 11 km route passes through beautiful landscapes and you can get off at the various stations and visit the sites along the way.`,
        },
        {
          id: 4,
          title: 'The Tropicarium',
          text: `The Tropicarium - The Budapest Tropicarium is a zoo dedicated to the wonderful creatures that live in tropical areas. It is especially worth coming to be surrounded by a huge aquarium, where you can see sharks and colorful and special tropical fish up close.`,
        },
        {
          id: 5,
          title: `Palace of Wonders`,
          text: `The Palace of Wonders - this is actually Budapest's science museum that offers 250 different attractions for the whole family and combines experiences with experiments in physics and chemistry as well as lots of interactive games.`,
        },
        {
          id: 6,
          title: `Amphibious bus`,
          text: `Amphibious bus - this unique tour goes between the important sites of the city and when you reach the Danube, the amphibious bus enters the water and sails through it.`,
        },
        {
          id: 7,
          title: `The Museum of Selfies and Sweets`,
          text: `The Selfie and Sweets Museum - This is a museum dedicated entirely to things that make children happy and has special and even crazy backgrounds for selfies, including some in 3D.`,
        },
        {
          id: 8,
          title: `Magritte Island`,
          text: `Magritte Island - in the Danube River lies a small and magical island with carpets of green grass, facilities for children and a famous musical fountain. You will find there both restaurants and hot baths.`,
        },
        {
          id: 9,
          title: `Budapest Circus`,
          text: `Budapest Circus - Inside the city park is the big tent of the city circus, inside which changing performances are held with acrobats, jugglers, animals and breathtaking stunts. The circus is an experience for children and adults alike.`,
        },
        {
          id: 10,
          title: `Aqua World`,
          text: `Aqua World - one of the largest water parks in Europe has 17 different pools, including children's pools and another 11 slides. The park is covered and you will also find a spa, play areas and other attractions for children.`,
        },
      ],
      discoveries: [
        {
          id: 1,
          title: `What is Budapest famous for?`,
          text: `Budapest is known first and foremost for its spectacular beauty, which has also earned it the title of "the pearl on the Danube". But not only beauty - the city attracts many tourists thanks to its rich history which is reflected in the many cultural centers scattered around the city. In addition, Budapest is considered the capital of hot baths in Europe.`,
        },
        {
          id: 2,
          title: `Is Budapest suitable for tourists?`,
          text: `Hell yeah! 4 million tourists come to visit Budapest every year and the city welcomes them with open arms. Not only attractions, sites of historical value and various museums await you there, but also a wide variety of hotels and accommodation options, restaurants for every budget and even shopping options . In other words, Budapest is a very convenient vacation destination and you can find your way there easily.`,
        },
        {
          id: 3,
          title: `do you speak english there?`,
          text: `Budapest is a city with lots of visitors from all over the world, so the service providers in hotels, restaurants and shops understand and speak English. Most restaurants will also have English menus waiting for you. If you try to start a conversation with locals, there is a very good chance that they will answer you in English, especially if they are young.`,
        },
        {
          id: 4,
          title: `Is Budapest dangerous?`,
          text: `Budapest is a relatively safe city and you can travel there without fear. But, as in any big city, it is recommended to avoid walking alone late at night, avoid dark areas, do not take large sums of money with you and keep valuables safe when you are on public transport or in crowded places.`,
        },
        {
          id: 5,
          title: `Where should you stay in Budapest?`,
          text: `If you prefer to be close to the main attractions of the city, you should spend the night in Buda (District 1) west of the Danube. Besides being close to sites like Buda Castle and Matias Church, you can enjoy views of the Danube and streets full of medieval buildings. Those who want to be in the bustling heart of the city can stay in district 5, also known as Downtown Budapest.`,
        },
        {
          id: 6,
          title: `What is the best time to visit Budapest?`,
          text: `The best time to visit the Hungarian capital is during the spring months (April and May) or early autumn (September and October). The weather is usually nicer during these times of the year and there is usually less tourist traffic in the city, which means better prices . Despite this, the city attracts many tourists even during the summer and in the winter months it offers special attractions for the cold season.`,
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
  background: url('@/assets/images/budapest/pic4.jpeg');
  background-repeat: no-repeat;
  height: 100%;
  background-position: left;
}
</style>
