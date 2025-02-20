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


---

# Fundamentos y Técnicas Avanzadas de HTML y CSS LESSON 2

**Objetivo:** Comprender los conceptos básicos de HTML y CSS y explorar técnicas avanzadas para mejorar el diseño y la estructura web.

---

## Sección 1: Introducción a HTML

### 1.1. ¿Qué es HTML?

HTML (HyperText Markup Language) es el lenguaje estándar para crear y estructurar contenido en la web. Utiliza etiquetas para definir elementos como encabezados, párrafos, listas, enlaces, imágenes y más.

#### Ejemplo de un documento HTML básico:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera página web</title>
</head>
<body>
    <h1>¡Hola, mundo!</h1>
    <p>Esta es mi primera página web con HTML.</p>
</body>
</html>
```

**Conceptos clave:**
- **Etiquetas:** Bloques de construcción de HTML, como `<h1>` o `<p>`.
- **Atributos:** Proporcionan información adicional, como `href` en un enlace.
- **Elementos:** Compuestos por una etiqueta de apertura, contenido y una etiqueta de cierre.

### 1.2. Estructura básica de una página HTML

Cada documento HTML sigue una estructura estándar:

- `<!DOCTYPE html>`: Define que el documento es HTML5.
- `<html>`: Elemento raíz de la página.
- `<head>`: Contiene metadatos, enlaces a estilos, scripts, etc.
- `<body>`: Contiene el contenido visible de la página.

**Ejemplo con metadatos y enlaces a CSS:**
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo HTML</title>
    <link rel="stylesheet" href="styles.css">
</head>
```

### 1.3. Elementos y etiquetas básicas

#### Encabezados y párrafos
```html
<h1>Encabezado Principal</h1>
<h2>Encabezado Secundario</h2>
<p>Este es un párrafo de texto.</p>
```

#### Listas
```html
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
</ul>

<ol>
    <li>Primer elemento</li>
    <li>Segundo elemento</li>
</ol>
```

#### Enlaces
```html
<a href="https://www.google.com" target="_blank">Ir a Google</a>
```

#### Imágenes
```html
<img src="imagen.jpg" alt="Descripción de la imagen">
```

#### Formularios
```html
<form action="procesar.php" method="POST">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">
    <button type="submit">Enviar</button>
</form>
```

---

## Sección 2: Introducción a CSS

### 2.1. ¿Qué es CSS?

CSS (Cascading Style Sheets) se utiliza para aplicar estilos a los elementos HTML. Permite definir colores, fuentes, tamaños, posicionamiento y más.

**Ejemplo de CSS en un archivo externo (`styles.css`):**
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
}
```

### 2.2. Selectores y Especificidad

#### Selectores básicos
```css
h1 { color: blue; }  /* Selector por etiqueta */
#mi-id { font-size: 20px; }  /* Selector por ID */
.mi-clase { text-align: center; }  /* Selector por clase */
```

#### Selectores avanzados
```css
div > p { color: red; }  /* Selecciona solo los párrafos hijos directos de un div */
input[type="text"] { border: 1px solid black; }  /* Selecciona inputs de tipo texto */
```

---

## Sección 3: Técnicas Avanzadas de HTML y CSS

### 3.1. Diferencias entre Flexbox y Grid

| Característica  | Flexbox | Grid Layout |
|---------------|---------|-------------|
| **Estructura**  | Unidimensional (fila o columna) | Bidimensional (filas y columnas) |
| **Control**  | Mejor para alinear elementos en una línea | Mejor para diseñar estructuras de página completas |
| **Alineación**  | Usa `justify-content` y `align-items` | Usa `grid-template-rows` y `grid-template-columns` |
| **Distribución**  | Depende del orden en HTML | Puede reorganizar elementos sin cambiar HTML |
| **Uso recomendado**  | Menús, barras de navegación, tarjetas en fila | Diseño completo de páginas o secciones complejas |

### 3.2. Cálculo de Tamaños Responsivos con `calc()`

#### Ejemplo: Ajustar el ancho de un contenedor dinámicamente
```css
.container {
    width: calc(100% - 50px); /* Resta 50px del ancho total */
    background: lightgray;
    padding: 20px;
}
```

#### Ejemplo: Tamaño de fuente dinámico según el viewport
```css
h1 {
    font-size: calc(1rem + 2vw); /* Aumenta con el ancho de la pantalla */
}
```

---

## Conclusión

Esta clase cubre desde los fundamentos básicos de HTML y CSS hasta técnicas avanzadas como Flexbox, Grid y el uso de `calc()` para diseños responsivos. Estos conceptos son esenciales para crear páginas web modernas y adaptativas.


# Clase: Introducción a React con Vite

## 1. Introducción a React y Vite
### ¿Qué es React?
React es una biblioteca de JavaScript para construir interfaces de usuario. Fue desarrollada por Facebook y permite crear aplicaciones web de manera eficiente y modular mediante componentes reutilizables.

### ¿Qué es Vite?
Vite es un "bundler" moderno que mejora el rendimiento del desarrollo de aplicaciones en React al ofrecer un entorno de desarrollo rápido con recarga en caliente (Hot Module Replacement, HMR).

## 2. Instalación de React con Vite
Para empezar un proyecto en React con Vite, sigue estos pasos:

### Requisitos previos
- Tener Node.js instalado (recomendado v14 o superior)
- Tener npm o yarn instalado

### Creación del proyecto con Vite
Ejecuta el siguiente comando en la terminal:
```sh
npm create vite@latest mi-proyecto --template react
```
O con yarn:
```sh
yarn create vite@latest mi-proyecto --template react
```
Luego, navega al directorio del proyecto e instala las dependencias:
```sh
cd mi-proyecto
npm install
```
Para ejecutar el proyecto en modo desarrollo:
```sh
npm run dev
```
Esto iniciará un servidor en `http://localhost:5173/`.

