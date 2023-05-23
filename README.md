## Desafío Técnico: Conversor de monedas
Desplegado en railway.app **(Front + Back + BD)**
[Proyecto completo con deploy en railway.app](https://desafioconversorfront-production.up.railway.app/)

- El Conversor de monedas **Frontend**, se ejecuta sobre React y Bootstrap en el puerto **3000**.

- Interactúa con los diferentes endpoints que el Backend le proporciona.


### Rutas disponibles:

- localhost/login es el inicio y todo usuario no logueado es dirigido a esta ruta  
- El usuario admin: (usuario: admin contraseña: adminpass) tiene acceso a crear nuevas actividades a través de las consultas y revisarlas  
- El usuario user: (usuario: admin contraseña: adminpass) solo tiene acceso a crear nuevas actividades a través de las consultas  

- Toda ruta no válida redirige a login


## Instrucciones de instalación y ejecución:

1. Descarga el repositorio.
2. Abre una terminal en el directorio raíz del proyecto.
3. En el directorio raíz del proyecto, ejecuta el siguiente comando para instalar las dependencias necesarias:

   ```
   npm install
   ```

4. Ejecuta el programa, utilizando el comando:
   ```
   npm start
   ```
   
   ![Screenshot](https://github.com/mdcabezas/desafio_conversor_front/blob/master/public/screenshot.jpg)
