# Intexsoft Angular Training 2020 Q1/Q2

## Программа курса

1. Introduction to Web development. Introduction to Git
2. Javascript basics
3. Javascript modules. Promise. async/await
4. Typescript
5. NodeJS. NPM. package.json. Installing libraries
6. Introduction to Angular. Angular-CLI. Project structure. Schematics
7. Modules. Components. Communication between components
8. Services. Pipes. Directives
9. Forms
10. RxJS, Observable. Operators
11. Routing. Lazy Loading
12. Component lifecycle. Change Detection
13. Introduction to Redux and NgRX
14. Effects. Selectors
15. Unit testing. E2E testing
16. Angular best practices

## Home Work 10.02.2020

* установить git
* создать профиль на github/gitlab/bitbucket
* создать remote репозиторий, склонировать
* использовать команды - add, revert, commit (amend)
* для бранчей - branch, checkout, merge, rebase, cherry pick
* для отката коммитов - reset (soft, hard)
* создать и решить конфликт
* для сохранения локальных изменений - stash, patch
* для синхронизации с remote - fetch, push, pull
* попробовать создать pull/merge request

Заметка: нужно избегать добавления в git кода, не имеющего отношения к исходникам. Например, директорий .idea, .vscode, node_modules, dist
 и т.д. Можно добавить или сгенерировать файл .gitignore и определить в нем файлы/директории для игнора
 
 ## Home Work 13.02.2020
 
 * методы массивов - find, map, filter, reduce, some, every, forEach, push, pop, unshift, shift, splice, slice
 * spread operator на объектах и массивах
 * специальные объекты Map, Set
 * используя только Javascript и DOM API (вообще без html), добавить на страницу несколько элементов (разноцветных квадратов) и сделать так, чтобы они следовали за курсором по нажатию мыши

Методы массивов - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array  
DOM API - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

## Home Work 17.02.2020

* установить любой веб-сервер для запуска веб-приложения локально (Apache, Nginx, NPM http-server, NPM serve) или использовать Github Pages
* создать ES6-модуль с несколькими классами (сервисы, утилы, модели)
* использовать re-export с помощью index.js, export default
* использовать fetch API и создать несколько методов для коммуникации с публичным серверным API, желательно используя все HTTP методы
* объединить промисы с помощью Promise.all, Promise.race
* async/await на вложенных HTTP вызовах

Список публичных API - https://github.com/public-apis/public-apis  
Модули - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules  
Fetch API https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch


## Home Work 20.02.2020 (NPM, Webpack, libs)

* установить NodeJS
* добавить файл package.json, добавить зависимости в секцию dependencies
* установить зависимости - npm install. Для удаления - npm uninstall. Посмотреть установку в глобальном режиме (npm i -g)
* использовать webpack (или альтернативы) для сборки и запуска проекта: добавить файл webpack.config.js, создать минимальную  конфигурацию для сборки и запуска

Предлагаю использовать следующие библиотеки:
 * lodash - https://lodash.com/
 * bootstrap - https://getbootstrap.com/
 * axios - https://github.com/axios/axios
 * moment - https://momentjs.com/
 * font awesome - https://fontawesome.com/
 
 Для изучения:
 * команды в NPM - https://docs.npmjs.com/cli-documentation/cli
 * документация Webpack - https://webpack.js.org/guides/

## Home Work 24.02.2020

* установить Typescript
* изучить возможности типизации для переменных, функций, полей классов и т.д
* изучить возможности OOП в Typescript - интерфейсы, классы, абстрактные классы, наследование, имплементация, область видимости полей классов, enum
* создать класс и функцию с одним или несколькими generic полями/параметрами (примечание: generic типам можно задавать тип по умолчанию, а также указывать границы с помощью extends)

Документация Typescript - https://www.typescriptlang.org/docs/home.html  
Советы как писать код - https://github.com/labs42io/clean-code-typescript

## Home Work 27.02.2020

* установить @angular/cli глобально
* создать проект с помощью CLI

Документация Angular - https://angular.io/start

## Home Work 2.03.2020

Рекомендации по разным аспектам в angular с примерами - https://angular.io/guide/styleguide  
Очень советую, здесь разобрано множество моментов по написанию кода, в том числе и структура директорий и модулей.  
Небольшая шпаргалка по синтаксису в angular - https://angular.io/guide/cheatsheet
