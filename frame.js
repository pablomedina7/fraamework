/* frame.js (Motor del Framework)
📌 Ubicación: src/frame.js
📌 Función:

Implementa un Virtual DOM (createElement() y render()).
Maneja la gestión de estado con FLUX (createStore()).
Permite que la UI se actualice automáticamente cuando cambie el estado.
*/
// 📌 1️⃣ Virtual DOM - Crea un nodo virtual para representar un elemento HTML
export const createElement = (type, props = {}, ...children) => {
    return { type, props: { ...props, children } }; // 📌 Retorna un objeto que representa un nodo Virtual DOM
};

// 📌 2️⃣ Renderizado - Convierte el Virtual DOM en HTML real y lo inserta en el DOM
export const render = (vNode, container) => {
    container.innerHTML = ''; // 📌 Limpia el contenedor antes de renderizar
    container.appendChild(renderElement(vNode)); // 📌 Renderiza el nuevo Virtual DOM
};

// 📌 2.1️⃣ Función auxiliar para convertir un nodo Virtual DOM en un elemento HTML real
const renderElement = (vNode) => {
    if (typeof vNode === 'string') {
        return document.createTextNode(vNode); // 📌 Si es texto, crea un nodo de texto
    }

    const element = document.createElement(vNode.type); // 📌 Crea el elemento HTML

    // 📌 Asigna propiedades al nodo real
    Object.entries(vNode.props || {}).forEach(([key, value]) => {
        if (key === 'children') {
            value.forEach(child => element.appendChild(renderElement(child))); // 📌 Renderiza los hijos del nodo
        } else {
            element[key] = value; // 📌 Asigna atributos como class, id, onclick, etc.
        }
    });

    return element;
};

// 📌 3️⃣ Gestión de Estado - Implementación de FLUX
export const createStore = (reducer) => {
    let state = reducer(undefined, { type: '__INIT__' }); // 📌 Define el estado inicial
    const listeners = []; // 📌 Lista de suscriptores para actualizar la UI

    return {
        getState: () => state, // 📌 Obtiene el estado actual

        dispatch: (action) => {
            state = reducer(state, action); // 📌 Modifica el estado con el reducer
            listeners.forEach(listener => listener()); // 📌 Notifica a todos los suscriptores
        },

        subscribe: (listener) => {
            listeners.push(listener);  // 📌 Añade una función a la lista de suscriptores
            return () => {
                const index = listeners.indexOf(listener);
                if (index !== -1) listeners.splice(index, 1); // 📌 Permite eliminar la suscripción
            };
        }
    };
};