## 3. Estructura del Proyecto en Vite
Al crear un proyecto con Vite, se genera la siguiente estructura de carpetas:
```
mi-proyecto/
├── node_modules/          # Dependencias del proyecto
├── public/                # Archivos estáticos (favicon, imágenes, etc.)
├── src/                   # Código fuente de la aplicación
│   ├── App.jsx            # Componente principal de la aplicación
│   ├── main.jsx           # Punto de entrada de la aplicación
│   ├── assets/            # Recursos como imágenes y estilos
│   ├── components/        # Componentes reutilizables
│   ├── pages/             # Páginas principales de la aplicación
│   ├── hooks/             # Hooks personalizados
│   ├── context/           # Context API para manejo de estado global
├── .gitignore             # Archivos y carpetas a ignorar por Git
├── index.html             # Archivo HTML principal donde se monta React
├── package.json           # Configuración del proyecto y dependencias
├── vite.config.js         # Configuración del entorno de Vite
├── README.md              # Documentación del proyecto
```
### Archivos principales
- `index.html`: Archivo HTML principal donde se monta React.
- `main.jsx`: Punto de entrada de la aplicación.
- `App.jsx`: Componente principal donde se define la estructura de la aplicación.
- `vite.config.js`: Configuración del entorno de Vite.

## 4. Conceptos Claves en React
### JSX (JavaScript XML)
JSX es una sintaxis que permite escribir estructuras similares a HTML dentro de JavaScript.
Ejemplo:
```jsx
function Saludo() {
  return <h1>Hola, mundo!</h1>;
}
```
### Componentes
React se basa en componentes reutilizables. Un componente puede ser una función que retorna JSX.
Ejemplo de un componente funcional:
```jsx
function Boton() {
  return <button>Click me</button>;
}
```
Uso en `App.jsx`:
```jsx
import Boton from './components/Boton';

function App() {
  return (
    <div>
      <h1>Bienvenido a React con Vite</h1>
      <Boton />
    </div>
  );
}
export default App;
```

### Props (Propiedades)
Las props permiten pasar datos entre componentes.
Ejemplo:
```jsx
function Mensaje({ texto }) {
  return <p>{texto}</p>;
}
```
Uso:
```jsx
<Mensaje texto="Hola desde React" />
```

### PropTypes
`PropTypes` se usa para validar las props de un componente y evitar errores.
Para usarlo, primero instala la dependencia:
```sh
npm install prop-types
```
Ejemplo de uso en un componente:
```jsx
import PropTypes from 'prop-types';

function Mensaje({ texto, numero }) {
  return (
    <div>
      <p>{texto}</p>
      <p>Número: {numero}</p>
    </div>
  );
}

Mensaje.propTypes = {
  texto: PropTypes.string.isRequired,
  numero: PropTypes.number
};

export default Mensaje;
```
En este caso:
- `texto` es obligatorio y debe ser un string.
- `numero` es opcional y debe ser un número.

### Estado y Eventos
React usa `useState` para manejar estados.
Ejemplo:
```jsx
import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
```

## 5. Conclusión
Hemos cubierto la instalación de React con Vite, la estructura del proyecto y los conceptos básicos como JSX, componentes, props, PropTypes y estado. En futuras clases, exploraremos temas avanzados como hooks, context API y manejo de rutas con React Router.

### Ejercicio
Crea un proyecto en REACT, para replicar el diseño de figma




