<template>
<div class="nav">
<a href="#">Overview</a>
<a href="#">Casts</a>
<a href="#">Reviews</a>
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
<div class="paneldesno">
    <h1>Crew:</h1>
<div v-for="crew in podatak.crew" :key="crew">
  <p>{{ crew.name }} - {{ crew.job }}</p>  
</div>
</div>
<div class="panellijevo">
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
export default {
  methods:{
    expand(index){
      console.log(index)
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
    }
  },
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
}
.epizoda img{
  width: 300px;
  height: 180px;
  margin-left: 20px;
}
.info{
  display: flex;
  flex-direction: column;
  padding: 40px;
}
.main{
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
  
}
.panel{
  width: 1500px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
}
.expand{
  width: 1500px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
}
.expand:hover{
  background: grey;
}
.paneldesno{
  display: flex;
  flex-direction: column;
  width: 400px;
  text-align: center;
  margin-left: 100px;
}
.panellijevo{
  display: flex;
  flex-direction: column;
  width: 400px;
  text-align: center;
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
  margin-left: 80px;
  margin-right: 80px;
  color: black;
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
</style>