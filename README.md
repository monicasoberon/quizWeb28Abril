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

- src/app/api/auth/route.js → Registra las rutas principales de autenticación
- src/app/backend/controllers/AuthController.js → Lógica de negocio de autenticación
- src/app/backend/handlers/AuthHandlers.js → Manejo de solicitudes HTTP
- src/app/backend/routes/AuthRoutes.js → Define las rutas Express para autenticación
- src/app/backend/services/StudentService.js → Lógica de acceso a los datos
- src/app/backend/db/Students.js → Datos simulados de estudiantes
- src/app/backend/middleware/Error.js → Manejo de errores generales
- public/index.html → Página de inicio de sesión
- public/welcome.html → Página de bienvenida

---

## Notas

- Proyecto desarrollado siguiendo las buenas prácticas de separación de responsabilidades vistas en clase.
- Cumple con la estructura modular tipo API separada por capas.