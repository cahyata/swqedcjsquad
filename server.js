const Discord = require("discord.js");
let client = new Discord.Client();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(process.env.PORT);

client.on("ready", () => {
  console.log("Im online!");
});

client.on("message", message => {
  if (message.content === "ping") {
    message.channel.send("pong");
  }
});

client.login(process.env.TOKEN).catch(e => {
  console.log("TOKEN ERROR");
});

  const status = [
    `Axel Korintus`,
    `Bimz Alirsyad`,
    ]
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "WATCHING"}) //watching bisa kalian ganti sama playing dan semacamnya
  }, 2000)