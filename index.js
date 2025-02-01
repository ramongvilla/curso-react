/***
 * Funciones en JavaScript
 *
 * reutilizar la logica, es el trabajode funciones
 * retornar valores,
 * string
 * numero
 * array
 * objeto
 * retorna otra funcion ->
 *  programacion funcional (se usa mucho en react para comopnentes)
 *
 * una funcion retorna otra funcion
 * se pueden mandar llamar n veces
 */

// ejecuta codigo
function soyUnaFunction() {
  console.log("soy Una Function");
}
// retorna codigo
function soyUnaFunction2() {
  return "hola desde la funcion";
}

const message = soyUnaFunction2();

// console.log(message);
console.log(soyUnaFunction2());

function hello() {
  return function () {
    return "estoy dentro de una funcion de JS";
  };
}

console.log(hello()());

/***
 * Parametros en Funciones
 *
 * una parametro
 * multiples parametros
 * explicar cuando se omiten parametros, la funcion puede
 * seguir funcionando com parametros por defecto
 *
 */

function soyOtraFunction(message) {
  return "Mensaje Recibido: " + message;
}

console.log(soyOtraFunction("Hello"));
console.log(soyOtraFunction("Buen dia"));
console.log(soyOtraFunction("Estamos aprendiendo JS"));

function suma(a, b) {
  if (!b) {
    b = 0;
  }
  return a + b;
}
function suma2(a = 0, b = 0) {
  return a + b;
}

console.log(suma2(5, 8));

/**
 * Objetos de Javascript
 * explicar la clave valor de los objetos [key,value]
 * todos los valores de un objetose les conoce como propiedades
 * explicar que un objeto puede tener funciones
 * mostrar la manera de acceder a los objetos
 * user.name
 * user['name']
 *
 * cuando una propiedad ejecuta una funcion se le conoce como metodo
 */

const coffeeShop = {
  name: "JavaScript Café",
  address: {
    street: "Code Avenue",
    number: 42,
    city: "Techville",
    country: "JSland",
  },
  schedule: {
    opening: "07:00 AM",
    closing: "10:00 PM",
  },
  owner: {
    name: "Ana",
    age: 35,
    experienceYears: 10,
  },
  employees: [
    { name: "Carlos", position: "Barista", experienceYears: 3 },
    { name: "Laura", position: "Cashier", experienceYears: 2 },
    { name: "Miguel", position: "Chef", experienceYears: 5 },
  ],
  menu: [
    { name: "Espresso Coffee", price: 2.5, available: true },
    { name: "Cappuccino", price: 3.5, available: true },
    { name: "Green Tea", price: 2.0, available: false },
    { name: "Croissant", price: 2.2, available: true },
  ],
  showMenu: function () {
    console.log("Coffee shop menu:");
    this.menu.forEach((item) => {
      console.log(
        `${item.name} - $${item.price} ${
          item.available ? "(Available)" : "(Out of stock)"
        }`
      );
    });
  },
  addEmployee: function (name, position, experienceYears) {
    this.employees.push({ name, position, experienceYears });
    console.log(`Employee ${name} added as ${position}.`);
  },
  updateAvailability: function (productName, status) {
    const product = this.menu.find((item) => item.name === productName);
    if (product) {
      product.available = status;
      console.log(
        `The product "${productName}" is now ${
          status ? "available" : "out of stock"
        }.`
      );
    } else {
      console.log("Product not found in the menu.");
    }
  },
};

// Example usage:
coffeeShop.showMenu();
//   coffeeShop.addEmployee("Sofia", "Waitress", 1);
//   coffeeShop.updateAvailability("Green Tea", true);
//   console.log(coffeeShop);

/**
 * Abrebiacion de Objetos, explicar como se asigna
 * una constante como propiedad a un objeto
 */

const name = "Laptop";
const price = 49;

const product = {
  amount: 5,
  name,
  price,
};

console.log(product);

