/* ============================================================
   DATOS DEL MENÚ
   Para agregar o editar un plato solo cambia este archivo.

   El campo "imagen" es el nombre del archivo que debes poner
   dentro de la carpeta "imagenes/" del proyecto.
   Ejemplo: "imagen": "pique-macho.jpg"
   → pon el archivo en: imagenes/pique-macho.jpg

   Si no tienes foto para un plato, déjalo como está y
   se mostrará el emoji automáticamente.
   ============================================================ */

const MENU = {
  entradas: [
    {
      nombre:     "Anticucho de Corazón",
      emoji:      "🍢",
      imagen:     "Anticuchos.jpg",       // ← pon esta foto en la carpeta imagenes/
      desc:       "Brochetas de corazón de res marinado en ají panca, asado en brasas con papas y salsa de maní.",
      descLarga:  "Corazón de res marinado en ají panca y especias, asado en brasas y servido con papas sancochadas y salsa de maní. El rey de los puestos callejeros paceños.",
      precio:     "Bs. 35",
      badge:      "⭐ Estrella"
    },
    {
      nombre:     "Salteñas Paceñas",
      emoji:      "🥟",
      imagen:     "saltenas.jpeg",        // ← pon esta foto en la carpeta imagenes/
      desc:       "Empanadas horneadas con jugoso relleno de pollo o carne, papa, aceitunas y pasas.",
      descLarga:  "La salteña más famosa de nuestra cocina: masa horneada dorada con jugoso relleno de pollo o carne, papa, aceitunas, pasas y el característico jigote dulce-picante.",
      precio:     "Bs. 22",
      badge:      "Tradicional"
    },
    {
      nombre:     "Papa Rellena",
      emoji:      "🥔",
      imagen:     "papa-rellena.jpg",    // ← pon esta foto en la carpeta imagenes/
      desc:       "Croqueta de papa rellena con picadillo de carne, huevo duro y aceitunas. Frita y crujiente.",
      descLarga:  "Croqueta de papa amarilla rellena con picadillo de carne sazonado, huevo duro y aceitunas. Frita hasta lograr una costra crujiente dorada. Acompañada de llajwa casera.",
      precio:     "Bs. 28",
      badge:      "Popular"
    }
  ],

  fondos: [
    {
      nombre:     "Pique Macho",
      emoji:      "🥩",
      imagen:     "pique-macho.jpg",     // ← pon esta foto en la carpeta imagenes/
      desc:       "Carne y chorizo salteados con tomate, locoto, cebolla y papas fritas.",
      descLarga:  "El plato más contundente de Bolivia: trozos de carne de res y chorizo salteados con tomate, locoto fresco, cebolla y papas fritas. Una explosión de sabor y picante.",
      precio:     "Bs. 85",
      badge:      "⭐ Insignia"
    },
    {
      nombre:     "Fricasé",
      emoji:      "🍲",
      imagen:     "fricase.jpg",         // ← pon esta foto en la carpeta imagenes/
      desc:       "Cerdo en caldo de ají amarillo con mote y chuño. El clásico de los domingos paceños.",
      descLarga:  "Guiso de cerdo cocido en caldo amarillo de ají y maíz mote. Plato tradicional de los domingos paceños, reconfortante y profundamente aromático. Se sirve con chuño y papa.",
      precio:     "Bs. 72",
      badge:      "Dom. Clásico"
    },
    {
      nombre:     "Silpancho Cochabambino",
      emoji:      "🍳",
      imagen:     "silpancho.jpg",       // ← pon esta foto en la carpeta imagenes/
      desc:       "Filete apanado sobre arroz y papas fritas, con huevo frito, tomate y cebolla.",
      descLarga:  "Filete de carne de res apanado y frito, servido sobre arroz blanco y papas fritas, coronado con huevo frito, tomate y cebolla. El orgullo de Cochabamba en nuestra carta.",
      precio:     "Bs. 68",
      badge:      "Favorito"
    },
    {
      nombre:     "Sajta de Pollo",
      emoji:      "🍗",
      imagen:     "sajta.jpg",           // ← pon esta foto en la carpeta imagenes/
      desc:       "Pollo en salsa de ají amarillo y hierbabuena con papa y chuño phuti.",
      descLarga:  "Pollo cocido en salsa de ají amarillo, hierbabuena y especias andinas. Acompañado de papa, chuño phuti y ensalada fresca de tomate. Sabor profundo y reconfortante.",
      precio:     "Bs. 65",
      badge:      "Tradicional"
    },
    {
      nombre:     "Charque Kan",
      emoji:      "🌽",
      imagen:     "charque.jpg",         // ← pon esta foto en la carpeta imagenes/
      desc:       "Charque de llama asado con mote, papas, queso fresco y huevo.",
      descLarga:  "Charque de llama deshilachado y asado, servido con mote de maíz, papas cocidas, queso fresco y huevo. Un plato que huele al altiplano, con ese sabor ahumado inconfundible.",
      precio:     "Bs. 75",
      badge:      "⭐ Especial"
    },
    {
      nombre:     "Segundo de Quinua",
      emoji:      "🌾",
      imagen:     "quinua.jpg",          // ← pon esta foto en la carpeta imagenes/
      desc:       "Quinua real con verduras de temporada, caldo casero y papa cocida.",
      descLarga:  "Plato elaborado con quinua real orgánica de los salares bolivianos, verduras de temporada y caldo de res casero. Nutritivo, reconfortante y 100% boliviano.",
      precio:     "Bs. 52",
      badge:      "Orgánico"
    }
  ],

  sopas: [
    {
      nombre:     "Ch'aqui Ají",
      emoji:      "🌶️",
      imagen:     "chaqui-aji.jpg",      // ← pon esta foto en la carpeta imagenes/
      desc:       "Sopa espesa de ají seco con carne de res y chuño. El caldo de la abuela paceña.",
      descLarga:  "Sopa espesa de ají seco con carne de res y chuño. Un plato de cuna, de esos que hace la abuela cuando hace frío en La Paz. Profundo, terroso y absolutamente boliviano.",
      precio:     "Bs. 48",
      badge:      "⭐ Estrella"
    },
    {
      nombre:     "Chairo Paceño",
      emoji:      "🥣",
      imagen:     "chairo.jpg",          // ← pon esta foto en la carpeta imagenes/
      desc:       "La sopa más representativa de La Paz: chuño, papa, carne de res y cordero.",
      descLarga:  "La sopa más representativa de La Paz: caldo con chuño, papa, carne de res, cordero y verduras. Espesa, nutritiva y con ese sabor inconfundible del altiplano.",
      precio:     "Bs. 52",
      badge:      "Emblema"
    },
    {
      nombre:     "Sopa de Maní",
      emoji:      "🥜",
      imagen:     "sopa-mani.jpg",       // ← pon esta foto en la carpeta imagenes/
      desc:       "Crema espesa de maní tostado con fideos y carne de res. Servida con arroz y papa.",
      descLarga:  "Sopa cremosa elaborada con maní tostado y molido, fideos y carne de res. Servida con arroz blanco y papa sancochada. Una sopa que acaricia el alma con su cremosidad única.",
      precio:     "Bs. 45",
      badge:      "Popular"
    }
  ],

  bebidas: [
    {
      nombre:     "Chicha Morada",
      emoji:      "🫙",
      imagen:     "chicha-morada.jpg",   // ← pon esta foto en la carpeta imagenes/
      desc:       "Maíz morado hervido con canela, clavo y cáscara de piña. Ancestral y refrescante.",
      descLarga:  "Bebida ancestral elaborada con maíz morado boliviano hervido con canela, clavo de olor y cáscara de piña. Refrescante, ligeramente dulce y de color violeta natural.",
      precio:     "Bs. 18",
      badge:      "Sin Alcohol"
    },
    {
      nombre:     "Api con Pastel",
      emoji:      "☕",
      imagen:     "api.jpg",             // ← pon esta foto en la carpeta imagenes/
      desc:       "Bebida caliente de maíz especiada con canela y clavo, con pastel frito boliviano.",
      descLarga:  "Bebida caliente de maíz morado o blanco, espesa y dulce, especiada con canela y clavo. Acompañada de pastel frito boliviano. El desayuno más querido de los paceños.",
      precio:     "Bs. 22",
      badge:      "⭐ Desayuno"
    },
    {
      nombre:     "Singani Sour",
      emoji:      "🍹",
      imagen:     "singani-sour.jpg",    // ← pon esta foto en la carpeta imagenes/
      desc:       "Singani boliviano, limón fresco, jarabe y clara de huevo. El cóctel nacional.",
      descLarga:  "Cóctel boliviano elaborado con Singani, el aguardiente de uva nacional, jugo de limón fresco, jarabe de goma y clara de huevo. Fresco, aromático y 100% boliviano.",
      precio:     "Bs. 38",
      badge:      "Cóctel"
    }
  ],

  postres: [
    {
      nombre:     "Buñuelos con Miel",
      emoji:      "🍩",
      imagen:     "bunuelos.jpg",        // ← pon esta foto en la carpeta imagenes/
      desc:       "Rosquillas fritas bañadas en miel de caña y espolvoreadas con canela molida.",
      descLarga:  "Rosquillas de masa frita esponjosa, doradas en aceite caliente, bañadas generosamente con miel de caña oscura y espolvoreadas con canela molida. Irresistibles.",
      precio:     "Bs. 25",
      badge:      "⭐ Favorito"
    },
    {
      nombre:     "Humintas Dulces",
      emoji:      "🌽",
      imagen:     "humintas.jpg",        // ← pon esta foto en la carpeta imagenes/
      desc:       "Tamales de choclo fresco con queso y pasas, cocidos al vapor en hojas de choclo.",
      descLarga:  "Tamales bolivianos de choclo fresco molido, mezclado con queso y pasas, envueltos en hojas de choclo y cocidos al vapor. Dulces, tiernos e inigualables.",
      precio:     "Bs. 20",
      badge:      "Artesanal"
    },
    {
      nombre:     "Mazamorra de Maíz",
      emoji:      "🍮",
      imagen:     "mazamorra.jpg",       // ← pon esta foto en la carpeta imagenes/
      desc:       "Crema espesa de maíz blanco con leche, canela y azúcar. Postre ancestral boliviano.",
      descLarga:  "Postre cremoso de maíz blanco molido cocido con leche, canela y azúcar. Una crema espesa y reconfortante que lleva siglos endulzando las mesas bolivianas.",
      precio:     "Bs. 22",
      badge:      "Tradicional"
    }
  ]
};

/* ============================================================
   GALERÍA
   Cambia los nombres de archivo por los tuyos.
   Todos deben estar dentro de la carpeta imagenes/
   ============================================================ */
const GALERIA = [
  { imagen: "pique-macho.jpg", emoji: "🥩", texto: "Pique Macho — el plato de los campeones" },
  { imagen: "ingredientes.jpg", emoji: "🌿", texto: "Ingredientes frescos del altiplano" },
  { imagen: "saltenas.jpeg", emoji: "🥟", texto: "Salteñas artesanales, cada mañana" },
  { imagen: "fricase.jpg", emoji: "🍲", texto: "Fricasé de domingo — la tradición" },
  { imagen: "chicha-morada.jpg", emoji: "🫙", texto: "Chicha morada — bebida del alma" },
  { imagen: "ambiente.jpg", emoji: "🍽️", texto: "Nuestro ambiente — cálido y auténtico" }
];
