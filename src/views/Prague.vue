<template>
    <div class="country prague">
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
          <h1 class="black--text">Vacation in Prague</h1>
          <p>Find a flight and hotel deal in Prague that suits you.</p>
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
          <h2 class="black--text mb-3">Prague</h2>
          <p class="black--text">
            Prague, the capital of the Czech Republic and holder of the title "the most romantic city in Europe next to Paris and Rome", is one of the most worthwhile destinations for a trip in Europe. Apart from classical beauty and houses with red roofs and pointed towers, Prague offers a lot of historical buildings and squares to admire, museums, concerts, nightlife that is suitable not only for young people and plenty of restaurants. And all this is served, of course, with a big glass of beer on the side - in the best Czech tradition.
          </p>
          <p class="black--text">
            The story of Prague begins in the 9th century and over time it became a central and important city. Kings and emperors built castles, bridges and squares in it and it also knew wars, invasions and revolutions. Therefore, a tour of the old city is not only an experience of beauty, but also a fascinating historical story. The Jewish quarter in the city, which in the past housed a very respectable Jewish community, is also an integral part of the city and its history - and it can definitely be included in the list of must-see sites in the city.
          </p>
          <p class="black--text">
            It's true that most people don't think of Prague when they imagine a culinary travel destination, but the truth is that Prague has a pretty successful food scene that could yet become a favorite destination for foodies. The traditional Czech food is considered particularly delicious and comforting and there are also modern, international and trendy restaurants that you should not miss. The night life in the city will also pleasantly surprise you. Quite a few high-class clubs, performance clubs, expensive bars and pubs are scattered throughout the city and offer entertainment for revelers of all ages.
          </p>
          <p class="black--text">
            The beer is also an important part of the vacation in Prague. It is cheaper than water and the Czechs drink it in huge quantities. Try the variety of (local!) beers at every opportunity. And yes, sitting on the grass in Rigovi Sad Park while watching the sunset is also a great opportunity to drink beer.
          </p>
          <p class="black--text">
            Are you coming to town as a family? Your enjoyment is guaranteed. Prague is full of activities, attractions and places that children love. There are museums for young people, a theater, creative activities and even a large water park. Even the city itself, with the bridges and squares and parks leave the children captivated.
          </p>
          <p class="black--text">
            If you like to return to Israel with an exploded suitcase, Prague is definitely the destination for you. It is excellent for shopping thanks to a nice selection of chains, stores and boutiques and thanks to affordable prices
            by European standards. By the way affordable prices, this is also true for food, entertainment and even hotels.
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
          <h2 class="black--text mb-3">Sites in Prague</h2>
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
  import Pic1 from '@/assets/images/prague/pic1.jpeg';
  import Pic2 from '@/assets/images/prague/pic2.jpeg';
  import Pic4 from '@/assets/images/prague/pic4.jpeg';
  import Pic3 from '@/assets/images/prague/pic3.jpeg';
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
            title: 'The square in the old city',
            text: `The Square in the Old Town - this beautiful square is the essence of the beauty of Prague, with impressive buildings, small stone streets, red roofs and a lot of history. The astronomical clock tower is also there.`,
          },
          {
            id: 2,
            title: 'Tour Prague Castle',
            text: `Tour Prague Castle - one of the most important monuments in the city and the largest ancient castle in the world. In the past kings and emperors lived there and now tourists are invited to admire the size and different architectural styles.`,
          },
          {
            id: 3,
            title: 'Try the local beer',
            text: `Try the local beer - the Czechs have a long beer tradition that begins in the sixth century AD and are the largest beer consumers in the world. Join the local custom and order a Czech beer on tap in one of the cafes that overlook the city.`,
          },
          {
            id: 4,
            title: 'Check out the traditional food',
            text: `Check out the traditional food - don't let the heavy appearance of the food mislead you, the Czechs cook excellent food and any traditional restaurant will serve you heart-warming casseroles, sausages, dumplings and of course lots of potato.`,
          },
          {
            id: 5,
            title: `Cross the Charles Bridge`,
            text: `Cross the Charles Bridge - over the Vltava River passes this ancient bridge, on which there are sculptures of historical importance and from which there is a spectacular view of the city. The bridge is closed to vehicles and you can wander on it comfortably.`,
          },
          {
            id: 6,
            title: 'Vaclav Square',
            text: `Wenceslas Square - a beautiful area that is more of a boulevard than a square. On a daily basis, it is a great place for shopping and sitting over a coffee, but in the past, several important events in the history of the Czech Republic took place there, among them the event that ignited the Velvet Revolution.`,
          },
          {
            id: 7,
            title: 'Go check out the nightlife in the city',
            text: `Check out the city's nightlife - Prague may exude subtle elegance, but the city knows how to party. On Deloha Street are some of the equal clubs in the city that are considered good even by European standards.`,
          },
          {
            id: 8,
            title: `Letna Park`,
            text: `Latna Park - it is not only a pleasant green park near the Vltava River, it is also a fine observation point of the city and an excellent area to stop for an afternoon beer. Also known for the large metronome statue that stands there.`,
          },
          {
            id: 9,
            title: 'Soak up some culture in Dolphinum',
            text: `Soak up some culture at the Dolphinum - a 19th century building that houses a concert hall, galleries and a museum. You can enjoy the impressive building, visit the park or invest and watch the exhibition (some of the exhibitions are free of entrance fees)`,
          },
          {
            id: 10,
            title: `Go to see the sunset from Marigarubi Sadi`,
            text: `Go to see the sunset from Grigori Sadi - probably the best spot in the city to watch the sun set over the old town.`,
          },
          {
            id: 11,
            title: `The Jewish Museum`,
            text: `The Jewish Museum - There is no shortage of good museums in Prague, but if you only go to one, then the Jewish Museum. It presents the rich and painful history of the local Jews in a fascinating way.`,
          },
        ],
        attractions: [
          {
            id: 1,
            title: `Prague Zoo`,
            text: 'The Prague Zoo - is considered one of the best zoos in the world thanks to a large variety of species from different parts of the world. Bonus: there is a petting farm and also an amusement park inspired by a village from the Amazon.',
          },
          {
            id: 2,
            title: 'Art Park in Dolphinum',
            text: `Art Park in Dolphinum - this art hall that includes a concert hall and galleries also has a park with fascinating artistic sessions that will bring out the artists in your children.`,
          },
          {
            id: 3,
            title: `Museum of the senses`,
            text: `The Museum of the Senses - a fascinating museum where children can delve into optical illusions and the science behind them. It has 17 different rooms and lots and lots of fun.`,
          },
          {
            id: 4,
            title: 'The National Marionette Theater',
            text: `The National Marionette Theater - a puppet theater that presents classic plays for children. You can also take the children for a tour behind the scenes and visit the local museum.`,
          },
          {
            id: 5,
            title: `National Museum of Technology`,
            text: `The National Museum of Technology - this is a museum that presents technological innovations, but from the past. You will see planes from the Second World War, rare cars, boats, antique toys, machines and more.`,
          },
          {
            id: 6,
            title: `Aqua Palace`,
            text: `Aqua Palace - the largest water park in Central Europe offers swimming pools with slides, a spa and water attractions that will raise the children's adrenaline. You can also visit in winter and some of the pools are covered.`,
          },
          {
            id: 7,
            title: `We nibbled on tradelnik`,
            text: `Nibble on trdelnik - this is probably the most famous Czech dessert and it will easily find its way into the stomachs and hearts of children and adults alike. Reminiscent of the Hungarian curtoche and sometimes also filled with many creams and surprises.`,
          },
          {
            id: 8,
            title: `The astronomical clock`,
            text: `The astronomical clock - the oldest clock (built in the 15th century) and undoubtedly one of the most famous in the world. Every round hour, visitors gather to watch the hand move. You can also climb the stairs from inside the clock structure.`,
          },
          {
            id: 9,
            title: `sailing on the river`,
            text: `River cruise - Another great angle to view this impressive city is from the Vltava River. You can rent a boat and paddle together on the water.`,
          },
          {
            id: 10,
            title: `Strank's Black Light Theater`,
            text: `Aqua World - one of the largest water parks in Europe has 17 different pools, inclStrunk's Black Light Theater - a show that is suitable for the whole family and that is easy to understand? Yes, in the Black Light Theater the experience is entirely visual and no words are used. It doesn't stop the audience from laughing every time.`,
          },
        ],
        discoveries: [
          {
            id: 1,
            title: `Where should you stay in Prague?`,
            text: `The most successful areas to stay in Prague are the Old Town and the New Town. These two central areas are close to popular attractions, they are very accessible by transport and popular with tourists.`,
          },
          {
            id: 2,
            title: `What is the best time to visit Prague?`,
            text: `Hell yeah! 4 million tourists come to visit Budapest every year and the city welcThe ideal time to visit Prague is around September - October or April - May. The weather during these periods is particularly pleasant and the prices also drop significantly compared to the peak summer season.`,
          },
          {
            id: 3,
            title: `How long is the perfect Prague trip?`,
            text: `The ideal length of a vacation in Prague is 4-5 days. This is exactly the time needed to see the important sites, enjoy some nightlife and cuisine and soak up the special atmosphere.`,
          },
          {
            id: 4,
            title: `Is Prague suitable for families?`,
            text: `for sure! Prague is perfect for a trip with the kids. It has plenty of activities, museums for children and even shows for all ages. Even the "normal" tourist sites will appeal to young visitors.`,
          },
          {
            id: 5,
            title: `Is Prague a good destination for a romantic couple's vacation?`,
            text: `Yes, Prague is a classic destination for a romantic vacation. Imagine buildings with red roofs, small stone streets and a river that crosses the city - you will feel like you are walking in a fairy tale. Of course, the large offer of pampering hotels at an affordable price and romantic restaurants help make Prague a perfect destination for a couple's vacation.`,
          },
          {
            id: 6,
            title: `How much does a short vacation in Prague cost?`,
            text: `A short 3-night vacation in Prague, including flight and hotel, will cost in the peak season from $550 per person. If you fly in the cold season, you can also find packages for 350 dollars per person.`,
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
    background: url('@/assets/images/prague/pic4.jpeg');
    background-repeat: no-repeat;
    height: 100%;
    background-position: left;
  }
  </style>
  