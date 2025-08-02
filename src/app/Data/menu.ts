export interface Producto {
  title: string;
  slug: string;
  description?: string;
  price: string;
  imageUrl: string;
  hoverImageUrl: string;
  icon: string;
  tags?: string[];
  price6a8?: string;
  price4a6?: string;
  gallery?: string[];
  tabGroups?: any
}

export const MENU_DATA: Record<string, Producto[]> = {
  tortas: [
    {
      title: "Ascensión",
      slug: "ascension",
      description: "Base húmeda de chocolate sin harina rellena de crema de dulce de leche.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Sin harina", "Dulce de leche", "Chocolate"],
      imageUrl: "assets/img/Tortas/Torta Asensión/Torta-Asesion-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta Asensión/Torta-Asesion-Costado.webp",
      icon: ""
    },
    {
      title: "New York Cheesecake",
      slug: "new-york-cheesecake",
      description: "Base de galletitas, crema de queso cocido, compota de frutos rojos y frutos rojos frescos.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Cheesecake", "Frutos rojos", "Galletitas"],
      imageUrl: "assets/img/Tortas/Torta New York CheeseCake/Torta-Cheesecake-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta New York CheeseCake/Torta-Cheesecake-Costado.webp",
      icon: ""
    },
    {
      title: "Chini-Brownie",
      slug: "chini-brownie",
      description: "Base de brownie, dulce de leche, crema y merengue.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Brownie", "Dulce de leche", "Merengue"],
      imageUrl: "assets/img/Tortas/Torta Brownie/Torta-Brownie-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta Brownie/Torta-Brownie-Costado.webp",
      icon: ""
    },
    {
      title: "Tiramisú",
      slug: "tiramisu",
      description: "Base de vainillas humedecidas con almíbar de café y una crema de queso mascarpone.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Café", "Vainillas", "Mascarpone"],
      imageUrl: "assets/img/Tortas/Torta Tiramisú/Torta-Tiramisu-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta Tiramisú/Torta-Tiramisu-Costado.webp",
      icon: ""
    },
    {
      title: "Oreo Cheesecake",
      slug: "oreo-cheesecake",
      description: "Base de galletitas oreo, dulce de leche y una crema con crocante de galletitas oreo.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Oreo", "Dulce de leche", "Cheesecake"],
      imageUrl: "assets/img/Tortas/Torta oreo Cheese Cake/Torta-OreoCheesecake-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta oreo Cheese Cake/Torta-OreoCheesecake-Costado.webp",
      icon: ""
    },
    {
      title: "Dulce Otoño",
      slug: "dulce-otono",
      description: "Base de brownie, corazón de dulce de leche, mousse de chocolate, brillo de chocolate.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Brownie", "Mousse de chocolate", "Dulce de leche"],
      imageUrl: "assets/img/Tortas/Torta dulce otoño/Torta-DulceOtoño-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta dulce otoño/Torta-DulceOtoño-Costado.webp",
      icon: ""
    },
    {
      title: "Tres Chocolates",
      slug: "tres-chocolates",
      description: "Base de vainilla, corazón de dulce de leche, mousse de chocolate con leche, mousse de chocolate semiamargo y mousse de chocolate blanco.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Chocolate blanco", "Chocolate con leche", "Chocolate amargo"],
      imageUrl: "assets/img/Tortas/Tres chocolates/Torta-TresChocolates-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Tres chocolates/Torta-TresChocolates-Costado.webp",
      icon: ""
    },
    {
      title: "Mousse de Maracuyá",
      slug: "mousse-maracuya",
      description: "Base de vainilla, mousse de maracuyá, corazón de chocolate blanco.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Maracuyá", "Mousse", "Chocolate blanco"],
      imageUrl: "assets/img/Tortas/Torta Mousse Maracuya/Torta-MousseMaracuya-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta Mousse Maracuya/Torta-MousseMaracuya-Costado.webp",
      icon: ""
    },
    {
      title: "Mousse de Frutilla",
      slug: "mousse-frutilla",
      description: "Base de bizcochuelo de vainilla, almíbar de frutilla y mousse de frutilla.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Frutilla", "Mousse", "Bizcochuelo"],
      imageUrl: "assets/img/tortas/frutilla.webp",
      hoverImageUrl: "",
      icon: ""
    },
    {
      title: "Choco Naranja",
      slug: "choco-naranja",
      description: "Bizcochuelo húmedo de chocolate amargo con ganache intensa y un toque de naranja fresca. Una combinación clásica y elegante, con el equilibrio justo entre lo cítrico y lo dulce.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Chocolate", "Naranja", "Intensa"],
      imageUrl: "assets/img/Tortas/Torta Choco Naranja/Torta-ChocoNaranja-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta Choco Naranja/Torta-ChocoNaranja-Costado.webp",
      icon: ""
    },
    {
      title: "Matilda",
      slug: "matilda-argento",
      description: "Bizcochuelo de chocolate bien húmedo relleno de dulce de leche y chocolate, baño de chocolate.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Chocolate", "Dulce de leche", "Húmedo"],
      imageUrl: "assets/img/Tortas/Matilda/Torta-Matilda-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Matilda/Torta-Matilda-Costado.webp",
      icon: ""
    },
    {
      title: "Honor a Doña Petrona",
      slug: "honor-dona-petrona",
      description: "Bizcochuelo de vainilla humedecido con almíbar y un toque de coñac, crema chantilly con frutillas, dulce de leche y merenguitos.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Frutilla", "Crema chantilly", "Bizcochuelo"],
      imageUrl: "assets/img/Tortas/Torta Doña Petrona/Torta-DoñaPetrona-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta Doña Petrona/Torta-DoñaPetrona-Costado.webp",
      icon: ""
    },
    {
      title: "Mil Hojas",
      slug: "mil-hojas",
      description: "Capas de masa hojaldrada con relleno de dulce de leche.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Hojaldre", "Dulce de leche", "Clásico"],
      imageUrl: "assets/img/Tortas/Torta Rogel/Copia de Copia de Rogel.heif",
      hoverImageUrl: "",
      icon: ""
    },
    {
      title: "Sambayon",
      slug: "sambayon",
      description: "Base de bizcochuelo de chocolate, corazón de crema Bariloche con nueces tostadas y mousse de sambayon",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Sambayón", "Cremosa", "Clásico"],
      imageUrl: "assets/img/Tortas/Torta Sambayon/Torta-Sambayon-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta Sambayon/Torta-Sambayon-Costado.webp",
      icon: ""
    },
    {
      title: "Balcarce",
      slug: "balcarce",
      description: "Capas de bizcochuelo aireado se combinan con dulce de leche, crema chantilly, merengue crocante, coco rallado y trocitos de nuez. Una torta suave, dulce y equilibrada, perfecta para los que buscan tradición en cada bocado.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Sambayón", "Cremosa", "Clásico"],
      imageUrl: "assets/img/Tortas/Torta Balcarce/Torta-Balcarce-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta Balcarce/Torta-Balcarce-Costado.webp",
      icon: ""
    }
  ],
  tartas: [
    {
      title: "Stroisel de Manzana",
      slug: "stroisel-manzana",
      description: "Base de tarta de vainilla, rellena con compota de manzana y streusel.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Manzana", "Streusel", "Vainilla"],
      imageUrl: "assets/img/Tartas/Tarta de manzana/Tarta-Manza-Arriba.webp",
      hoverImageUrl: "assets/img/Tartas/Tarta de manzana/Tarta-Manza-Costado.webp",
      icon: ""
    },
    {
      title: "Tarta de Pistacho",
      slug: "tarta-pistacho",
      description: "Base de tarta de vainilla, crema de pistacho, frutillas frescas y arándanos.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Pistacho", "Frutilla", "Arándanos"],
      imageUrl: "assets/img/Tartas/Tarta frangipane pistacho/Tarta-Pistacho-Arriba.webp",
      hoverImageUrl: "assets/img/Tartas/Tarta frangipane pistacho/Tarta-Pistacho-Costado.webp",
      icon: ""
    },
    {
      title: "Tarta Tofi",
      slug: "tarta-tofi",
      description: "Una bomba dulce para fanáticos del caramelo. Base crocante, dulce de leche suave, ganache de chocolate con leche y un toque de sal que realza cada capa. Inspirada en el clásico bombón, esta tarta es puro placer en cada bocado.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Dulce de leche", "Chocolate con leche", "Tentadora"],
      imageUrl: "assets/img/Tartas/Tarta Tofi/Tarta-Tofi-Arriba.webp",
      hoverImageUrl: "assets/img/Tartas/Tarta Tofi/Tarta-Tofi-Costado.webp",
      icon: ""
    },
    {
      title: "Alice Orange Pie",
      slug: "alice-orange-pie",
      description: "Base de tarta de vainilla, crema de naranja fresca y naranjas confitadas.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Naranja", "Confitadas", "Vainilla"],
      imageUrl: "assets/img/Tartas/Tarta Naranja/Tarta-Naranja-Arriba.webp",
      hoverImageUrl: "assets/img/Tartas/Tarta Naranja/Tarta-Naranja-Costado.webp",
      icon: ""
    },
    // {
    //   title: "Tarta de Pera y Avellanas",
    //   slug: "tarta-pera-avellanas",
    //   description: "Base de tarta de chocolate, compota de peras y chocolate, streusel de avellanas.",
    //   price: "xxxx",
    //   price6a8: "xxx",
    //   price4a6: "xxx",
    //   tags: ["pera", "avellanas", "chocolate"],
    //   imageUrl: "assets/img/tartas/pera-avellanas.webp",
    //   hoverImageUrl: "",
    //   icon: ""
    // },
    {
      title: "Lemon Pie",
      slug: "lemon-pie",
      description: "Base de tarta de vainilla, rellena de crema de limón y merengue.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Limón", "Merengue", "Vainilla"],
      imageUrl: "assets/img/Tartas/Lemon Pie/Tarta-LemonPie-Arriba.webp",
      hoverImageUrl: "assets/img/Tartas/Lemon Pie/Tarta-LemonPie-Costado.webp",
      icon: ""
    },
    {
      title: "Tarta Frutilla",
      slug: "tarta-frutilla",
      description: "Base de tarta de vainilla, crema chantilly, frutillas frescas y gelatina de frutilla. Opción: a pedido con crema pastelera.",
      price: "xxxx",
      price6a8: "xxx",
      price4a6: "xxx",
      tags: ["Frutilla", "Chantilly", "Vainilla"],
      imageUrl: "assets/img/tartas/frutilla.webp",
      hoverImageUrl: "",
      icon: ""
    }
    // {
    //   title: "Tarta Choco/Naranja",
    //   slug: "tarta-choco-naranja",
    //   description: "Base de tarta de chocolate, mousse de chocolate, biscuit de vainilla y mousse de naranja.",
    //   price: "xxxx",
    //   price6a8: "xxx",
    //   price4a6: "xxx",
    //   tags: ["chocolate", "naranja", "biscuit"],
    //   imageUrl: "assets/img/Tartas/Tarta Naranja/Tarta-Naranja-Arriba.webp",
    //   hoverImageUrl: "assets/img/Tartas/Tarta Naranja/Tarta-Naranja-Costado.webp",
    //   icon: ""
    // }
  ],
 "sanguches-de-miga": [
  {
    title: "Sanguches de Miga",
    slug: "general",
    tabGroups: [
      {
        label: "Triples Clásicos",
        description: "Nuestros sabores más tradicionales y pedidos: simples, ricos y perfectos para todos los gustos.",
        price: {
                docena: "$9000",
                mediaDocena: "$4800",
                unidad: "$850"
        },
        sabores: [
          "Jamón cocido y queso",
          "Jamón cocido y tomate",
          "Jamón cocido y lechuga",
          "Jamón cocido y huevo",
          "Salame y queso",
          "Tomate y queso"
        ]
      },
      {
        label: "Triples Especiales",
        description: "Una combinación de sabores únicos que elevan el clásico sándwich a otro nivel.",
        price: {
                docena: "$9000",
                mediaDocena: "$4800",
                unidad: "$850"
        },
        sabores: [
          "Jamón crudo y queso (pan negro)",
          "Jamón cocido y ananá",
          "Jamón cocido y palmitos",
          "Jamón cocido y aceitunas verdes",
          "Jamón cocido y aceitunas negras",
          "Jamón cocido y roquefort",
          "Queso y atún",
          "Cantimpalo y queso",
          "Caprese (queso, tomate y albahaca)",
          "Primavera (queso, tomate, lechuga y huevo)",
          "Pollo y queso",
          "Berenjena y queso"
        ]
      },
      {
        label: "Triples Gourmet",
        description: "Elaborados con ingredientes seleccionados y combinaciones premium. Para los que buscan algo diferente.",
        price: {
                docena: "$9000",
                mediaDocena: "$4800",
                unidad: "$850"
        },
        sabores: [
          "Jamón crudo, rúcula y queso crema mediterráneo: jamón crudo, queso, tomates secos hidratados en aceite de oliva, ajo y albahaca.",
          "Salmón: salmón ahumado, queso crema y ciboulette.",
          "Crema de palta: salmón ahumado, rúcula y huevo.",
          "Pollo Crispi: pollo, queso cheddar, panceta crocante y verdeo.",
          "Caesar: pollo, queso, lechuga, queso de rallar y salsa caesar.",
          "Crema de palta: pollo, queso, panceta crocante y ciboulette.",
          "Vitel Toné: peceto, crema vitel toné y queso."
        ]
      }
    ],
    price: "$xxxx",
    imageUrl: "assets/img/Sandwich/sandwich1.webp",
    hoverImageUrl: "assets/img/Sandwich/sandwich2.webp",
    gallery: [
      "assets/img/Sandwich/sandwich1.webp",
      "assets/img/Sandwich/sandwich2.webp",
      "assets/img/Sandwich/sandwich3.webp"
    ],
    icon: ""
  }
],
alfajores: [
  {
    title: "Lunnettes",
    slug: "lunnettes",
    description: "Dulce de leche montado en forma de copete, cubierto con un intenso baño de chocolate semiamargo. Elegante y moderno.",
    price: "xxxx",
    price6a8: "xxx",
    price4a6: "xxx",
    tags: ["Dulce de leche", "Chocolate", "Moderno"],
    imageUrl: "assets/img/Alfajores/Lunnettes-Arriba.webp",
    hoverImageUrl: "assets/img/Alfajores/Lunnettes-Costado.webp",
    icon: ""
  },
  {
    title: "Maicena",
    slug: "maicena",
    description: "Dos tapas de maicena rellenas con abundante dulce de leche, rebozadas en coco rallado. Clásico de siempre.",
    price: "xxxx",
    price6a8: "$xxxx x6",
    price4a6: "xxx",
    tags: ["Maicena", "Coco", "Dulce de leche"],
    imageUrl: "assets/img/Alfajores/Maicena-Arriba.webp",
    hoverImageUrl: "assets/img/Alfajores/Maicena-Costado.webp",
    icon: ""
  },
  {
    title: "Clásicos",
    slug: "clasicos",
    description: "Alfajores rellenos de dulce de leche y bañados en chocolate semiamargo. La versión artesanal del infaltable argentino.",
    price: "xxxx",
    price6a8: "$xxxx x6",
    price4a6: "xxx",
    tags: ["Chocolate", "Dulce de leche", "Tradicional"],
    imageUrl: "assets/img/Alfajores/Clasicos-Arriba.webp",
    hoverImageUrl: "assets/img/Alfajores/Clasicos-Costado.webp",
    icon: ""
  },
  {
    title: "Nuez",
    slug: "nuez",
    description: "Tapas con nuez molida, relleno de dulce de leche y una cobertura ligera de glasé. Suave y elegante.",
    price: "xxxx",
    price6a8: "xxx",
    price4a6: "xxx",
    tags: ["Nuez", "Glasé", "Suave"],
    imageUrl: "assets/img/Alfajores/Nuez-Arriba.webp",
    hoverImageUrl: "assets/img/Alfajores/Nuez-Costado.webp",
    icon: ""
  },
  {
    title: "Membrillo",
    slug: "membrillo",
    description: "Dos suaves tapas rellenas de dulce de membrillo artesanal. Para los que aman lo tradicional.",
    price: "xxxx",
    price6a8: "xxx",
    price4a6: "xxx",
    tags: ["Membrillo", "Tradicional", "Artesanal"],
    imageUrl: "assets/img/Alfajores/Membrillo-Arriba.webp",
    hoverImageUrl: "assets/img/Alfajores/Membrillo-Costado.webp",
    icon: ""
  },
  {
    title: "Marplatense Baño Chocolate",
    slug: "marplatense-chocolate",
    description: "Alfajor estilo marplatense con doble capa de galletita rellena de dulce de leche y baño de chocolate.",
    price: "xxxx",
    price6a8: "xxx",
    price4a6: "xxx",
    tags: ["Marplatense", "Chocolate", "Galletita"],
    imageUrl: "assets/img/Alfajores/Marplatense-Chocolate-Arriba.webp",
    hoverImageUrl: "assets/img/Alfajores/Marplatense-Chocolate-Costado.webp",
    icon: ""
  },
  {
    title: "Marplatense Baño de Merengue",
    slug: "marplatense-merengue",
    description: "Versión marplatense con baño blanco de merengue. Textura suave, sabor delicado.",
    price: "xxxx",
    price6a8: "xxx",
    price4a6: "xxx",
    tags: ["Merengue", "Marplatense", "Dulce de leche"],
    imageUrl: "assets/img/Alfajores/Marplatense-Merengue-Arriba.webp",
    hoverImageUrl: "assets/img/Alfajores/Marplatense-Merengue-Costado.webp",
    icon: ""
  },
  {
    title: "Frutos Rojos",
    slug: "frutos-rojos",
    description: "Relleno de frutos rojos naturales entre tapas suaves. Una opción frutada y diferente.",
    price: "xxxx",
    price6a8: "xxx",
    price4a6: "xxx",
    tags: ["Frutos rojos", "Original", "Frutado"],
    imageUrl: "assets/img/Alfajores/FrutosRojos-Arriba.webp",
    hoverImageUrl: "assets/img/Alfajores/FrutosRojos-Costado.webp",
    icon: ""
  }
],
cookies : [
  {
    title: "Cookies",
    slug: "general",
    imageUrl:"",
    hoverImageUrl:"",
    price:"",
    icon:"",
    gallery:[
      "assets/img/Sandwich/sandwich1.webp",
      "assets/img/Sandwich/sandwich1.webp",
      "assets/img/Sandwich/sandwich1.webp"
    ],
    tabGroups: [
      {
        label: "Nuestros alfajores",
        description: "Conocé algunos de nuestros mejores gustos:",
        price: {
                docena: "$XXX",
                mediaDocena: "$XXX",
                unidad: "$XXX"
        },
        sabores: [
          "Red velvet",
          "Avena, chips de chocolate blanco, coco y nueces",
          "Chips de chocolate",
          "Manteca de maní y confites de chocolate",
        ]
      },
    ]
  }
],
boulangerie: [
  {
    title: "Boulangerie",
    slug: "general",
    price: "",
    imageUrl: "assets/img/Boulangerie/Boulangerie-General.webp",
    hoverImageUrl: "assets/img/Boulangerie/Boulangerie-General-Hover.webp",
    icon: "",
    gallery: [
      "assets/img/Boulangerie/Boulangerie-General.webp",
      "assets/img/Boulangerie/MediaLuna.webp",
      "assets/img/Boulangerie/Pan-Multicereal.webp"
    ],
    tabGroups: [
      {
        label: "Clásicos de Panadería",
        description: "Delicias frescas, artesanales y con todo el sabor tradicional de la panadería.",
        sabores: [
          "Medialunas",
          "Medialunas rellenas de jamón y queso",
          "Pan multicereal",
          "Chips",
          "Fosforitos de jamón y queso"
        ],
        price: {
          unidad: "$xxx",
          docena: "$xxx"
        }
      },
      {
        label: "Masas & Galletitas",
        description: "Opciones dulces ideales para acompañar el mate, el té o regalar.",
        sabores: [
          "Masas secas",
          "Masas finas",
          "Pepas de membrillo o batata",
          "Cookies red velvet",
          "Cookies chips de chocolate",
          "Cookies avena, coco, chips blancos y nuez",
          "Cookies manteca de maní y confites de colores"
        ],
        price: {
          bandeja: "$xxx"
        }
      },
      {
        label: "Budines",
        description: "Esponjosos, húmedos y con combinaciones únicas para todos los gustos.",
        sabores: [
          "Naranja",
          "Limón",
          "Choco-naranja",
          "Chips de chocolate y frutos secos",
          "Chocolate",
          "Vainilla y chocolate"
        ],
        price: {
          unidad: "$xxx"
        }
      },
      {
        label: "Otros dulces",
        description: "Delicias artesanales para sorprender en cada mesa.",
        sabores: [
          "Scones dulces",
          "Scones de queso",
          "Merengues rellenos de dulce de leche"
        ],
        price: {
          unidad: "$xxx",
          mediaDocena: "$xxx"
        }
      }
    ]
  }
],
cuadrados: [
  {
    title: "Cuadrados",
    slug: "general",
    imageUrl: "assets/img/Cuadrados/Cuadrados-General.webp",
    hoverImageUrl: "assets/img/Cuadrados/Cuadrados-General-Hover.webp",
    price: "",
    icon: "",
    gallery: [
      "assets/img/Cuadrados/Cuadrados-General.webp",
      "assets/img/Cuadrados/Cuadrado-Manzana.webp",
      "assets/img/Cuadrados/Cuadrado-Brownie.webp"
    ],
    tabGroups: [
      {
        label: "Sabores de cuadrados",
        description: "Nuestros cuadrados son ideales para una porción individual con todo el sabor artesanal de °Brix.",
        price: {
          unidad: "$xxx",
          bandeja: "$xxx"
        },
        sabores: [
          "Manzana",
          "Coco y dulce de leche",
          "Pasta frola de membrillo",
          "Pasta frola de batata",
          "Naranja",
          "Limón",
          "Ricota",
          "Stroisel de frutos rojos",
          "Brownies con nuez",
          "Brownies con chips de chocolate",
          "Carrot cake",
          "Matera"
        ]
      }
    ]
  }
]





};
