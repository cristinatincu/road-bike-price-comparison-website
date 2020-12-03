<template>
  <div>
    <div class="searchBar">
      <img src="../assets/logo.png" alt="Logo"/>
      <input type="text" ref="searchQuery" v-model="searchQuery"
                                              id="searchInput" placeholder="Search road bike">
    </div>

    <div id="resultGrid">
      <div class="gridItem container" v-for="roadBike in roadBikes" :key="roadBike.id">
        <router-link :to="{ name: 'item', params: {id: roadBike.id } }">
          <img v-bind:src="roadBike.image_url" alt="Road Bike Image"/>
          <p>{{ roadBike.name }}</p>
        </router-link>
      </div>
    </div>

    <div class="pageButtonContainer">
      <button class="button pageButton" v-if="currentPage > 1" @click="loadPage(currentPage - 1)">&lt;</button>
      <button class="button pageButton" v-for="n in Math.ceil(totalBikes / 24)" @click="loadPage(n)" :key="n" :ref="'button'+n">{{n}}</button>
      <button class="button pageButton" v-if="currentPage < Math.ceil(totalBikes / 24)" @click="loadPage(currentPage + 1)">&gt;</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchGrid",
  data() {
    return {
      searchQuery: '',
      roadBikes: [],
      totalBikes: 0,
      currentPage: 1
    }
  },
  methods: {
    getRoadBikes: function () {
      let app = this;
      axios.get('/api/bikes', {
        params:
            {
              'numItems': 24,
              'offset': 24 * (app.currentPage - 1),
              'search': app.$route.query.search
            }
      })
          .then(function(response) {
            app.roadBikes = response.data.roadBikes;
            app.totalBikes = response.data.numberOfRoadBikes;
          })
          .catch(error => console.log(error))
      console.log("Updating content");
    },
    loadPage: function (n) {
      this.currentPage = n;
      const pageButton = this.$refs['button' + n][0];
      pageButton.focus();
      this.updateQuery();
      this.getRoadBikes();
    },
    updateQuery: function () {
      this.$router.push({ name: 'search', query: { page: this.currentPage, search: this.searchQuery }})
    }
  },
  watch: {
    searchQuery: function () {
      this.currentPage = 1;
      this.updateQuery();
      this.getRoadBikes();
    }
  },
  mounted() {
    this.getRoadBikes();
  }
}
</script>

<style>
#resultGrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  margin: 2em;
}

.gridItem {
  display: flex;
  padding: 10px;
  text-align: center;
}

.gridItem a:link, .gridItem a:visited {
  text-decoration: none;
  margin-left: auto;
  margin-right: auto;
}

.gridItem img {
  width: 20em;
  height: 20em;
  object-fit: contain;
  background: white;
}

.gridItem p {
  font-size: 20px;
  font-family: "Arial";
  color: #EDC307;
  word-spacing: 0.2em;
  font-weight: bold;
}

.pageButton {
  font-size: 15px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 2px 8px;
}

.pageButtonContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}

.searchBar{
  margin: 25px;
  display: flex;
  justify-content: center;
}

.searchBar img {
  width: 100px;
}

#searchInput {
  margin-left: 25px;
  display: flex;
  align-items: center;
  background-color: #7E7E82;
  padding: 6px;
  border: none;
  float: left;
  width: 450px;
  font-size: 20px;
  color: #D4D4D4;
  border-radius: 8px;
}

::placeholder {
  color: #C4C2C0;
}

</style>