<template>
  <div id="app">
    <div v-if="nick">
      <!-- chat -->
      <h1>BIENVENIDO AL CHAT</h1>

      <div id="container-chat">
          <div id="messages">
              <h4>acá los mensajes</h4>
              <div class="message" v-for="m in messages" :key="m.id">
                  <span>{{ m.author }}: </span>
                  <p>{{ m.text }}</p>
              </div>
          </div>
          <input type="text" v-model="message">
          <button @click="sendMessage">Enviar</button>
      </div>
    </div>
    <div v-else>
      <h2>Escriba su nick para poder ingresar</h2>
      <input type="text" v-model="username">
      <button @click="setNick()">Entrar</button>
    </div>
  </div>
</template>

<script>
import db from "./db.js"

export default {
  name: 'App',
  data(){
    return {
      logged: null,
      nick: null,
      username: "",
      message: null,
      messages: []
    }
  },
  methods: {
    setNick(){
      this.nick = this.username
      console.log(this.nick)
      this.username = ""
    },
    sendMessage(){
      let message = {
        text: this.message,
        author: this.nick
      }
      db.ref("messages").push(message)
      this.message = ""
    }
  },
  mounted() {
    const refMessages = db.ref("messages")
    refMessages.on("value", obj => {
      let data = obj.val()
      let messagesRet = []
      console.log(data)
      Object.keys(data).forEach(key => {
        messagesRet.push({
          text: data[key].text,
          author: data[key].author,
          id: key
        })
      })
      this.messages = messagesRet;
      console.log(this.messages)
    }) 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#container-chat {
  height: 500px;
  width: 80%;
  border: 2px solid gray;
}

.message {
  border: 1px solid #c7c5c5;
  width: 50%;
  margin: auto;
  padding: 10px;
}
.message p {
    display: inline;
    margin-left: 20px;
}
.message span {
    font-size: 0.8em;
    color: blue;
}
</style>



