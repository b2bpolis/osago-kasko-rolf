# Подключение модулей по отдельности

Чтобы встроить один калькулькулятор на страницу необходимо подключить необходимый набор файлов на страницу.

## Подключение модуля Каско

Подключаем стили и js код на страницу, где будет установлен модуль.

### Подключение стилей

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.4/components/icon.min.css"/>
<link rel="stylesheet" href="./dist/css/style.css">
<link rel="stylesheet" href="https://qostya.github.io/atomic-emmet/dist/style.css">
```

### Подключение скриптов

Внизу, до закрывающего тега `<body>` необходимо подключить следующие скрипты:

```html
<script charset="utf-8" src="./config.js"></script>
<script charset="utf-8" src="../common/vendors.min.js"></script>
<script charset="utf-8" src="./dist/js/app.min.js"></script>

<script type="text/javascript">
  (function () {
    window.location.hash = '#!/kasko/';
    angular.bootstrap(document.getElementById('KaskoApp'), ['KaskoApp']);
  }());
</script>

```

### Вывод калькулятора

В месте где будет выводиться калькулятор, вставьте строку:

```html
<div id="KaskoApp">
    <div class="b-app" ui-view ng-class="'b-app--' + currentBrandName"></div>
</div>
```

Пример подключение см. в файле:
`rolf/index-kasko.html`

#### config.js

Также необходимо указать путь до папки `backend`.
Для этого нужно настроить объект с настроками `proxyPath` и
 `proxyPathC` в файле: `rolf/js/config.js`

## Подключение модуля Осаго

Аналогично, как модуль Каско.
См. файл: `rolf/index-osago.html`

[Назад][bede57fb]

  [bede57fb]: readme.md "Назад"
