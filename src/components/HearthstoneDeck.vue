<template>
<v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>
    </div>
  </v-container>
<v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4
        v-for="(item, index) in wholeResponse"
        :key="index"
        mb-2>
        <div v-if="item.img">
        <v-card>
          <v-img
            :src="item.img"
            :lazy-src="img"
            @error="replaceByDefault"
          ></v-img>
<v-card-title primary-title>
            <div>
              <h2>{{item.name}}</h2>
              <div>Class: {{item.playerClass}}</div>
              <div>Faction: {{item.faction}}</div>
              <div>Rarity: {{item.rarity}}</div>
            </div>
          </v-card-title>
<!-- <v-card-actions class="justify-center">
            <v-btn flat
              color="green"
              @click="singleMovie(item.imdbID)"
              >View</v-btn>
          </v-card-actions> -->
</v-card>
        </div>
      </v-flex>
  </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios'
import img from '../assets/default-card.png'
export default {
  data () {
    return {
      wholeResponse: [],
      loading: true,
      img: img
    }
  },
    mounted () {
    axios.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "7990daafafmshc123e1a9c6bcb74p1d191ajsn2dd19765f233"
        }
        })
        .then(response => {
        let output = response.data.Basic.filter(obj => Object.keys(obj).includes("img"));
        this.wholeResponse = output
        this.loading = false
        this.replaceByDefault
        
        })
        .catch(error => {
        console.log(error)
        })
    },
  methods: {
    replaceByDefault() {
      event = img
    }
  }
}

</script>
<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>





