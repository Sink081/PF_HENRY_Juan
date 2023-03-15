
const products = [
    // Los hijos de frutangz
    {              
    tradeId: "641134af11a91a8a9f49e3ac",
    name: "Banana",
    category: "Frutas",
    description: "Bananas del Ecuador",
    price: 400,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bananas.jpg",
  },
  {
    tradeId: "641134af11a91a8a9f49e3ac",
    name: "Mandarinas",
    category: "Frutas",
    description: "Mandarinas Dancing",
    price: 600,
    image:
      "https://www.lavanguardia.com/files/article_main_microformat/files/fp/uploads/2021/10/26/6177ce4b24bbf.r_d.3122-142-2353.jpeg",   
  },
  {
    tradeId: "641134af11a91a8a9f49e3ac",
    name: "Calabaza",
    category: "Verduras",
    description: "Calabazas medianas",
    price: 500,
    image:
      "https://www.antojoentucocina.com/wp-content/uploads/2020/09/calabazas-scaled.jpg",    
  },
  {
    tradeId: "641134af11a91a8a9f49e3ac",
    name: "Morron",
    category: "Verduras",
    description: "Morrones verdes, rojos o amarillos",
    price: 740,
    image:
      "https://www.recetas.com.bo/sites/default/files/2020-02/empanadas-de-jamon-y-queso-1012.jpg",    
  },
  {
    tradeId: "641134af11a91a8a9f49e3ac",
    name: "Carbon",
    category: "Varios",
    description: "Carbon en bolsa 4kg.",
    price: 350,
    image:
      "http://papelerabarchiesi.com.ar/store/1548-large_default/bolsa-p-carbon-de-papel-4-kg-c-u.jpg",    
  },
  // Denilo
  {
    tradeId: "641134af11a91a8a9f49e3ae",
    name: "Doble cuarto",
    category: "Hamburguesas",
    description:
      "Hamburguesa doble cuarto con cheddar, tomate, lechuga, jamon y queso.",
    price: 500,
    image:
      "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar",    
  },
  {
    tradeId: "641134af11a91a8a9f49e3ae",
    name: "Calabresa",
    category: "Pizzas",
    description: "Muzzarella y salamin",
    price: 1000,
    image:
      "https://tn.com.ar/resizer/XFTAWVNFjpzqUnsgs2qTXzzEAfk=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/QQO4WNFYZNDB7E4QHDS725TGNU.jpg",   
  },
  {
    tradeId: "641134af11a91a8a9f49e3ae",
    name: "Fugazzetas",
    category: "Pizzas",
    description: "Cebolla y muzarella",
    price: 900,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG/1200px-Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG",  
  },
  {
    tradeId: "641134af11a91a8a9f49e3ae",
    name: "Empanadas de jamon y queso",
    category: "Empanadas",
    description: "Empanadas de jamon y muzzarella",
    price: 140,
    image:
      "https://www.recetas.com.bo/sites/default/files/2020-02/empanadas-de-jamon-y-queso-1012.jpg",
  },
  {
    tradeId: "641134af11a91a8a9f49e3ae",
    name: "Hamburlomo",
    category: "Hamburguesas",
    description: "Hamburguesa con carne de lomo",
    price: 950,
    image:
      "https://biotrendies.com/wp-content/uploads/2015/06/manzana.jpg",
  },
  // La Pizza Nostra
  {
    tradeId: "641134b011a91a8a9f49e3b0",
    name: "Napolitana",
    category: "Pizzas",
    description: "Salsa de tomates, muzzarella, tomate, ajo, oregano, aceite de oliva.",
    price: 1900,
    image:
      "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar",
  },
  {
    tradeId: "641134b011a91a8a9f49e3b0",
    name: "Calabresas",
    category: "Pizzas",
    description: "Muzzarella y salamin",
    price: 1000,
    image:
      "https://tn.com.ar/resizer/XFTAWVNFjpzqUnsgs2qTXzzEAfk=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/QQO4WNFYZNDB7E4QHDS725TGNU.jpg",
  },
  {
    tradeId: "641134b011a91a8a9f49e3b0",
    name: "Fugazzeta",
    category: "Pizzas",
    description: "Cebolla y muzarella",
    price: 900,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG/1200px-Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG",
  },
  {
    tradeId: "641134b011a91a8a9f49e3b0",
    name: "Empanadas de cebolla y queso",
    category: "Empanadas",
    description: "Empanadas de cebolla y muzzarella",
    price: 140,
    image:
      "https://www.recetas.com.bo/sites/default/files/2020-02/empanadas-de-jamon-y-queso-1012.jpg",
  },
  {
    tradeId: "641134b011a91a8a9f49e3b0",
    name: "Empanadas de cebolla y queso",
    category: "Empanadas",
    description: "Empanadas de cebolla y queso",
    price: 140,
    image:
      "https://infoagro.com.ar/wp-content/uploads/2021/07/Empanadas-de-queso-cebolla-y-laurel.jpg",
  },
  // El pinar
  {
    tradeId: "641134b011a91a8a9f49e3b2",
    name: "Canelones de verdura a la bolognesa",
    category: "Pastas",
    description: "Canelones de verdura a la bolognesa.",
    price: 1900,
    image:
      "https://www.recetasnestle.com.co/sites/default/files/srh_recipes/20f03eefe5e1e7c2d13be780567a4773.jpg",
  },
  {
    tradeId: "641134b011a91a8a9f49e3b2",
    name: "Tarta de atún",
    category: "Tartas",
    description: "Atún, queso, cebolla, morrón, pimentón.",
    price: 2000,
    image:
      "https://img-global.cpcdn.com/recipes/480d48a2d409ba5c/400x400cq70/photo.jpg",
  },
  {
    tradeId: "641134b011a91a8a9f49e3b2",
    name: "Ñoquis a la Parissienne",
    category: "Pastas",
    description: "Ñoquis a la Parissienne",
    price: 1300,
    image:
      "https://recetas-rapidas.es/wp-content/uploads/2019/11/%C3%B1oquis-848x477.jpg",
  },
  {
    tradeId: "641134b011a91a8a9f49e3b2",
    name: "Albondigas con puré",
    category: "Carnes",
    description:
      "Carne de ternera, cebolla, morron, oregano, peregil, ajo, huevo, salsa de tomates, papa, leche, manteca, sal, pimienta.",
    price: 140,
    image:
      "https://www.recetas.com.bo/sites/default/files/2020-02/empanadas-de-jamon-y-queso-1012.jpg",
  },
  {
    tradeId: "641134b011a91a8a9f49e3b2",
    name: "Suprema a caballo con papas fritas",
    category: "Carnes",
    description:
      "Pollo, huevo, pan rallado, oregano, peregil, ajo, huevo, aceite, sal, papa, leche, manteca",
    price: 2100,
    image:
      "https://infoagro.com.ar/wp-content/uploads/2021/07/Empanadas-de-queso-cebolla-y-laurel.jpg",
  },
  // Pizzteros
  {
    tradeId: "641134b011a91a8a9f49e3b4",
    name: "Rucula",
    category: "Pizzas",
    description:
      "Salsa de tomates, muzzarella, ajo, oregano, jamón crudo, rúcula.",
    price: 1900,
    image:
      "https://cdn0.recetasgratis.net/es/posts/5/6/1/pizza_con_rucula_y_tomates_cherry_65165_orig.jpg",
  },
  {
    tradeId: "641134b011a91a8a9f49e3b4",
    name: "Especial de morrones",
    category: "Pizzas",
    description:
      "Muzzarella, salsa de tomates, jamón, morron colorado, oregano, peregil, ajo, sal y pimienta.",
    price: 2000,
    image:
      "https://tn.com.ar/resizer/XFTAWVNFjpzqUnsgs2qTXzzEAfk=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/QQO4WNFYZNDB7E4QHDS725TGNU.jpg",
  },
  {
    tradeId: "641134b011a91a8a9f49e3b4",
    name: "Fugazzeta",
    category: "Pizzas",
    description: "Cebolla y muzarella",
    price: 2400,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG/1200px-Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG",
  },
  {
    tradeId: "641134b011a91a8a9f49e3b4",
    name: "Especial de huevo",
    category: "Pizzas",
    description: "Muzzarella, salsa de tomates, huevo.",
    price: 2140,
    image:
      "https://razaitaliana.com/wp-content/uploads/2020/07/pizza-d-huevo.jpg",
  },
  {
    tradeId: "641134b011a91a8a9f49e3b4",
    name: "Empanadas de cebolla y queso",
    category: "Empanadas",
    description: "Empanadas de cebolla y queso",
    price: 140,
    image:
      "https://infoagro.com.ar/wp-content/uploads/2021/07/Empanadas-de-queso-cebolla-y-laurel.jpg",
  },
  // Farmacito
  {
    tradeId: "641134b111a91a8a9f49e3b6",
    name: "Adermicina",
    category: "Cremas",
    description:
      "Crema germicida, cicatrizante, regeneradora y revitalizadora de los tejidos.",
    price: 500,
    image:
      "http://farmaciazentner.com.ar/wp-content/uploads/2021/08/7796285287856-1.jpg",
  },
  {
    tradeId: "641134b111a91a8a9f49e3b6",
    name: "Voltarem",
    category: "Cremas",
    description:
      "Crema antinflamatoria con activo de Diclofenac sódico.",
    price: 500,
    image:
      "https://www.zonafarma.com.ar/wp-content/uploads/2021/10/40382409-01-BASEIMAGE-Midres.jpg",
  },
  {
    tradeId: "641134b111a91a8a9f49e3b6",
    name: "Diclofenac Sódico",
    category: "Comprimidos",
    description: "Diclofenac 50 mg. caja x 16 comprimidos",
    price: 500,
    image:
      "https://www.zonafarma.com.ar/wp-content/uploads/2021/10/40382409-01-BASEIMAGE-Midres.jpg",
  },
  {
    tradeId: "641134b111a91a8a9f49e3b6",
    name: "Lorazepam",
    category: "Comprimidos",
    description: "Lorazepam 1 mg. tira x 8 comprimidos",
    price: 900,
    image:
      "https://quefarmacia.com/wp-content/uploads/2018/05/IMG_1012-300x258.png",
  },
  {
    tradeId: "641134b111a91a8a9f49e3b6",
    name: "Ibuprofeno",
    category: "Jarabe",
    description: "Ibuprofeno 4% x 120 ml. sabor frutilla.",
    price: 1500,
    image:
      "https://images.rappi.com.ar/products/436892210298_igmfaxzgbbpm_585391217122_skywvqoveysm_97719_1.jpeg",
  },
  // La Muleta Renga
  {
    tradeId: "641134b111a91a8a9f49e3b8",
    name: "Faja lumbar",
    category: "Elementos de contención",
    description:
      "Faja lumbar con tutores metalicos para corrección de postura y rotección de columna lumbar ante esfuerzos",
    price: 3500,
    image:
      "https://www.lubeseguridad.com.ar/images/faja4.jpg",
  },
  {
    tradeId: "641134b111a91a8a9f49e3b8",
    name: "Muñequera",
    category: "Elementos de contención",
    description:
      "Muñequera para la limitación de movimientos en caso de lesiones.",
    price: 2900,
    image:
      "https://www.americansurgerysa.com/wp/wp-content/uploads/2020/03/9513-000-AS-SoporteYEstabilidad-Mu%C3%B1equera-Boomerang-Pulgar-02.jpg",
  },
  {
    tradeId: "641134b111a91a8a9f49e3b8",
    name: "Muletas",
    category: "Elementos de desplazamiento",
    description: "Muletas regulables en altura de 1,50 a 1,90 mts. con apoyo antideslizante y axilares ergonómicos",
    price: 4700,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_694376-MLA52557942063_112022-O.jpg",
  },
  {
    tradeId: "641134b111a91a8a9f49e3b8",
    name: "Silla de ruedas",
    category: "Elementos de desplazamiento",
    description: "Silla de ruedas ergonomica plegable con apoya pies, frenos, agarres antideslizantes y armadura para autodesplazamiento",
    price: 12000,
    image:
      "https://www.silfab.com.ar/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/3/s3011a_1.jpg",
  },
  {
    tradeId: "641134b111a91a8a9f49e3b8",
    name: "Venda elástica",
    category: "Varios",
    description: "Venda elástica de 15 cm x 2 mts. Confección de alta calidad.",
    price: 1500,
    image:
      "https://tienda.gelombardozzi.com.ar/wp-content/uploads/2018/06/VENDA-ELASTICA-2.jpg",
  },
  // Fregadito
  {
    tradeId: "641134b111a91a8a9f49e3ba",
    name: "Detergente",
    category: "Cocina",
    description: "Detergente Ala x 300cc.",
    price: 500,
    image:
      "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2790704_f.jpg",
  },
  {
    tradeId: "641134b111a91a8a9f49e3ba",
    name: "Esponja",
    category: "Cocina",
    description: "Esponja Scotch Brite Limpieza Pesada x 1u.",
    price: 300,
    image:
      "https://multimedia.3m.com/mws/media/1385972P/scotch-brite-heavy-duty-scrub-spong-pack.jpg",
  },
  {
    tradeId: "641134b111a91a8a9f49e3ba",
    name: "Echo",
    category: "Pisos",
    description: "Echo en el Balde 3 en 1 - Blem - x 5L",
    price: 500,
    image:
      "https://masbrillo.com.ar/wp-content/uploads/2022/02/echo-en-el-balde-5-litros1-aefa10334db057398315831643361918-640-0.jpg",
  },
  {
    tradeId: "641134b111a91a8a9f49e3ba",
    name: "Pinoluz",
    category: "Pisos",
    description: "Pinoluz x 4L",
    price: 1300,
    image:
      "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2750449_f.jpg",
  },
  {
    tradeId: "641134b111a91a8a9f49e3ba",
    name: "Mr. Musculo Baños",
    category: "Baño",
    description: "Limpiador para baños Mr. Musculo x 500 ml.",
    price: 1500,
    image: "https://bahiaoffice.com/images/prods/7790520012388.jpg",
  },
  // Tuqui-eres
  {
    tradeId: "641134b211a91a8a9f49e3bc",
    name: "Reloj de pared Tressa",
    category: "Living",
    description: "Reloj de pared Tressa.",
    price: 3600,
    image:
      "https://casatagger.com.ar/wp-content/uploads/2022/02/T-RP101-MD.jpg",
  },
  {
    tradeId: "641134b211a91a8a9f49e3bc",
    name: "Sommier y colchon Belmo Belsping",
    category: "Dormitorio",
    description: "Colchón y sommier de 2 plazas 190 x 130 cm, gomaespuma de alta densidad.",
    price: 101000,
    image:
      "https://simmonsarg.vteximg.com.br/arquivos/ids/155797-1000-1000/sommier-belspring2-2plazas-190-130.jpg?v=637147142836570000",
  },
  {
    tradeId: "641134b211a91a8a9f49e3bc",
    name: "Fuente de agua Deco",
    category: "Living",
    description: "Fuente de agua Deco - 220v.",
    price: 500,
    image:
      "https://abanicobazar.com/wp-content/uploads/2022/08/c029b443-dbad-4252-8ac6-2341d9b08828-PhotoRoom.png",
  },
  {
    tradeId: "641134b211a91a8a9f49e3bc",
    name: "Martillo ablanda carne",
    category: "Cocina",
    description: "Martillo de madera para ablandar la carne",
    price: 550,
    image:
      "https://abanicobazar.com/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-19-at-14.59.44-300x300.jpeg",
  },
  {
    tradeId: "641134b211a91a8a9f49e3bc",
    name: "Abrelatas con uña",
    category: "Baño",
    description: "Abrelatas con uña marca Chef Houseware.",
    price: 360,
    image: "https://abanicobazar.com/wp-content/uploads/2021/06/e0a93411-b678-4a84-b21e-7883094dbbf9-300x300.jpg",
  },
]

module.exports = {products}