<template>
<div class="navnavbar">
<div class="navlijevo">
<router-link to="/"><img class="slika" src="..\assets\logo.svg" alt="#"></router-link>
<div class="navleft">
<div class="navdropdown">
<router-link to="/popular"><a href="#">Movies</a><img src="../assets/Vector.svg" alt="logo"></router-link>
<div class="navdropdowncontent">
<router-link to="/popular"><a href="#">Popular</a></router-link>
<router-link to="/nowplaying"><a href="#">Now Playing</a></router-link>
<router-link to="/upcoming"><a href="#">Upcoming</a></router-link>
<router-link to="/toprated"><a href="#">Top Rated</a></router-link>
</div>
</div>
<div class="navdropdown">
<router-link to="/populartv"><a href="#">TV Shows</a><img src="../assets/Vector.svg" alt="logo"></router-link>
<div class="navdropdowncontent">
<router-link to="/populartv"><a href="#">Popular</a></router-link>
<router-link to="/nowplayingtv"><a href="#">Airing Today</a></router-link>
<router-link to="/ontheairtv"><a href="#">On TV</a></router-link>
<router-link to="/topratedtv"><a href="#">Top Rated</a></router-link>
</div>
</div>
<div navclass="people">
<router-link :to="{ name: 'People' }"><a href="#">People</a></router-link>
</div>
</div>
</div>
<div class="navdesno">
<div class="navright">
<div class="navdropdown" v-if="podaci">
<router-link :to="{ name: 'Watchlist'}"><a href="#">{{ podaci.username }}</a></router-link>
<div class="navdropdowncontent">
<router-link :to="{ name: 'Watchlist'}"><a href="#"> My Watchlist</a></router-link>
<router-link :to="{ name: 'Ratings'}"><a href="#">My Ratings</a></router-link>
</div>
</div>

</div>
<router-link :to="{ name: 'Search' }"><img src="../assets/search.svg" alt=""></router-link>
</div>

</div>




<router-view/>
</template>
<script>
export default{
  data(){
    return{
      podaci:null,
      sessionid:this.$route.params.sessionid
    }
  },
  mounted(){
    fetch('https://api.themoviedb.org/3/account?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=' + this.sessionid)
    .then(res => res.json())
    .then(data =>this.podaci = data)

  }
}
</script>
<style scoped>
*{
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
}
.navnavbar{
  display: flex;
  flex-direction: row;
  background: #0d253f;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.navlijevo img{
  width: 150px;
}
.navnavbar a{
  color: white;
  text-decoration: none;
}
.navleft{
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 250px;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
}
.navleft img{
  height: 12px;
  width: 12px;
}
.navdesno{
  display: flex;
  height: 50px;
  flex-direction: row;
  align-items: center;
  margin-right: 150px;
}
.navright{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  width: 0px;
  margin-right: 150px;
}
.navright a{
  height: 20px;
  align-self: center;
}
.navdropdown {
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  padding-top: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 20px;
}
.navpeople {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: lightgray;
  padding-top: 15px;
  padding-bottom: 15px;
}
.navlijevo{
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 150px;
}
.navdropdowncontent{
  border:1px solid lightgray;
  background: white;
  display: none;
  flex-direction: column;
  position:absolute;
  margin-top: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
}
.navdropdowncontent a{
  color: black;
  width: 100px;
  padding: 5px;
  padding-left: 5;
  padding-right: 10px;
}
.navdropdowncontent a:hover{
  background: gray;
}
.navdropdown:hover .navdropdowncontent{
  display: flex;
}


</style>
