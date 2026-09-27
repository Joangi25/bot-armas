const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Lista de precios (todo en minúsculas y sin acentos para que sea más fácil)
const precios = {
  // Revólveres y Pistolas
  "cattleman": 9,
  "doble cañon": 32,
  "doble cañón": 32,
  "volcanic": 32,
  "schofield": 78,
  "mauser": 78,
  "semiautomatica": 78,
  "lemat": 100,
  "m-1899": 100,
  "m1899": 100,
  "navy": 145,

  // Rifles
  "varmint": 81,
  "carabina": 155,
  "evans": 200,
  "henry": 200,
  "winchester": 243,
  "springfield": 330,
  "cerrojo": 398,
  "mata elefantes": 445,
  "mataelefantes": 445,

  // Escopetas
  "recortada": 267,
  "doble cañon escopeta": 322.5,
  "repeticion": 432,
  "pump": 454.5,
  "escopeta semiautomatica": 454.5,

  // Municiones
  "caja de balas para revolver": 0.65,
  "caja de balas para revólver": 0.65,
  "caja de balas para pistola": 0.65,
  "caja de balas varmint tranquilizantes": 1.35,
  "caja de balas para rifle": 1.35,
  "caja de cartuchos para escopeta": 1.35,
  "caja para repetidora": 1.35,
  "caja de balas para rifle mataelefantes": 1.50,

  // Otros
  "aceite para armas": 2.16,
  "servicio de limpieza de armas largas": 2,
  "limpieza": 2
};

// Función para quitar acentos
function normalizar(texto) {
  return texto.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

client.on('ready', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  let texto = normalizar(message.content);
  let total = 0;
  let detalles = [];

  // Buscamos cada arma en el mensaje
  for (const [arma, precio] of Object.entries(precios)) {
    const armaNorm = normalizar(arma);
    const regex = new RegExp(`\\b${armaNorm}\\s*(\\d+)`, 'gi');
    const match = texto.match(regex);

    if (match) {
      match.forEach(m => {
        const cantidad = parseInt(m.match(/\d+/)[0]);
        const subtotal = cantidad * precio;
        total += subtotal;
        detalles.push(`${arma} x${cantidad} = $${subtotal.toFixed(2)}`);
      });
    }
  }

  if (total > 0) {
    let respuesta = detalles.join('\n') + `\n\n**Total: $${total.toFixed(2)}**`;
    message.reply(respuesta);
  }
});

client.login(process.env.DISCORD_TOKEN);