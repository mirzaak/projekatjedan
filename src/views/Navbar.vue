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

<div class="navright" v-if="!sesija">
<router-link to="/login"><a href="#">Login</a></router-link>
<a href="#" @click="signup">Join TMDB</a>
<router-link :to="{ name: 'Search' }"><img src="../assets/search.svg" alt=""></router-link>
</div>

<div class="navrightlog" v-if="sesija">
<div class="navdropdown">
<a href="#">{{username}}</a>
<div class ="navdropdowncontent">
<router-link :to="{ name: 'Watchlist' }"><a href="#">Watchlist</a></router-link>
<router-link :to="{name:'Ratings'}"><a href="#">Rated</a></router-link>
<router-link :to="{name:'Home'}"><a href="#" @click="logOut">LogOut</a></router-link>
</div>
</div>
<router-link :to="{ name: 'Search' }"><img src="../assets/search.svg" alt=""></router-link>
</div>

</div>




<router-view/>
</template>
<script>
import {mapGetters} from 'vuex'
import axios from 'axios'
export default{
  computed:{
    ...mapGetters(['sesija','username']),
  },
  methods:{
    signup(){
      window.location.href = "https://www.themoviedb.org/signup"
    },
    logOut(){
      axios.delete('https://api.themoviedb.org/3/authentication/session?api_key=0b5e8ce7494ae54d6c643adf4db40da7',{data:{session_id:this.sesija}})
      this.$store.dispatch('sesija',null)
    }
  }
}
</script>
<style>
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
  font-weight: bold;
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
.navright{
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  margin-right: 150px;
  width: 250px;
}
.navrightlog{
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  margin-right: 150px;
  width: 150px;
}
.navright img{
  width: 25px;
  height: 25px;
}
.navdropdown {
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  padding-top: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
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
  z-index:3;
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
