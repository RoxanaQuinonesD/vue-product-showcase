# Vue Product Showcase - Proyecto Módulo 7

Situación inicial
Unidad solicitante: Departamento de E-commerce de una empresa de tecnología ficticia

El equipo de desarrollo del área de e-commerce necesita una aplicación SPA (Single Page Application) que sirva como catálogo interactivo de productos. Se busca un sistema moderno, dinámico y responsive que permita a los usuarios visualizar información de productos, filtrar por categorías y ver detalles individuales. Actualmente, el equipo utiliza una API interna para exponer los productos, pero no cuentan con una interfaz robusta que consuma esos datos ni gestione el estado de forma centralizada. Además, buscan asegurar la calidad de la solución con pruebas automatizadas y dejar abierta la posibilidad de escalar la aplicación a móvil o escritorio.

Nuestro objetivo
Desarrollar una aplicación Vue moderna, optimizada y mantenible que permita:
● Visualizar un catálogo de productos obtenidos desde una API REST.
● Utilizar componentes reutilizables y bien organizados.
● Gestionar el estado global con Vuex.
● Incorporar pruebas unitarias y e2e.
● Integrar una librería UI y considerar Nuxt o Quasar según el enfoque del proyecto.

La aplicación deberá ser clara, accesible, modular y escalable para futuras mejoras.

Requerimientos

En este apartado se deben listar las funcionalidades y especificaciones técnicas necesarias para cumplir con los objetivos planteados. Es fundamental detallar tanto los aspectos generales como los específicos, proporcionando al participante una guía clara de las expectativas técnicas y funcionales del proyecto.

Paso a paso

Este proyecto refiere exclusivamente al módulo 7: DESARROLLO DE APLICACIONES FRONT-END CON FRAMEWORK VUE, y se compone de 5 etapas (lecciones), las cuales podrás avanzar de forma progresiva y escalonada con la ayuda de los manuales teóricos y los contenidos desarrollados en las clases en vivo.

Ten en cuenta de invertir tiempo asincrónicos para el desarrollo de cada etapa a modo de poder finalizar el módulo y realizar la entrega formal de tu propuesta.

Cualquier consulta que surja compártela en los espacios sincrónicos para resolver las dudas en equipo.

A continuación encontrarás las consignas y tareas a desarrollar:

Lección 1: Componentes y ciclo de vida
🎯 Objetivo: Iniciar la base del proyecto con estructura de componentes
reutilizables.

Tareas a desarrollar:
○ Configurar el proyecto con Vue CLI.
○ Crear el componente <ProductCard> para mostrar un producto.
○ Implementar al menos un ciclo de vida (mounted, created, etc.).
○ Diseñar la estructura base de la app: <App>, <Header>, <Footer>, <ProductList>.

Esta lección establece las bases visuales y de estructura para el resto del proyecto.

Lección 2: Consumo de datos desde una API
🎯 Objetivo: Incorporar productos dinámicos mediante consumo de API.

Tareas a desarrollar:
○ Integrar Axios y obtener datos desde una API (pública o mock con JSON-server).
○ Mostrar productos dinámicamente en <ProductList>.
○ Incluir gestión de errores y carga (loading, error, empty).
○ Agregar filtro simple por categoría.

Esta lección conecta los componentes del paso anterior con datos reales y lógica.

Lección 3: Almacenamiento de estado en Vuex
🎯 Objetivo: Centralizar el estado y mejorar la arquitectura de datos.

Tareas a desarrollar:

○ Configurar Vuex y separar en módulos (productos, filtros, favoritos).
○ Mover el consumo de API a acciones Vuex.
○ Usar getters para computar productos filtrados.
○ Conectar los componentes visuales con el estado centralizado.

Esta entrega optimiza el flujo de datos y prepara la app para escalar.

Lección 4: Pruebas en Vue
🎯 Objetivo: Asegurar calidad de componentes y flujos clave.

Tareas a desarrollar:

Escribir 2 pruebas unitarias con Vue Test Utils + Jest:

○ Render correcto de <ProductCard>
○ Respuesta visual ante error de API

Crear 1 prueba end-to-end con Cypress o Nightwatch:
○ Usuario filtra productos y ve resultados.
○ Esta etapa valida el comportamiento de lo construido hasta aquí.

Lección 5: Librerías y Frameworks Complementarios
🎯 Objetivo: Aplicar diseño visual profesional y mejorar arquitectura.

Tareas a desarrollar:

○ Elegir una librería UI (Vuetify, Element Plus, etc.) y aplicarla.
○ Estilizar <ProductCard>, botones, inputs, etc.
○ (Opcional) Migrar a Nuxt o Quasar y justificar por qué.
○ Aplicar diseño responsive y tema claro/oscuro.

