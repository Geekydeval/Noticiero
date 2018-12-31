const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

let channelList = ['457922428883042315', '494757740292603904', '523492613467275270', '268884861832396800', '457916680367243308', '354022779563147267', '186906634499391489'];
let channels = [];

var dominiosnegativos = ['https://vandal.elespanol.com/', 'https://www.nintenderos.com/']


client.on('ready', () => {
    console.log('Listo para dar las noticias');

    for (const channel of channelList) {
        channels.push(client.channels.get(channel));
    }

    client.user.setGame('Noticias frescas')
});

client.on('message', (message) => {

    if (message.author.id == 491885652846313473) {
        return;
    }

  client.on("message", async message => {
     if (message.content.match(new RegExp(dominiosnegativos.join('|'), 'i'))) {
        await message.react('❌');
        await message.react('👎');
   }
});
  
    if (message.channel.type.toLowerCase() === 'dm' || message.channel.type.toLowerCase() === 'group') {
        for (const channel of channels) {
            channel.send(message.content);
        }
    }
});
