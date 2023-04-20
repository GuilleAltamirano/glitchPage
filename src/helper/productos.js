import entradas from "../images/Secciones/entradas.png";
import gohan from "../images/Secciones/gohan.png";
import combos from "../images/Secciones/combos.png";

const productos = [
    {
        id: 1,
        img: [ combos ],
        categoria: 'sushi',
        name: 'Promo Variado 30 + 5 piezas con 2 alfajores artesanales marca "Andara Alfajores".',
        description: 'Combo Variado de 30 piezas con 5 piezas extras a eleccion del chef + 2 alfajores artesanales "Andara Alfajores"',
        precio: 2800,
    },
    {
        id: 2,
        img: [ combos ],
        categoria: 'sushi',
        name: 'Promo Salmon y Langostino 30 + 5 piezas con alfajores artesanales marca "Andara Alfajores".',
        description: 'Combo Salmon y Langostino de 30 piezas con 5 piezas extras a eleccion del chef + 2 alfajores artesanales marca "Andara Alfajores"',
        precio: 3000,
    },
    {
        id: 3,
        img: [ combos ],
        categoria: 'sushi',
        name: 'Promo Todo Salmon 30 + 5 piezas con 2 alfajores artesanales.',
        description: 'Combo Todo Salmon de 30 piezas con 5 piezas extras a eleccion del chef + 2 alfajores artesanales marca "Andara Alfajores".',
        precio: 3000,
    },
    {
        id: 4,
        img: [ combos ],
        categoria: 'sushi',
        name: 'Combo Variado.',
    },
    {
        id: 5,
        img: [ combos ],
        categoria: 'sushi',
        name: 'Combo Salmon y Langostino.',
    },
    {
        id: 6,
        img: [ combos ],
        categoria: 'sushi',
        name: 'Combo Todo Salmon.',
    },
    {
        id: 7,
        img: [ entradas ],
        categoria: 'entrada',
        name: 'Salmon Boom - 5 unidades.',
        description: 'Geishas de Salmon apanadas y fritas + Salsa agridulce',
        precio: 700,
    },
    {
        id: 8,
        img: [ entradas ],
        categoria: 'entrada',
        name: 'Empanaditas Chinas - 4 unidades.',
        description: 'Empanaditas fritas rellenas con carne + Salsa agridulce',
        precio: 600,
    },
    {
        id: 9,
        img: [ gohan ],
        categoria: 'gohan',
        name: 'Gohan Langostino.',
        description: 'Base de arroz, Palta, Queso, Langostino rebozados y Sesamo mixto.',
        precio: 1050,
    },
    {
        id: 10,
        img: [ gohan ],
        categoria: 'gohan',
        name: 'Gohan Salmon.',
        description: 'Base de arroz, Palta, Queso, Salmon fresco y Sesamo mixto.',
    },
    {
        id: 11,
        img: [ gohan ],
        categoria: 'gohan',
        name: 'Gohan Shurima.',
        description: 'Base de arroz, Palta, Queso, Kanikama, Tori salteado, Langostino y Sesamo mixto.',
        precio: 1000,
    },
    {
        id: 12,
        img: [ gohan ],
        categoria: 'gohan',
        name: 'Gohan Kanikama.',
        description: 'Base de arroz, Palta, Queso, Kanikama y Sesamo mixto.',
        precio: 900,
    },
    {
        id: 13,
        img: [ gohan ],
        categoria: 'gohan',
        name: '2 x Gohan Shurima + 2 alfajores artesanales marca "Andara Alfajores".',
        description: 'Dos Gohan Shurima acompañados con 2 alfajores artesanales marca "Andara Alfajores".',
        precio: 2200,
    },
];

//Promesa


export const getFetch = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        resolve(productos);
        reject(err => console.log(err));
        
    })
}, 3000);

