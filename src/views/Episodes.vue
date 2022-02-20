<template>
<Navbar />
<div class="nav">
<a href="#">Overview</a>
<a href="#">Casts</a>
<router-link :to="{name:'Reviewstv'}"><a href="#">Reviews</a></router-link>
</div>
<div class="back">
<div class="uvod" v-if="podaci">
<img @click="goBack" :src=" slikaurl + podaci.poster_path" alt="">
<div class="infouvod">
<h1 @click="goBack">{{podaci.name}}</h1>
<a href="#" @click="goBack">Back to Seasons List</a>
</div>
</div>
</div>
<div class="naslov" v-if="podaci">
<h1>Episodes {{podaci.episodes.length}}</h1>
</div>
<div v-if="podaci">
<div class="epizoda" id="epizoda" v-for=" podatak in podaci.episodes" :key="podatak" >
<div class="main">
<img :src=" slikaurl + podatak.still_path" alt="">
<div class="info">
<h1>{{ podatak.name }}</h1>
<p>{{ podatak.overview }}</p>
</div>
</div>
<button class="expand" id="expand" @click="expand">Expand</button>

<div class="panel" id="panel" v-if="podaci">

<div class="panelnav">
  <a href="#">Videos</a>
  <a href="#">Images</a>
  <a href="#">Changes</a>
  <a href="#">Report</a>
</div>
<div class="panelinfo">
<div class="panellijevo">
    <h1>Crew:</h1>
<div v-for="crew in podatak.crew" :key="crew">
  <p>{{ crew.name }} - {{ crew.job }}</p>  
</div>
</div>
<div class="paneldesno">
<h1>Guest Stars:</h1>
<div v-for=" stars in podatak.guest_stars" :key="stars">
<p>{{ stars.name}} - {{ stars.known_for_department }}</p>
<p></p>
</div>
</div>
</div>
</div>
</div>

</div>

</template>

<script>
import Navbar from './Navbar.vue'
export default {
    components:{Navbar},
    methods:{
        goBack(){
            this.$router.go(-1)
        },
    },
    computed:{
      expand(){
  var expand = document.getElementsByClassName("expand");
  var i;
  for (i = 0; i < expand.length; i++) {
  expand[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}
    }},
data(){
    return{
        epizoda:null,
        podaci:null,
        id:this.$route.params.id,
        sn:this.$route.params.sn,
        slikaurl: 'https://image.tmdb.org/t/p/original/',
    }
},
mounted(){
    fetch('https://api.themoviedb.org/3/tv/' + this.id + '/season/' + this.sn + '?api_key=0b5e8ce7494ae54d6c643adf4db40da7&append_to_response=images')
    .then(res => res.json())
    .then(data => this.podaci = data)
    .then(data => console.log(this.podaci))
}
}
</script>

<style scoped>
.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 300px;
    margin: auto;
}
.nav a{
    color: black;
    text-decoration: none;
}
.epizoda{
  width: 1500px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 20px;
  border: 1px solid lightgray;
  border-top-left-radius: 10px;
  border-radius: 10px;
}
.epizoda img{
  width: 227px;
  height: 127px;
  border-top-left-radius: 10px;
}
.info{
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
}
.info h1{
  font-family: sans-serif;
  font-weight: bold;
  font-size: 20px;
}
.info p{
  font-weight: bold;
}
.main{
  align-items: center;
  display: flex;
  flex-direction: row;
  border-top-left-radius: 10px;
}
.panel{
  width: 1500px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
}
.panel h1{
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
}
.panel p{
  font-weight: bold;
}
.expand{
  width: 1500px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 12px;
}
.paneldesno{
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-right: 600px;
  text-align: left;
  margin-left: 100px;
}
.panellijevo{
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 400px;
  text-align: left;
  margin-right: 100px;
}
.panelnav{
  display: flex;
  width: 1500px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid lightgray;
}
.panelnav a{
  font-weight: bold;
  margin-left: 80px;
  margin-right: 80px;
  color: lightgray;
  font-family: sans-serif;
  text-decoration: none;
}
.panelinfo{
  justify-content: space-between;
  display: flex;
  width: 1500px;
  border-top: 1px solid lightgray;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.panelimages{
  display: flex;
  width: 1500px;
  height: 150px;
}
.infouvod{
    margin-left: 20px;
}
.uvod{
    display: flex;
    margin: auto;
    width: 1500px;
    align-items: center;
    height: 100px;
    margin-bottom: 20px;
}
.infouvod a{
    font-family: sans-serif;
    font-weight: bold;
    text-decoration: none;
    color: gray;
    font-size: 15px;
}
.infouvod h1{
    font-family: sans-serif;
    color: white;
    cursor: pointer;
}
.infouvod h1:hover{
  color: gray;
}
.uvod img{
    height: 87px;
    border-radius: 10px;
    cursor: pointer;
}
.back{
  background: lightgray;
  width: 100%;
}
.naslov{
  width: 1500px;
  margin: auto;
}
.naslov h1{
  font-family: sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
}
</style>