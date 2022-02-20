<template>
<Navbar />
<div class="naslov">
    <h1>On The Air TV Shows</h1>
</div>
<div class="all">
  <div class="left">

<button @click="expandSort" class="filter" :class="{ active: isActiveOne }">Sort</button>
<div class="tabla">
  <p>Sort Results By:</p>
<a @click="expandMini" class="minifilter">Filters</a>
<div class="minitabla">
<a href="#" class="skale" :class="{selectedSkala:this.sort.includes('popularity.asc')}" @click="ascending">Popularity Ascending</a>
<a href="#" class="skale" :class="{selectedSkala:this.sort.includes('popularity.desc')}" @click="descending">Popularity Descending</a>
<a href="#" class="skale" :class="{selectedSkala:this.sort.includes('vote_average.asc')}" @click="ratingasc">Rating Ascending</a>
<a href="#" class="skale" :class="{selectedSkala:this.sort.includes('vote_average.desc')}" @click="ratingdesc">Rating Descending</a>
<a href="#" class="skale" :class="{selectedSkala:this.sort.includes('release_date.asc')}" @click="rdasc">Release Date Ascending</a>
<a href="#" class="skale" :class="{selectedSkala:this.sort.includes('release_date.desc')}" @click="rddesc">Release Date Descending</a>
<a href="#" class="skale" :class="{selectedSkala:this.sort.includes('original_title.asc')}" @click="titleasc">Title (A-Z)</a>
<a href="#" class="skale" :class="{selectedSkala:this.sort.includes('original_title.desc')}" @click="titledesc">Title (Z-A )</a>

</div>
</div>
<button @click="expandFilters" class="filter" :class="{ active: isActiveTwo }">Filters</button>
<div class="tabla">
    <p>Genres</p>
<div class="genres" >
<div class="genresa" v-for="genre in genres" :key="genre" @click="changeColor">
<a href="#" :class="{selected: this.genre.includes(genre.id)}" class="aaa"  @click="zanr(genre.id)">{{genre.name}}</a>
</div>
</div>
<div class="godina">
<label>From</label>
  <input type="date" v-model="odGodina">
<label>To</label>
  <input type="date" v-model="doGodina">
</div>
<div class="slide">
  <p>User Score:</p>
<label for="range">From</label>
<input type="range" class="odSlider" value="5" min="0" max="10">
<label for="range">To</label>
<input type="range" class="doSlider" value="5" min="0" max="10">
</div>
</div>
<button @click="expandWtW" class="filter" :class="{ active: isActiveThree }">Where To Watch</button>
<div class="tabla">
  <div class="region">
<select @change="region" name="region" v-model="regionData">
<option v-for="aRegion in avaliableRegions.results" :key="aRegion">{{aRegion.iso_3166_1}}</option>
</select>
<div class="wProviders">
<div class="providers" v-for="provider in wProviders.results" :key="provider">
  <img :src=" slikaurl + provider.logo_path" alt="" @click="selectProvider(provider.provider_name)">
</div>
</div>

</div>
</div>
<button class="submit" @click="submit">Submit</button>
  </div>

  <div class="right" v-if="podaci">
    <div class="card" v-for="podatak in podaci.results" :key="podatak" @click="toMovie(podatak.id)">
        <img :src=" slikaurl + podatak.poster_path" alt="">
        <div class="info">
            <h3>{{ podatak.original_name}}</h3>
            <p>{{ podatak.first_air_date}}</p>
            <p></p>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '../Navbar.vue'
import axios from 'axios'
export default {
data(){
        return{
            skalaActive:false,
            genreActive:false,
            genres:'',
            isActiveOne:false,
            isActiveTwo:false,
            isActiveThree:false,
            sort:'',
            sProvider:'',
            slikaurl: 'https://image.tmdb.org/t/p/original/',
            wProviders:'',
            avaliableRegions:'',
            regionData:'',
            vagte:'',
            valte:'',
            value:'',
            genre:[],
            odGodina:'',
            doGodina:'',
            keyword:'',
            podaci:null,
            slikaurl: 'https://image.tmdb.org/t/p/original/'
        }
    },
methods:{
      selectProvider(provider){
        this.sProvider = provider
      },
      region(){
        axios.get('https://api.themoviedb.org/3/watch/providers/movie?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US&watch_region='+this.regionData)
.then((response)=>{
this.wProviders = response.data
console.log(this.wProviders)
})
        console.log(this.avaliable)
      },
      expandSort(){
var acc = document.getElementsByClassName("filter");
var i;
this.isActiveOne = !this.isActiveOne;
for (i = 0; i < acc.length; i++) {
    var panel = acc[0].nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  ;
}},
      expandMini(){
var acc = document.getElementsByClassName("minifilter");
var i;
for (i = 0; i < acc.length; i++) {
    var panel = acc[0].nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  ;
}},
      expandFilters(){
var acc = document.getElementsByClassName("filter");
var i;
this.isActiveTwo = !this.isActiveTwo;
for (i = 0; i < acc.length; i++) {
    var panel = acc[1].nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    };
}},
      expandWtW(){
var acc = document.getElementsByClassName("filter");
var i;
this.isActiveThree = !this.isActiveThree;
for (i = 0; i < acc.length; i++) {
    var panel = acc[2].nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  ;
}
            },
      zanr(id){
        const i = this.genre.indexOf(id)
        if(this.genre.includes(id)){this.genre.splice(i,1)}else{this.genre.push(id)}
      console.log(this.genre)
      },
          submit(){
                  const jedan = document.getElementsByClassName("odSlider")
        this.vagte = jedan[0].value
                const dva = document.getElementsByClassName("doSlider")
        this.valte = dva[0].value
          axios.get('https://api.themoviedb.org/3/discover/movie?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US&sort_by='+this.sort+'&include_adult=false&include_video=false&page=1&primary_release_date.gte='+this.odGodina+'&'+'&primary_release_date.lte='+this.doGodina+'&'+'&vote_average.gte='+this.vagte+'&'+'&vote_average.lte='+this.valte+'&'+this.genre+'&watch_region='+this.regionData+'&with_watch_providers='+this.sProvider+'&with_genres='+this.genre+'&')
          .then((response)=>{
            this.podaci = response.data
          })
          console.log(this.genre)
          console.log(this.odGodina)
          console.log(this.doGodina)
          console.log(this.vagte)
          console.log(this.valte)
          console.log(this.regionData)
          console.log(this.sProvider)
          console.log(this.sort)
      },
      ascending(){
        this.sort = "popularity.asc"
      },
      descending(){
        this.sort = "popularity.desc"
      },
      ratingasc(){
        this.sort = 'vote_average.asc'
      },
      ratingdesc(){
        this.sort = 'vote_average.desc'
      },
      rdasc(){
        this.sort = 'release_date.asc'
      },
      rddesc(){
        this.sort = 'release_date.desc'
      },
      titleasc(){
        this.sort = 'original_title.asc'
      },
      titledesc(){
        this.sort = 'original_title.desc'
      },
        toMovie(id){
            this.$router.push({ name: 'Tvdetails', params: { id: id }}) 
        }
    },
