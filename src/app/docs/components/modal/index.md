---
title: ModalPage
name: modal
category: ComponentsCategory,
keywords: ModalPage
order: 2
---

Permite mostrar una interfaz encima del contenido principal hacioendo click en el botón del evento.

| Propiedad           | Descripción                                 |    Tipo     |
|---------------------|---------------------------------------------|-------------|
| isVisible           | Muestra el componente                       |   Boolean   |
| useAnimations       | Activa el uso de animaciones                |   Boolean   |
| headerClass         | Define esl estilo de la cabecera del modal  |   String    |
| title               | Muestra el título que tendrá el encabezado  |   String    |
| confirmText         | Texto que tendrá el botón de Confirmación   |   String    |
| cancelText          | Texto que tendrá el botón de Cancelar       |   String    |
| confirmButtonClass  | Define el estilo del botón de confirmación  |   String    |
| cancelButtonClass   | Define el estilo del botón de cancelar      |   String    |
| isLoaderActive      | Activa la animación del loader              |   Boolean   |
| isVisibleActions    | Muestra los botones de acciones             |   Boolean   |


{{ NgDocActions.demo("ModalDemoComponent", {inputs: {color: 'alert'} }) }}

