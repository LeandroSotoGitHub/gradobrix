export interface Producto {
  title: string;
  slug: string;
  description: string;
  price: string;
  imageUrl: string;
  hoverImageUrl: string;
  icon: string;
}

export const MENU_DATA: Record<string, Producto[]> = {
  tortas: [
    {
      title: "Ascensión",
      slug: "ascension",
      description: "Base húmeda de chocolate sin harina rellena de crema de dulce de leche.",
      price: "xxxx",
      imageUrl: "assets/img/Tortas/Torta Asensión/Torta-Asesion-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta Asensión/Torta-Asesion-Costado.webp",
      icon: ""
    },
    {
      title: "New York Cheesecake",
      slug: "new-york-cheesecake",
      description: "Base de galletitas, crema de queso cocido, compota de frutos rojos y frutos rojos frescos.",
      price: "xxxx",
      imageUrl: "assets/img/Tortas/Torta New York CheeseCake/Torta-Cheesecake-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta New York CheeseCake/Torta-Cheesecake-Costado.webp",
      icon: ""
    },
    {
      title: "Chini-Brownie",
      slug: "chini-brownie",
      description: "Base de brownie, dulce de leche, crema y merengue.",
      price: "xxxx",
      imageUrl: "assets/img/Tortas/Torta Brownie/Torta-Brownie-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta Brownie/Torta-Brownie-Costado.webp",
      icon: ""
    },
    {
      title: "Tiramisú",
      slug: "tiramisu",
      description: "Base de vainillas humedecidas con almíbar de café y una crema de queso mascarpone.",
      price: "xxxx",
      imageUrl: "assets/img/Tortas/Torta Tiramisú/Torta-Tiramisu-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta Tiramisú/Torta-Tiramisu-Costado.webp",
      icon: ""
    },
    {
      title: "Flor del Alba",
      slug: "flor-del-alba",
      description: "Base de merengue de almendras y una crema de queso muy suave.",
      price: "xxxx",
      imageUrl: "assets/img/tortas/flor-del-alba.webp",
      hoverImageUrl: "",
      icon: ""
    },
    {
      title: "Oreo Cheesecake",
      slug: "oreo-cheesecake",
      description: "Base de galletitas oreo, dulce de leche y una crema con crocante de galletitas oreo.",
      price: "xxxx",
      imageUrl: "assets/img/Tortas/Torta oreo Cheese Cake/Torta-OreoCheesecake-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta oreo Cheese Cake/Torta-OreoCheesecake-Costado.webp",
      icon: ""
    },
    {
      title: "Dulce Otoño",
      slug: "dulce-otono",
      description: "Base de brownie, corazón de dulce de leche, mousse de chocolate, brillo de chocolate.",
      price: "xxxx",
      imageUrl: "assets/img/Tortas/Torta dulce otoño/Torta-DulceOtoño-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta dulce otoño/Torta-DulceOtoño-Costado.webp",
      icon: ""
    },
    {
      title: "Tres Chocolates",
      slug: "tres-chocolates",
      description: "Base de vainilla, corazón de dulce de leche, mousse de chocolate con leche, mousse de chocolate semiamargo y mousse de chocolate blanco.",
      price: "xxxx",
      imageUrl: "assets/img/Tortas/Tres chocolates/Torta-TresChocolates-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Tres chocolates/Torta-TresChocolates-Costado.webp",
      icon: ""
    },
    {
      title: "Mousse de Maracuyá",
      slug: "mousse-maracuya",
      description: "Base de vainilla, mousse de maracuyá, corazón de chocolate blanco.",
      price: "xxxx",
      imageUrl: "assets/img/Tortas/Torta Mousse Maracuya/Torta-MousseMaracuya-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta Mousse Maracuya/Torta-MousseMaracuya-Costado.webp",
      icon: ""
    },
    {
      title: "Mousse de Frutilla",
      slug: "mousse-frutilla",
      description: "Base de bizcochuelo de vainilla, almíbar de frutilla y mousse de frutilla.",
      price: "xxxx",
      imageUrl: "assets/img/tortas/frutilla.webp",
      hoverImageUrl: "",
      icon: ""
    },
    {
      title: "Matilda",
      slug: "matilda-argento",
      description: "Bizcochuelo de chocolate bien húmedo relleno de dulce de leche y chocolate, baño de chocolate.",
      price: "xxxx",
      imageUrl: "assets/img/Tortas/Matilda/Torta-Matilda-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Matilda/Torta-Matilda-Costado.webp",
      icon: ""
    },
    {
      title: "Honor a Doña Petrona",
      slug: "honor-dona-petrona",
      description: "Bizcochuelo de vainilla humedecido con almíbar y un toque de coñac, crema chantilly con frutillas, dulce de leche y merenguitos.",
      price: "xxxx",
      imageUrl: "assets/img/Tortas/Torta Doña Petrona/Torta-DoñaPetrona-Arriba.webp",
      hoverImageUrl: "assets/img/Tortas/Torta Doña Petrona/Torta-DoñaPetrona-Costado.webp",
      icon: ""
    },
    {
      title: "Mil Hojas",
      slug: "mil-hojas",
      description: "Capas de masa hojaldrada con relleno de dulce de leche.",
      price: "xxxx",
      imageUrl: "assets/img/Tortas/Torta Rogel/Copia de Copia de Rogel.heif",
      hoverImageUrl: "",
      icon: ""
    }
  ],  
  tartas: [
    {
      title: "Stroisel de Manzana",
      slug: "stroisel-manzana",
      description: "Base de tarta de vainilla, rellena con compota de manzana y streusel.",
      price: "xxxx",
      imageUrl: "assets/img/tartas/stroisel-manzana.webp",
      hoverImageUrl: "",
      icon: ""
    },
    {
      title: "Tarta de Pistacho",
      slug: "tarta-pistacho",
      description: "Base de tarta de vainilla, crema de pistacho, frutillas frescas y arándanos.",
      price: "xxxx",
      imageUrl: "assets/img/tartas/pistacho.webp",
      hoverImageUrl: "",
      icon: ""
    },
    {
      title: "Alice Orange Pie",
      slug: "alice-orange-pie",
      description: "Base de tarta de vainilla, crema de naranja fresca y naranjas confitadas.",
      price: "xxxx",
      imageUrl: "assets/img/tartas/orange-pie.webp",
      hoverImageUrl: "",
      icon: ""
    },
    {
      title: "Tarta de Pera y Avellanas",
      slug: "tarta-pera-avellanas",
      description: "Base de tarta de chocolate, compota de peras y chocolate, streusel de avellanas.",
      price: "xxxx",
      imageUrl: "assets/img/tartas/pera-avellanas.webp",
      hoverImageUrl: "",
      icon: ""
    },
    {
      title: "Capuchina",
      slug: "capuchina",
      description: "Base de tarta de chocolate, crema capuchina, crema chantilly y un toque de cacao y canela.",
      price: "xxxx",
      imageUrl: "assets/img/tartas/capuchina.webp",
      hoverImageUrl: "",
      icon: ""
    },
    {
      title: "Lemon Pie",
      slug: "lemon-pie",
      description: "Base de tarta de vainilla, rellena de crema de limón y merengue.",
      price: "xxxx",
      imageUrl: "assets/img/tartas/lemon-pie.webp",
      hoverImageUrl: "",
      icon: ""
    },
    {
      title: "Tarta Frutilla",
      slug: "tarta-frutilla",
      description: "Base de tarta de vainilla, crema chantilly, frutillas frescas y gelatina de frutilla. Opción: a pedido con crema pastelera.",
      price: "xxxx",
      imageUrl: "assets/img/tartas/frutilla.webp",
      hoverImageUrl: "",
      icon: ""
    },
    {
      title: "Tarta Choco/Naranja",
      slug: "tarta-choco-naranja",
      description: "Base de tarta de chocolate, mousse de chocolate, biscuit de vainilla y mousse de naranja.",
      price: "xxxx",
      imageUrl: "assets/img/tartas/choco-naranja.webp",
      hoverImageUrl: "",
      icon: ""
    }
  ]  
};