Esta lección refina la experiencia visual del usuario final.

¿Qué vamos a validar?
● Arquitectura escalable por componentes.
● Integración y visualización correcta de datos.
● Gestión efectiva del estado global.
● Cobertura básica de pruebas (unitarias y e2e).
● Uso profesional de librerías UI.
● Entrega funcional, limpia y documentada.

Entregables
● Código fuente en GitHub con estructura clara.
● README.md con instrucciones de instalación y justificaciones técnicas.
● Evidencias de pruebas ejecutadas.
● Demo funcional o capturas del producto final.

Portafolio 
Este proyecto es ideal para mostrar en tu portafolio como ejemplo de:
● Aplicación SPA con Vue.
● Integración de arquitectura moderna (Vuex, componentes, pruebas).
● Criterios de calidad, diseño y documentación profesional.
● Recomendamos publicar capturas, enlazar al repo y redactar un breve resumen explicando el enfoque y decisiones técnicas.



# ENTREGA DEL TRABAJO #

La Aplicación SPA desarrollada con Vue para mostrar un catálogo interactivo de productos. Este proyecto tiene como objetivo construir una interfaz moderna, dinámica y escalable, utilizando componentes reutilizables y una estructura preparada para integrar API, Vuex, pruebas y librerías UI.

## Desarrollo por lecciones

### Lección 1: Componentes y ciclo de vida

En esta primera etapa configuré el proyecto con Vue CLI y construí la estructura base de la aplicación. Creé los componentes `Header`, `Footer`, `ProductList` y `ProductCard`, organizando la interfaz de forma modular y reutilizable.

Además, utilicé el ciclo de vida `mounted()` en `ProductList` para cargar productos de prueba y mostrarlos dinámicamente en pantalla. Con esto dejé preparada la base visual y funcional para continuar con las siguientes etapas del proyecto.

## Instalación y ejecución

Para iniciar el proyecto, primero abrí la terminal dentro de la carpeta `vue-product-showcase`. Luego ejecuté la instalación de dependencias con `npm install` y levanté el servidor de desarrollo de Vue con `npm run serve` para visualizar la aplicación en el navegador.

Una vez iniciado el servidor, abrí la dirección local entregada por Vue en el navegador:

`http://localhost:8080/`

## Estado actual del proyecto

Actualmente, el proyecto cuenta con la estructura base de una SPA en Vue. Ya configuré el entorno de trabajo, creé los componentes principales y logré visualizar en pantalla un encabezado, un pie de página y un listado de productos de prueba mediante tarjetas reutilizables.

En esta etapa también utilicé el ciclo de vida `mounted()` para cargar información de ejemplo, dejando preparada la base para continuar con el consumo de API, la gestión de estado con Vuex, las pruebas y la integración de una librería UI.


### Lección 2: Consumo de datos desde una API

En esta etapa integré Axios para consumir productos desde una API pública y mostrar la información de forma dinámica en la aplicación. Reemplacé los datos de prueba de la lección anterior por productos reales, incorporando imagen, título, precio y categoría.

Además, agregué estados de carga, error y lista vacía para mejorar la experiencia de uso, y construí un filtro simple por categoría que permite visualizar los productos según la selección realizada.


### Lección 3: Almacenamiento de estado en Vuex

En esta etapa instalé y configuré Vuex para centralizar el estado de la aplicación. Organicé el store en módulos separados para productos, filtros y favoritos, con el objetivo de dejar una arquitectura más clara, escalable y fácil de mantener.

Además, moví el consumo de la API al módulo de productos mediante una acción de Vuex, utilicé getters para acceder a la información centralizada y conecté el componente `ProductList` al store para mostrar los productos y aplicar el filtro por categoría desde el estado global.

También incorporé un módulo de favoritos y lo conecté a la interfaz mediante un ícono de corazón en cada producto, permitiendo guardar productos destacados y visualizarlos en una sección separada dentro de la aplicación.


### Lección 4: Pruebas en Vue

En esta etapa configuré el entorno de pruebas unitarias con Jest y Vue Test Utils. A partir de eso, desarrollé pruebas para verificar el renderizado correcto del componente `ProductCard` y la respuesta visual de `ProductList` cuando ocurre un error en la carga de productos.

Con esto pude validar parte del comportamiento clave de la interfaz y dejar una base inicial para asegurar la calidad de la aplicación.

También incorporé una prueba end-to-end con Cypress para validar el flujo de filtrado por categoría, comprobando que un usuario pueda interactuar con la aplicación y ver resultados en pantalla.

