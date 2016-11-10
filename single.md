# Подключение модулей по отдельности

Чтобы встроить один калькулькулятор на страницу необходимо подключить необходимый набор файлов на страницу.

## Подключение модуля Каско
 
Подключаем стили и js код на страницу, где будет установлен модуль. 
 
### Подключение стилей

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.4/components/icon.min.css"/>
<link rel="stylesheet" href="https://qostya.github.io/atomic-emmet/dist/style.css">
<link rel="stylesheet" href="./b2bpolis-modules/kasko-module/css/app.min.css">
```

### Подключение скриптов

Внизу, до закрывающего тега `<body>` необходимо подключить следующие скрипты: 

```html
<script src="./js/config.js"></script>
<script src="./js/vendors.min.js"></script>
<script src="./js/templates.js"></script>
<script src="./js/app.min.js"></script>
```

### Вывод калькулятора 

В месте где будет выводиться калькулятор, вставьте строку:

```html
<div ng-app="KaskoApp" class="b-app" ui-view ng-class="'b-app--' + currentBrandName"></div>
```

Пример подключение см. в файле: 
`b2bpolis-modules/kasko-module/index.html`

Также необходимо указать путь до папки `middleware`.
Для этого нужно настроить объект с настроками `proxyPath` и 
 `proxyPathC` в файле: `b2bpolis-modules/kasko-module/js/config.js`

## Подключение модуля Осаго

Аналогично, как модуль Каско.
См. файл: `b2bpolis-modules/osago-module/index.html`
