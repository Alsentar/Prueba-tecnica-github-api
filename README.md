# Prueba-tecnica-github-api


Saludos Cordiales, Sr. Carlos Ramirez. En este README encontrara una descripcion general del programa y las instrucciones para ejecutarlo.


------------------------------------------

Instrucciones de ejecucion:


-Para probar el programa, se requiere tener Node.js instalado en su maquina.

-Asumiendo que tiene Node.js instalado, debera clonar el repositorio en su maquina.

-Seguido, navegar en la consola bash al directorio \Prueba-tecnica-github-api\backend 

-Debera de re-crear el archivo .env, cuyo contenido es el siguiente:

PORT=3000
PERSONAL_ACCESS_TOKEN=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

-Ejecutar el comando: node server.js

-Al iniciar el servidor de Express, abrir el navegador con la ruta http://localhost:3000


------------------------------------------

Estructura del repositorio:

Prueba-tecnica-github-api/
|
|--frontend/
    |
    |--index.html
    |--consulta.html
    |--style.css
    |--stylerepos.css
    |--script.js
|--backend/
    |
    |--apis/
        |
        |--githubapi.js
    |--node_modules/
    |--.env
    |--package-lock.json
    |--package.json
    |--server.js
|--.gitignore
|--README.md

------------------------------------------

Flujo general del proyecto:

-Al iniciar el servidor, App() sirve index.html al browser que ingrese a localhost:3000

-Al presionar el boton en index.html, se carga el contenido de consulta.html.

-Al cargar el contenido se inicia un evento en su script que pide un fetch a la ruta de la api

-Cuando el backend escucha la llamada a la ruta, llama a una funcion asincrona que hace tres funciones:

--Crea una instancia de Octokit mediante el Personal Access Token autenticado
--Pide la informacion de usuario a octokit mediante un metodo GET
--Pide la informacion de repositorios a ocokit mediante un metodo GET

-La respuesta a la llamada de api es entregada al frontend y convertida a JSON

-El script del frontend manipula el DOM para llenar una tabla dinamica con la respuesta de la API. 

