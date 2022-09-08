<template>
  <div class="country amsterdam">
    <div class="country-header">
      <div class="header-overlay"></div>
      <div class="image-overlay"></div>
      <div class="logo-image">
        <img class="cursor-pointer" @click="$router.push('/')" src="@/assets/logo.png" width="100" alt="Traveli">
      </div>
      <div class="content text-center text-lg-right">
            <h1 class="black--text">Vacation in Amsterdam</h1>
            <p>Find a flight and hotel deal in Amsterdam that suits you.</p>
            <v-btn href="https://www.skyscanner.co.il/" target="_blank" depressed x-large color="primary" class="black--text text-capitalize"><strong>Book Now</strong></v-btn>
        </div>
    </div>

    <!-- Country Content -->
    <v-container class="mt-10">
        <article>
            <h2 class="black--text mb-3">Amsterdam</h2>
            <p class="black--text">
                Amsterdam, the capital of the Netherlands, is one of the most popular destinations in Europe and the entire world. This wonderful city has a charm that you don't find everywhere - bridges over canals, cute houses, parks full of families, cyclists pedaling with pleasure, worthwhile museums and of course, coffee shops. And she manages to combine, in an almost harmonious way, a relaxed and fun vibe with a lively vibe and a young atmosphere.
            </p>
            <p class="black--text">
                Perhaps the most surprising thing about Amsterdam is that, although it offers so many experiences and places to visit, it is a fairly small city - both in terms of area and population - only 800,000 people live there. For tourists, it's great. It's easy to walk from place to place and if you run out of energy, you can get there in minutes using the excellent public transportation. By the way, the transportation is so efficient that if you want to jump to nearby Rotterdam and The Hague or even to the beach in Haarlem, you can do it easily and quickly.
            </p>
            <p class="black--text">
                The city center is the beating heart of Amsterdam and there the main attractions await you - the Royal Palace, Dam Square, the Rijksmuseum and the Anne Frank House. That doesn't mean other neighborhoods aren't worth a visit. The Jordan quarter, which was once a neglected area, is today one of the coolest locations in the city, with an interesting food scene, art and worthwhile shops. De Pipe was also once a gray neighborhood and today it is a lively area that every trip to the city must include brunch there.
            </p>
            <p class="black--text">
                When you think of Amsterdam, it's hard not to immediately think of the city's coffee shop culture. Indeed, it is a great location for those interested in experimenting with high-quality and precise materials. But it is recommended to go to these places only at the end of the day, so that you can be at your best when you view the top of European art that is displayed in the Rijksmuseum, the Van Gogh Museum and the Stedelijk Museum. A visit to the city is also a great opportunity to visit the Anne Frank House and the Museum of Jewish History.
            </p>
            <p class="black--text">
                You should leave some time for the urban dining and shopping experience. Try the Podalen food market, the Albert Kaup market, the flea market and the abundance of restaurants, cafes and designer shops scattered in the various neighborhoods. Don't worry, there are also plenty of well-known chains and brands.
            </p>
        </article>

        <v-row no-gutters>
            <v-col cols="12" md="4" lg="5">
                <v-card tile flat :img="pic1" height="150" class="mt-1 mt-lg-0"></v-card>
                <v-card tile class="d-none d-lg-block mt-1" flat :img="pic2" height="150"></v-card>
            </v-col>
            <v-col cols="12" md="4" class="d-block d-lg-none py-1 px-md-1">
                <v-card tile flat :img="pic2" height="150"></v-card>
            </v-col>
            <v-col cols="12" md="4" lg="7" class="pl-lg-1 py-1 py-lg-0">
                <v-card flat tile :img="pic3" :height="$vuetify.breakpoint.lgAndUp ? 304 : 150"></v-card>
            </v-col>
        </v-row>

        <section class="mt-10">
            <h2 class="black--text mb-3">Sites in Amsterdam</h2>
            <v-row no-gutters>
                <v-col cols="12" lg="6" class="px-2">
                    <v-card color="info" flat rounded>
                        <v-card-text>
                            <h2 class="black--text"><strong>{{ things.length }}</strong> things not to be missed</h2>
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
                            <h2 class="black--text"><strong>{{ attractions.length }}</strong> attractions for families</h2>
                        </v-card-text>
                    </v-card>
                    <v-card class="mt-3" color="grey lighten-4" flat rounded>
                        <v-card-text>
                            <div class="item mb-3" v-for="item in attractions" :key="item.id">
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
                <v-card flat tile height="400" :img="pic3"></v-card>
            </v-col>
        </v-row>

        <section class="mt-10">
            <v-row no-gutters>
                <v-col v-for="item in discoveries" :key="item.id" cols="12" class="px-2 mb-3">
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
    import Pic1 from '@/assets/images/amsterdam/pic1.jpeg'
    import Pic2 from '@/assets/images/amsterdam/pic2.webp'
    import Pic3 from '@/assets/images/amsterdam/pic3.webp'
