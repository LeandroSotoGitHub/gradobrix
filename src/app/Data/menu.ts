export interface Producto {
  title: string;
  slug: string;
  description?: string;
  price: string;
  imageUrl: string;
  hoverImageUrl: string;
  icon: string;
  tags?: string[];
  priceGrande?: string;
  priceChico?: string;
  gallery?: string[];
  tabGroups?: any
}

export const MENU_DATA: Record<string, Producto[]> = {
tortas: [
  {
    title: "Ascensión",
    slug: "ascension",
    description: "Base húmeda de chocolate sin harina, rellena de crema de dulce de leche. Un clásico de nuestra pastelería.Nació en casa: la creó mi mamá pensando en mi hermano y en mí, que somos celíacos. En una época en la que no había muchas opciones, esta torta fue nuestro refugio. Con el tiempo se volvió la favorita de todos. No es empalagosa y, si la probás helada, descubrís otra forma de enamorarte de ella.",
    price: "30.000",
    priceGrande: "38.000 (8 a 12 porciones)",
    priceChico: "30.000 (6 a 8 porciones)",
    tags: ["Sin harina", "Dulce de leche", "Chocolate"],
    imageUrl: "assets/img/Tortas/Torta Asensión/Torta-Asesion-Arriba.webp",
    hoverImageUrl: "assets/img/Tortas/Torta Asensión/Torta-Asesion-Costado.webp",
    icon: ""
  },
  {
    title: "New York Cheesecake",
    slug: "new-york-cheesecake",
    description: "Base de galletitas de vainilla, crema de queso horneada y compota casera de frutos del bosque. Nuestra versión clásica: cremosa, equilibrada y con el contraste justo entre dulzura y acidez.",
    price: "38.000",
    priceGrande: "49.000 (8 a 12 porciones)",
    priceChico: "38.000 (6 a 8 porciones)",
    tags: ["Cheesecake", "Frutos rojos", "Galletitas"],
    imageUrl: "assets/img/Tortas/Torta New York CheeseCake/Torta-Cheesecake-Arriba.webp",
    hoverImageUrl: "assets/img/Tortas/Torta New York CheeseCake/Torta-Cheesecake-Costado.webp",
    icon: ""
  },
  {
    title: "Chini-Brownie",
    slug: "chini-brownie",
    description: "Base de brownie húmedo, dulce de leche, crema suave y merengue suizo. Una torta que marcó tendencia y llegó para quedarse. Las texturas y sabores se combinan para ofrecer un postre inolvidable.",
    price: "30.000",
    priceGrande: "35.000 (8 a 12 porciones)",
    priceChico: "30.000 (6 a 8 porciones)",
    tags: ["Brownie", "Dulce de leche", "Merengue"],
    imageUrl: "assets/img/Tortas/Torta Brownie/Torta-Brownie-Arriba.webp",
    hoverImageUrl: "assets/img/Tortas/Torta Brownie/Torta-Brownie-Costado.webp",
    icon: ""
  },
  {
    title: "Tiramisú",
    slug: "tiramisu",
    description: "Base de vainillas humedecidas con almíbar de café y una crema de queso mascarpone.",
    price: "27.000",
    priceGrande: "38.000 (8 a 12 porciones)",
    priceChico: "27.000 (6 a 8 porciones)",
    tags: ["Café", "Vainillas", "Mascarpone"],
    imageUrl: "assets/img/Tortas/Torta Tiramisú/Torta-Tiramisu-Arriba.webp",
    hoverImageUrl: "assets/img/Tortas/Torta Tiramisú/Torta-Tiramisu-Costado.webp",
    icon: ""
  },
  {
    title: "Oreo Cheesecake",
    slug: "oreo-cheesecake",
    description: "Base de galletitas Oreo, dulce de leche y mousse de crema americana. Una versión moderna del clásico. Chicos y grandes la eligen. La mousse suaviza lo dulce y realza todo su sabor",
    price: "45.000",
    priceGrande: "48.000 (8 a 12 porciones)",
    priceChico: "45.000 (6 a 8 porciones)",
    tags: ["Oreo", "Dulce de leche", "Cheesecake"],
    imageUrl: "assets/img/Tortas/Torta oreo Cheese Cake/Torta-OreoCheesecake-Arriba.webp",
    hoverImageUrl: "assets/img/Tortas/Torta oreo Cheese Cake/Torta-OreoCheesecake-Costado.webp",
    icon: ""
  },
  {
    title: "Dulce Otoño",
    slug: "dulce-otono",
    description: "Base de brownie, corazón de dulce de leche y mousse de chocolate semiamargo. Una torta que hago desde mis comienzos. A pesar de su nombre, es rica todo el año. Las texturas se funden en cada bocado y siempre vuelve a enamorar.",
    price: "38.000",
    priceGrande: "42.000 (8 a 12 porciones)",
    priceChico: "38.000 (6 a 8 porciones)",
    tags: ["Brownie", "Mousse de chocolate", "Dulce de leche"],
    imageUrl: "assets/img/Tortas/Torta dulce otoño/Torta-DulceOtoño-Arriba.webp",
    hoverImageUrl: "assets/img/Tortas/Torta dulce otoño/Torta-DulceOtoño-Costado.webp",
    icon: ""
  },
  {
    title: "Tres Chocolates",
    slug: "tres-chocolates",
    description: "Bizcochuelo de vainilla, corazón de dulce de leche y mousse de chocolate blanco, con leche y semiamargo. Una combinación irresistible para quienes aman el chocolate. Equilibrio perfecto entre intensidad y suavidad.",
    price: "30.000",
    priceGrande: "38.000 (8 a 12 porciones)",
    priceChico: "30.000 (6 a 8 porciones)",
    tags: ["Chocolate blanco", "Chocolate con leche", "Chocolate amargo"],
    imageUrl: "assets/img/Tortas/Tres chocolates/Torta-TresChocolates-Arriba.webp",
    hoverImageUrl: "assets/img/Tortas/Tres chocolates/Torta-TresChocolates-Costado.webp",
    icon: ""
  },
  {
    title: "Mousse de Maracuyá",
    slug: "mousse-maracuya",
    description: "Bizcochuelo de vainilla, interior de chocolate blanco y mousse aireada de maracuyá. Fresca, vibrante y elegante. Un glaseado brillante corona esta torta inolvidable.",
    price: "25.000",
    priceGrande: "32.000 (8 a 12 porciones)",
    priceChico: "25.000 (6 a 8 porciones)",
    tags: ["Maracuyá", "Mousse", "Chocolate blanco"],
    imageUrl: "assets/img/Tortas/Torta Mousse Maracuya/Torta-MousseMaracuya-Arriba.webp",
    hoverImageUrl: "assets/img/Tortas/Torta Mousse Maracuya/Torta-MousseMaracuya-Costado.webp",
    icon: ""
  },
  {
    title: "Mousse de Frutilla",
    slug: "mousse-frutilla",
    description: "Base de bizcochuelo de vainilla, almíbar de frutilla y mousse de frutilla.",
    price: "40.000",
    priceGrande: "45.000 (8 a 12 porciones)",
    priceChico: "40.000 (6 a 8 porciones)",
    tags: ["Frutilla", "Mousse", "Bizcochuelo"],
    imageUrl: "assets/img/tortas/frutilla.webp",
    hoverImageUrl: "",
    icon: ""
  },
  {
    title: "Choco Naranja",
    slug: "choco-naranja",
    description: "Biscuit de chocolate, mousse de naranja y mousse de chocolate semiamargo. Una combinación sofisticada y fresca. Decorada con naranjas confitadas, que realzan su sabor y elegancia.",
    price: "25.000",
    priceGrande: "30.000 (8 a 12 porciones)",
    priceChico: "25.000 (6 a 8 porciones)",
    tags: ["Chocolate", "Naranja", "Intensa"],
    imageUrl: "assets/img/Tortas/Torta Choco Naranja/Torta-ChocoNaranja-Arriba.webp",
    hoverImageUrl: "assets/img/Tortas/Torta Choco Naranja/Torta-ChocoNaranja-Costado.webp",
    icon: ""
  },
  {
    title: "Matilda",
    slug: "matilda-argento",
    description: "Bizcochuelo húmedo de chocolate, doble capa de dulce de leche y ganache de chocolate semiamargo. Intensa y golosa. Te transporta a la infancia, como si estuvieras dentro de una escena de película. Perfecta para festejos.",
    price: "35.000",
    priceGrande: "42.000 (12 a 18 porciones)",
    priceChico: "35.000 (8 a 10 porciones)",
    tags: ["Chocolate", "Dulce de leche", "Húmedo"],
    imageUrl: "assets/img/Tortas/Matilda/Torta-Matilda-Arriba.webp",
    hoverImageUrl: "assets/img/Tortas/Matilda/Torta-Matilda-Costado.webp",
    icon: ""
  },
  {
    title: "Honor a Doña Petrona",
    slug: "honor-dona-petrona",
    description: "Bizcochuelo de vainilla húmedo, relleno de dulce de leche con merengues crocantes, crema y frutillas a la reina. A pedido, se puede reemplazar por duraznos en almíbar. Esta torta nació como un tributo a la maestra de la cocina argentina. Evoca tradición, pastelería casera y recetas que marcaron generaciones.",
    price: "35.000",
    priceGrande: "42.000 (12 a 18 porciones)",
    priceChico: "35.000 (8 a 10 porciones)",
    tags: ["Frutilla", "Crema chantilly", "Bizcochuelo"],
    imageUrl: "assets/img/Tortas/Torta Doña Petrona/Torta-DoñaPetrona-Arriba.webp",
    hoverImageUrl: "assets/img/Tortas/Torta Doña Petrona/Torta-DoñaPetrona-Costado.webp",
    icon: ""
  },
  {
    title: "Mil Hojas",
    slug: "mil-hojas",
    description: "Capas de masa fina y hojaldrada, intercaladas con dulce de leche y cubiertas con merengue. Un clásico argentino, ideal para quienes aman lo dulce sin vueltas.",
    price: "25.000",
    priceGrande: "38.000 (8 a 12 porciones)",
    priceChico: "25.000 (6 a 8 porciones)",
    tags: ["Hojaldre", "Dulce de leche", "Clásico"],
    imageUrl: "assets/img/Tortas/Torta Rogel/Torta-Rogel-Arriba.webp",
    hoverImageUrl: "assets/img/Tortas/Torta Rogel/Torta-Rogel-Arriba.webp",
    icon: ""
  },
  {
    title: "Sambayon",
    slug: "sambayon",
    description: "Bizcochuelo de chocolate, corazón de crema Bariloche (ganache y dulce de leche), nueces tostadas y mousse de sambayón. Clásica, intensa y para quienes disfrutan los sabores tradicionales.",
    price: "30.000",
    priceGrande: "38.000 (8 a 12 porciones)",
    priceChico: "30.000 (6 a 8 porciones)",
    tags: ["Sambayón", "Cremosa", "Clásico"],
    imageUrl: "assets/img/Tortas/Torta Sambayon/Torta-Sambayon-Arriba.webp",
    hoverImageUrl: "assets/img/Tortas/Torta Sambayon/Torta-Sambayon-Costado.webp",
    icon: ""
  },
  {
    title: "Balcarce",
    slug: "balcarce",
    description: "Pionono, dulce de leche, merengue crocante, nueces y crema chantilly. Hacemos la versión clásica, decorada con coco rallado y azúcar impalpable quemada. Un ícono de la pastelería argentina, nacido en la década del 50 y declarado patrimonio cultural.",
    price: "xxxx",
    priceGrande: "xxx (8 a 12 porciones)",
    priceChico: "xxx (6 a 8 porciones)",
    tags: ["Sambayón", "Cremosa", "Clásico"],
    imageUrl: "assets/img/Tortas/Torta Balcarce/Torta-Balcarce-Arriba.webp",
    hoverImageUrl: "assets/img/Tortas/Torta Balcarce/Torta-Balcarce-Costado.webp",
    icon: ""
  },
  {
    title: "Chocotorta",
    slug: "chocotorta",
    description: "Galletitas chocolinas humedecidas en chocolatada o café (a elección), con relleno de queso crema y dulce de leche. Versión XL a partir de 2 kg. Festejo asegurado. Consultános por su valor.",
    price: "38.000",
    priceGrande: "42.000 (8 a 12 porciones)",
    priceChico: "38.000 (6 a 8 porciones)",
    tags: ["Dulce de leche", "Galletitas", "Clásica"],
    imageUrl: "assets/img/Tortas/Chocotorta/Choco Torta .webp",
    hoverImageUrl: "assets/img/Tortas/Chocotorta/Choco Torta .webp",
    icon: ""
  },
],
tartas: [
  {
    title: "Stroisel de Manzana",
    slug: "stroisel-manzana",
    description: "Base de tarta de vainilla, compota de manzana casera y crumble crocante. Es de esas tartas que siempre te hacen quedar bien. Ideal para un postre con crema batida, una bocha de helado o sola a la hora del té. Un clásico que no falla.",
    price: "18.000",
    priceGrande: "24.000 (6 a 8 porciones)",
    priceChico: "18.000 (4 a 6 porciones)",
    tags: ["Manzana", "Streusel", "Vainilla"],
    imageUrl: "assets/img/Tartas/Tarta de manzana/Tarta-Manza-Arriba.webp",
    hoverImageUrl: "assets/img/Tartas/Tarta de manzana/Tarta-Manza-Costado.webp",
    icon: ""
  },
  {
    title: "Tarta de Pistacho",
    slug: "tarta-pistacho",
    description: "Base de masa sableé crocante, frangipane de pistacho suave y aromática, y compota de frutos rojos. Oh là là... ¡Qué elegancia la de Francia! Esta tarta es pura inspiración de la pastelería francesa. El pistacho aporta una textura única y la compota de frutos rojos ese toque de acidez y frescura que la equilibra. A pedido puede llevar maracuyá o frutillas frescas.",
    price: "22.000",
    priceGrande: "27.000 (6 a 8 porciones)",
    priceChico: "22.000 (4 a 6 porciones)",
    tags: ["Pistacho", "Frutilla", "Arándanos"],
    imageUrl: "assets/img/Tartas/Tarta frangipane pistacho/Tarta-Pistacho-Arriba.webp",
    hoverImageUrl: "assets/img/Tartas/Tarta frangipane pistacho/Tarta-Pistacho-Costado.webp",
    icon: ""
  },
  {
    title: "Tarta Tofi",
    slug: "tarta-tofi",
    description: "Base sableé de vainilla, dulce de leche y ganache de chocolate semiamargo. Cada bocado es como comerse un bombón. Si sos goloso, esta es tu tarta.",
    price: "18.000",
    priceGrande: "24.000 (6 a 8 porciones)",
    priceChico: "18.000 (4 a 6 porciones)",
    tags: ["Dulce de leche", "Chocolate con leche", "Tentadora"],
    imageUrl: "assets/img/Tartas/Tarta Tofi/Tarta-Tofi-Arriba.webp",
    hoverImageUrl: "assets/img/Tartas/Tarta Tofi/Tarta-Tofi-Costado.webp",
    icon: ""
  },
  {
    title: "Alice Orange Pie",
    slug: "alice-orange-pie",
    description: "Base de vainilla, crema fresca de naranja y naranjas confitadas. ¡Súper fresca! El toque de las naranjas confitadas lo es todo. Simple, elegante y con ese perfume que enamora.",
    price: "18.000",
    priceGrande: "22.000 (6 a 8 porciones)",
    priceChico: "18.000 (4 a 6 porciones)",
    tags: ["Naranja", "Confitadas", "Vainilla"],
    imageUrl: "assets/img/Tartas/Tarta Naranja/Tarta-Naranja-Arriba.webp",
    hoverImageUrl: "assets/img/Tartas/Tarta Naranja/Tarta-Naranja-Costado.webp",
    icon: ""
  },
  {
    title: "Lemon Pie",
    slug: "lemon-pie",
    description: "Base de tarta de vainilla, crema de limón y merengue. Acidez, frescura y el mejor merengue. Lo hacemos con cariño, cuidando que el equilibrio entre dulce y ácido sea perfecto.",
    price: "14.000",
    priceGrande: "20.000 (6 a 8 porciones)",
    priceChico: "14.000 (4 a 6 porciones)",
    tags: ["Limón", "Merengue", "Vainilla"],
    imageUrl: "assets/img/Tartas/Lemon Pie/Tarta-LemonPie-Arriba.webp",
    hoverImageUrl: "assets/img/Tartas/Lemon Pie/Tarta-LemonPie-Costado.webp",
    icon: ""
  },
  {
    title: "Tarta Frutilla",
    slug: "tarta-frutilla",
    description: "Base de tarta de vainilla, crema chantilly, frutillas frescas y gelatina de frutilla. Una de esas que nunca, nunca fallan. Solo la hacemos con fruta de estación, bien fresca. Opción: se puede hacer con crema pastelera a pedido. Hecha solo en temporada.",
    price: "28.000",
    priceGrande: "32.000 (6 a 8 porciones)",
    priceChico: "28.000 (4 a 6 porciones)",
    tags: ["Frutilla", "Chantilly", "Vainilla"],
    imageUrl: "assets/img/Tartas/Tarta de frutilla/Copia de tarta frutilla.webp",
    hoverImageUrl: "assets/img/Tartas/Tarta de frutilla/Copia de tarta frutilla.webp",
    icon: ""
  }
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
                cuatroDocenas:"$100.000",
                dosDocenas:"$50.000",
                docena: "$25.000",
                mediaDocena: "$12.500",
                unidad: "$2.500"
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
                cuatroDocenas:"$140.000",
                dosDocenas:"$70.000",
                docena: "$35.000",
                mediaDocena: "$17.500",
                unidad: "$3.500"
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
        description: "Elaborados con ingredientes seleccionados y combinaciones premium. Para los que buscan algo diferente. (Todos vienen en pan negro)",
        // price: {
        //         cuatroDocenas:"140000",
        //         dosDocenas:"70000",
        //         docena: "35000",
        //         mediaDocena: "17500",
        //         unidad: "3500"
        // },
        sabores: [
          "Jamón crudo, rúcula y queso crema mediterráneo: jamón crudo, queso, tomates secos hidratados en aceite de oliva, ajo y albahaca. Precio: $2500u",
          "Salmón: salmón ahumado, queso crema y ciboulette. Precio: $8000u",
          "Queso y atún. Precio: $5000u",
          "Pollo Crispi: pollo, queso cheddar, panceta crocante y verdeo. Precio: $4500u",
          "Rúcula, Tomates secos, Base de queso. Precio: $4500u",
          "Caesar: pollo, queso, lechuga, queso de rallar y salsa caesar. Precio: $5000u",
          "Vitel Toné: peceto, crema vitel toné y queso. Precio: $5000u"
        ]
      }
    ],
    price: "xxxx",
    imageUrl: "assets/img/Sandwich/sandwich1.webp",
    hoverImageUrl: "assets/img/Sandwich/sandwich2.webp",
    gallery: [
      "assets/img/Sandwich/sandwichmega.jpg",
      "assets/img/Sandwich/Portada-SandwichDeMiga.webp",
      "assets/img/Sandwich/sandwichjamonyqueso.webp"
    ],
    icon: ""
  }
],
alfajores: [
  {
    title: "Alfajores",
    slug: "general",
    imageUrl: "assets/img/Alfajor/Portada-Alfajores.webp",
    hoverImageUrl: "assets/img/Alfajor/Portada-Alfajores.webp",
    price:"",
    gallery: [
      "assets/img/Alfajor/Portada-Alfajores.webp",
      "assets/img/Alfajor/maicena.webp",
      "assets/img/Alfajor/manteca.webp",
      "assets/img/Alfajor/marplablanco.webp",
      "assets/img/Alfajor/box.webp",
      "assets/img/Alfajor/marplanegro.webp",
      "assets/img/Alfajor/nuez.webp"
    ],
    icon: "",
    tabGroups: [
      {
        label: "Nuestros alfajores",
        description: "Variedad artesanal, con rellenos abundantes y coberturas clásicas y modernas.",
        price: {
          Precio: "Consultar por whatsapp"
        },
        sabores: [
          "Lunnettes: Dulce de leche montado con baño de chocolate semiamargo",
          "Maicena: Tapas de maicena, dulce de leche y coco rallado",
          "Clásicos: Dulce de leche con cobertura de chocolate semiamargo",
          "Nuez: Tapas con nuez molida, glasé y relleno de dulce de leche",
          "Membrillo: Tapas suaves con dulce de membrillo artesanal",
          "Marplatense Chocolate: Doble galletita con dulce de leche y baño de chocolate",
          "Marplatense Merengue: Versión con baño blanco de merengue",
          "Frutos Rojos: Relleno de frutos rojos naturales"
        ]
      }
    ]
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
      "assets/img/Cookies/choco.webp",
      "assets/img/Cookies/avena.webp",
      "assets/img/Cookies/mani.webp",
      "assets/img/Cookies/pistacho.webp",
      "assets/img/Cookies/velvet.webp"
    ],
    tabGroups: [
      {
        label: "Nuestras galletitas",
        description: "Conocé algunos de nuestros mejores gustos:",
        price: {
                Precio: "Consultar por whatsapp",
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
      "assets/img/boulangerie.jpg",
      "assets/img/Boulangerie/mediaslunas.webp",
      "assets/img/Boulangerie/scones.webp",
      "assets/img/Boulangerie/accsad.webp",
      "assets/img/Boulangerie/budines.webp",
      "assets/img/Boulangerie/masassecas.webp",
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
          Precio: "Consultános por WhatsApp",
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
          Precio: "Consultános por WhatsApp",
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
          unidad: "xxx"
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
          unidad: "xxx",
          mediaDocena: "xxx"
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
      "assets/img/Cuadraditos/Cuadraditos-portada.webp",
      "assets/img/Cuadraditos/Cuadraditos1.webp",
      "assets/img/Cuadraditos/cuadraditos2.webp"
    ],
    tabGroups: [
      {
        label: "Sabores de cuadrados",
        description: "Nuestros cuadrados son ideales para una porción individual con todo el sabor artesanal de °Brix.",
        // price: {
        //   unidad: "xxx",
        //   bandeja: "xxx"
        // },
        sabores: [
          "Manzana. Precio: $5.000",
          "Coco y dulce de leche. Precio: $4.900",
          "Pasta frola de membrillo. Precio: $3.000",
          "Pasta frola de batata. Precio: $3.000",
          "Naranja. Precio: $2.000",
          "Limón. Precio: $2.000",
          "Ricota. Precio: $3.500",
          "Stroisel de frutos rojos. Precio: $4.500",
          "Brownies con nuez y sin nuez. Precio: $3.500 & $3.200",
          "Carrot cake. Precio: $3.500",
          "Matera. Precio: $2.000"
        ]
      }
    ]
  }
]
};
