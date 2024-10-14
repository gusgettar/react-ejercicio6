# 🎨 Paleta de Colores

## 📄 Descripción

Esta aplicación web permite a los usuarios ingresar el nombre de un color, mostrar ese color en un `textarea`, guardarlo en una API y visualizarlo en una `card`. Cada `card` mostrará el nombre del color, el área con el color y un botón para eliminar la `card`, que también lo borra de la API. Se utiliza **SweetAlert** para mejorar la experiencia visual en la confirmación de eliminación, y **React-Bootstrap** para el estilo de las `cards`. La aplicación está construida con **Vite** y **React**.

## 🚀 Características

- Ingresar un nombre de color para cambiar el color de un `textarea`.
- Guardar los colores ingresados en una API.
- Mostrar los colores guardados en tarjetas (`cards`).
- Eliminar un color de la tarjeta y de la API con una confirmación visual usando **SweetAlert**.
- Manejo de formularios con **React Hook Form**.
- Uso de rutas con **React Router DOM**.

## 🛠️ Tecnologías utilizadas

- **Vite** + **React**
- **React Hook Form** para la gestión de formularios.
- **React-Bootstrap** para el diseño y estilo de las tarjetas.
- **SweetAlert** para mejorar la interacción visual al eliminar.
- **React Router DOM** para el manejo de rutas.

## 💻 Instalación


### Pasos para la instalación

1. Clonar el repositorio:

    ```bash
   git clone https://github.com/gusgettar/react-ejercicio6.git
   cd react-ejercicio6

## Instalar dependencias

   
     npm install react-hook-form
     npm install react-bootstrap bootstrap
     npm install sweetalert2
     npm install react-router-dom

## 🎯 Uso
1. En la página principal, ingresa el nombre de un color (por ejemplo: red, blue, green) en el campo de texto.
2. El color se mostrará en el textarea y se guardará en la API al enviarlo.
3. Debajo, se visualizará una tarjeta (card) con:
  -El nombre del color mostrado con el color respectivo.
  -Un textarea pintado del color ingresado.
  -Un botón para eliminar la tarjeta. Al eliminar, se mostrará una alerta con SweetAlert para confirmar la acción.
4. Al eliminar la tarjeta, también se elimina el color de la API.

