const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const moment = require('moment');

client.on('ready', () => { 
  console.log(`
  ------------------------------------------------------
  > Logging in...
  ------------------------------------------------------
  Name ${client.user.tag}
  In ${client.guilds.size} servers!
  ${client.channels.size} channels and ${client.users.size} users cached!
  I am logged in and ready to roll!
  LET'S GO!
  ------------------------------------------------------
  ------------------------------------------------------
  ------------------------------------------------------
  ------------------------[ abdo ]----------------------`);
});
 
client.on('guildMemberAdd', member => {
     const zabkbir =  member.guild.channels.find('name', 'log');
const shiiiit = ['./w1.png'];
var Canvas = module.require('canvas');
var jimp = module.require('jimp');
         let Image = Canvas.Image,
            canvas = new Canvas(320, 110),
            ctx = canvas.getContext('2d');
        fs.readFile(`${shiiiit[Math.floor(Math.random() * shiiiit.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 320, 110);
             
         
 
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`welcome to Brix`, 300, 80);
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 90);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 70, 70);  
                         
               
                             
zabkbir.sendFile(canvas.toBuffer())
 
 
 
     
     
                    }  )  
     
                   
 
})
      });                    
});


 client.login(process.env.abdo);
