import { Menu } from "../types";

export const menu: Menu = {
    comida: {
        name: "Comidas",
        icon: "fa-solid fa-utensils",
        category: [
            {
                name: "Schop",
                products: []
            },
            {
                name: "Entradas",
                products: [
                    {
                        name: "Ostiones del norte a la parmesana",
                        description: "Ostiones nacionales cocinados en base a una salsa limonada, gratinados con queso parmesano.",
                        price: 11900
                    },
                    {
                        name: "Ceviche de Salmón",
                        description: "Pequeños trozos de salmón con cubitos de pimentón, palta. Condimentado con leche de tigre.",
                        price: 12900
                    },
                    {
                        name: "Tartar de Atún",
                        description: "Preparación en base a atún picado, marinado en salsa teriyaki, condimentado con zeste de naranja y limón, sobre una base de palta.",
                        price: 11900
                    },
                    {
                        name: "Camarones apanados",
                        description: "Camarones ecuatorianos marinados en salsa teriyaki, salsa de ostra y un toque de aceite de sésamo, rebosados al estilo inglesa con panko",
                        price: 12900
                    },
                    {
                        name: "Mix de Empanadas",
                        description: "Mini empanadas 2 Queso Jaiba, 2 de mechada, 2 Queso camarón, 2 de Queso.",
                        price: 12900
                    },
                    {
                        name: "Camarones al pil pil",
                        description: "Camarón cocinado en una confitura de ajo y ají cacho cabra.",
                        price: 11900
                    },
                    {
                        name: "Camarones al Ajillo",
                        description: "Camarones cocinados en una confitura de ajo.",
                        price: 11900
                    },
                    {
                        name: "Ceviche Mixto",
                        description: "Pequeños trozos de salmón, ostión y camarón con cubitos de pimentóny palta. Condimentado con leche de tigre.",
                        price: 14900
                    },
                ]
            },
            {
                name: "Recomendaciones Del Chef",
                products: [
                    {
                        name: "Pulpo con Ñoquis al Pesto",
                        description: "Tentáculos de pulpo con salsa agridulce.",
                        price: 18900
                    },
                    {
                        name: "Lomo Vetado con milcao y salsa estacionaria",
                        description: "Carne a la plancha acompañada de un pan a base de papa cruda, puré de papa y tocino, con salsa a base de frutos de la estación.",
                        price: 15900
                    },
                    {
                        name: "Risotto de Setas",
                        description: "",
                        price: 9900
                    },
                    {
                        name: "Lomo Liso con risotto al curry y cilantro",
                        description: "",
                        price: 16900
                    },
                    {
                        name: "Filete al ajillo con trigotto de champiñon",
                        description: "",
                        price: 17900
                    },
                ]
            },
            {
                name: "Principales",
                products: [
                    {
                        name: "Filete de Congrio Dorado con Guarnición A Elección",
                        description: "",
                        price: 13900
                    },
                    {
                        name: "Chupe de Jaiba con camarones",
                        description: "Guiso a base de carne de jaiba desmenuzada y camarones, gratinado con queso parmesano.",
                        price: 13900
                    },
                    {
                        name: "Salmón con Salsa a Elección y Papas al Romero",
                        description: "Salsas a elección: Salsa de Champiñones, Salsa de Camarones.",
                        price: 13900
                    },
                    {
                        name: "Atún con Quinoto",
                        description: "Atún apanado y sellado en sésamo.",
                        price: 13900
                    },
                    {
                        name: "Filete con Papas Bravas",
                        description: "",
                        price: 17900
                    },
                    {
                        name: "Lomo Liso con Guarnición a Elección",
                        description: "Lomo liso asado con guarnición a elección.",
                        price: 14900
                    },
                    {
                        name: "Lomo vetado con Guarnición a Elección",
                        description: "Carne asada con guarnición a elección.",
                        price: 14900
                    },
                    {
                        name: "Chupe de Jaiba",
                        description: "Guiso a base de carne de jaiba desmenuzada, gratinado con queso parmesano.",
                        price: 12900
                    },
                    {
                        name: "Menú niño ( Hasta 12 Años)",
                        description: "Filetitos de pollo, Nuggets o Salchichas con guarnición a elección. Incluye Postre (Copa de Helado)",
                        price: 9900
                    },
                ],
                subcategory: [
                    {
                        name: "Guarniciones Extras",
                        products: [
                            {
                                name: "Salteado de Vegetales",
                                description: "",
                                price: 3900
                            },
                            {
                                name: "A lo Pobre",
                                description: "",
                                price: 3900
                            },
                            {
                                name: "Pastelera de Choclo",
                                description: "",
                                price: 3900
                            },
                            {
                                name: "Papas al Romero",
                                description: "",
                                price: 3900
                            },
                            {
                                name: "Papas Bravas",
                                description: "",
                                price: 3900
                            },
                            {
                                name: "Cremoso de Mote",
                                description: "",
                                price: 3500
                            },
                            {
                                name: "Trigotto de Champiñon",
                                description: "",
                                price: 3900
                            },
                            {
                                name: "Quinoto",
                                description: "",
                                price: 3900
                            },
                        ]
                    },
                    {
                        name: "Guarniciones Incluidas",
                        products: [
                            {
                                name: "Arroz",
                                description: "",
                                price: 0
                            },
                            {
                                name: "Papas Fritas",
                                description: "",
                                price: 0
                            },
                            {
                                name: "Puré",
                                description: "",
                                price: 0
                            },
                            {
                                name: "Puré Picante",
                                description: "",
                                price: 0
                            },
                        ]
                    },
                ]
            },
            {
                name: "Pastas ( Elaboración Propia)",
                products: [
                    {
                        name: "Fettuccine con salsa de champiñones",
                        description: "Pasta fresca con salsa blanca de champiñones.",
                        price: 9900
                    },
                    {
                        name: "Sorrentinos de espinaca con Salsa Bechamel",
                        description: "Pasta rellena a base de queso crema con espinaca condimentada con pimienta en una salsa bechamel.",
                        price: 10900
                    },
                    {
                        name: "Sorrentinos de mechada con salsa de carne",
                        description: "Pasta rellena de carne desmechada y cebolla caramelizada en salsa de cocción de la carne.",
                        price: 11900
                    },
                    {
                        name: "Fettuccine a la Huancaina Con Pollo",
                        description: "Pasta fresca con trozos de pollo salteado con ají amarillo. (Picor Medio)",
                        price: 10900
                    },
                    {
                        name: "Fettuccine a la Huancaina Con Camarones",
                        description: "Pasta fresca con camarones salteados con salsa de ají amarillo. (Picor Medio)",
                        price: 11900
                    },
                    {
                        name: "Tortellini rellenos de salmón",
                        description: "Pasta rellena de salmón en salsa de camarones.",
                        price: 12900
                    },
                    {
                        name: "Fetuccine al Pesto",
                        description: "",
                        price: 9900
                    },
                ]
            },
            {
                name: "Ensaladas",
                products: [
                    {
                        name: "César Camarón",
                        description: "Ensalada a base de lechuga con salsa césar (mayonesa casera, alcaparras, mostaza dijón, aceto balsámico).",
                        price: 10900
                    },
                    {
                        name: "César Pollo",
                        description: "Ensalada a base de lechuga con salsa césar(mayonesa casera, alcaparras, mostaza dijón)",
                        price: 8900
                    },
                    {
                        name: "Ensalada Chilena",
                        description: "",
                        price: 5900
                    },
                    {
                        name: "Ensalada Mixta",
                        description: "",
                        price: 5900
                    },
                    {
                        name: "Tomate-Palta-Palmito",
                        description: "",
                        price: 6900
                    },
                    {
                        name: "Palta - palmito",
                        description: "",
                        price: 5900
                    },
                    {
                        name: "Lechuga- Palta -Palmito",
                        description: "",
                        price: 6900
                    },
                    {
                        name: "Tomate - Palta",
                        description: "",
                        price: 5900
                    },
                ]
            },
            {
                name: "Postres",
                products: [
                    {
                        name: "Pêche Melba",
                        description: "Base de frutos rojos y durazno, acompañado de helado sabor a elección y crema batida",
                        price: 4900
                    },
                    {
                        name: "Brownie con Helado",
                        description: "Bizcocho sabor chocolate semi amargo, acompañado con salsa de frutos rojos y helado a elección.",
                        price: 5900
                    },
                    {
                        name: "Copa de Helado",
                        description: "Copa de helado a elección: (2 Sabores)Chocolate Suizo,Frutilla, Pasas al Ron, Vainilla, Maracuyá, Dulce de Leche.Decorado con crema chantilly.",
                        price: 4900
                    },
                    {
                        name: "Café Helado",
                        description: "Bebida en base a leche saborizada con finas notas de café, acompañado con helado de vainilla y suave crema chantilly.",
                        price: 4900
                    },
                ]
            }
        ]
    },
    bebidas: {
        name: "Bebidas",
        icon: "fa-solid fa-glass-whiskey",
        category: [
            {
                name: "Bebidas Calientes (Dammann Frères)",
                products: [
                    {
                        name: "Té 4 Frutos Rojos",
                        description: "Una mezcla de tés negros con los deliciosos aromas de cereza, fresa, frambuesa y grosella roja.",
                        price: 2900
                    },
                    {
                        name: "Té Darjeeling",
                        description: "Té negro proveniente de la región de Darjeeling en India.",
                        price: 2900
                    },
                    {
                        name: "Té Verde Yunnan",
                        description: "Sus hojas de color verde oscuro producen un licor de color amarillo claro con mucho cuerpo, notas verdes y afrutadas y un largo final.",
                        price: 2900
                    },
                    {
                        name: "Té Verde Miss Dammann",
                        description: "Miss Dammann combina el té verde y el jengibre con los sabores afrutados y ácidos del limón y la maracuyá. Una mezcla fresca y viva.",
                        price: 2900
                    },
                    {
                        name: "Infusión de Rooibos",
                        description: "Procedente de Sudáfrica, consiste en una mezcla de aceites esenciales de lima, clementina y naranja sanguina, con aromas de kola, cáscara de naranja y flores de helianto.",
                        price: 2900
                    },
                    {
                        name: "Infusión de Verbena",
                        description: "La verbena, una planta perenne que se cosecha después de la floración, produce una taza con una fragancia dulce y ligeramente alimonada",
                        price: 2900
                    },
                    {
                        name: "Té",
                        description: "",
                        price: 2500
                    },
                    {
                        name: "Infusión Manzanilla",
                        description: "Infusión de Manzanilla con color amarillo brillante revela sabores dulces y afrutados con notas de piña.",
                        price: 2900
                    },
                ]
            },
            {
                name: "Cafetería",
                products: [
                    {
                        name: "Espresso",
                        description: "Café concentrado de aproximadamente 30ml",
                        price: 3000
                    },
                    {
                        name: "Espresso lungo",
                        description: "Es un café espresso con mayor cantidad de agua aprox 60ml",
                        price: 3200
                    },
                    {
                        name: "Espresso Doble",
                        description: "2 Shot de espresso aproximadamente 60ml en total.",
                        price: 3500
                    },
                    {
                        name: "Espresso macchiato",
                        description: "Espresso manchado con espuma de leche.",
                        price: 3500
                    },
                    {
                        name: "Americano",
                        description: "",
                        price: 3500
                    },
                    {
                        name: "Latte macchiato",
                        description: "Café espresso mas leche texturizada",
                        price: 3900
                    },
                    {
                        name: "Cortado",
                        description: "",
                        price: 3900
                    },
                    {
                        name: "Café Stick",
                        description: "",
                        price: 2000
                    },
                    {
                        name: "Capuccino",
                        description: "",
                        price: 3900
                    },
                    {
                        name: "Irlandes",
                        description: "Bebida caliente que combina café, whisky irlandés, azúcar y crema batida.",
                        price: 5900
                    },
                    {
                        name: "Affogato",
                        description: "",
                        price: 4900
                    },
                ]
            },
            {
                name: "Bebidas Frias",
                products: [
                    {
                        name: "Jugo Natural",
                        description: "Frambuesa, Pulpa de Piña, o Pulpa de Melón.",
                        price: 3900
                    },
                    {
                        name: "Agua Natural Sin Gas",
                        description: "Puyehue",
                        price: 2500
                    },
                    {
                        name: "Limonada Menta Jengibre",
                        description: "",
                        price: 4900
                    },
                    {
                        name: "Limonada",
                        description: "",
                        price: 4500
                    },
                ]
            },
            {
                name: "Bebidas Alcoholicas",
                products: [
                    {
                        name: "Copa Espumante",
                        description: "",
                        price: 4900
                    },
                    {
                        name: "Mistral 35",
                        description: "",
                        price: 4500
                    },
                    {
                        name: "Jhonnie Walker Red",
                        description: "",
                        price: 5500
                    },
                    {
                        name: "Alto del Carmen 35 (Roble del Sur)",
                        description: "",
                        price: 5500
                    },
                    {
                        name: "Jack Daniels N7",
                        description: "",
                        price: 8900
                    },
                    {
                        name: "Jhonnie Walker Black",
                        description: "",
                        price: 7900
                    },
                    {
                        name: "Chivas Regal 12",
                        description: "",
                        price: 9900
                    },
                    {
                        name: "Campari",
                        description: "",
                        price: 6900
                    },
                    {
                        name: "Havana 7 Años",
                        description: "",
                        price: 5500
                    },
                ]
            },
            {
                name: "Cervezas",
                products: [
                    {
                        name: "Austral Yagan",
                        description: "Dark Ale, Cerveza de color caoba, presenta aromas a café y chocolate bitter. En boca es cremosa, con recuerdos a moka y notas de cebada tostada.",
                        price: 4500
                    },
                    {
                        name: "Austral Calafate",
                        description: "Calafate Ale, de color ámbar oscuro y un aroma intenso propio del calafate, un fruto de color negro azulado de sabor dulce y con propiedades antioxidantes proveniente de la Patagonia",
                        price: 4500
                    },
                    {
                        name: "Kunstmann Alkoholfrei/Libre de alcohol",
                        description: "",
                        price: 3900
                    },
                    {
                        name: "Kunstmann Torobayo",
                        description: "Ale, icono de la cerveza craft, Torobayo es de color ámbar brillante y espuma blanca, con aromas frutales a durazno y notas a caramelo que permiten disfrutar su amargor balanceado.",
                        price: 4500
                    },
                    {
                        name: "Kunstmann Lager",
                        description: "Lager, de color dorado y aroma floral, posee sutiles notas dulces provenientes de sus maltas lo que la convierten en una lager sumamente refrescante.",
                        price: 4500
                    },
                    {
                        name: "Corona sin Alcohol",
                        description: "",
                        price: 3500
                    },
                    {
                        name: "Stella Artois",
                        description: "",
                        price: 3500
                    },
                    {
                        name: "Base Michelada o Chelada",
                        description: "",
                        price: 1500
                    },
                    {
                        name: "Kross Gold",
                        description: "",
                        price: 4500
                    },
                    {
                        name: "Heineken 0",
                        description: "",
                        price: 3500
                    },
                ]
            },
            {
                name: "Digestivos",
                products: [
                    {
                        name: "Baileys",
                        description: "",
                        price: 5900
                    },
                    {
                        name: "Manzanilla",
                        description: "",
                        price: 2900
                    },
                    {
                        name: "Menta",
                        description: "",
                        price: 2900
                    },
                    {
                        name: "Jägermeister",
                        description: "",
                        price: 4900
                    },
                ]
            },
            {
                name: "Mixologia",
                products: [
                    {
                        name: "Pisco Sour",
                        description: "",
                        price: 4900
                    },
                    {
                        name: "Amaretto Sour",
                        description: "",
                        price: 4900
                    },
                    {
                        name: "Sour Sabores",
                        description: "Mango o Maracuyá",
                        price: 6500
                    },
                    {
                        name: "Ramazzotti Sour",
                        description: "",
                        price: 5900
                    },
                    {
                        name: "Whisky Sour",
                        description: "",
                        price: 6900
                    },
                    {
                        name: "Vaina",
                        description: "",
                        price: 4900
                    },
                    {
                        name: "Tom Collins",
                        description: "",
                        price: 5900
                    },
                    {
                        name: "Tom Collins",
                        description: "",
                        price: 5900
                    },
                    {
                        name: "Chambord Spritz",
                        description: "",
                        price: 7900
                    },
                    {
                        name: "Ramazzotti Rosato",
                        description: "",
                        price: 6500
                    },
                    {
                        name: "Aperol Spritz",
                        description: "",
                        price: 6500
                    },
                    {
                        name: "Jhon Collins",
                        description: "",
                        price: 5500
                    },
                    {
                        name: "Mojito Clásico",
                        description: "",
                        price: 6500
                    },
                    {
                        name: "Mojito Jägermeister",
                        description: "",
                        price: 8500
                    },
                    {
                        name: "Gin Tonic",
                        description: "",
                        price: 6500
                    },
                    {
                        name: "Mojito Clásico s/n Alcohol",
                        description: "",
                        price: 5000
                    },
                    {
                        name: "Kir Royale",
                        description: "",
                        price: 4900
                    },
                    {
                        name: "Caipirinha",
                        description: "",
                        price: 4900
                    },
                    {
                        name: "Caipiroska",
                        description: "",
                        price: 4900
                    },
                    {
                        name: "Sour Catedral",
                        description: "",
                        price: 9900
                    },
                    {
                        name: "Fernet Manzanilla",
                        description: "",
                        price: 2900
                    },
                    {
                        name: "Fernet Branca",
                        description: "",
                        price: 4900
                    },
                    {
                        name: "Gin Tonic Sabores",
                        description: "",
                        price: 6500
                    },
                    {
                        name: "Negroni",
                        description: "",
                        price: 7900
                    },
                    {
                        name: "Vodka Sour",
                        description: "",
                        price: 5500
                    },
                    {
                        name: "Mojito Sabor",
                        description: "",
                        price: 7000
                    },
                    {
                        name: "Mojito Sabor sin alcohol",
                        description: "",
                        price: 6000
                    },
                    {
                        name: "Black Russian",
                        description: "",
                        price: 6900
                    },
                ]
            },
            {
                name: "Vinos",
                products: [],
                subcategory: [
                    {
                        name: "Blancos",
                        products: [
                            {
                                name: "Carmen (Reserva)",
                                description: "",
                                price: 7900
                            },
                            {
                                name: "Santa Rita",
                                description: "Late Harvest",
                                price: 9900
                            },
                            {
                                name: "Casas Patronales Chardonnay",
                                description: "",
                                price: 12900
                            },
                            {
                                name: "Toro de Piedra Sauvignon Blanc",
                                description: "",
                                price: 12900
                            },
                        ]
                    },
                    {
                        name: "Tintos",
                        products: [
                            {
                                name: "Casas Patronales Gran Reserva",
                                description: "Cabernet Sauvignon",
                                price: 19900
                            },
                            {
                                name: "Casa Vergara Gran Reserva",
                                description: "Cabernet Sauvignon Gran Reserva 2013",
                                price: 25900
                            },
                            {
                                name: "Miguel Torres Gran Reserva",
                                description: "Cabernet Sauvignon, Merlot.",
                                price: 20900
                            },
                            {
                                name: "Santa Ema Gran Reserva",
                                description: "Merlot o Cabernet Sauvignon",
                                price: 15900
                            },
                            {
                                name: "Toro De Piedra Gran Reserva",
                                description: "Cabernet Sauvignon o Carmenere",
                                price: 19900
                            },
                            {
                                name: "Copa Vino Tinto",
                                description: "",
                                price: 4900
                            },
                            {
                                name: "Descorche",
                                description: "",
                                price: 10900
                            },
                        ]
                    }
                ]
            },
        ]
    }
}