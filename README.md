## Scripts disponibles

En el directorio del proyecto puedes correr:

### `npm install`

Puedes usar `npm install` dentro del directorio del proyecto para instalar todas las dependencias, no se necesita que pongas algun tipo de version ya que el proyecto corre con la ultima version de las paqueterias implementadas.

**Nota:** Validar que su version de React sea la ultima version 18.1.0 de lo contrario utilizar nvm pra el versionamiento o actualizar sus dependencias de React

### `npm start`

Corre la aplicación en el ambiende de desarrollo
Abre [http://localhost:3000](http://localhost:3000) para ver tu aplicación en el navegador

### `npm run build`

Construye la aplicación para el ambiente de producción

### Antes de crear el build de producción

1. La aplicación corre en dos ambientes , por lo cual se crearon dos archivos de usuarios , uno para pruebas y otro para producción , estos archivos ya estan creados en el proyecto pero si necesita eliminarlos o cambiarlos en recomendable ir a ellos y editarlos.

Los archivos son los siguientes: 

- loginUsersProduction.json
- loginUsersTest.json

**Nota:**los archivos estan almacenados en la carpeta data que esta dentro de src "Raiz del proyecto"

2. La aplicación no hace uso de ninguna otra configuración por lo cual si necesita correrlo solo debera de instalar las dependecias con `npm install` o si prefiere con `npm i`, esto instalara las dependencias utilizadas con la actualización hasta el día 11 de junio del 2022