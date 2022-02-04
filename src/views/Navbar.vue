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

<div class="navright">
<router-link to="/login"><a href="#">Login</a></router-link>
<router-link to="/login"><a href="#">Join TMDB</a></router-link>
<router-link :to="{ name: 'Search' }"><img src="../assets/search.svg" alt=""></router-link>
</div>

</div>




<router-view/>
</template>

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
  width: 250px;
  margin-right: 150px;  
}
.navright a{
  color: white;
  text-decoration: none;
  padding-top: 15px;
  padding-bottom: 15px;
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
