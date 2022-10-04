const pizzas = [
    {
        id: 1,
        nombre: "Muzzarella",
        ingredientes: ["Salsa de tomate", "Queso Muzzarella", "Aceitunas"],
        precio: 1200,
    },
    {
        id: 2,
        nombre: "Hawaiana",
        ingredientes: ["Salsa de tomate", "Queso Muzzarella", "Anana", "Jamon"],
        precio: 1500,
    },
    {
        id: 3,
        nombre: "Especial",
        ingredientes: ["Salsa de tomate", "Queso Muzzarella", "Jamon", "Morron", "Aceitunas"],
        precio: 1300,
    },
    {
        id: 4,
        nombre: "Cuatro quesos",
        ingredientes: ["Queso Muzzarella", "Queso Parmesano", "Queso Roquefort", "Queso Fontina"],
        precio: 700,
    },
    {
        id: 5,
        nombre: "Napolitana",
        ingredientes: ["Salsa de tomate", "Queso Muzzarella", "Aceituna", "Rodajas De Tomate"],
        precio: 1000,
    },
    {
        id: 6,
        nombre: "Pepperoni",
        ingredientes: ["Salsa de tomate", "Queso Muzzarella", "Pepperoni"],
        precio: 1100,
    }
]

// a ) Las pizzas Con id impar 

const idImpar = pizzas.filter ((pizza)=> pizza.id % 2 != 0) 

console.log ("Las pizzas con id impar son")
for (pizza of idImpar) {
    console.log (pizza.nombre)
}

// b ) ¿Hay pizzas a menos de $600?

const pizzasMenor600 = pizzas.some ((e)=> e.precio < 600);
console.log (pizzasMenor600)

// c ) Nombre de las pizzas + precios

const NombreMasPrecio = pizzas.map ((piza)=> {
    return{
        nombre: piza.nombre,
        precio: piza.precio,
    }
})
console.log (NombreMasPrecio)

// d ) Todos los ingredientes de cada pizza

const IngredientesPizzas = pizzas.map ((piza)=> {
    return{
        nombre: piza.nombre,
        ingredientes: piza.ingredientes
    }
})
pizzas.forEach ((piza)=> {
    console.log ("Las pizzas " + piza.nombre + ":")
    piza.ingredientes.forEach ((ingrediente)=> {
        console.log ("- " + ingrediente)
    })
})