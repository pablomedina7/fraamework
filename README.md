⚙️ Características del Framework:
✔ Virtual DOM 
✔ Gestión de estado con FLUX 
✔ Suscripción automática para actualizar la UI 
✔ Soporte para JSX (opcional con Babel)

📑 API del Framework El framework proporciona tres funciones principales: Función Descripción createElement(type, props, ...children) Crea un nodo del Virtual DOM render(vNode, container) Renderiza el Virtual DOM en el DOM real createStore(reducer) Implementa FLUX para gestionar estado 1️⃣ Virtual DOM - createElement() 📌 Convierte una estructura de nodos en un objeto Virtual DOM.

const myElement = createElement("h1", null, "Hola Mundo"); console.log(myElement);

💡 Este Virtual DOM será luego convertido en HTML real por render().

2️⃣ Renderizado - render() 📌 Convierte un objeto Virtual DOM en elementos HTML reales y lo inserta en el DOM.

Suscripción Automática a Cambios de Estado 📌 Ubicación: frame.js 📌 Cuando el estado cambia, se notifica a la UI automáticamente.

// Suscribirse a cambios en el estado store.subscribe(renderApp); store.dispatch({ type: "INCREMENT" }); // "Nuevo estado: { count: 1 }" store.dispatch({ type: "INCREMENT" }); // "Nuevo estado: { count: 2 }" 📌 ¿Qué hace esto?

// 📌 1️⃣ Virtual DOM: Crea un nodo virtual (similar a React.createElement)

// 📌 2️⃣ Renderizado: Convierte un nodo virtual en HTML real

// 📌 2.1️⃣ Función auxiliar para renderizar el Virtual DOM en nodos reales

// 📌 3️⃣ Gestión de estado (FLUX): Implementación de un Store 🚀 Conclusión ✔ Framework minimalista basado en Virtual DOM y FLUX ✔ Sin dependencias externas, rápido y ligero ✔ Ideal para proyectos educativos o experimentación con arquitecturas frontend
