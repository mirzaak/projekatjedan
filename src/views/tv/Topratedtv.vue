<template>
<div class="naslov">
    <h1>Top Rated TV Shows</h1>
</div>
<div class="all">
  <div class="left">
      <div class="sort">
          <h1>Sort</h1>
          <img src="@/assets/chevron-right.svg" alt="">
      </div>
      <div class="silters"></div>
      <div class="sheretowatch"></div>

      <div class="sort">
          <h1>Filters</h1>
          <img src="@/assets/chevron-right.svg" alt="">
      </div>
      <div class="silters"></div>
      <div class="sheretowatch"></div>

      <div class="sort">
          <h1>What to Watch</h1>
          <img src="@/assets/chevron-right.svg" alt="">
      </div>
      <div class="silters"></div>
      <div class="sheretowatch"></div>
      <button>Search</button>
  </div>
  <div class="right" v-if="podaci">
    <div class="card" v-for="podatak in podaci.results" :key="podatak">
        <img :src=" slikaurl + podatak.poster_path" alt="" @click="toMovie(podatak.id)">
        <div class="info">
            <h3>{{ podatak.original_name}}</h3>
            <h3>{{ podatak.first_air_date}}</h3>
            <p></p>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    methods:{
        toMovie(id){
            window.location.href = 'http://localhost:8080/tv/' + id 
        }
    },
    data(){
        return{
            podaci:null,
            slikaurl: 'https://image.tmdb.org/t/p/original/'
        }
    },
mounted(){
fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=0b5e8ce7494ae54d6c643adf4db40da7')
.then(response => response.json())
.then(data => this.podaci = data)
.then(data => console.log(this.podaci))
}
}
</script>

<style scoped>
.all{
    display: flex;
    flex-direction: row;
    width: 1400px;
    height: 1600px;
    margin:auto;

}
.naslov{
    width: 1400px;
    height: 50px;
    margin:auto;
    margin-top: 20px;
}
.card img{
    width: 150px;
    cursor: pointer;
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
    display: flex;
    flex-direction: column;
    margin: 20px;
    margin-top: 0;
}
.info{
    display: flex;
    width: 150px;
    height: 90px;
    text-align: center;
    flex-direction: column;
}
.left{
    display:flex;
    flex-direction: column;
    width: 300px;
    margin: 0;
}
.left button{
    width: 200px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 0;
    border-radius: 50px;
    cursor: pointer;
    border: none;
}
.sort{
    display: flex;
    align-items: center;
    width: 200px;
    height: 40px;
    background: white;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 40px;
    margin-bottom: 0px;
    border: 1px solid black;
    justify-content: space-between;
}
.sort h1{
    margin-left: 10px;
    font-size: 10px;
    color: #0d253f;
}
.sort img{
    height: 15px;
    width: 12px;
    margin-right: 20px;
}


</style>