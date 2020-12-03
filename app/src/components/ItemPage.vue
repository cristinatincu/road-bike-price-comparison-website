<template>
  <div>
    <img id="backButton" src="./../assets/backButton.png" @click="$router.go(-1)" alt="Back button">
    <div class="itemPage container" v-if="comparisons">
      <h1>{{ comparisons[0].name }}</h1>
      <img v-bind:src="comparisons[0].image_url" alt="Road Bike Image"/>
      <div class="options">
        <label>Color:</label>
        <select v-model="color">
          <option v-for="color in Object.keys(colorSizes)" :key="color.id" v-bind:value="color">{{color}}</option>
        </select>
        <label>Size:</label>
        <select v-model="size">
          <option v-for="size in colorSizes[color]" :key="size.id" v-bind:value="size">{{size}}</option>
        </select>
      </div>
      <div class="comparisonHeader">
        <label>Price</label>
        <label>Go To</label>
      </div>
      <div v-if="color && size" class="comparisonWrapper">
        <div class="comparison" v-for="comparison in selectedComparisons" :key="comparison.id">
          <label class="price">{{comparison.price}}</label>
          <a class="button" v-bind:href=comparison.url>{{comparison.website}}</a>
        </div>
      </div>
      <p id="selectMessage" v-else>Please select a color and a size</p>
      <p id="description">{{ comparisons[0].description }}</p>
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
      let colorSizes = {};
      let app = this;
      // add each color to object keys and initialize the size array
      app.comparisons.forEach(comparison => (
          colorSizes[comparison.color] = []));
      // add size to the array of each color
      app.comparisons.forEach(comparison => (
        colorSizes[comparison.color].push(comparison.size)));

      return colorSizes;
    },
    selectedComparisons: function () {
      const websites = ['Wiggle', 'Evans', 'Tredz', 'SigmaSports', 'ChainReaction']
      // select only data that has the selected color and size
      let result = this.comparisons.filter(comparison =>
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
  margin: 0 20px 20px 0;
  width: 30em;
  float: left;
}

#description {
  color: #153240;
  font-size: 20px;
  line-height: 30px;
  text-align: justify;
  clear: both;
  margin-bottom: 0;
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
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 10px;
}

.comparisonHeader {
  color: #153240;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  text-align: center;
  margin-top: 20px;
  font-size: 23px;
  padding-bottom: 10px;
  border-bottom:2px solid #153240;
}

.comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  text-align: center;
  margin-top: 10px;
}

.price {
  color: #153240;
  font-size: 23px;
}

.comparison a:link, .comparison a:visited {
  color: #153240;
  text-decoration: none;
  text-align: center;
  padding: 5px;
  margin: 0 5em;
  font-weight: bold;
  background: white;
}

.comparison a:hover {
  box-shadow: 0 1px 0 #FAD946, 0 1px 3px #FAD946, inset 0 1px 0 #FAD946, inset 0 0 3px #FAD946;
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