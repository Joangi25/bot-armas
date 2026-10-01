const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});


// ======================================================
// PRODUCTOS
// nombre   = nombre oficial
// aliases  = formas alternativas que puedes escribir
// precio   = precio que paga el cliente
// caja     = cantidad que se deposita en caja
// ======================================================

const productos = [

  // REVOLVERS
  {
    nombre: "Revolver Cattleman",
    aliases: ["cattleman"],
    precio: 9,
    caja: 8
  },
  {
    nombre: "Revolver Doble Acción",
    aliases: ["doble accion"],
    precio: 31.50,
    caja: 15
  },
  {
    nombre: "Revolver Schofield",
    aliases: ["schofield"],
    precio: 76.50,
    caja: 46.50
  },
  {
    nombre: "Revolver Lemat",
    aliases: ["lemat"],
    precio: 99,
    caja: 39
  },
  {
    nombre: "Revolver Navy",
    aliases: ["navy"],
    precio: 144,
    caja: 54
  },


  // PISTOLAS
  {
    nombre: "Pistola Volcanic",
    aliases: ["volcanic"],
    precio: 31.50,
    caja: 16.50
  },
  {
    nombre: "Pistola Semi-Automática",
    aliases: ["semi-automatica", "semi automatica"],
    precio: 76.50,
    caja: 31.50
  },
  {
    nombre: "Pistola Mauser",
    aliases: ["mauser"],
    precio: 76.50,
    caja: 31.50
  },
  {
    nombre: "Pistola M-1899",
    aliases: ["m-1899", "m1899"],
    precio: 99,
    caja: 39
  },


  // RIFLES
  {
    nombre: "Rifle Varmint",
    aliases: ["varmint"],
    precio: 81,
    caja: 51
  },
  {
    nombre: "Rifle Springfield",
    aliases: ["springfield"],
    precio: 328,
    caja: 133.50
  },
  {
    nombre: "Rifle Cerrojo",
    aliases: ["cerrojo"],
    precio: 396,
    caja: 156
  },
  {
    nombre: "Rifle Mata Elefantes",
    aliases: ["mata elefantes", "mataelefantes"],
    precio: 441,
    caja: 171
  },


  // CARABINAS
  {
    nombre: "Carabina Spencer",
    aliases: ["carabina", "spencer", "carabina spencer"],
    precio: 153,
    caja: 63
  },
  {
    nombre: "Linchfield (Henry)",
    aliases: ["henry", "linchfield"],
    precio: 198,
    caja: 78
  },
  {
    nombre: "Repetidora Evans",
    aliases: ["evans", "repetidora evans"],
    precio: 198,
    caja: 78
  },
  {
    nombre: "Winchester",
    aliases: ["winchester"],
    precio: 243,
    caja: 93
  },


  // ESCOPETAS
  {
    nombre: "Escopeta Recortada",
    aliases: ["recortada"],
    precio: 267,
    caja: 102
  },
  {
    nombre: "Escopeta Doble Cañón",
    aliases: ["doble cañon escopeta", "escopeta doble cañon"],
    precio: 322.50,
    caja: 157.50
  },
  {
    nombre: "Escopeta Repetición",
    aliases: ["repeticion", "escopeta repeticion"],
    precio: 432,
    caja: 162
  },
  {
    nombre: "Escopeta Pump/Corredera",
    aliases: ["pump", "corredera", "pump/corredera"],
    precio: 454.50,
    caja: 169.50
  },
  {
    nombre: "Escopeta Semi-Automática",
    aliases: [
      "escopeta semiautomatica",
      "escopeta semi automatica",
      "escopeta semi-automatica"
    ],
    precio: 454.50,
    caja: 169.50
  },


  // EXTRAS
  {
    nombre: "Municiones Revolver/Pistola",
    aliases: [
      "municion revolver",
      "municion pistola",
      "balas revolver",
      "balas pistola"
    ],
    precio: 0.63,
    caja: 0.63
  },
  {
    nombre: "Munición de Escopeta",
    aliases: [
      "municion escopeta",
      "cartuchos escopeta"
    ],
    precio: 1.35,
    caja: 1.35
  },
  {
    nombre: "Munición Varmint",
    aliases: ["municion varmint"],
    precio: 1.35,
    caja: 1.35
  },
  {
    nombre: "Munición Rifle/Repetidora",
    aliases: [
      "municion rifle",
      "municion repetidora"
    ],
    precio: 1.35,
    caja: 1.35
  },
  {
    nombre: "Munición Tranquilizante",
    aliases: [
      "municion tranquilizante",
      "tranquilizantes"
    ],
    precio: 1.35,
    caja: 1.35
  },
  {
    nombre: "Munición MataElefante",
    aliases: [
      "municion mataelefante",
      "municion mata elefantes"
    ],
    precio: 1.50,
    caja: 1.50
  },
  {
    nombre: "Aceites",
    aliases: [
      "aceite",
      "aceites",
      "aceite para armas"
    ],
    precio: 2.16,
    caja: 2.16
  }
];


// ======================================================
// PACKS / COMBOS
// Precio especial según el cartel
// ======================================================

