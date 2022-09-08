<template>
    <div class="country dubai">
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
          <h1 class="black--text">Vacation in Dubai</h1>
          <p>Find a flight and hotel deal in Dubai that suits you.</p>
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
          <h2 class="black--text mb-3">Dubai</h2>
          <p class="black--text">
            Between the sands of the desert and the Persian Gulf, one of the most intriguing and flashiest cities in the world has developed - Dubai. The largest city in the United Arab Emirates has become over the years synonymous with wealth and a luxury brand in its own right. It is home to the world's tallest tower, Burj Khalifa, the world's largest shopping mall and the iconic palm-shaped artificial islands, Palm Jumeirah.
          </p>
          <p class="black--text">
            It began its journey in the 18th century as a small fishing village, but its fate changed with the discovery of oil in 1966. Since then, it has gradually become a city that harmoniously combines Arab culture with Western architecture. The amazing skyline of the city, which you can see from one of the spectacular lookouts or even from your luxurious hotel room, will make you marvel every time.
          </p>
          <p class="black--text">
            Dubai comes alive in autumn, when the weather becomes more pleasant. So it is filled not only with tourists, but also with various events, festivals and shows that make the vacation even more diverse and fun. The city's beaches are also attractive factors for tourists. Besides enjoying white sand and amazing turquoise water, almost every beach has a wide range of water sports, restaurants and of course special views.
          </p>
          <p class="black--text">
            An extraordinary view can also be found in the Dubai desert, which surrounds the city. This is a very large and spectacularly beautiful desert and it is worth at least a glimpse into it with a short day trip. Outdoor enthusiasts will be able to go on longer hikes at different levels of difficulty. The Al Marmoum Nature Reserve, which covers a tenth of Dubai's area, or the Dubai Desert Nature Reserve, are great places to get up close and personal with the wild nature of the desert.
          </p>
          <p class="black--text">
            It is impossible to talk about Dubai without talking about shopping and malls and luxury brands , and a trip to Dubai really would not be complete without a visit to the largest mall in the world, the Dubai Mall. If you want to not only see but also return with full suitcases, you can hunt for items at attractive prices at the huge outlet on the outskirts of the city.
          </p>
          <p class="black--text">
            Dubai is also a perfect destination for families. The amount of amusement parks, attractions, zoos and even sports facilities that this city offers is the dream of every boy and girl (and every adult who watches over them). From swimming with dolphins to an amusement park dedicated to Lego, this city offers unforgettable experiences for all ages.
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
          <h2 class="black--text mb-3">Sites in Dubai</h2>
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

          <v-row no-gutters>
            <v-col cols="12" lg="6" class="px-2 mt-3">
              <v-card color="info" flat rounded>
                <v-card-text>
                  <h2 class="black--text">
                    <strong>{{ beaches.length }}</strong> most affordable beaches
                  </h2>
                </v-card-text>
              </v-card>
              <v-card class="mt-3" color="grey lighten-4" flat rounded>
                <v-card-text>
                  <div class="item mb-3" v-for="item in beaches" :key="item.id">
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
            <v-col cols="12" lg="6" class="px-2 mt-3">
              <v-card color="info" flat rounded>
                <v-card-text>
                  <h2 class="black--text">
                    <strong>{{ sites.length }}</strong> must sites for shopping enthusiasts
                  </h2>
                </v-card-text>
              </v-card>
              <v-card class="mt-3" color="grey lighten-4" flat rounded>
                <v-card-text>
                  <div
                    class="item mb-3"
                    v-for="item in sites"
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
  import Pic1 from '@/assets/images/dubai/pic1.jpeg';
  import Pic2 from '@/assets/images/dubai/pic2.webp';
  import Pic4 from '@/assets/images/dubai/pic4.jpeg';
  import Pic3 from '@/assets/images/dubai/pic3.jpeg';
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
            title: 'View from Burj Khalifa',
            text: `View from the Burj Khalifa - this is the tallest building in the world and the most recognizable symbol of Dubai, but seeing it from the outside is not enough. It is recommended to go up to the 148th floor (at a height of 555 meters) for the breathtaking view of the city's skyline.`,
          },
          {
            id: 2,
            title: 'Al Fahidi Historic District',
            text: `Al Fahidi Historic District - an excellent place to get a glimpse of Dubai's past and the authentic culture and architecture of the area. In the area there are quite a few galleries, shops and small and pleasant cafes.`,
          },
          {
            id: 3,
            title: 'Jumeirah Mosque',
            text: `Jumeirah Mosque - the only mosque in Dubai that is also open to non-Muslim visitors and is undoubtedly one of the most beautiful in the area. Made entirely of white stone, its design is unique and it is highly recommended to see it in the last light.`,
          },
          {
            id: 4,
            title: 'After a walk in the desert',
            text: `After a trip in the desert or a long walk in the endless malls, take a day to pamper yourself at the spa. Like everything else in Dubai, the spa places are also extremely high quality and you will leave there calm and relaxed.`,
          },
          {
            id: 5,
            title: `Go shopping`,
            text: `Go shopping - you too go shopping only with your eyes, Dubai's malls are a wonder that you need to get to know up close. You will find stores of the most exclusive brands in the world, desirable brands and also affordable outlets.`,
          },
          {
            id: 6,
            title: 'Try a Michelin restaurant',
            text: `Try a Michelin restaurant - as expected from a city where everything is at the highest level, the restaurants also provide an experience and a show. Treat yourself to an unforgettable meal at one of the 18 restaurants mentioned in the Michelin guide.`,
          },
          {
            id: 7,
            title: 'Overlook Palm',
            text: `Look out over the Palm Jumeirah from the Palm - this is the largest artificial island in the world and seeing it (and the entire bay) from a 360-degree view from a height of 240 meters is a particularly impressive sight.`,
          },
          {
            id: 8,
            title: `The spice market`,
            text: `The spice market - an authentic, colorful and fragrant market, with stalls that offer spices in an authentic atmosphere. Clothes and souvenirs are also sold there.`,
          },
          {
            id: 9,
            title: 'Go out into the desert',
            text: `Go to the desert - the Arabian desert, the dunes and the mountains surrounding the city require at least a day trip to slide on the sand and get to know the Bedouin culture, but adventure lovers can book a safari that includes accommodation.`,
          },
          {
            id: 10,
            title: `Etihad Museum`,
            text: `Etihad Museum - a modern and comprehensive museum that tells the story of the birth of the United Arab Emirates in an interactive and interesting way.`,
          },
        ],
        attractions: [
          {
            id: 1,
            title: `Legoland Water Park`,
            text: 'Legoland Water Park - this is the dream of every boy and girl, a place that combines a water park with various slides and also Lego facilities. You can even build a boat and sail it.',
          },
          {
            id: 2,
            title: 'Hot air balloon flight',
            text: `Flying in a hot air balloon - the Dubai skyline and the surrounding desert look even better than the sky. An unforgettable experience of extraordinary beauty for the whole family.`,
          },
          {
            id: 3,
            title: `Kidzania`,
            text: `Kidzania - a replica of a real city has been built in the Dubai Mall, which is operated by the visitors, children aged 4 to 16. They try out different jobs there and learn in an experiential and fascinating way about how the real world works.`,
          },
          {
            id: 4,
            title: 'The aquarium and the underwater zoo',
            text: `The aquarium and underwater zoo - one of the most beautiful aquariums in the world, with 33,000 marine animals from 140 different species. A fascinating experience for parents and children.`,
          },
          {
            id: 5,
            title: `The Green Planet`,
            text: `The Green Planet - in the heart of the Dubai desert, a rain forest awaits you under a glass dome that hosts 3,000 species and varieties of plants, animals and birds.`,
          },
          {
            id: 6,
            title: `Museum of Illusions`,
            text: `The Museum of Illusions - an entertaining and educational experience consisting of 60 different optical illusions, exhibitions and activities. Bonus: the kids left with great photos for their Instagram.`,
          },
          {
            id: 7,
            title: `Motiongate Dubai`,
            text: `Motiongate Dubai - a theme park based entirely on beloved Hollywood blockbusters. The children will be able to meet the favorite characters from Demon Slayers, Kung Fu Panda and more and climb on facilities inspired by familiar movies.`,
          },
          {
            id: 8,
            title: `IMG Worlds of Adventure`,
            text: `IMG Worlds of Adventure - another theme park you shouldn't miss. Offers a variety of facilities, sports fields and a meeting with Marvel characters.`,
          },
          {
            id: 9,
            title: `Air Maniax`,
            text: `Air Maniax - an indoor inflatable park with facilities suitable for the whole family and this includes adults as well. There is an area dedicated to toddlers.`,
          },
          {
            id: 10,
            title: `Dolphin Bay`,
            text: `Dolphin Bay - an extraordinary opportunity to swim alongside the cutest creatures in the sea and learn about them up close. Suitable for anyone who knows how to swim, at any age.`,
          },
        ],
        beaches: [
          {
            id: 1,
            title: `Kite Beach`,
            text: `Kite Beach - this is a beautiful and extremely clean beach with white sand and lots of sports activities, in and out of the water. While you are relaxing on the beach you can also enjoy an excellent view of the city and the sight of the kitesurfers.`,
          },
          {
            id: 2,
            title: `Black Place Beach`,
            text: `Black Place beach - a beautiful beach that is even less known, thanks to the fact that it is accessed via a narrow sandy path. The water is turquoise, the urban landscape of Dubai is impressive and the photos you take there will be dreamy.`,
          },
          {
            id: 3,
            title: `JBR Beach`,
            text: `JBR Beach - Probably the most popular beach in Dubai. Entrance to it is free and if you wish you can participate in a selection of paid water sports activities. It is also considered a suitable beach for families with children.`,
          },
          {
            id: 4,
            title: `Umm Sukum Beach`,
            text: `Umm Sukyam beach - a beach famous for its sunsets. With the Burj Al Arab tower in the background, the view at dusk is particularly impressive.`,
          },
          {
            id: 5,
            title: `Lo Lo beach`,
            text: `Lo Lo Beach - For those looking for a calmer and less crowded beach, this beach is less known to tourists and you can dip in the bay water alongside the locals.`,
          },
        ],
        sites: [
        {
            id: 1,
            title: `Dubai Mall`,
            text: `Dubai Mall - This is the biggest mall in the world that covers 1 million square meters. Besides every imaginable brand, you will also find many restaurants, an aquarium, an ice rink and an amusement park.`,
          },
          {
            id: 2,
            title: `Dubai Outlet`,
            text: `Dubai Outlet - 240 stores here sell more than 1,200 premium international brands and this is exactly the place to look for bargains.`,
          },
          {
            id: 3,
            title: `Mall of the Emirates`,
            text: `Mall of the Emirates - one of the largest and most famous malls in the city and is a must visit. It has 560 shops, a magnificent cinema, ski slopes and a huge selection of other attractions.`,
          },
          {
            id: 4,
            title: `Dragon Mart`,
            text: `Dragon Mart - a large mall where every product is made in China. The shops on site offer everything imaginable: clothes, sports goods, electronics and what not.`,
          },
          {
            id: 5,
            title: `Dubai flea market`,
            text: `Bur Dubai Market - to diversify after all the modern shopping malls, you should go to the market that was nicknamed "the old market". In the beautiful bazaar which is a maze of shops and stalls selling mainly textiles, fabrics, purses and souvenirs.`,
          },
        ],
        discoveries: [
          {
            id: 1,
            title: `What is Dubai famous for?`,
            text: `Above all, Dubai is famous for its spectacular skyline, picturesque beaches, the breathtaking desert that surrounds it and of course the wealth that is evident in every corner. Dubai is a great destination for a luxurious and pampering vacation thanks to luxurious hotels, huge shopping malls with reputable brands, meticulous restaurants and attractions for children that you can only dream of.`,
          },
          {
            id: 2,
            title: `Is Dubai suitable for tourists?`,
            text: `Dubai is an excellent travel destination. Not only does a visit to the place allow you to be exposed to the special culture of the region, which combines progress and tradition with ancient Bedouin culture, it is also an excellent opportunity to enjoy the impressive architecture and urban landscapes, the vast desert and the spectacular beaches. To all this you will also add a lot of luxury in every corner, classy restaurants and particularly attractive hotels.`,
          },
          {
            id: 3,
            title: `do you speak english there?`,
            text: `English is one of the most spoken foreign languages in Dubai and you will have no problem getting along there with only English.`,
          },
          {
            id: 4,
            title: `Is Dubai dangerous?`,
            text: `Dubai is safe for tourists. It is considered one of the safest cities in the entire Middle East. As with any trip to a foreign country, it is recommended to be careful in crowded places, in unfamiliar areas and at night.`,
          },
          {
            id: 5,
            title: `Where should you sleep in Dubai?`,
            text: `Dubai is a big city and many parts of it are suitable for tourists. Of these, here are two highly recommended areas. The first, the Downtown, the popular area of the city known for the Burj Khalifa tower, its selection of restaurants and luxury shops. Another option is the Jumeirah beach area, which is suitable for those who want to enjoy the beautiful beach of Dubai.`,
          },
          {
            id: 6,
            title: `What is the best time to visit Dubai?`,
            text: `The best season to visit Dubai is between November and February. Not only is the weather more comfortable, the city also comes alive with a host of events and festivals.`,
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
    background: url('@/assets/images/dubai/pic2.webp');
    background-repeat: no-repeat;
    height: 100%;
    background-position: left;
  }
  </style>
  