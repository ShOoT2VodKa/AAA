const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready" , function() {
    bot.user.setGame("Test");
    console.log("Atack est coo")
})

bot.login("NTY0MDg5ODUyMTE5NzQ0NTMz.XKtCFQ.pB57wntCwrmzGqkYhrBeP72quJQ")
