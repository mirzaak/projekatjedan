<template>
<div class="navbar">
<div class="left">
<router-link to="/"><img src=".\assets\logo.svg" alt="#"></router-link>
<div class="dropdown">
<router-link to="/popular"><a href="#">Movies</a><img src="./assets/Vector.svg" alt="logo"></router-link>
<div class="dropdowncontent">
<router-link to="/popular"><a href="#">Popular</a></router-link>
<router-link to="/nowplaying"><a href="#">Now Playing</a></router-link>
<router-link to="/upcoming"><a href="#">Upcoming</a></router-link>
<router-link to="/toprated"><a href="#">Top Rated</a></router-link>
</div>
</div>
<div class="dropdown">
<router-link to="/populartv"><a href="#">TV Shows</a><img src="./assets/Vector.svg" alt="logo"></router-link>
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
<router-link to="/login"><a href="#">Login</a></router-link>
<router-link to="/login"><a href="#">Join TMDB</a></router-link>
<router-link to="/"><img src="./assets/search.svg" alt=""></router-link>
</div>
</div>

<router-view/>
</template>

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
  position: absolute;
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
