# quizWeb28Abril
# NovaLearn - Biblioteca Virtual

Acceso básico a la biblioteca virtual de NovaLearn.

---

## Descripción breve

Aplicación que permite a los estudiantes iniciar sesión con su usuario y contraseña.  
Muestra un mensaje de bienvenida y el libro favorito si los datos son correctos.  
Desarrollado con Express.js y TailwindCSS, usando separación de rutas, handlers, controllers, services y base de datos simulada.

---

## ¿Cómo correr el proyecto?

1. Instalar dependencias:

npm install

2. Levantar el servidor:

npm start

3. Entrar en el navegador:

http://localhost:3000/

---

## Datos de prueba

| Usuario  | Contraseña | Nombre         | Libro Favorito           |
|:---------|:-----------|:---------------|:--------------------------|
| ana.t    | libro123    | Ana Torres     | Cien Años de Soledad       |
| marco.r  | lectura456  | Marco Ramírez  | El Principito              |
| sofia.m  | novela789   | Sofía Morales  | Orgullo y Prejuicio        |

---

## Estructura del proyecto

- src/routes/ → Rutas Express
- src/handlers/ → Manejan requests
- src/controllers/ → Lógica de negocio
- src/services/ → Servicios de datos
- src/db/ → Datos simulados
- src/middleware/ → Middleware de errores
- public/ → Páginas HTML (login y bienvenida)

---