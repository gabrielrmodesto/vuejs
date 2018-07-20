# VueJS framework javascript
## Instalação

>Versão VueJS
```
npm install -g vue-cli@2.7.0
```
> template webpack-simple, criando pasta projeto
```
vue init webpack-simple nome_pasta_projeto
```
> Instalar dependencias
```
cd nome_pasta_projeto
npm install
```
> Rodar no navegador padrao
```
npm run dev
```
>Modulo VueResource
```
npm install vue-resource@1.0.3 --save

## no main.js

### importar modulo vueresource
import VueResource from 'vue-resource'

### registro do modulo no global view
Vue.use(VueResource)
```
