<template>
  <div>
    <img id="backButton" src="./../assets/backButton.png" @click="$router.go(-1)" alt="Back button">
    <div class="itemPage container" v-if="comparisons">
      <h1>{{ comparisons.name }}</h1>
      <img v-bind:src="comparisons.image_url" alt="Road Bike Image"/>
      <pre id="description">{{ comparisons.description }}</pre>

      <div class="options">
        <label>Color:</label>
        <select v-model="color">
          <option v-for="color in Object.keys(colorSizes)" :key="color.id" v-bind:value="color">{{color}}</option>
        </select><br>

        <label>Size:</label>
        <select v-model="size">
          <option v-for="size in colorSizes[color]" :key="size.id" v-bind:value="size">{{size}}</option>
        </select>
      </div>

      <div class="comparisonHeader">
        <label>Name</label>
        <label>Price</label>
        <label>Go To</label>
      </div>

      <div v-if="color && size" class="comparisonWrapper">
        <div class="comparison" v-for="comparison in selectedComparisons" :key="comparison.id">
          <label>{{comparison.name}}</label>
          <label id = "price">{{comparison.price}}</label>
          <a class="button" v-bind:href=comparison.url>{{comparison.website}}</a>
        </div>
      </div>

      <p id="selectMessage" v-else>Please select a color and a size</p>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ItemPage",
  data() {
    return {
      comparisons: null,
      color: '',
      size: ''
    }
  },
  methods: {
    getComparisons: function() {
      // bike id is retrieved from route parameters
      const url = "/api/bikes/" + this.$route.params.id;
      axios.get(url)
          .then(response => (this.comparisons = response.data))
          .catch(error => console.log(error))
    }
  },
  created: function(){
    this.getComparisons();
  },
  computed: {
    colorSizes: function () {
      let colorSizes = {}; // object having colors as key and array of sizes as value
      let app = this;
      // add each color to colorSizes and initialize the size array
      app.comparisons.roadBikes.forEach(comparison => (
          colorSizes[comparison.color] = []));
      // add size to the array of each color
      app.comparisons.roadBikes.forEach(comparison => (
        colorSizes[comparison.color].push(comparison.size)));
      // reduce array of sizes to unique values
      for (const [key, value] of Object.entries(colorSizes))
        colorSizes[key] = new Set(value);

      return colorSizes;
    },
    selectedComparisons: function () {
      const websites = ['Wiggle', 'Evans', 'Tredz', 'SigmaSports', 'ChainReaction']
      // select only data that has the selected color and size
      let result = this.comparisons.roadBikes.filter(comparison =>
          comparison.size === this.size && comparison.color === this.color)
      // find the name of websites that have an offer
      result.forEach(function (comparison) {
        comparison['website'] = websites.filter(website =>
            comparison.url.includes(website.toLowerCase()))[0];
      })
      return result
    }
  }
}
</script>


<style scoped>
h1 {
  text-align: center;
  margin-top: 0;
  color: #EDC307;
  text-shadow: 0 1px 1px #7E7E82, 0 1px 1px #7E7E82;
}
.itemPage img {
  margin-right: 20px;
  width: 30em;
  height: 30em;
  float: left;
  object-fit: contain;
}

#description {
  color: #153240;
  font-size: 15px;
  line-height: 30px;
  text-align: justify;
  margin: 0 20px 0 20px;
  overflow: auto;
  height: 25em;
  padding: 20px;
  border: 2px solid #C4C2C0;
  white-space:pre-wrap;
}

.options label {
  font-size: 23px;
  width: 3em;
  text-align: right;
  color: #153240;
}

select {
  width: 10em;
  padding: 5px;
  color: #153240;
  font-size: 17px;
  margin-bottom: 10px;
}

.itemPage {
  padding: 20px;
  margin: 20px;
}

.options {
  clear: both;
  display: grid;
  grid-template-columns: max-content max-content max-content;
  grid-gap: 10px;
}

.comparisonHeader {
  color: #153240;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  text-align: center;
  margin-top: 20px;
  font-size: 23px;
  padding-bottom: 10px;
  border-bottom:2px solid #153240;
}

.comparison {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  text-align: center;
  margin-top: 10px;
  font-size: 18px;
}

.comparison label {
  color: #153240;
}

#price {
  font-size: 23px;
}

.comparison a:link, .comparison a:visited {
  color: #153240;
  text-decoration: none;
  padding: 5px;
  margin: 0 5em;
  font-weight: bold;
  background: white;
  text-align: center;
  line-height: 30px;
}

.comparison a:hover {
  box-shadow: inset 0 1px 0 #FAD946, inset 0 0 2px 2px #FAD946;
  }

#backButton {
  margin-left: 20px;
  width: 3em;
  cursor: pointer;
}

#selectMessage {
  color: #153240;
  text-align: center;
}

</style>