const packs = [

  // COMBOS CAZADOR

  {
    nombre: "Cazador Principiante",
    aliases: [
      "cazador principiante",
      "combo cazador principiante"
    ],
    precio: 94,
    caja: 64.94
  },

  {
    nombre: "Cazador Intermedio",
    aliases: [
      "cazador intermedio",
      "combo cazador intermedio"
    ],
    precio: 284,
    caja: 137.10
  },

  {
    nombre: "Cazador Experimentado",
    aliases: [
      "cazador experimentado",
      "combo cazador experimentado"
    ],
    precio: 725,
    caja: 321.60
  },

  {
    nombre: "Combo Vinter",
    aliases: [
      "combo vinter",
      "vinter"
    ],
    precio: 625,
    caja: 270.99
  },


  // CUCHILLOS
  // Sin margen para el vendedor

  {
    nombre: "5 Cuchillos Arrojadizos",
    aliases: [
      "cuchillos arrojadizos",
      "5 cuchillos arrojadizos",
      "pack cuchillos",
      "pack cuchillos arrojadizos"
    ],
    precio: 7,
    caja: 7
  },


  // COMBOS DEL OESTE

  {
    nombre: "Jinete del Oeste - Opción A",
    aliases: [
      "jinete del oeste a",
      "jinete opcion a",
      "jinete a",
      "combo jinete a"
    ],
    precio: 43,
    caja: 25.52
  },

  {
    nombre: "Jinete del Oeste - Opción B",
    aliases: [
      "jinete del oeste b",
      "jinete opcion b",
      "jinete b",
      "combo jinete b"
    ],
    precio: 43,
    caja: 27.02
  },

  {
    nombre: "Combo Forajido",
    aliases: [
      "combo forajido",
      "forajido"
    ],
    precio: 292,
    caja: 111.78
  },


  // COMBO CABALLERO
  // El reparto cambia según el arma elegida.

  {
    nombre: "Combo Caballero - Schofield",
    aliases: [
      "combo caballero schofield",
      "caballero schofield"
    ],
    precio: 346,
    caja: 152.70
  },

  {
    nombre: "Combo Caballero - Mauser",
    aliases: [
      "combo caballero mauser",
      "caballero mauser"
    ],
    precio: 346,
    caja: 137.70
  },

  {
    nombre: "Combo Caballero - Semi-Automática",
    aliases: [
      "combo caballero semi",
      "combo caballero semi automatica",
      "combo caballero semiautomatica",
      "caballero semi"
    ],
    precio: 346,
    caja: 137.70
  },


  // LEYENDA DEL OESTE
  // Pump y Semi tienen el mismo valor de caja.

  {
    nombre: "Leyenda del Oeste",
    aliases: [
      "leyenda del oeste",
      "combo leyenda del oeste",
      "leyenda"
    ],
    precio: 1110,
    caja: 418.50
  }
];


// ======================================================
// NORMALIZAR TEXTO
// Quita mayúsculas y tildes
// ======================================================

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}


// Evita problemas con caracteres especiales del RegExp
function escaparRegex(texto) {
  return texto.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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

  // Ignorar mensajes de otros bots
  if (message.author.bot) return;


  // ====================================================
  // SOLO FUNCIONAR EN EL CANAL DE VENTAS
  // ID: 1247246221702205571
  // ====================================================

  if (message.channel.id !== "1247246221702205571") return;


  const texto = normalizar(message.content);

  let totalCliente = 0;
  let totalCaja = 0;

  const detalles = [];

  let packEncontrado = false;


  // ====================================================
  // BUSCAR PACKS PRIMERO
  // ====================================================

  for (const pack of packs) {

    let encontrado = false;

    const nombresBusqueda = [
      pack.nombre,
      ...pack.aliases
    ];

    nombresBusqueda.sort((a, b) => b.length - a.length);


    for (const alias of nombresBusqueda) {

      if (encontrado) break;

      const aliasNormalizado = normalizar(alias);

      const regex = new RegExp(
        `\\b${escaparRegex(aliasNormalizado)}(?:\\s*[xX]?\\s*(\\d+))?\\b`,
        "i"
      );

      const coincidencia = texto.match(regex);


      if (coincidencia) {

        const cantidad = coincidencia[1]
          ? parseInt(coincidencia[1], 10)
          : 1;


        const subtotalCliente =
          cantidad * pack.precio;

        const subtotalCaja =
          cantidad * pack.caja;


        totalCliente += subtotalCliente;
        totalCaja += subtotalCaja;


        detalles.push(
          `📦 ${pack.nombre} x${cantidad} = $${subtotalCliente.toFixed(2)}`
        );


        encontrado = true;
        packEncontrado = true;
      }
    }
  }


  // ====================================================
  // SI NO HAY PACK, BUSCAR PRODUCTOS NORMALES
  // ====================================================

  if (!packEncontrado) {

    for (const producto of productos) {

      let encontrado = false;

      const nombresBusqueda = [
        producto.nombre,
        ...producto.aliases
      ];

      nombresBusqueda.sort((a, b) => b.length - a.length);


      for (const alias of nombresBusqueda) {

        if (encontrado) break;

        const aliasNormalizado = normalizar(alias);

        const regex = new RegExp(
          `\\b${escaparRegex(aliasNormalizado)}(?:\\s*[xX]?\\s*(\\d+))?\\b`,
          "i"
        );

        const coincidencia = texto.match(regex);


        if (coincidencia) {

          const cantidad = coincidencia[1]
            ? parseInt(coincidencia[1], 10)
            : 1;


          const subtotalCliente =
            cantidad * producto.precio;

          const subtotalCaja =
            cantidad * producto.caja;


          totalCliente += subtotalCliente;
          totalCaja += subtotalCaja;


          detalles.push(
            `${producto.nombre} x${cantidad} = $${subtotalCliente.toFixed(2)}`
          );


          encontrado = true;
        }
      }
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
// ======================================================

client.login(process.env.DISCORD_TOKEN);
