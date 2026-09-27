const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});


// ======================================================
// LISTA DE PRECIOS
// precio = precio total que paga el cliente
// caja   = cantidad que se deposita en caja
// ======================================================

const precios = {

  // REVOLVERS
  "cattleman": { precio: 9, caja: 8 },
  "doble accion": { precio: 31.50, caja: 15 },
  "schofield": { precio: 76.50, caja: 46.50 },
  "lemat": { precio: 99, caja: 39 },
  "navy": { precio: 144, caja: 54 },


  // PISTOLAS
  "volcanic": { precio: 31.50, caja: 16.50 },
  "semi-automatica": { precio: 76.50, caja: 31.50 },
  "mauser": { precio: 76.50, caja: 31.50 },
  "m-1899": { precio: 99, caja: 39 },


  // RIFLES
  "varmint": { precio: 81, caja: 51 },
  "springfield": { precio: 328, caja: 133.50 },
  "cerrojo": { precio: 396, caja: 156 },
  "mata elefantes": { precio: 441, caja: 171 },


  // CARABINAS
  "carabina spencer": { precio: 153, caja: 63 },
  "linchfield (henry)": { precio: 198, caja: 78 },
  "repetidora evans": { precio: 198, caja: 78 },
  "winchester": { precio: 243, caja: 93 },


  // ESCOPETAS
  "escopeta recortada": { precio: 267, caja: 102 },
  "escopeta doble cañon": { precio: 322.50, caja: 157.50 },
  "escopeta repeticion": { precio: 432, caja: 162 },
  "escopeta pump/corredera": { precio: 454.50, caja: 169.50 },
  "escopeta semi-automatica": { precio: 454.50, caja: 169.50 },


  // EXTRAS
  // Estos productos no generan beneficio:
  // todo lo cobrado se deposita en caja.

  "municiones revolver/pistola": {
    precio: 0.63,
    caja: 0.63
  },

  "municion de escopeta": {
    precio: 1.35,
    caja: 1.35
  },

  "municion varmint": {
    precio: 1.35,
    caja: 1.35
  },

  "municion rifle/repetidora": {
    precio: 1.35,
    caja: 1.35
  },

  "municion tranquilizante": {
    precio: 1.35,
    caja: 1.35
  },

  "municion mataelefante": {
    precio: 1.50,
    caja: 1.50
  },

  "aceites": {
    precio: 2.16,
    caja: 2.16
  }
};


// ======================================================
// NORMALIZAR TEXTO
// Permite escribir mayúsculas/minúsculas y con/sin acentos
// ======================================================

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}


// ======================================================
// BOT CONECTADO
// ======================================================

client.once("ready", () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});


// ======================================================
// LEER MENSAJES
// ======================================================

client.on("messageCreate", async (message) => {

  // Ignorar mensajes enviados por bots
  if (message.author.bot) return;

  const texto = normalizar(message.content);

  let totalCliente = 0;
  let totalCaja = 0;

  const detalles = [];


  // ====================================================
  // BUSCAR PRODUCTOS
  // ====================================================

  for (const [producto, datos] of Object.entries(precios)) {

    const productoNormalizado = normalizar(producto);

    // Ejemplo:
    // cattleman 2
    // lemat 3
    // escopeta pump/corredera 1

    const regex = new RegExp(
      `\\b${productoNormalizado.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*(\\d+)`,
      "gi"
    );

    const coincidencias = [...texto.matchAll(regex)];


    for (const coincidencia of coincidencias) {

      const cantidad = parseInt(
        coincidencia[1]
      );

      const subtotalCliente =
        cantidad * datos.precio;

      const subtotalCaja =
        cantidad * datos.caja;


      totalCliente += subtotalCliente;
      totalCaja += subtotalCaja;


      detalles.push(
        `${producto} x${cantidad} = $${subtotalCliente.toFixed(2)}`
      );
    }
  }


  // ====================================================
  // RESPUESTA
  // ====================================================

  if (totalCliente > 0) {

    const totalVendedor =
      totalCliente - totalCaja;


    const respuesta =
      detalles.join("\n") +

      `\n\n💰 **TOTAL CLIENTE: $${totalCliente.toFixed(2)}**` +

      `\n🏦 **A CAJA: $${totalCaja.toFixed(2)}**` +

      `\n💵 **VENDEDOR: $${totalVendedor.toFixed(2)}**`;


    await message.reply(respuesta);
  }
});


// ======================================================
// INICIAR BOT
// Token almacenado en Railway
// ======================================================

client.login(process.env.DISCORD_TOKEN);