/***
 * Manipulacion del DOM
 *
 * Explicar que javascript puede alterar el contenido de HTML
 * borrar el H1 creado al principio
 *
 * explicar la referencia de document
 *
 * explicar que en esto esta basado react, no lo usaremos siempre
 * pero es necesario comprenderlo
 */

console.log(document.title);

// crear un elelento de html, explicar los autocompletados
const title = document.createElement("h1");
// explicar la referencia con el html
title.innerText = "Modificando el DOM desde JS";
console.log(title);

// agregfar el titulo al DOM

// document.body.append(title);

// agregar un button

const button = document.createElement("button");
button.innerText = "click me";

// explicar un event handler y los escuchas
// explicar los multiples eventos de un escucha
button.addEventListener("click", function () {
  // puedo llamar otras partes desde aqui
  console.log("click me desde un escucha");
  alert("Acabas de hacer click");
});

// document.body.append(button);

/**
 * Desestructuracion de objetos
 * explicar que de todos los elementos puedo acceder a algunos
 */

const coffe = {
  temperature: "25° C",
  size: "small",
};

// function printCoffe({ name }) {
function printCoffe(coffe) {
  // otra manera de desestructurar
  const { temperature, size } = coffe;
  //   return "<h1> La temperatuda del cafe es de " + coffe.temperature + "";
  return "<h1> La temperatuda del cafe es de " + size + "";
}

// document.body.innerHTML = printCoffe(coffe);

/**
 * Funcines anonimas
 * explicar que so y como funcionan las funciones anomimas
 * y por que no nesesariamente nesesitasn un nombre
 * explicar que es util cuando trabajamos con eventos
 */

console.log(
  (function () {
    return "funcin anonima";
  })()
);

const button3 = document.createElement("button");
button3.innerHTML = "Otro button";

button3.addEventListener("click", function () {
  alert("clicked");
});

document.body.append(button3);

/**
 * Funciones Flecha
 *
 * Explicar funciones flecha
 *
 * explicar la diferencia entre funciones normales y funcinoes flecha
 * explicando el alcance de las variables y el scope
 */

const sumar = () => {};

/***
 *
 */

// const showText = () => {
//   return "soy una arrow function";
// };

const showText = () => "soy un return directo";
const showNumber = () => 44;
const showArray = () => [4, 4];
// explicar como se retorna un objeto
const showObject = () => ({ age: 100 });
console.log(showObject());

// funciones flecha condicionales que retornen un valor
// explicar en que momento termina de ejecutar al funcion
const isLogged = false;

const fn = () => {
  //   if (isLogged) {
  //     return "Bienvenido";
  //   } else {
  //     return "no puede continuar";
  //   }
  if (isLogged) {
    return "Bienvenido";
  }
  return "no puede continuar";
};

console.log(fn());

/**
 * Array Methods
 *
 * Explicar los metodos de array
 *
 */

const cars = ["car1", "car2", "car3"];

cars.forEach((car, index) => {
  console.log(car, index);
  //   console.log(index);
});

// explicar que esto lo usa mucho react para obtener los datos HTML
const newCars = cars.map((car) => {
  return "<p>" + car + "<p>";
});

// ejemplos de metodo find

const carFound = cars.find((car) => {
  car === "car4";
});

// ejemplo de metodo filter

console.log(newCars);

console.log(carFound);

/**
 * Concatenar arrays
 */

const names = ["ana", "maria", "karem"];
const names2 = ["Adrian", "Raul", "Mirna"];

console.log(names.concat(names2));

// spread ultimas versiones

console.log([...names, ...names2]);

// ejemplo para crear un objeto nuevo usando ...

/**
 * Codigo asyncrono
 */

const div = document.createElement('div')

const theusers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  const users = await response.json();

  users.forEach(user=>{
    const span = document.createElement('span');
    span.innerHTML = user.name
    div.append(span)
  })
  document.body.append(div)
//   const span = document.create;
  console.log(users);
};
theusers();
