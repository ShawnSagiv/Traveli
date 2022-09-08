<template>
  <div class="country greece">
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
        <h1 class="black--text">Vacation in Greece</h1>
        <p>Find a flight and hotel deal in Greece that suits you.</p>
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
        <h2 class="black--text mb-3">Greece</h2>
        <p class="black--text">
          Greece: where historic ruins, volcanic cliffs, and friendly locals
          meet the blue Mediterranean Sea. My first trip to Greece was a summer
          adventure through Athens and Mykonos. I returned again to sail the
          Saronic Islands on The Yacht Week Greece, and then again to explore
          the Cyclades islands of Santorini, Milos, Paros, and Naxos! There are
          some islands that are famous for their beaches and natural features,
          while others have a significant nightlife scene or strong cultural
          traditions.
        </p>
        <p class="black--text">
          Mykonos is one of the most popular tourist destinations in the Greek
          islands and is famed for its incredible beaches and world-renowned
          party scene. I spent a week on the island and indulged in delicious
          food, epic sunsets, and some of the best parties I’ve ever been to.
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
        <h2 class="black--text mb-3">Sites in Greece</h2>
        <v-row no-gutters>
          <v-col cols="12">
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
        <v-col cols="12">
          <v-card flat tile height="400" :img="pic4"></v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Pic1 from '@/assets/images/greece/pic1.jpeg';
import Pic2 from '@/assets/images/greece/pic2.jpeg';
import Pic4 from '@/assets/images/greece/pic4.webp';
import Pic3 from '@/assets/images/greece/pic3.webp';
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
          title: 'Acropolis, Athens',
          text: `Considered the symbol of Athens and Greece, and indeed of Western civilization, the Acropolis is a rocky mound rising in the heart of modern Athens, crowned by three magnificent temples dating from the 5th century BC. The best known and most distinctive is the Parthenon, originally made up of 58 columns supporting a roof and decorated by ornate pediments and a frieze.
Skirting the foot of the Acropolis and connecting it to the city's other major ancient attractions — the Ancient Agora , the Roman Forum, Kerameikos, and the Temple of Olympian Zeus — is a 2.5-kilometer walking path known as the Archaeological Promenade.
`,
        },
        {
          id: 2,
          title: 'Acropolis Museum, Athens',
          text: `The Acropolis Museum is one of Athens' most-visited tourist attractions. Designed by Swiss architect Bernard Tschumi, it is an ultra-modern glass and steel structure with light and airy exhibition spaces, built specifically to display ancient finds from the Acropolis.
Top things to see here include the 6th-century-BC Moschophoros (statue of a young man carrying a calf on his shoulders), the Caryatids (sculptures of female figures that held up the Erechtheion), and the highly controversial Parthenon marbles. From the museum's cafe-restaurant terrace, you can enjoy amazing views of the Acropolis itself.
`,
        },
        {
          id: 3,
          title: 'Santorini',
          text: `Stunning Santorini is the most dramatic of all the Greek isles. It is best known for the west coast cliff-top towns of Fira and Oia, which appear to hang over a deep, blue sea-filled caldera. Made up of typical Cycladic whitewashed cubic buildings, many of which have been converted into boutique hotels with infinity pools, both Fira and Oia are considered romantic destinations, popular for weddings and honeymoons.
Things to do in Santorini include sunbathing and swimming at the black volcanic-sand beaches on the south and east coasts and visiting the archaeological site of Akrotiri, an Ancient Minoan settlement buried below lava following the volcanic eruption that created the caldera, some 3,600 years ago. The island has an airport and is served by ferries and catamarans from Athens' port, Piraeus.
`,
        },
        {
          id: 4,
          title: 'Mykonos',
          text: `Many people consider Greece's most glamorous island destination to be Mykonos. After-dark activities center on Mykonos Town, noted for its chic boutique hotels, classy seafood restaurants, and live music venues. Other attractions include Paraportiani (a whitewashed church in Mykonos Town) and numerous sandy beaches along the island's south coast (served both by bus and taxi-boat from Mykonos Town).
The island is particularly popular with international celebrities. Mykonos has an airport and is connected by ferry and catamaran to Athens' port, Piraeus, and Rafina.
`,
        },
        {
          id: 5,
          title: `Delphi`,
          text: `On the Greek mainland, Delphi is a UNESCO World Heritage site. Built on the lower slopes of Mount Parnassus, overlooking a dramatic ravine, the site was sacred to the ancients, who came here on pilgrimages to worship Apollo (god of light, prophecy, music, and healing) and to ask advice from the mythical Oracle.
It is made up of the crumbling ruins of numerous temples, a theater, and stadium, dating from between the 8th century BC and the 2nd century AD. Nearby, stands the Delphi Archaeological Museum, displaying an impressive collection of finds from the site. Delphi lies 180 kilometers northwest of Athens.
`,
        },
        {
          id: 6,
          title: 'The Towns and Beaches of Crete',
          text: `The massive island of Crete is one of the most popular vacation destinations in Greece. Blessed with some of the best beaches in Greece, the island draws visitors from around the world. Some of the most popular beaches on Crete range from small arcs of sand backed by restaurants and promenades to wide-open natural stretches lapped by incredibly clear waters and endless views across the sea.

But Crete is not all about beaches. It has its fair share of notable archeological sites, including the impressive Palace of Knossos, located near the pleasant city of Heraklion. The historical city of Chania and the laid-back town of Agios Nikolaos have wonderful old waterfront areas perfect for spending long afternoons on a café terrace getting lost in the views.

Get away from the bigger communities, and head to smaller towns like Plakias or Matala on Crete's south coast to find more remote beaches and beautiful mountainous backdrops.

If archeological sites, beaches, and historical towns weren't enough, the island has one of the most impressive hikes in the world: the Samaria Gorge.

  `,
        },
        {
            id: 7,
            title: `Corfu`,
            text: `One of Greece's top tourist destinations, Corfu sits in the Ionian Sea off the west coast of the mainland. The capital, Corfu Town, is a UNESCO World Heritage site, thanks to its elegant Italianate architecture — it was ruled by the Venetians for several centuries. Explore its romantic pedestrian-only streets to discover two 16th-century fortresses and the arcaded Liston, lined by old-fashioned cafes.
Away from the main town, the island is lushly beautiful, with rugged limestone rocks tumbling into the sea in its north and velvety green hills in its south. The most popular beach area is Paleokastritsa, on the west coast, about 25-kilometers from Corfu Town. Here, you'll find a collection of deep, curving bays sheltering sand and pebble beaches stretching into a clear blue sea. Corfu is served by an airport and ferries from Igoumenitsa and Patras on the Greek mainland. In summer, ferries sailing from Ancona and Venice also stop here.
`
        }
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
  background: url('@/assets/images/greece/pic1.jpeg');
  background-repeat: no-repeat;
  height: 100%;
  background-position: left;
}
</style>
