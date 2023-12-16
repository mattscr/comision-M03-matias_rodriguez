![descripción de la imágen](https://fmn.unsl.edu.ar/wp-content/uploads/2023/05/banner-ok-argentina-programa-1030x335.jpg)

<h1 align="center"> Argentina programa 4.0 </h1>

   <p align="center">
   <img src="https://img.shields.io/badge/build-%20work%20in%20progress...-yellow?style=plastic&logo=github
">
   </p>

La tarea es desarrollar una plataforma web dedicada exclusivamente a las vivencias y relatos de viajes, donde los usuarios tengan la posibilidad de registrarse, iniciar sesión, crear publicaciones sobre viajes y participar activamente al agregar comentarios a las publicaciones de otros viajeros

## ⚙ Tecnologias

![Tecnologias](https://skills.thijs.gg/icons?i=js,nodejs,html,css,express,tailwindcss,mongodb,react,vscode)

[!IMPORTANT]  
tener previamente instalado node js y mongodb o un cluster en mongodb atlas

## 📁 Acceso al proyecto

clonar el repositorio mediante `git clone`

```
git clone https://github.com/mattscr/comision-M03-matias_rodriguez
```

## 🛠 Abre y ejecuta el proyecto

- instalamos las dependencias mediante `npm install` en ambos directorios
  /backend => npm install, /frontend => npm install
- renombrar el archivo `.env.test` a => `.env` con el siguente contenido :

```
PORT = 8080

#HOST
URL_DB =

#LOCALHOST
DB_LOCALHOST=

#TOKEN
SECRET_KEY =

```

- dentro del directorio /backend ejecutamos `npm run dev`, el mismo procedimiento en el directorio /frontend
