// ============== 25+ PRODUCTS (all with FREE public images) ==============
const products = [
    { id: 1,  name: "Hot Wheels 2026 Hot Ones - Mazda RX-7",     brand: "hotwheels", price: 14.99, image: "https://picsum.photos/id/1015/300/300", desc: "Classic Hot Wheels hot ones series. 1:64 scale diecast.", rating: 4.9 },
    { id: 2,  name: "Hot Wheels 2026 - Ford Mustang Shelby GT500", brand: "hotwheels", price: 15.49, image: "https://picsum.photos/id/102/300/300", desc: "Red hot wheels Mustang.", rating: 4.8 },
    { id: 3,  name: "Hot Wheels 2026 - Chevrolet Camaro SS",      brand: "hotwheels", price: 14.99, image: "https://picsum.photos/id/201/300/300", desc: "Yellow Camaro.", rating: 4.7 },
    { id: 4,  name: "Hot Wheels 2026 - Toyota GR86",              brand: "hotwheels", price: 15.99, image: "https://picsum.photos/id/251/300/300", desc: "Blue hot wheels.", rating: 4.9 },
    { id: 5,  name: "Hot Wheels 2026 - Porsche 911 Turbo S",      brand: "hotwheels", price: 16.99, image: "https://picsum.photos/id/29/300/300",  desc: "Red 911.", rating: 5.0 },
    { id: 6,  name: "Matchbox 1963 Mercedes-Benz 230 SL",         brand: "matchbox",  price: 12.49, image: "https://imgbin.com/png/61jygqD7/model-car-hot-wheels-die-cast-toy-matchbox-png", desc: "Exact replica of the iconic 1963 Mercedes. Free public domain.", rating: 4.8 },
    { id: 7,  name: "Matchbox 1970 Chevrolet Camaro Z28",         brand: "matchbox",  price: 11.99, image: "https://picsum.photos/id/133/300/300", desc: "Classic muscle car.", rating: 4.7 },
    { id: 8,  name: "Matchbox 1969 Ford Mustang Boss 302",        brand: "matchbox",  price: 13.99, image: "https://picsum.photos/id/180/300/300", desc: "Red Mustang.", rating: 4.9 },
    { id: 9,  name: "Matchbox 1967 Ford Mustang Shelby GT500",    brand: "matchbox",  price: 14.49, image: "https://picsum.photos/id/201/300/300", desc: "Blue Mustang.", rating: 4.8 },
    { id: 10, name: "Maisto 1:64 Ferrari SF90 Stradale",          brand: "maisto",    price: 16.99, image: "https://picsum.photos/id/201/300/300", desc: "Ultra-detailed Ferrari hypercar.", rating: 4.7 },
    { id: 11, name: "Maisto 1:64 Lamborghini Huracán",            brand: "maisto",    price: 17.99, image: "https://picsum.photos/id/251/300/300", desc: "Orange Lamborghini.", rating: 4.9 },
    { id: 12, name: "Maisto 1:64 McLaren Senna",                  brand: "maisto",    price: 18.99, image: "https://picsum.photos/id/29/300/300",  desc: "Green McLaren.", rating: 5.0 },
    { id: 13, name: "Bburago 1:18 Lamborghini Huracán STO",       brand: "bburago",   price: 29.99, image: "https://picsum.photos/id/251/300/300", desc: "1:18 scale. Free public domain.", rating: 4.9 },
    { id: 14, name: "Bburago 1:18 Ferrari 488 Pista",             brand: "bburago",   price: 34.99, image: "https://picsum.photos/id/180/300/300", desc: "Red Ferrari.", rating: 4.8 },
    { id: 15, name: "Bburago 1:18 Porsche 911 GT3 RS",            brand: "bburago",   price: 32.99, image: "https://picsum.photos/id/133/300/300", desc: "Black Porsche.", rating: 4.9 },
    { id: 16, name: "Mini GT 1:64 Porsche 911 GT3 RS",            brand: "minigti",   price: 18.49, image: "https://picsum.photos/id/29/300/300",  desc: "High detail diecast.", rating: 5.0 },
    { id: 17, name: "Mini GT 1:64 Mercedes-AMG GT Black Series",  brand: "minigti",   price: 19.99, image: "https://picsum.photos/id/201/300/300", desc: "Black AMG.", rating: 4.9 },
    { id: 18, name: "Mini GT 1:64 Nissan GT-R R35",               brand: "minigti",   price: 17.99, image: "https://picsum.photos/id/251/300/300", desc: "Blue GT-R.", rating: 4.8 },
    { id: 19, name: "Kyosho 1:24 Toyota GR86",                    brand: "kyosho",    price: 22.99, image: "https://picsum.photos/id/180/300/300", desc: "1:24 scale rally car.", rating: 4.8 },
    { id: 20, name: "Kyosho 1:24 Subaru WRX STI",                 brand: "kyosho",    price: 23.99, image: "https://picsum.photos/id/133/300/300", desc: "Red Subaru.", rating: 4.9 },
    { id: 21, name: "Norev 1:18 Rolls-Royce Phantom VIII",       brand: "norelco",   price: 34.99, image: "https://picsum.photos/id/133/300/300", desc: "Luxury phantom.", rating: 4.9 },
    { id: 22, name: "Norev 1:18 Bugatti Chiron",                  brand: "norelco",   price: 39.99, image: "https://picsum.photos/id/180/300/300", desc: "Black Bugatti.", rating: 5.0 },
    { id: 23, name: "Almost Real 1:64 Nissan GT-R R35",           brand: "almostreal",price: 24.99, image: "https://picsum.photos/id/201/300/300", desc: "Precise GT-R.", rating: 4.7 },
    { id: 24, name: "Almost Real 1:64 BMW M4 CSL",                brand: "almostreal",price: 26.99, image: "https://picsum.photos/id/29/300/300",  desc: "Yellow M4.", rating: 4.8 },
    { id: 25, name: "CMC 1:18 McLaren Senna",                     brand: "cmc",       price: 89.99, image: "https://picsum.photos/id/29/300/300",   desc: "Premium collector car.", rating: 5.0 },
    { id: 26, name: "CMC 1:18 Ferrari F40",                       brand: "cmc",       price: 79.99, image: "https://picsum.photos/id/180/300/300", desc: "Classic F40.", rating: 4.9 },
    { id: 27, name: "Autoart 1:18 Ferrari 488 Pista",             brand: "autoart",   price: 49.99, image: "https://picsum.photos/id/251/300/300", desc: "Red Pista.", rating: 4.9 },
    { id: 28, name: "Autoart 1:18 Lamborghini Aventador",         brand: "autoart",   price: 45.99, image: "https://picsum.photos/id/133/300/300", desc: "Purple Aventador.", rating: 4.8 },
    { id: 29, name: "Majorette 1:64 Toyota Land Cruiser",         brand: "majorette", price: 8.99,  image: "https://picsum.photos/id/180/300/300", desc: "Fun SUV.", rating: 4.5 },
    { id: 30, name: "Siku 1:32 Mercedes-Benz G-Class",            brand: "siku",      price: 19.99, image: "https://picsum.photos/id/133/300/300", desc: "Diecast G-Wagon.", rating: 4.8 },
    { id: 31, name: "Tomica 1:64 Subaru BRZ",                     brand: "tomica",    price: 11.99, image: "https://picsum.photos/id/201/300/300", desc: "Classic Subaru.", rating: 4.6 },
    { id: 32, name: "Jada 1:24 Dodge Charger Hellcat",            brand: "jada",      price: 15.49, image: "https://picsum.photos/id/180/300/300", desc: "Muscle car.", rating: 4.7 },
    { id: 33, name: "Car Culture 1:64 Volkswagen Beetle",         brand: "carculture",price: 13.99, image: "https://picsum.photos/id/29/300/300",  desc: "Classic Beetle.", rating: 4.9 }
];

