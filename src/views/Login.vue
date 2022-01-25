<template>
<div class="all">
    <h1>Login to your account</h1>
    <p>In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple.</p>
    <p>If you signed up but didn't get your verification email, click here to have it resent.</p>
    <div class="login">
    <label for="username">Username</label>
    <input type="text"  v-model="username">

    <label for="password">Password</label>
    <input type="password"  v-model="password">

    <div class="loginn">
    <button @click="submit">Login</button>
    <a>Reset password</a>
    </div>
    </div>
</div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required} from '@vuelidate/validators'
export default {
    setup(){
        return{v$:useVuelidate()}
    },
    validations(){
        return{
            username:{ required },
            password:{ required },
        }
    },


    data(){
        return{
            username:null,
            password:null,
            reqToken:null,
            approvedToken:null,
            sessionid:null,
        }
    },
methods:{
    submit(){
        this.v$.$validate()
        if(!this.v$.$error){
        //request token
        fetch('https://api.themoviedb.org/3/authentication/token/new?api_key=0b5e8ce7494ae54d6c643adf4db40da7')
        .then(res =>res.json())
        .then(data => this.reqToken = data.request_token)
        .then(data => {console.log(this.reqToken,'requesttoken')
        //approving token
        return fetch('https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=0b5e8ce7494ae54d6c643adf4db40da7', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
  "username": this.username,
  "password": this.password,
  "request_token": this.reqToken
}),
        })
        .then(response => response.json())
        .then(data => this.approvedToken = data.request_token)
        .then(data => {console.log('approvedreqToken:', data);
        //session id
        return fetch('https://api.themoviedb.org/3/authentication/session/new?api_key=0b5e8ce7494ae54d6c643adf4db40da7', {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
  "request_token": this.approvedToken
}),
        })
        .then(response => response.json())
        .then(data => this.sessionid = data.session_id)
        .then(data => {console.log(this.sessionid)})})
        })
        if(this.sessionid){window.location.replace('http://localhost:8080/' + this.sessionid)}
        
    }else{
    alert('Popuni info')
}
}
}
}
</script>

<style scoped>
.all{
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 1200px;
    margin: auto;
    margin-top: 100px;
}
.login{
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 1000px;
}
.login input{
    width: 1180px;
}
.all p{
    margin-bottom: 10px;
    margin-top: 10px;
}
.login input{
    height: 50px;
}
.login button{
    width: 70px;
    color: white;
    background:  #01b4e4;
    border: none;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    font-size: 20px;
}
.login a{
    margin-left: 10px;
    color:#01b4e4;
    font-size: 15px;
    cursor: pointer;
}
.loginn{
    margin-top: 20px;
    display: flex;
    align-items: center;
}
</style>