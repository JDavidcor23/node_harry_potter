# Index.js explicación
##  1. DEPENDENCIAS 
- Importemos todo lo necesario para este proyecto:
- **http** que nos ayudará a crear un servidor local
- **fs** que nos permitirá leer archivos
- **fetch** (aquí ya deberíamos haber instalado la dependencia de '**node-fetch**') para traernos información de otros sitios web
## 2. Funciones
-   **charactersHP**, traer los personajes con la petición fetch
- **replaceTemplate** esta recibe dos parámetros el = temp (documento HTML) y el = character (la información que va a ser reemplazada en el documento HTML)
## 3. Templates
Aquí llamamos a la función readFileSync donde le pasamos en path de la ubicación del archivo y el formato de codificación utf-8
## 4.Servidor
Creamos un servidor, este recibe dos parámetros el request con este podemos tener más información de nuestro server, y el response aquí podemos renderizar lo que nosotros le pasemos por paréntesis con la propiedad res.end() o response.end().
Después llamamos a server y le pasamos la propiedad listening y le pasamos el puerto donde se va a ejecutar y el localhost de tu máquina

## ¿Cómo ejecutar este proyecto?
- Primero descargamos el proyecto

[![download](https://res.cloudinary.com/dhu6ga6hl/image/upload/v1644105815/github/mht310pf3kf4jd0lgxrj.png "download")](https://res.cloudinary.com/dhu6ga6hl/image/upload/v1644105815/github/mht310pf3kf4jd0lgxrj.png "download")

- Lo descomprimimos y entramos a la carpeta click derecho git bash here (descarga git aqui: https://git-scm.com/downloads)

[![link](https://res.cloudinary.com/dhu6ga6hl/image/upload/v1644106249/github/lnvmme5nnby4zlaclg9z.png "link")](https://res.cloudinary.com/dhu6ga6hl/image/upload/v1644106249/github/lnvmme5nnby4zlaclg9z.png "link")

- Escribimos en la consola npm install (si te sale error es porque no tienes instalado Nodejs aun, descarga Nodejs aqui: https://nodejs.org/es/download/)

- Después que ya haya instalado todo escribimos en la consola node index.js
[![node](https://res.cloudinary.com/dhu6ga6hl/image/upload/v1644106923/github/fa5r1f2b4ebpu2givfyv.png "node")](https://res.cloudinary.com/dhu6ga6hl/image/upload/v1644106923/github/fa5r1f2b4ebpu2givfyv.png "node")
- Despues abres tu navegador favorito y pegas este link:
http://127.0.0.1:8000


# Index.js explication
## 1. DEPENDENCES 
- Let's import everything we need for this project:
- **http** which will help us to create a local server.
- **fs** which will allow us to read files
- **fetch** (here we should have already installed the '**node-fetch**' dependency) to fetch information from other web sites.
## 2. Functions
- **charactersHP**, fetch the characters with the fetch request
- **replaceTemplate** this receives two parameters the = temp (HTML document) and the = character (the information to be replaced in the HTML document)
## 3. Templates
Here we call the function readFileSync where we pass the path of the file location and the utf-8 encoding format.
## 4. Server
We create a server, this receives two parameters the request with this we can have more information of our server, and the response here we can render what we pass by parenthesis with the property res.end() or response.end().
Then we call server and we pass the listening property and we pass the port where it is going to be executed and the localhost of your machine.



## How to run this project?
- First we download the project

[![download](https://res.cloudinary.com/dhu6ga6hl/image/upload/v1644105815/github/mht310pf3kf4jd0lgxrj.png "download")](https://res.cloudinary.com/dhu6ga6hl/image/upload/v1644105815/github/mht310pf3kf4jd0lgxrj.png "download")

- Unzip it and go to the folder right click git bash here (git download here: https://git-scm.com/downloads)

[![link](https://res.cloudinary.com/dhu6ga6hl/image/upload/v1644106249/github/lnvmme5nnby4zlaclg9z.png "link")](https://res.cloudinary.com/dhu6ga6hl/image/upload/v1644106249/github/lnvmme5nnby4zlaclg9z.png "link")

- Type in the console npm install (if you get error is because you don't have Nodejs installed yet, download Nodejs here: https://nodejs.org/es/download/)

- After everything is installed we write in the console node index.js
[![node](https://res.cloudinary.com/dhu6ga6hl/image/upload/v1644106923/github/fa5r1f2b4ebpu2givfyv.png "node")](https://res.cloudinary.com/dhu6ga6hl/image/upload/v1644106923/github/fa5r1f2b4ebpu2givfyv.png "node")
- Then open your favorite browser and paste this link:
http://127.0.0.1:8000
