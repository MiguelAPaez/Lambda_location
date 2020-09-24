# puntotres
Punto Tres NodeJS

# Docker

Para ejecutar este proyecto es necesario tener instalado Docker y la imagen del servidor de Base de Datos MySQL, para esto utilizamos la siguiente linea de código:

docker run -d -p 3306:3306 --name mysql57 -e MYSQL_ROOT_PASSWORD=secret mysql:5.7 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

Luego para ejecutar el contenedor de MySQL es necesario utilizar el siguiente comando: (La contraseña es: secret)

docker exec -it mysql57 mysql -p

# Base de Datos (MySQL)

Para realizar la ejecución del presente código es necesario crear una tabla en MySql llamada employee

# crear base de datos
CREATE DATABASE IF NOT EXISTS location; 

# seleccionar base de datos
USE location;

# crear tabla location
CREATE TABLE IF NOT EXISTS location(
	id_location INT auto_increment,
    name VARCHAR(60) UNIQUE NOT NULL,
    area_m2 NUMERIC NOT NULL,
    PRIMARY KEY(id_location)
)ENGINE=INNODB

# Correr Proyecto

Debe instalar Express y nodemon: npm i -D -g express nodemon

Para ejecutar el proyecto se utiliza el comando: nodemon . En la terminal de la carpeta donde está ubicado el proyecto.
