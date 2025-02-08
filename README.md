**BASES JAVASCRIPT LESSON 1**

---

## 1. Introducción
- JavaScript es el lenguaje base sobre el que se construye React, por lo que conocerlo es esencial para entender cómo funciona esta biblioteca.
- Antes de aprender React, es importante dominar ciertos conceptos clave de JavaScript que se usan constantemente en el desarrollo de aplicaciones con esta tecnología.

## 2. Fundamentos de JavaScript Necesarios

### 2.1. Variables y Tipos de Datos
- En JavaScript, existen tres maneras de declarar variables: `var`, `let` y `const`, cada una con su propio ámbito y reglas de uso.
- Es crucial comprender los distintos tipos de datos (`string`, `number`, `boolean`, `null`, `undefined`, `object`, `array`) ya que en React se trabaja con estados y props que manejan estos tipos de valores.
- Ejemplo:
  ```js
  let nombre = "Juan"; // Variable de tipo string
  const edad = 25; // Variable de tipo number
  let activo = true; // Variable de tipo boolean
  let usuario = { nombre: "Juan", edad: 25 }; // Objeto
  let lista = ["manzana", "pera", "uva"]; // Array
  ```

### 2.2. Funciones
- Las funciones permiten encapsular lógica reutilizable y son fundamentales en React para crear componentes funcionales.
- Existen diferentes formas de declarar funciones:

#### 2.2.1. Funciones Declarativas
- Se definen con la palabra clave `function` y pueden ser llamadas antes de su declaración gracias al hoisting.
- Ejemplo:
  ```js
  function saludar(nombre) {
    return `Hola, ${nombre}!`;
  }
  console.log(saludar("Juan"));
  ```

#### 2.2.2. Funciones Expresadas
- Se almacenan en una variable y no pueden ser llamadas antes de su declaración.
- Ejemplo:
  ```js
  const despedir = function(nombre) {
    return `Adiós, ${nombre}!`;
  };
  console.log(despedir("Juan"));
  ```

#### 2.2.3. Funciones de Flecha
- Introducidas en ES6, tienen una sintaxis más corta y manejan `this` de manera diferente.
- Ejemplo:
  ```js
  const sumar = (a, b) => a + b;
  console.log(sumar(5, 3));
  ```
- También se pueden escribir con un cuerpo de bloque si hay más de una línea de código:
  ```js
  const multiplicar = (a, b) => {
    let resultado = a * b;
    return resultado;
  };
  console.log(multiplicar(4, 2));
  ```

### 2.3. Manipulación de Arrays y Objetos
- En React, se usa con frecuencia el uso de arrays y objetos para gestionar datos, especialmente en el estado y las props.
- Métodos de arrays más utilizados:

#### `map()`
- Se utiliza para transformar cada elemento de un array en un nuevo valor, creando un nuevo array sin modificar el original.
- Ejemplo 1:
  ```js
  const numeros = [1, 2, 3, 4, 5];
  const cuadrados = numeros.map(n => n * n);
  console.log(cuadrados); // [1, 4, 9, 16, 25]
  ```
- Ejemplo 2:
  ```js
  const nombres = ["Ana", "Luis", "Carlos"];
  const saludos = nombres.map(nombre => `Hola, ${nombre}!`);
  console.log(saludos);
  ```

#### `filter()`
- Se usa para crear un nuevo array con los elementos que cumplen una condición específica.
- Ejemplo 1:
  ```js
  const edades = [18, 22, 15, 30, 25];
  const mayoresDeEdad = edades.filter(edad => edad >= 18);
  console.log(mayoresDeEdad); // [18, 22, 30, 25]
  ```
- Ejemplo 2:
  ```js
  const palabras = ["manzana", "pera", "uva", "banana"];
  const palabrasLargas = palabras.filter(palabra => palabra.length > 4);
  console.log(palabrasLargas);
  ```

#### `forEach()`
- Se usa para ejecutar una función en cada elemento de un array sin modificarlo ni retornar un nuevo array.
- Ejemplo 1:
  ```js
  const nombres = ["Ana", "Luis", "Carlos"];
  nombres.forEach(nombre => console.log(`Hola, ${nombre}!`));
  ```
- Ejemplo 2:
  ```js
  const numeros = [1, 2, 3, 4, 5];
  numeros.forEach(num => console.log(num * 2));
  ```

### 2.4. Programación Asíncrona
- La programación asíncrona es fundamental para manejar datos provenientes de API en React.
- `async/await` facilita la escritura de código asíncrono más legible en comparación con el uso tradicional de `then` y `catch`.
- Ejemplo de uso de `fetch` para obtener datos de una API:
  ```js
  async function obtenerDatos() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const datos = await respuesta.json();
    console.log(datos);
  }
  obtenerDatos();
  ```

### 2.5. Manipulación del DOM
- Aunque React maneja el DOM virtual, conocer cómo funciona la manipulación del DOM en JavaScript permite entender mejor su funcionamiento y cómo React optimiza los cambios en la UI.
- Ejemplo básico de manipulación del DOM:
  ```js
  document.querySelector("#boton").addEventListener("click", () => {
    alert("Botón clickeado!");
  });
  ```
- Creación y adición de elementos dinámicamente:
  ```js
  const nuevoElemento = document.createElement("p");
  nuevoElemento.textContent = "Este es un nuevo párrafo agregado con JavaScript.";
  document.body.appendChild(nuevoElemento);
  ```

## 3. Conclusión
- Aprender JavaScript a fondo es clave para entender cómo funciona React y evitar errores comunes.
- Se recomienda practicar cada concepto con ejercicios y pequeños proyectos antes de comenzar con React para tener una base sólida.