components:{Navbar},
mounted(){
axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US')
.then((response)=>{
  this.genres = response.data.genres
  console.log(this.genres)
})
fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US')
.then(response => response.json())
.then(data => this.podaci = data)
.then(data => console.log(this.podaci))

axios.get('https://api.themoviedb.org/3/watch/providers/regions?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US')
.then((response)=>{
this.avaliableRegions = response.data
console.log(this.avaliableRegions)
})
}
}
</script>

<style scoped>
.all{
    display: flex;
    flex-direction: row;
    width: 1400px;
    margin:auto;
}
.naslov h1{
    margin-left: 20px;
}
.naslov{
    width: 1400px;
    height: 50px;
    margin:auto;
    margin-top: 20px;
}
.card img{
    width: 150px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.right{
    display: flex;
    flex-wrap: wrap;
    width: 1100px;
    margin-left: 100px;
    margin-right: 0;
    overflow: hidden;

}
.card{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 20px;
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    margin-bottom: none;
}
.info{
    display: flex;
    width: 130px;
    text-align: left;
    flex-direction: column;
    padding: 10px;
    padding-bottom: none;
}
.info h3{
  font-family: sans-serif;
  font-size: 15px;
}
.left{
    display:flex;
    flex-direction: column;
    width: 300px;
    margin: 0;
}

.filter {
    width: 250px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    border: none;
    background: white;
    border: 1px solid lightgray;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    font-weight: bold;
    text-align: left;
    font-family: sans-serif;
}
.minifilter{
    display: flex;
    width:200px;
    padding:5px;
    border: 1px solid lightgray;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 0px;
    border-radius: 5px;
    background: lightgray;
}
.tabla {
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
  width: 212px;
  border: 1px solid lightgray;
}
.minitabla{
    width:210px;
    display: none;
    flex-direction: column;
    margin-bottom: 10px;
}
.skale{
    color: black;
    text-decoration: none;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
}

.tabla p{
    margin-top: 10px;
}
.tabla button{
  border-radius: 20px;
  cursor: pointer;
}
.godina{
  display: flex;
  flex-direction: column;
  border-top: 1px solid lightgray;
  margin-top: 10px;
}
.slide{
  border-top: 1px solid lightgray;
  margin-top: 10px;
}
.slide input{
  width: 212px;
}
.region{
  display: flex;
  flex-direction: column;
  width: 200px;
}
.providers{
  display: flex;
  flex-direction: row;
  width: 40px;
  height: 40px;
  margin: 0;
  cursor: pointer;
}
.providers img {
    border-radius: 10px;
}
.wProviders{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.submit{
  width: 250px;
  height: 50px;
  margin-top: 20px;
  border-radius: 30px;
  border: none;
  background: lightgray;
  color: gray;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
}
.region select{
  height: 30px;
  background: lightgray;
  border: none;
  border-radius: 10px;
  color: black;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
.region option{
  background:white;
}
.active{
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.genres{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.genresa{
  padding: 5px;
  padding-left: 0;
}
.aaa{
  text-decoration: none;
  background: white;
  color: black;
  border-radius: 50px;
  padding: 5px;
  font-size: 12px;
  border: 1px solid lightgray;

}
.godina input{
  height: 30px;
  margin-bottom: 5px;
}
.slide button{
  width: 212px;
  border: none;
  background: #01b4e4;
  margin-bottom: 10px;
  color: white;
}
.selectedSkala{
  background: #01b4e4;
  color: white;
  border: none;
}
.selected{
  border: none;
  color: white;
  background: #01b4e4;
}
</style>