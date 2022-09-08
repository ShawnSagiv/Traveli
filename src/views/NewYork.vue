<template>
  <div class="country newyork">
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
        <h1 class="black--text">Vacation in New York</h1>
        <p>Find a flight and hotel deal in New York that suits you.</p>
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
        <h2 class="black--text mb-3">New York</h2>
        <p class="black--text">
          Whatever it is you're into, you'll find there's more to do in New York
          than you'll have time.
        </p>
        <p class="black--text">
          Check out the views from the top of the Empire State Building,
          Rockefeller Center, or One World Observatory. Take yourself on a
          museum crawl, starting at The Metropolitan Museum of Art on the
          northeastern edge of Central Park. Then, make your way north several
          blocks to the Guggenheim Museum and eventually to the Museum of the
          City of New York, one of the best places to learn about the Big
          Apple's history.
        </p>
        <p class="black--text">
          Go to Chinatown for dim sum and to Little Italy for cannoli. Head to a
          jazz club in Harlem, check out the independent artist galleries that
          dot Chelsea, shop along Fifth Avenue, and pay a visit to the Statue of
          Liberty.
        </p>
        <p class="black--text">
          You could spend an entire day in Central Park alone, checking out its
          zoo, carousel, lakes, and ice rink. A number of gardens and meadows
          make for excellent people-watching and host impromptu musical
          performances on nice days. Traveling in the summer? Make sure to check
          the schedule for Shakespeare in the Park.
        </p>
        <p class="black--text">
          Prefer sports, movies, and live music? See the New York Yankees at
          Yankee Stadium, the New York Mets at Citi Field, or the New York
          Knicks at Madison Square Garden. Track down sites from your favorite
          movies and TV shows. Seinfeld, Sex and the City, "When Harry Met
          Sally," "Sleepless in Seattle," "Serendipity," and "Home Alone 2" are
          just a small fraction of what's been filmed here.
        </p>
        <p class="black--text">
          New York is a city filled with attractions, but some of its most
          interesting experiences are sure to be the ones you accidentally
          stumble upon on the way to somewhere else. Whatever it is you're
          looking for, you can find it in New York. Just don't try to do
          everything in one trip.
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
        <h2 class="black--text mb-3">Sites in New York</h2>
        <v-row no-gutters>
          <v-col cols="12">
            <v-card color="info" flat rounded>
              <v-card-text>
                <h2 class="black--text">
                  <strong>{{ attractions.length }}</strong> attractions for families
                </h2>
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
        <v-col cols="12">
          <v-card flat tile height="400" :img="pic4"></v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Pic1 from '@/assets/images/newyork/pic1.jpeg';
import Pic2 from '@/assets/images/newyork/pic2.webp';
import Pic4 from '@/assets/images/newyork/pic4.webp';
import Pic3 from '@/assets/images/newyork/pic3.jpeg';
export default {
  data() {
    return {
      pic1: Pic1,
      pic2: Pic2,
      pic3: Pic3,
      pic4: Pic4,
      attractions: [
        {
          id: 1,
          title: 'Statue of Liberty and Ellis Island',
          text: `The Statue of Liberty is the nation's most iconic monument, a symbol of hope to millions of immigrants on their way to Ellis Island. Tourists can visit both attractions via a ferry operated by the National Park Service that meets passengers at Battery Park and runs continuous loops throughout the day.`,
        },
        {
          id: 2,
          title: 'Times Square',
          text: `Traveling with the kids? You'll find plenty of family attractions, including Madame Tussauds, which has not only amazing waxworks and interactive exhibits but also offers a new perspective from the glass-walled viewing platform that protrudes over the sidewalk.`,
        },
        {
          id: 3,
          title: 'Central Park',
          text: `Although it may appear on a map as a small patch of green within the grid of Manhattan streets, Central Park is an expansive space that contains enough sights and things to do to last for days, if not longer. The park is home to a wide range of attractions, from impressive architecture and peaceful gardens to skating rinks.`,
        },
        {
          id: 4,
          title: 'Niagra Falls',
          text: `Niagara Falls is one of the natural wonders of North America, drawing millions of visitors each year. Located along the border of Canada and the United States, there are actually three waterfalls within the park - Bridal Veil Falls, American Falls, and Horseshoe Falls. Horseshoe Falls is the widest and tallest, dropping 167 feet from a 2,700-foot-wide ledge.`,
        },
        {
          id: 5,
          title: `Finger Lakes`,
          text: `According to Iroquois legend, the long, narrow lakes in the landscape west of Syracuse were formed by the impression of the fingers of the Great Spirit. The numerous lakes that make up the Finger Lakes region offer a range of outdoor opportunities in a visually stunning landscape.`,
        },
        {
          id: 6,
          title: 'Lake Placid',
          text: `The world-famous winter sports resort of Lake Placid, at the foot of Whiteface Mountain, has twice hosted the Winter Olympics (1932, 1980). Today the town is a major tourist center, located in beautiful natural surroundings with lakes and hills.
While it is perhaps best known internationally for its winter recreation, particularly skiing, the town is a popular summer destination as well. All kinds of unique shops and restaurants line the main tourist strip through town.
`,
        },
      ]
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
  background: url('@/assets/images/newyork/pic1.jpeg');
  background-repeat: no-repeat;
  height: 100%;
  background-position: left;
}
</style>
