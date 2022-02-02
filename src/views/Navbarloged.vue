<template>
<div class="navbar" v-if="podaci">
<div class="left">
<router-link to="/"><img src="..\assets\logo.svg" alt="#"></router-link>
<div class="dropdown">
<router-link to="/popular"><a href="#">Movies</a><img src="../assets/Vector.svg" alt="logo"></router-link>
<div class="dropdowncontent">
<router-link to="/popular"><a href="#">Popular</a></router-link>
<router-link to="/nowplaying"><a href="#">Now Playing</a></router-link>
<router-link to="/upcoming"><a href="#">Upcoming</a></router-link>
<router-link to="/toprated"><a href="#">Top Rated</a></router-link>
</div>
</div>
<div class="dropdown">
<router-link to="/populartv"><a href="#">TV Shows</a><img src="../assets/Vector.svg" alt="logo"></router-link>
<div class="dropdowncontent">
<router-link to="/populartv"><a href="#">Popular</a></router-link>
<router-link to="/nowplayingtv"><a href="#">Airing Today</a></router-link>
<router-link to="/ontheairtv"><a href="#">On TV</a></router-link>
<router-link to="/topratedtv"><a href="#">Top Rated</a></router-link>
</div>
<router-link to="/"><a href="#">People</a></router-link>
</div>
</div>

<div class="right">
<div class="dropdown">
<a href="#" id="korisnik">{{ podaci.username }}</a>
<div class="dropdowncontent">
<router-link to="/watchlist"><a href="#">My Watchlist</a></router-link>
<router-link to="/watchlist/tv"><a href="#">My Favorites</a></router-link>

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
    }
  },
  mounted(){
    fetch('https://api.themoviedb.org/3/account?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=f95caa0f4752ba79268ad7a023c023a70514310b')
    .then(res => res.json())
    .then(data => this.podaci = data)
    .then(data => console.log(data))
  }
}
</script>
<style>
*{
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
}
.navbar{
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  background: #0d253f;
  justify-content: space-between;
}
.navbar img{
  width: 150px;
}
.right img{
  width: 20px;
}
.navbar a{
  text-decoration: none;
  color: white;
  margin-left: 20px;
}
.right{
  display: flex;
  margin-right: 200px;
  align-items: center;
}
.left{
  display: flex;
  margin-left: 200px;

}
.dropdown img{
  margin-left: 5px;
  height: 15px;
  width: 12px;
}

.dropdown:hover .dropdowncontent{
  display: flex;
}
.dropdowncontent{
  display: none;
  flex-direction: column;
  position: absolute;
  text-align: left;
  margin-left: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  background: white;
}
.dropdowncontent a{
  padding-left: 10px;
  padding-right: 20px;
  margin-left: 0;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #0d253f;
  margin-top: 5px;
}


</style>