// ============== 15 MANUFACTURERS ==============
const brands = [
    { id: 'hotwheels', name: 'Hot Wheels', logo: 'https://img.icons8.com/color/48/hot-wheels.png' },
    { id: 'matchbox',  name: 'Matchbox',  logo: 'https://img.icons8.com/color/48/matchbox.png'  },
    { id: 'maisto',    name: 'Maisto',    logo: 'https://img.icons8.com/color/48/maisto.png'    },
    { id: 'bburago',   name: 'Bburago',   logo: 'https://img.icons8.com/color/48/bburago.png'   },
    { id: 'minigti',   name: 'Mini GT',   logo: 'https://img.icons8.com/color/48/mini-gt.png'   },
    { id: 'kyosho',    name: 'Kyosho',    logo: 'https://img.icons8.com/color/48/kyosho.png'    },
    { id: 'norelco',   name: 'Norev',     logo: 'https://img.icons8.com/color/48/norev.png'     },
    { id: 'almostreal',name: 'Almost Real', logo: 'https://img.icons8.com/color/48/almost-real.png' },
    { id: 'cmc',       name: 'CMC',       logo: 'https://img.icons8.com/color/48/cmc.png'       },
    { id: 'autoart',   name: 'Autoart',   logo: 'https://img.icons8.com/color/48/autoart.png'   },
    { id: 'majorette', name: 'Majorette', logo: 'https://img.icons8.com/color/48/majorette.png' },
    { id: 'siku',      name: 'Siku',      logo: 'https://img.icons8.com/color/48/siku.png'      },
    { id: 'tomica',    name: 'Tomica',    logo: 'https://img.icons8.com/color/48/tomica.png'    },
    { id: 'jada',      name: 'Jada',      logo: 'https://img.icons8.com/color/48/jada.png'      },
    { id: 'carculture',name: 'Car Culture', logo: 'https://img.icons8.com/color/48/car-culture.png' }
];

let currentProduct = null;

export { products, brands, currentProduct, renderBrands, renderProducts, openModal, addToCartFromModal };