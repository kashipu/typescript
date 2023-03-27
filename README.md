Inicializar proyecto 
> npm init -y

Instalar Typescript
npm install typescript --save-dev

Directorios
- Root
  - src
  - .gitignore
  - .edtiorconfig

Compilar typescript
> npx tsc ruta del archivo

Cambiar versión de compilación 
> npx src/demo.ts --target es6 

Cambiar directorio de la compilación 
> npx src/demo.ts --target es6 --outDir rutaNueva

Generar el archivo TSConfig.json
> npx tsc --init

Evitar la compilación dejar el comando 
> npx tsc --watch


