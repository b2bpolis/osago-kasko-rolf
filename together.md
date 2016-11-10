# Подлкючение двух калькуляторов одновременно

Подключение двух калькуляторов в отличие от одного отличается тем, что для них есть общие файлы, которые дублировать не надо. 


## Подключение стилей 

Файл `rolf.css` содержит стили, для вызывающей калькулятор кнопки.

```html
<!-- Common CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.4/components/icon.min.css"/>
<link rel="stylesheet" href="https://qostya.github.io/atomic-emmet/dist/style.css">
<link rel="stylesheet" href="./css/rolf.css">
<!-- Kasko -->
<link rel="stylesheet" href="../kasko-module/css/app.min.css">
<!-- Osago -->
<link rel="stylesheet" href="../osago-module/css/app.min.css">
```

## Подключение скриптов   

Внизу, до закрывающего тега `<body>` необходимо подключить следующие скрипты: 

```html
<!-- Common JS -->
<script src="./js/config.js"></script>
<script src="./js/vendors.min.js"></script>

<!-- Kasko -->
<script src="../kasko-module/js/templates.js"></script>
<script src="../kasko-module/js/app.min.js"></script>

<!-- Osago -->
<script src="../osago-module/js/templates.js"></script>
<script src="../osago-module/js/app.min.js"></script>

<script src="./js/js-app-modal.js"></script>
```



## Разметка

Пример разметки для вывода калькулятора: 


```html
<div class="b-app-modal b-app-modal--is-hidden">
    <div class="b-app-modal__bg js-app-modal-close"></div>

    <div class="b-app-modal__content">
        <div class="b-app-modal__head">
            <h2><span class="js-calc-type"></span> на ваш автомобиль</h2>
            <div class="b-app-modal__close js-app-modal-close">
                <span>Нет, спасибо</span>
            </div>
        </div>

        <div id="KaskoApp">
            <div class="b-app" ui-view ng-class="'b-app--' + currentBrandName"></div>
        </div>

        <div id="OsagoApp">
            <div class="b-app" ui-view ng-class="'b-app--' + currentBrandName"></div>
        </div>
    </div>
</div>


<div class="c-calc-panel">
    <div class="c-calc-panel__wrapper">
        <a class="c-calc-panel__item js-calc-panel-item js-calc-panel-item--kasko" href="#/pre">
            <div class="c-calc-panel__item-icon">
                <img src="./images/basic_calculator.png" alt=""/>
            </div>
            <div class="c-calc-panel__item-title">
                Рассчитать <span class="css-bottom-dashed">КАСКО</span>
            </div>
        </a>

        <a class="c-calc-panel__item js-calc-panel-item js-calc-panel-item--osago" href="#/osago/">
            <div class="c-calc-panel__item-icon">
                <img src="./images/basic_calculator.png" alt=""/>
            </div>
            <div class="c-calc-panel__item-title">
                Рассчитать <span class="css-bottom-dashed">ОСАГО</span>
            </div>
        </a>
    </div>
</div>
```

Рабочий пример можно посмотреть здесь: `b2bpolis-modules/both/index.html`