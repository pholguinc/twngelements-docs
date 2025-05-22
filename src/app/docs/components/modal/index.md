---
title: ModalPage
name: modal
category: ComponentsCategory,
keywords: ModalPage
order: 2
---

| Propiedad        | Descripción                                 |    Tipo     |
|------------------|---------------------------------------------|-------------|
| isVisible        | Muestra el componente                       |   Boolean   |
| useAnimations    | Activa el uso de animaciones                |   Boolean   |
| title            | Muestra el título que tendrá el encabezado  |   String    |
| message          | Muestra el título que tendrá el contenedor  |   String    |
| confirmText      | Texto que tendrá el botón de Confirmación   |   String    |
| cancelText       | Texto que tendrá el botón de Cancelar       |   String    |
| isLoaderActive   | Activa la animación del loader              |   Boolean   |
| isVisibleActions | Muestra los botones de acciones             |   Boolean   |


To display the created demo on the page, you should use the `demo` method from `NgDocActions`,
passing the name of your component to it as follows



{{ NgDocActions.demo("ButtonDemoComponent", {inputs: {color: 'alert'} }) }}