export default {
    data() {
        return {
            pic1: Pic1,
            pic2: Pic2,
            pic3: Pic3,
            things: [
                {
                    id: 1,
                    title: 'Rijksmuseum',
                    text: 'There is no shortage of good museums in the city, but this is the best of them. In this Gothic building many of the most important works of the most famous Dutch artists are displayed. Hours of fun guaranteed.'
                },
                {
                    id: 2,
                    title: 'Van Gogh Museum',
                    text: `A museum dedicated entirely to one of Holland's great painters and a fascinating and tragic figure. Many of the post-impressionist painter's masterpieces are displayed here.`
                },
                {
                    id: 3,
                    title: 'Anne Frank House Museum',
                    text: `The story of the Frank family is well known, but when you visit the building where the girl hid from the Nazis and see the reconstructed hiding rooms - things take on a more tangible meaning.`
                },
                {
                    id: 4,
                    title: 'Podahlan',
                    text: `A food complex that combines what is cool and delicious in Amsterdam. It has 30 different stalls and bars. This includes Asian, American and of course some important Dutch classics. Arrive with an empty stomach and with room in your bag.`
                },
                {
                    id: 5,
                    title: 'Nine small streets',
                    text: `This is the name of 9 small streets in the Jordan district that are both particularly beautiful and full of character. They have small cafes, boutiques, second hand stores and an interesting food scene.`
                },
                {
                    id: 6,
                    title: 'Dam square',
                    text: `The central square of the city surrounding the royal palace, the new church and other important buildings, and in the center - a monument. Sit in one of the cafes on the square and enjoy watching the passers-by.`
                },
                {
                    id: 7,
                    title: 'Albert Kaup market',
                    text: `The most important market in Amsterdam, where you can find clothes, souvenirs and of course food: fresh fish, cheeses, fruits and sweets. And yes, it's okay to haggle there.`
                },
                {
                    id: 8,
                    title: 'Kofi Shops',
                    text: `They used to be among the only places in the world where you could simply order material to your liking and consume it, today it is already a legal and even normative business. Still, a visit to Amsterdam is incomplete without a visit to a coffee shop.`
                }
            ],
            attractions: [
                {
                    id: 1,
                    title: 'Canal cruise',
                    text: 'The best way to see this charming city is without pedaling, making it an ideal activity with small children.'
                },
                {
                    id: 2,
                    title: 'Blijburg aan Zee',
                    text: `If the weather is nice, this beach on the artificial island of Iborg is a great place to go to swim, sunbathe or just enjoy a fun atmosphere or a coffee in front of the water.`
                },
                {
                    id: 3,
                    title: 'Hortus Botanicus',
                    text: `A botanical garden, one of the oldest in the world, on its territory there are 6,000 varieties of trees, plants and flowers that came from different parts of the world.`
                },
                {
                    id: 4,
                    title: 'Artis Zoo',
                    text: `The Amsterdam Zoo is located along the canal and is beautiful and diverse. It has wild animals from different continents, a large aquarium and also a bacteria museum.`
                },
                {
                    id: 5,
                    title: 'NEMO Science Museum',
                    text: `This museum makes scientific principles accessible to children in a clear and super fun way (but enjoyment is also guaranteed for adults). In the summer there are also attractions with water.`
                },
                {
                    id: 6,
                    title: `Tony's Chocolate Shop`,
                    text: `An excellent chocolate experience in the large store of the Dutch chocolate brand. The children will be able to make chocolate tables, see the production line, drink melted chocolate and of course stock up on sweet souvenirs.`
                },
                {
                    id: 7,
                    title: 'The National Maritime Museum',
                    text: `The Netherlands has a rich maritime past and the museum provides a fascinating glimpse into it. Ships and ships from different periods, weapons, navigation tools and even ancient maps are displayed there.`
                }
            ],
            discoveries: [
                {
                    id: 1,
                    title: `What is Amsterdam famous for?`,
                    text: `Amsterdam is known for its many canals and the multitude of monkey shops scattered throughout it. But the truth is that there is much more to it: one of the best art museums in the world, worthwhile parks, flea markets and food markets. And also endless cool places to drink and eat.`
                },
                {
                    id: 2,
                    title: `Is Amsterdam suitable for tourists?`,
                    text: `Amsterdam is one of the most popular cities in Europe, and for good reason. There is a lot to see, the atmosphere is calm and excellent and the locals are welcoming.`
                },
                {
                    id: 3,
                    title: `do you speak english there?`,
                    text: `In Amsterdam they will speak to you in English without a problem! English is a language that most Dutch people know and are also happy to converse with.`
                },
                {
                    id: 4,
                    title: `Is Amsterdam dangerous?`,
                    text: `Amsterdam is a fairly safe city. But as in any touristic city, you should also beware of pickpockets in central sites and crowded places.`
                },
                {
                    id: 5,
                    title: `Where should I sleep in Amsterdam?`,
                    text: `Amsterdam is a small city that is well connected with convenient public transportation, so there really isn't an inconvenient or inaccessible location in the city. If you are interested in the most successful location, go for Amsterdam Centrum, the city center, where the most important sites are located and there are plenty of restaurants, cafes and tourists.`
                },
                {
                    id: 6,
                    title: `What is the best time to visit Amsterdam?`,
                    text: `The best season for a vacation in Amsterdam is between September and November or April - May. The reason for this is the good weather at this time and good prices, in contrast to the peak season when the city is full of tourists and the prices accordingly.`
                }
            ]
        }
    }
}
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
  background: url('@/assets/images/block/Amsterdam.jpeg');
  background-repeat: no-repeat;
  height: 100%;
  background-position: left;
}

.country-header .header-overlay {
  position: absolute;
  background: #B2EBF2;
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
