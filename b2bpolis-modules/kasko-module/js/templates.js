angular.module('appTemplatesKasko', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("js/src/modules/appMessage/views/messages_template.html",
    "<div class=\"b-messages\">\n" +
    "    <div ng-repeat=\"message in $root.messages\"\n" +
    "         ng-class=\"message.type\"\n" +
    "         class=\"b-messages_item ui message\">\n" +
    "\n" +
    "        <i class=\"icon close\" ng-click=\"message.close()\"></i>\n" +
    "\n" +
    "        <div ng-if=\"!message.isList\"\n" +
    "             compile=\"message.msg\"></div>\n" +
    "\n" +
    "        <ul class=\"list\" ng-if=\"message.isList\">\n" +
    "            <li ng-repeat=\"msg in message.msg\">\n" +
    "                <span ng-bind-html=\"msg\"></span>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/calculatorC/views/calculation.form.html",
    "<div ui-view=\"step_2\" ng-if=\"['first', 'second'].indexOf(bigSteps.getBigStep().name) !== -1\"></div>\n" +
    "<div ui-view=\"step_3\"></div>\n" +
    "<div ui-view=\"step_6\" ng-show=\"getCurrentCalcType()\"></div>\n" +
    "<div ng-include=\"templates.program_list\" class=\"js-kasko-result\" ng-show=\"params.resultsAreVisible && bigSteps.getBigStep().name === 'third'\"></div>");
  $templateCache.put("js/src/modules/calculatorC/views/calculation.messages.html",
    "<div class=\"control-row calc-result-messages\" ng-if=\"messages.length\">\n" +
    "    <div class=\"calc-result-errors\">\n" +
    "        <div class=\"list-item\" ng-repeat=\"message in messages\">\n" +
    "            {{message}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/calculatorC/views/calculator.html",
    "<div ng-include=\"templates.navigation\"></div>\n" +
    "\n" +
    "<div class=\"calculator-block main-content-body template-{{$root.calcType}}\">\n" +
    "    <form name=\"calculation_form\"\n" +
    "          autocomplete=\"off\"\n" +
    "          ng-class=\"{'calculation-form_error': params.show_empty_fields}\"\n" +
    "          class=\"calculation-form\">\n" +
    "        <div ui-view></div>\n" +
    "    </form>\n" +
    "</div>");
  $templateCache.put("js/src/modules/calculatorC/views/document_uploader.html",
    "<ul class=\"uploader-queue\"\n" +
    "    nv-file-drop\n" +
    "    nv-file-over\n" +
    "    uploader=\"uploader\"\n" +
    "    over-class=\"uploader-queue_over\">\n" +
    "\n" +
    "    <li ng-if=\"!uploadedFiles.length && !uploader.queue.length\">\n" +
    "        Загрузка файлов\n" +
    "    </li>\n" +
    "\n" +
    "    <!-- EARLY UPLOADED FILES -->\n" +
    "    <li ng-repeat=\"file in uploadedFiles\" class=\"list-item animation-fade\">\n" +
    "        <div ng-if=\"file.mime_type.indexOf('image/') !== -1\">\n" +
    "            <a ng-href=\"{{file.file_url}}\" target=\"_blank\">\n" +
    "                <img ng-src=\"{{file.file_url}}\" alt=\"{{file.description}}\" height=\"70\"/>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"file.mime_type === 'application/pdf'\">\n" +
    "            <a ng-href=\"{{file.file_url}}\" target=\"_blank\">\n" +
    "                <img ng-src=\"{{params.images_path}}pdf.png\" alt=\"{{file.description}}\" height=\"70\"/>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"file.mime_type === 'application/msword' || isDocument(file.mime_type)\">\n" +
    "            <a ng-href=\"{{file.file_url}}\" target=\"_blank\">\n" +
    "                <img ng-src=\"{{params.images_path}}doc_icon.png\" alt=\"{{file.description}}\" height=\"70\"/>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"uploader-queue-actions\">\n" +
    "            <button type=\"button\"\n" +
    "                    ng-click=\"removeUploadedImage(file)\"\n" +
    "                    class=\"ui button red mini\">Удалить\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </li>\n" +
    "\n" +
    "    <!-- NEW UPLOADED IMAGES -->\n" +
    "    <li ng-repeat=\"item in uploader.queue\" class=\"list-item animation-fade\">\n" +
    "        <div ng-if=\"item._file.type.indexOf('image/') !== -1\">\n" +
    "            <div ng-thumb=\"{ file: item._file, height: 70 }\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"item._file.type === 'application/pdf'\">\n" +
    "            <a href=\"{{item.file_url}}\" target=\"_blank\">\n" +
    "                <img ng-src=\"{{params.images_path}}pdf.png\" alt=\"{{item.description}}\" height=\"70\"/>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"item._file.type === 'application/msword' || isDocument(item._file.type)\">\n" +
    "            <a href=\"{{item.file_url}}\" target=\"_blank\">\n" +
    "                <img ng-src=\"{{params.images_path}}doc_icon.png\" alt=\"{{item.description}}\" height=\"70\"/>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"uploader-queue-actions\">\n" +
    "            <button type=\"button\"\n" +
    "                    ng-click=\"item.remove()\"\n" +
    "                    class=\"ui button red mini\">Удалить\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </li>\n" +
    "</ul>");
  $templateCache.put("js/src/modules/calculatorC/views/navigation.html",
    "<div class=\"b-steps\">\n" +
    "    <div class=\"ui steps\" ng-controller=\"calculatorNavigationCtrl\">\n" +
    "        <!--ng-class=\"{four: navigation.length === 4, five:  navigation.length === 5}\"-->\n" +
    "        <div class=\"step\"\n" +
    "             ng-repeat=\"navItem in navigation track by $index\"\n" +
    "             ng-click=\"navItem.onClick()\"\n" +
    "             ng-hide=\"navItem.isHidden()\"\n" +
    "             ng-class=\"{\n" +
    "                active: navItem.active(),\n" +
    "                disabled: navItem.condition_disabled()\n" +
    "             }\">\n" +
    "            <i class=\"icon\"\n" +
    "               ng-class=\"navItem.icon\"></i>\n" +
    "\n" +
    "            <div class=\"content\">\n" +
    "                <div class=\"title\" ng-bind-html=\"navItem.title\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/carFilterC/views/car_filter.car_group_models_list.html",
    "<!-- CAR GROUP MODEL BEGIN -->\n" +
    "<div class=\"c-tac b-content-loading\" ng-if=\"!carModelGroups || !carModelGroups.length\">\n" +
    "    <i class=\"spinner loading icon big grey\" tabindex=\"0\"></i>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ui five column doubling grid\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"column ui list\"\n" +
    "             ng-repeat=\"column in carModelGroups | carFilterYears: carManufacturingYear | orderBy:'rank':reverse | orderBy:orderBy | multiColumn:{columns: 5}\">\n" +
    "            <div ng-repeat=\"carModelGroup in column\"\n" +
    "                 class=\"item css-car-item\"\n" +
    "                 tabindex=\"0\"\n" +
    "                 ng-click=\"selectCarModelGroup(carModelGroup)\"\n" +
    "                 ng-keypress=\"$event.keyCode == 13 && selectCarModelGroup(carModelGroup)\"\n" +
    "                 title=\"{{carModelGroup.title}}\">\n" +
    "                <span ng-bind=\"carModelGroup.title\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- CAR MODEL END -->");
  $templateCache.put("js/src/modules/carFilterC/views/car_filter.car_manufacturing_years.html",
    "<!-- START car-manufacturing-years directive -->\n" +
    "\n" +
    "<div class=\"ui labels\">\n" +
    "    <button class=\"ui large label basic\"\n" +
    "            type=\"button\"\n" +
    "            ng-repeat=\"year in monYears | limitTo: 10\"\n" +
    "            tabindex=\"0\"\n" +
    "            ng-class=\"{\n" +
    "              'blue': year == calculation.car_manufacturing_year\n" +
    "            }\"\n" +
    "            ng-click=\"selectMonYear($index)\">\n" +
    "        <span ng-bind=\"year\"></span>\n" +
    "    </button>\n" +
    "\n" +
    "    <div style=\"display: inline-block;\" class=\"nowrap\">\n" +
    "        <label class=\"ml15\" style=\"display: inline-block;\">Другой:</label>\n" +
    "\n" +
    "        <div style=\"display: inline-block;\">\n" +
    "\n" +
    "            <div class=\"ui form\">\n" +
    "                <div class=\"field\" style=\"width: 90px;\">\n" +
    "                    <div sem-dropdown-items=\"monYears\"\n" +
    "                         class=\"ui compact selection dropdown\"\n" +
    "                         sem-dropdown\n" +
    "                         ng-focus=\"carFilterParams.was_clicked = true;\"\n" +
    "                         ng-click=\"carFilterParams.was_clicked = true;\"\n" +
    "                         ng-change=\"carFilterParams.was_clicked && selectMonYear()\"\n" +
    "                         sem-dropdown-placeholder=\"2016\"\n" +
    "                         sem-dropdown-simple=\"true\"\n" +
    "                         ng-model=\"calculation.car_manufacturing_year\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- END car-manufacturing-years directive -->");
  $templateCache.put("js/src/modules/carFilterC/views/car_filter.car_marks_list.html",
    "<div class=\"c-tac b-content-loading\" ng-if=\"!carMarks || !carMarks.length\">\n" +
    "    <i class=\"spinner loading icon big grey\" tabindex=\"0\"></i>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ui six column doubling grid\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"column ui list\"\n" +
    "             ng-repeat=\"column in carMarks | filter:$parent.carSearch | filter:filterByPopularity | limitTo:carMarksLimit | orderBy:orderBy | multiColumn:{columns: 6}\">\n" +
    "            <div ng-repeat=\"carMark in column\"\n" +
    "                 class=\"item css-car-item\"\n" +
    "                 title=\"{{carMark.title}}\"\n" +
    "                 tabindex=\"0\"\n" +
    "                 ng-class=\"{\n" +
    "                   'css-item-selected': carMarkSelected === carMark\n" +
    "                 }\"\n" +
    "                 ng-keypress=\"$event.keyCode == 13 && selectCarMark(carMark)\"\n" +
    "                 ng-click=\"selectCarMark(carMark)\">\n" +
    "                <span ng-bind=\"::carMark.title\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div style=\"position: relative;z-index: 2;\" class=\"c-tar\">\n" +
    "    <a href=\"\"\n" +
    "       class=\"car_filter-car_marks-all_marks_link p20   \"\n" +
    "       ng-click=\"toggleAllMarks()\">\n" +
    "        <span ng-if=\"carMarksLimit === limit\">Все марки</span>\n" +
    "        <span ng-if=\"carMarksLimit !== limit\">Закрыть</span>\n" +
    "    </a>\n" +
    "</div>\n" +
    "<!-- CAR MARKS END -->");
  $templateCache.put("js/src/modules/carFilterC/views/car_filter.car_models_list.html",
    "<!-- CAR MODEL BEGIN -->\n" +
    "<div class=\"c-tac b-content-loading\" ng-if=\"!carModels || !carModels.length\">\n" +
    "    <i class=\"spinner loading icon big grey\" tabindex=\"0\"></i>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ui five column doubling grid\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"column ui list\"\n" +
    "             ng-repeat=\"column in carModels | carFilterYears:carManufacturingYear | orderBy:'rank':reverse | orderBy:orderBy | multiColumn:{columns: 5}\">\n" +
    "            <div ng-repeat=\"carModel in column\"\n" +
    "                 class=\"item css-car-item\"\n" +
    "                 tabindex=\"0\"\n" +
    "                 ng-keypress=\"$event.keyCode == 13 && selectCarModel(carModel, true)\"\n" +
    "                 ng-click=\"selectCarModel(carModel, true)\"\n" +
    "                 ng-class=\"{\n" +
    "                   'css-item-selected': selectedModelId === carModel.id\n" +
    "                 }\"\n" +
    "                 title=\"{{carModel.title}}\">\n" +
    "                <span ng-bind=\"carModel.title\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- CAR MODEL END -->");
  $templateCache.put("js/src/modules/carFilterC/views/car_filter.html",
    "<!-- The group models are here -->\n" +
    "<style>\n" +
    "    .c-hidden {\n" +
    "        display: none;\n" +
    "    }\n" +
    "\n" +
    "    .b-calc-step--year .show-active-year,\n" +
    "    .b-calc-step--car .show-active-car,\n" +
    "    .b-calc-step--car_mark .show-active-car_mark,\n" +
    "    .b-calc-step--car_group_model .show-active-car_group_model,\n" +
    "    .b-calc-step--car_model .show-active-car_model,\n" +
    "    .b-calc-step--engine_power .show-active-engine_power,\n" +
    "    .b-calc-step--exploitation_area .show-active-exploitation_area,\n" +
    "    .b-calc-step--calculation_type .show-active-calculation_type,\n" +
    "    .b-calc-step--car_cost .show-active-car_cost,\n" +
    "    .b-calc-step--mileage .show-active-mileage,\n" +
    "    .b-calc-step--drivers .show-active-drivers {\n" +
    "        display: block;\n" +
    "    }\n" +
    "\n" +
    "    .b-calc-step-second--drivers_count .show-active-drivers_count,\n" +
    "    .b-calc-step-second--drivers .show-active-drivers,\n" +
    "    .b-calc-step-second--multidrive .show-active-multidrive,\n" +
    "    .b-calc-step-second--is_earlier_insurance .show-active-is_earlier_insurance,\n" +
    "    .b-calc-step-second--is_credit .show-active-is_credit,\n" +
    "    .b-calc-step-second--contributory_scheme .show-active-contributory_scheme,\n" +
    "    .b-calc-step-second--antitheft .show-active-antitheft\n" +
    "    {\n" +
    "        display: block;\n" +
    "    }\n" +
    "\n" +
    "    i.icon.delete:focus {\n" +
    "        color: #fff;\n" +
    "        opacity: 1 !important;\n" +
    "        outline: none;\n" +
    "    }\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"ui form b-calc-step\"\n" +
    "     ng-class=\"['b-calc-step--' + getActiveStep().name, 'b-calc-step-second--' +  getActiveStepSecond().name]\">\n" +
    "    <div ng-if=\"bigSteps.getBigStep().name === 'first'\" ng-include=\"carFilterTemplates.first_big_step\"></div>\n" +
    "    <div ng-if=\"bigSteps.getBigStep().name === 'second'\" ng-include=\"carFilterTemplates.second_big_step\"></div>\n" +
    "    <div ng-if=\"bigSteps.getBigStep().name === 'third'\" ng-include=\"carFilterTemplates.third_big_step\"></div>\n" +
    "    <div ng-if=\"bigSteps.getBigStep().name === 'fourth'\" ng-include=\"carFilterTemplates.fourth_big_step\"></div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("js/src/modules/carFilterC/views/first_big_step.html",
    "<div class=\"css-button-reset\">\n" +
    "    <div ng-show=\"getActiveStep().name !== 'year'\">\n" +
    "        <div class=\"ui large labels\"\n" +
    "             ng-class=\"$root.currentBrand.steps_buttons_color\">\n" +
    "            <div class=\"ui  label basic mb10\">\n" +
    "                <span ng-bind=\"calculation.car_manufacturing_year\"></span> г.в.\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setActiveStep('year')\"\n" +
    "                   ng-click=\"setActiveStep('year')\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"ui  label basic mb10\"\n" +
    "\n" +
    "                 ng-show=\"allSelected.carMark.title\">\n" +
    "                <span ng-bind=\"allSelected.carMark.title\"></span>\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-click=\"setCarStep(1)\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setCarStep(1)\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"ui  label basic mb10\"\n" +
    "                 ng-show=\"allSelected.carModelGroup.title\">\n" +
    "                <span ng-bind=\"allSelected.carModelGroup.title\"></span>\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setCarStep(2)\"\n" +
    "                   ng-click=\"setCarStep(2)\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"ui  label basic mb10\"\n" +
    "                 ng-show=\"allSelected.carModel.title\">\n" +
    "                <span ng-bind=\"allSelected.carModel.title\"></span>\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setCarStep(3)\"\n" +
    "                   ng-click=\"setCarStep(3)\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"ui  label basic mb10\"\n" +
    "                 ng-show=\"calculation.engine_power\">\n" +
    "                <span ng-bind=\"calculation.engine_power\"></span> л.с.\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setActiveStep('engine_power')\"\n" +
    "                   ng-click=\"setActiveStep('engine_power');\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--<div class=\"ui  label basic mb10\"-->\n" +
    "                 <!--ng-show=\"calculation.exploitation_area\">-->\n" +
    "                <!--<span ng-bind=\"carFilterParams.exploitation_area_title\"></span>-->\n" +
    "                <!--<i class=\"icon delete\"-->\n" +
    "                   <!--ng-keydown=\"$event.keyCode == 13 && setActiveStep('exploitation_area')\"-->\n" +
    "                   <!--ng-click=\"setActiveStep('exploitation_area');\"-->\n" +
    "                   <!--tabindex=\"0\"></i>-->\n" +
    "            <!--</div>-->\n" +
    "\n" +
    "            <div class=\"ui  label basic mb10\"\n" +
    "                 ng-show=\"calculation.car_cost\">\n" +
    "                <span ng-bind=\"calculation.car_cost | priceFormatter:2\"></span> руб.\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setActiveStep('car_cost')\"\n" +
    "                   ng-click=\"setActiveStep('car_cost');\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--<div class=\"ui  label basic mb10\"-->\n" +
    "                 <!--ng-show=\"calculation.mileage\">-->\n" +
    "                <!--<span ng-if=\"calculation.mileage !== '0'\">-->\n" +
    "                    <!--<span ng-bind=\"calculation.mileage | priceFormatter:0\"></span> км-->\n" +
    "                <!--</span>-->\n" +
    "\n" +
    "                <!--<span ng-if=\"calculation.mileage === '0'\">Без пробега</span>-->\n" +
    "                <!--<i class=\"icon delete\"-->\n" +
    "                   <!--ng-keydown=\"$event.keyCode == 13 && setActiveStep('mileage')\"-->\n" +
    "                   <!--ng-click=\"setActiveStep('mileage');\"-->\n" +
    "                   <!--tabindex=\"0\"></i>-->\n" +
    "            <!--</div>-->\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"p20\">\n" +
    "            <div class=\"ui divider\" style=\"border-top-style: dashed;\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-year pos-rel\">\n" +
    "        <div class=\"mb10\">\n" +
    "            <strong>Год выпуска автомобиля:</strong>\n" +
    "        </div>\n" +
    "\n" +
    "        <car-manufacturing-years></car-manufacturing-years>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-car pos-rel\">\n" +
    "        <div change-step=\"year\"\n" +
    "             change-step-type=\"back\"\n" +
    "             ng-if=\"carFilterStep === 1\"\n" +
    "             change-step-method=\"setActiveStep\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div change-step=\"1\"\n" +
    "             ng-if=\"carFilterStep === 2\"\n" +
    "             change-step-type=\"back\"\n" +
    "             change-step-method=\"setCarStep\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div change-step=\"2\"\n" +
    "             ng-if=\"carFilterStep === 3\"\n" +
    "             change-step-type=\"back\"\n" +
    "             change-step-method=\"setCarStep\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"calculator-caption calculator-caption-model mb15\">\n" +
    "            <div ng-if=\"carFilterStep === 1\" class=\"pos-rel\">\n" +
    "                <b>Выберите марку:</b>\n" +
    "\n" +
    "                <label class=\"b-car-search\">\n" +
    "                    <div class=\"ui icon input transparent\">\n" +
    "                        <input type=\"text\" placeholder=\"Найти\" ng-model=\"carSearch.title\"/>\n" +
    "                        <i class=\"icon search\"></i>\n" +
    "                    </div>\n" +
    "                </label>\n" +
    "            </div>\n" +
    "\n" +
    "            <b ng-if=\"carFilterStep > 1\">\n" +
    "                <b ng-if=\"carFilterStep === 2\">Выберите модель —</b>\n" +
    "                <b ng-if=\"carFilterStep === 3\">Выберите модификацию —</b>\n" +
    "                {{allSelected.carMark.title}}\n" +
    "                <span ng-if=\"!allSelected.carModel.title\">{{allSelected.carModelGroup.title}}</span>\n" +
    "                <span ng-if=\"allSelected.carModel.title\">{{allSelected.carModel.title}}</span>:\n" +
    "            </b>\n" +
    "        </div>\n" +
    "\n" +
    "        <div car-marks-list\n" +
    "             style=\"clear: both;\"\n" +
    "             ng-model=\"calculation.car_mark\"\n" +
    "             limit=\"56\"\n" +
    "             ng-show=\"carFilterStep === 1\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div car-group-models-list\n" +
    "             style=\"clear: both;\"\n" +
    "             ng-if=\"carFilterStep === 2 && !selectedCar.carModel.id\"\n" +
    "             ng-model=\"calculation.car_model_group\"\n" +
    "             car-manufacturing-year=\"calculation.car_manufacturing_year\"\n" +
    "             car-mark-id=\"modelCarMark\">\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div car-models-list\n" +
    "             style=\"clear: both;\"\n" +
    "             ng-if=\"carFilterStep >= 3 && !selectedCar.carModel.id\"\n" +
    "             ng-model=\"calculation.car_model\"\n" +
    "             car-mark-id=\"modelCarMark\"\n" +
    "             car-manufacturing-year=\"calculation.car_manufacturing_year\"\n" +
    "             car-model-group-id=\"calculation.car_model_group\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-engine_power pos-rel\">\n" +
    "        <div change-step=\"3\"\n" +
    "             change-step-type=\"back\"\n" +
    "             change-step-method=\"setCarStep\">\n" +
    "        </div>\n" +
    "        <div class=\"fields\">\n" +
    "            <div class=\"five wide field nowrap\">\n" +
    "                <label for=\"id_engine_power\">Выберите мощность двигателя, л.с.:</label>\n" +
    "\n" +
    "                <input type=\"text\"\n" +
    "                       ng-class=\"{'is-invalid-calc': carFilterParams.engine_power < 10 || carFilterParams.engine_power > 999}\"\n" +
    "                       ng-model=\"carFilterParams.engine_power\"\n" +
    "                       input-only=\"[0-9]{1,3}\"\n" +
    "                       placeholder=\"0\"\n" +
    "                       class=\"input-has-slider\"\n" +
    "                       required\n" +
    "                       id=\"id_engine_power\"/>\n" +
    "\n" +
    "                <div input-slider\n" +
    "                     default-min=\"70\"\n" +
    "                     slider-step=\"1\"\n" +
    "                     default-max=\"500\"\n" +
    "                     ng-model=\"carFilterParams.engine_power\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"eleven wide field c-tar\">\n" +
    "                <label>&nbsp;</label>\n" +
    "                <button type=\"button\"\n" +
    "                        ng-click=\"enginePowerNext()\"\n" +
    "                        ng-disabled=\"!carFilterParams.engine_power\"\n" +
    "                        ng-class=\"$root.currentBrand.main_buttons_color\"\n" +
    "                        class=\"ui button\">Далее\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-exploitation_area pos-rel\">\n" +
    "        <div change-step=\"engine_power\"\n" +
    "             change-step-type=\"back\"\n" +
    "             change-step-method=\"setActiveStep\">\n" +
    "        </div>\n" +
    "        <h3 class=\"b-content_title mb20 mt30\">Выберите регион эксплуатации автомобиля:</h3>\n" +
    "\n" +
    "        <div class=\"ui grid stackable\">\n" +
    "            <div class=\"twelve wide column\"\n" +
    "                 ng-show=\"!carFilterParams.ownerRegistrationViewIsFull\">\n" +
    "                <h3 class=\"b-content_title p20 m0\">\n" +
    "                    <a href=\"\"\n" +
    "                       ng-repeat=\"item in mainRegions\"\n" +
    "                       ng-click=\"selectOwnerRegistration(item.id)\"\n" +
    "                       ng-bind=\"item.title\"\n" +
    "                       ng-class=\"{'css-bottom-dashed--active': item.id == carFilterParams.exploitation_area}\"\n" +
    "                       class=\"mr25 css-bottom-dashed mb10\"></a>\n" +
    "\n" +
    "                    <a href=\"\" ng-click=\"toggleOwnerRegistrationView()\" ng-if=\"!carFilterParams.exploitation_area_all_are_hidden\">другой</a>\n" +
    "                </h3>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"five wide column\" ng-show=\"carFilterParams.ownerRegistrationViewIsFull\">\n" +
    "                <div class=\"p20 field\">\n" +
    "                    <div class=\"ui search selection dropdown\"\n" +
    "                         id=\"id_exploitation_area\"\n" +
    "                         ng-focus=\"carFilterParams.was_clicked = true;\"\n" +
    "                         ng-click=\"carFilterParams.was_clicked = true;\"\n" +
    "                         sem-dropdown\n" +
    "                         sem-dropdown-placeholder=\"Не выбран\"\n" +
    "                         ng-model=\"carFilterParams.exploitation_area\"\n" +
    "                         ng-change=\"carFilterParams.was_clicked && selectOwnerRegistration()\"\n" +
    "                         sem-dropdown-items=\"ownerRegistration\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"seven wide column\" ng-show=\"carFilterParams.ownerRegistrationViewIsFull\">&nbsp;</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-car_cost pos-rel\">\n" +
    "        <div change-step=\"exploitation_area\"\n" +
    "             change-step-type=\"back\"\n" +
    "             change-step-method=\"setActiveStep\">\n" +
    "        </div>\n" +
    "        <div class=\"fields\">\n" +
    "            <div class=\"five wide field nowrap\">\n" +
    "                <label for=\"id_car_cost\">\n" +
    "                    <span ng-bind=\"$root.currentBrand.car_cost_text ? $root.currentBrand.car_cost_text : 'Укажите стоимость автомобиля в руб.:'\">\n" +
    "                    </span>\n" +
    "                </label>\n" +
    "\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"carFilterParams.car_cost\"\n" +
    "                       price-formatter=\"2\"\n" +
    "                       class=\"input-has-slider\"\n" +
    "                       required\n" +
    "                       no-empty\n" +
    "                       id=\"id_car_cost\"/>\n" +
    "\n" +
    "                <div input-slider\n" +
    "                     is-sum=\"true\"\n" +
    "                     default-min=\"100000\"\n" +
    "                     slider-step=\"5000\"\n" +
    "                     default-max=\"3000000\"\n" +
    "                     ng-model=\"carFilterParams.car_cost\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"eleven wide field c-tar\">\n" +
    "                <label>&nbsp;</label>\n" +
    "                <button type=\"button\"\n" +
    "                        ng-click=\"carCostNext()\"\n" +
    "                        ng-disabled=\"!carFilterParams.car_cost\"\n" +
    "                        ng-class=\"$root.currentBrand.main_buttons_color\"\n" +
    "                        class=\"ui button\">\n" +
    "                    Далее\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-mileage pos-rel\">\n" +
    "        <div change-step=\"car_cost\"\n" +
    "             change-step-type=\"back\"\n" +
    "             change-step-method=\"setActiveStep\">\n" +
    "        </div>\n" +
    "        <div class=\"fields\">\n" +
    "            <div class=\"five wide field nowrap\">\n" +
    "                <label for=\"id_mileage\">Укажите пробег автомобиля в км:</label>\n" +
    "\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"carFilterParams.mileage\"\n" +
    "                       price-formatter=\"2\"\n" +
    "                       class=\"input-has-slider\"\n" +
    "                       id=\"id_mileage\"/>\n" +
    "\n" +
    "                <div input-slider\n" +
    "                     is-sum=\"true\"\n" +
    "                     default-min=\"0\"\n" +
    "                     slider-step=\"500\"\n" +
    "                     default-max=\"200000\"\n" +
    "                     ng-model=\"carFilterParams.mileage\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"eleven wide field c-tar\">\n" +
    "                <label>&nbsp;</label>\n" +
    "                <button type=\"button\"\n" +
    "                        ng-click=\"mileageNext()\"\n" +
    "                        ng-class=\"$root.currentBrand.main_buttons_color\"\n" +
    "                        class=\"ui button\">Далее\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/carFilterC/views/fourth_big_step.html",
    "<div ng-controller=\"policyOrderingCtrl\">\n" +
    "    <div class=\"b-ordering m0 is-form pos-rel\" ng-form=\"ordering_form\">\n" +
    "        <div change-step=\"third\"\n" +
    "             change-step-type=\"back\"\n" +
    "             change-step-method=\"bigSteps.setBigStep\">\n" +
    "        </div>\n" +
    "        <div class=\"ui grid stackable\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"eleven wide column\">\n" +
    "                    <div class=\"b-ordering-block b-full-width-bg b-full-width-bg--green p30\"\n" +
    "                         style=\"height: 100%;\"\n" +
    "                         ng-if=\"carInfo.carMark\">\n" +
    "                        <h3 class=\"b-content_title m0\">Автомобиль</h3>\n" +
    "\n" +
    "                        <h3 class=\"b-content_title p20 msetActiveStepSecondt10 mt10\">\n" +
    "                            <strong>\n" +
    "                                <span ng-bind=\"carInfo.carMark.title\"></span>\n" +
    "                                <span ng-bind=\"carInfo.carModelGroup.title\"></span>\n" +
    "                                <span ng-bind=\"carInfo.carModel.title\"></span> —\n" +
    "                                <span ng-bind=\"calculation.car_manufacturing_year\"></span> г. выпуска,\n" +
    "                                <span ng-bind=\"calculation.engine_power\"></span> л.с.\n" +
    "                            </strong>\n" +
    "                        </h3>\n" +
    "                        <h3 class=\"b-content_title p20 msetActiveStepSecondt10\">\n" +
    "                            <strong>Пробег:</strong> <span ng-bind=\"calculation.mileage\"></span> км\n" +
    "                        </h3>\n" +
    "                        <h3 class=\"b-content_title p20 msetActiveStepSecondt10\">\n" +
    "                            <strong>Стоимость:</strong> <span ng-bind=\"calculation.car_cost | priceFormatter:0:'':false\"></span> руб.\n" +
    "                        </h3>\n" +
    "\n" +
    "                        <h3 class=\"b-content_title p20\">\n" +
    "                            <strong>\n" +
    "                                Куплен в кредит:\n" +
    "                            </strong>\n" +
    "\n" +
    "                            <span ng-bind=\"calculation.is_credit ? 'Да' : 'Нет'\"></span>\n" +
    "                        </h3>\n" +
    "\n" +
    "                        <h3 class=\"b-content_title mt30\">Водители:</h3>\n" +
    "\n" +
    "                        <h3 class=\"b-content_title p20 mt10\" ng-show=\"!calculation.is_multidrive\">\n" +
    "                            <div ng-repeat=\"driver in calculation.driver_set\">\n" +
    "                                <strong>Возраст - <span ng-bind=\"driver.age\"></span>, стаж - <span ng-bind=\"driver.expirience\"></span></strong>\n" +
    "                            </div>\n" +
    "                        </h3>\n" +
    "\n" +
    "                        <h3 class=\"b-content_title p20 mt10\" ng-show=\"calculation.is_multidrive\">\n" +
    "                            <div>\n" +
    "                                <strong>\n" +
    "                                    Минимальный возраст -\n" +
    "                                    <span ng-bind=\"calculation.drivers_minimal_age\"></span>, минимальный стаж -\n" +
    "                                    <span ng-bind=\"calculation.drivers_minimal_experience\"></span>\n" +
    "                                </strong>\n" +
    "                            </div>\n" +
    "                        </h3>\n" +
    "\n" +
    "                        <div class=\"b-ordering-block_icon\">\n" +
    "                            <i class=\"icon info\"></i>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"five wide column\">\n" +
    "                    <div class=\"b-full-width-bg b-ordering-block b-full-width-bg--red\" ng-if=\"carFilterParams.selectedResult()\">\n" +
    "                        <h3 class=\"b-content_title m0\">Выбранный страховой продукт:</h3>\n" +
    "\n" +
    "                        <h3 class=\"b-content_title c-tar m0 mt10\">\n" +
    "                            <div class=\"b-ordering_ins-company\">\n" +
    "                                <strong ng-bind=\"carFilterParams.selectedResult().insurance_company.title\"></strong>\n" +
    "                            </div>\n" +
    "                            <div class=\"mt5 b-ordering_price\">\n" +
    "                                <strong>\n" +
    "                                    <span ng-bind=\"carFilterParams.selectedResult().program.sum\n" +
    "                                    | priceFormatter:0:'':false\"></span>\n" +
    "                                    <!--.<small ng-bind=\"carFilterParams.selectedResult().program.sum-->\n" +
    "                                    <!--| fractionalFormatter:2\"></small>-->\n" +
    "                                    р.\n" +
    "                                </strong>\n" +
    "                            </div>\n" +
    "                        </h3>\n" +
    "\n" +
    "                        <h3 class=\"b-content_title mt10\" ng-if=\"calculation.deductible_value\">\n" +
    "                            Франшиза:\n" +
    "                            <strong>\n" +
    "                                <span ng-bind=\"calculation.deductible_value | priceFormatter:0:'':false\"></span>\n" +
    "                                р.\n" +
    "                            </strong>\n" +
    "                        </h3>\n" +
    "\n" +
    "                        <h3 class=\"b-content_title mt10\">\n" +
    "                            Рассрочка:\n" +
    "                            <strong>\n" +
    "                                <span dictionary=\"contributoryScheme\"\n" +
    "                                      dictionary-prop=\"title\"\n" +
    "                                      dictionary-id=\"calculation.contributory_scheme\">\n" +
    "                                </span>\n" +
    "                            </strong>\n" +
    "                        </h3>\n" +
    "\n" +
    "<!--\n" +
    "                        <h3 class=\"b-content_title mt10\">\n" +
    "                            <strong>\n" +
    "                                <span dictionary=\"paymentForm\"\n" +
    "                                      dictionary-prop=\"title\"\n" +
    "                                      dictionary-id=\"calculation.payment_form\">\n" +
    "                                </span>\n" +
    "                                <span ng-bind=\"dictionaryTitles.payment_form\"></span>\n" +
    "                            </strong>\n" +
    "                        </h3>\n" +
    "-->\n" +
    "\n" +
    "                        <div class=\"b-ordering-block_icon\">\n" +
    "                            <i class=\"icon calculator\"></i>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"eleven wide column\">\n" +
    "                    <div class=\"b-full-width-bg b-ordering-block b-ordering-block--form\">\n" +
    "                        <h3 class=\"b-content_title m0 mb20\">Введите данные для оформления заказа:</h3>\n" +
    "\n" +
    "                        <form name=\"ordering_form\">\n" +
    "                            <div class=\"ui form\">\n" +
    "                                <div class=\"ui grid stackable two column\">\n" +
    "                                    <div class=\"row\"\n" +
    "                                         ng-if=\"!currentBrand.with_sms\">\n" +
    "                                        <div class=\"column\">\n" +
    "                                            <div class=\"field\">\n" +
    "                                                <label for=\"your_name\">Ваше имя:</label>\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       id=\"your_name\"\n" +
    "                                                       ng-model=\"formFields.client_name\"\n" +
    "                                                       required/>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "\n" +
    "                                        <div class=\"column\">\n" +
    "                                            <div class=\"field\">\n" +
    "                                                <label>Ваш телефон:</label>\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       ui-mask=\"+7 (999) 999-9999\"\n" +
    "                                                       required\n" +
    "                                                       placeholder=\"+7 (___) ___-____\"\n" +
    "                                                       ng-model=\"formFields.client_phone\"/>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <div class=\"column\">\n" +
    "                                            <div class=\"field\">\n" +
    "                                                <label>Способ оплаты:</label>\n" +
    "\n" +
    "                                                <div class=\"ui search selection dropdown\"\n" +
    "                                                     id=\"id_owner_registration\"\n" +
    "                                                     sem-dropdown\n" +
    "                                                     ng-model=\"formFields.payment_type\"\n" +
    "                                                     sem-dropdown-simple=\"true\"\n" +
    "                                                     sem-dropdown-items=\"paymentType\"></div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"row one column\">\n" +
    "                                        <div class=\"column\">\n" +
    "                                            <div class=\"mt10\">\n" +
    "                                                <sem-checkbox ng-model=\"formFields.receipt_type\"\n" +
    "                                                              sem-label=\"Бесплатная доставка в течение 2-х дней\"\n" +
    "                                                              sem-type=\"radio\"\n" +
    "                                                              class=\"mr25\"\n" +
    "                                                              name=\"receipt_type\"\n" +
    "                                                              value=\"delivery\"></sem-checkbox>\n" +
    "\n" +
    "                                                <sem-checkbox ng-model=\"formFields.receipt_type\"\n" +
    "                                                              sem-label=\"Оформление в офисе\"\n" +
    "                                                              sem-type=\"radio\"\n" +
    "                                                              name=\"receipt_type\"\n" +
    "                                                              value=\"office\"></sem-checkbox>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"ui grid\"\n" +
    "                                     ng-if=\"formFields.receipt_type === 'delivery'\">\n" +
    "                                    <div class=\"row one column pt0\">\n" +
    "                                        <div class=\"column\">\n" +
    "                                            <div class=\"field\">\n" +
    "                                                <label for=\"id_delivery_address\">Адрес доставки:</label>\n" +
    "\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       required\n" +
    "                                                       id=\"id_delivery_address\"\n" +
    "                                                       ng-model=\"formFields.delivery_address\"/>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"row two column pt0\">\n" +
    "                                        <div class=\"column\">\n" +
    "                                            <div class=\"field\"\n" +
    "                                                 ng-class=\"{error: formFields.delivery_date && ordering_form.delivery_date.$invalid}\">\n" +
    "                                                <label for=\"id_delivery_date\">Дата доставки:</label>\n" +
    "\n" +
    "                                                <div class=\"ui icon input\">\n" +
    "                                                    <input type=\"text\"\n" +
    "                                                           jdatepicker\n" +
    "                                                           jdatepicker-year-range=\"{{getYearRange(0, 0)}}\"\n" +
    "                                                           jdatepicker-only-future=\"true\"\n" +
    "                                                           name=\"delivery_date\"\n" +
    "                                                           placeholder=\"__.__.____\"\n" +
    "                                                           id=\"id_delivery_date\"\n" +
    "                                                           required\n" +
    "                                                           ng-model=\"formFields.delivery_date\">\n" +
    "                                                    <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "\n" +
    "                                        <div class=\"column\">\n" +
    "                                            <div class=\"field\">\n" +
    "                                                <label for=\"id_delivery_time\">Время доставки:</label>\n" +
    "\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       required\n" +
    "                                                       ng-model=\"formFields.delivery_time\"\n" +
    "                                                       id=\"id_delivery_time\"/>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"ui grid\"\n" +
    "                                     ng-if=\"formFields.receipt_type === 'office'\">\n" +
    "                                    <div class=\"row two column pt0\">\n" +
    "                                        <div class=\"column\">\n" +
    "                                            <div class=\"field\"\n" +
    "                                                 ng-class=\"{error: formFields.arrival_date && ordering_form.arrival_date.$invalid}\">\n" +
    "                                                <label for=\"id_arrival_date\">Дата оформления:</label>\n" +
    "\n" +
    "                                                <div class=\"ui icon input\">\n" +
    "                                                    <input type=\"text\"\n" +
    "                                                           jdatepicker\n" +
    "                                                           jdatepicker-year-range=\"{{getYearRange(0, 0)}}\"\n" +
    "                                                           jdatepicker-only-future=\"true\"\n" +
    "                                                           name=\"arrival_date\"\n" +
    "                                                           placeholder=\"__.__.____\"\n" +
    "                                                           id=\"id_arrival_date\"\n" +
    "                                                           required\n" +
    "                                                           ng-model=\"formFields.arrival_date\">\n" +
    "                                                    <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "\n" +
    "                                        <div class=\"column\" ng-if=\"!$root.currentBrand.arrival_time_is_hidden\">\n" +
    "                                            <div class=\"field\">\n" +
    "                                                <label for=\"id_arrival_time\">Время оформления:</label>\n" +
    "\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       required\n" +
    "                                                       ng-model=\"formFields.arrival_time\"\n" +
    "                                                       id=\"id_arrival_time\"/>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"b-ordering-block_send c-tar mt40\" ng-hide=\"true\">\n" +
    "                                <button class=\"ui branded green\" type=\"button\" disabled>Заказать полис</button>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "\n" +
    "                        <div class=\"b-ordering-block_icon\">\n" +
    "                            <i class=\"icon write\"></i>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"five wide column\">\n" +
    "                    <div class=\"b-ordering-block_submit b-full-width-bg b-ordering-block b-full-width-bg--grey\">\n" +
    "                        <button type=\"button\"\n" +
    "                                ng-click=\"sendPolicyOrdering()\"\n" +
    "                                ng-class=\"{loading: policyOrderingInProgress}\"\n" +
    "                                ng-disabled=\"ordering_form.$invalid || policyOrderingInProgress\"\n" +
    "                                class=\"ui button branded nowrap\">Заказать полис\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/carFilterC/views/program_list.manager.html",
    "<div class=\"b-post-calculate\"\n" +
    "     ng-show=\"postCalculateParams.is_visible\"><!--ng-if=\"params.resultsAreCreated\"-->\n" +
    "    <div align=\"center\">\n" +
    "        <div class=\"b-post-calculate_pre\"\n" +
    "             ng-show=\"!postCalculateParams.second && !postCalculateParams.third\">\n" +
    "            <div ng-show=\"!postCalculateParams.first\">\n" +
    "                <div class=\"b-post-calculate_pre-title\">\n" +
    "                    <i class=\"icon info circle\"></i> КАСКО можно сделать дешевле! Попробуем?\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"b-post-calculate_pre-actions mt20\">\n" +
    "                    <button class=\"ui button green small\"\n" +
    "                            ng-click=\"postCalculateParams.first = true;\"\n" +
    "                            type=\"button\">Да, конечно</button>\n" +
    "                    <button class=\"ui button orange small ml10\"\n" +
    "                            ng-click=\"postCalculateParams.is_visible = false;\"\n" +
    "                            type=\"button\">Нет, спасибо</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-show=\"postCalculateParams.first\">\n" +
    "                <div class=\"b-post-calculate_pre-title\">\n" +
    "                    <i class=\"icon info circle\"></i> Самостоятельно на сайте или с помощью менеджера?\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"b-post-calculate_pre-actions mt20\">\n" +
    "                    <button class=\"ui button green small\"\n" +
    "                            ng-click=\"postCalculateParams.second = true;\"\n" +
    "                            type=\"button\">\n" +
    "                        Я сам\n" +
    "                    </button>\n" +
    "                    <button class=\"ui button olive small ml10\"\n" +
    "                            ng-click=\"toManager()\"\n" +
    "                            type=\"button\">\n" +
    "                        Пусть позвонит менеджер\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"b-post-calculate_manager\"\n" +
    "         ng-show=\"postCalculateParams.third\">\n" +
    "        <div class=\"ui form\">\n" +
    "            <div class=\"ui grid two column stackable\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"column\">\n" +
    "                        <div class=\"field\">\n" +
    "                            <label for=\"id_manager__client_name\">Как к вам обращаться?</label>\n" +
    "                            <input type=\"text\"\n" +
    "                                   id=\"id_manager__client_name\"\n" +
    "                                   ng-model=\"postCalculateParams.manager__client_name\"/>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"column\">\n" +
    "                        <div class=\"field\">\n" +
    "                            <label for=\"id_manager__client_phone\">Номер телефона:</label>\n" +
    "\n" +
    "                            <input type=\"text\"\n" +
    "                                   ui-mask=\"+7 (999) 999-9999\"\n" +
    "                                   placeholder=\"+7 (___) ___-____\"\n" +
    "                                   ng-model=\"clientParams.manager__client_phone\"\n" +
    "                                   id=\"id_manager__client_phone\" />\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"column\"></div>\n" +
    "                    <div class=\"column\">\n" +
    "                        <button class=\"ui button green fluid\"\n" +
    "                                ng-click=\"sendToManager()\"\n" +
    "                                ng-disabled=\"!postCalculateParams.manager__client_name || !clientParams.manager__client_phone\n" +
    "                                || postCalculateParams.button_is_disabled\"\n" +
    "                                type=\"button\">Отправить заявку на звонок</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"b-post-calculate_fields css-bigger-labels\" ng-show=\"postCalculateParams.second\">\n" +
    "        <div class=\"ui form\">\n" +
    "            <div class=\"ui grid two column stackable doubling\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"column\">\n" +
    "                        <div class=\"field\">\n" +
    "                            <label for=\"id_deductible_value\">Франшиза:</label>\n" +
    "                            <input type=\"text\"\n" +
    "                                   id=\"id_deductible_value\"\n" +
    "                                   class=\"input-has-slider\"\n" +
    "                                   name=\"deductible_value\"\n" +
    "                                   ng-model=\"params.deductible_value\"/>\n" +
    "\n" +
    "                            <div input-slider\n" +
    "                                 is-sum=\"true\"\n" +
    "                                 default-min=\"0\"\n" +
    "                                 slider-step=\"500\"\n" +
    "                                 default-max=\"50000\"\n" +
    "                                 ng-model=\"params.deductible_value\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"column\" align=\"center\">\n" +
    "                        <p class=\"pt10\"><i class=\"icon help circle grey\"></i>\n" +
    "                            Франшиза — это та часть ущерба, которую вы возмещаете за свой счет, если наступил страховой случай.\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"sixteen wide column\">\n" +
    "                        <div class=\"field pt10\">\n" +
    "                            <label>Рассрочка оплаты на год:</label>\n" +
    "\n" +
    "                            <div class=\"four ui buttons mt5\" style=\"border: none;\">\n" +
    "                                <button class=\"ui teal button\"\n" +
    "                                        ng-repeat=\"item in params.contributoryScheme\"\n" +
    "                                        type=\"button\"\n" +
    "                                        ng-class=\"{basic: item.id !== params.contributory_scheme}\"\n" +
    "                                        ng-click=\"params.contributory_scheme = item.id\">\n" +
    "                                    <span ng-bind=\"item.title\"></span>\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"row\"\n" +
    "                     ng-hide=\"$root.currentBrand.payment_form_is_hidden\">\n" +
    "                    <div class=\"sixteen wide column\">\n" +
    "                        <div class=\"field\">\n" +
    "                            <label>Ремонт:</label>\n" +
    "\n" +
    "                            <div class=\"four ui buttons mt5\" style=\"border: none;\">\n" +
    "                                <button class=\"ui teal button\"\n" +
    "                                        ng-repeat=\"item in paymentForm\"\n" +
    "                                        type=\"button\"\n" +
    "                                        ng-class=\"{basic: item.id !== params.payment_form}\"\n" +
    "                                        ng-click=\"params.payment_form = item.id\">\n" +
    "                                    <span ng-bind=\"item.title\"></span>\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"sixteen wide column\">\n" +
    "                        <div class=\"mt15\" align=\"right\">\n" +
    "                            <button class=\"ui button green m0\"\n" +
    "                                    style=\"width: 50%;\"\n" +
    "                                    ng-disabled=\"params.recalculateButtonIsDisabled\"\n" +
    "                                    ng-click=\"calculateKasko()\"\n" +
    "                                    ng-class=\"{loading: params.recalculateButtonIsDisabled}\"\n" +
    "                                    type=\"button\">Обновить тарифы</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<style>\n" +
    "    .b-post-calculate_pre {\n" +
    "        padding: 15px 20px;\n" +
    "        background-color: #fff;\n" +
    "        display: inline-block;\n" +
    "        color: #e24646;\n" +
    "        border: 2px solid #ff9a9a;\n" +
    "        border-radius: 4px;\n" +
    "    }\n" +
    "\n" +
    "    .b-post-calculate_pre-title {\n" +
    "        font-size: 16px;\n" +
    "    }\n" +
    "\n" +
    "    .b-post-calculate_pre-title i.icon {\n" +
    "        font-size: 1.2em;\n" +
    "    }\n" +
    "\n" +
    "    .b-post-calculate_fields,\n" +
    "    .b-post-calculate_manager {\n" +
    "        padding: 25px 30px;\n" +
    "        border: 1px solid #d8f0fe;\n" +
    "        width: 96%;\n" +
    "        max-width: 580px;\n" +
    "        margin: 0 auto;\n" +
    "        border-radius: 4px;\n" +
    "        background-color: rgba(235, 243, 249, 0.23);\n" +
    "    }\n" +
    "</style>");
  $templateCache.put("js/src/modules/carFilterC/views/second_big_step.html",
    "<div>\n" +
    "    <div ng-show=\"getActiveStepSecond().name !== 'drivers_count'\">\n" +
    "        <div class=\"ui large labels\"\n" +
    "             ng-class=\"$root.currentBrand.steps_buttons_color\">\n" +
    "            <div class=\"ui label basic mb10\">\n" +
    "                <span ng-bind=\"carFilterParams.drivers_count.title\"></span>\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setActiveStepSecond('drivers_count')\"\n" +
    "                   ng-click=\"setActiveStepSecond('drivers_count')\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"ui label basic mb10\"\n" +
    "                 ng-if=\"calculation.is_multidrive\">\n" +
    "                Мультидрайв:\n" +
    "                <span ng-bind=\"calculation.drivers_minimal_age\"></span>\n" +
    "                /<span ng-bind=\"calculation.drivers_minimal_experience\"></span>\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setActiveStepSecond('drivers_count')\"\n" +
    "                   ng-click=\"setActiveStepSecond('drivers_count')\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--          <div class=\"ui label basic mb10\"\n" +
    "                           ng-if=\"calculation.is_earlier_insurance !== null\">\n" +
    "                          <span ng-bind=\"calculation.is_earlier_insurance ? 'Ранее страховался' : 'Не страховался'\"></span>\n" +
    "                          <i class=\"icon delete\"\n" +
    "                             ng-keydown=\"$event.keyCode == 13 && setActiveStepSecond('is_earlier_insurance')\"\n" +
    "                             ng-click=\"setActiveStepSecond('is_earlier_insurance')\"\n" +
    "                             tabindex=\"0\"></i>\n" +
    "                      </div>\n" +
    "                      -->\n" +
    "            <div class=\"ui label basic mb10\"\n" +
    "                 ng-if=\"calculation.is_credit !== null\">\n" +
    "                <span ng-bind=\"calculation.is_credit ? 'Куплен в кредит' : 'Не кредитный'\"></span>\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setActiveStepSecond('is_credit')\"\n" +
    "                   ng-click=\"setActiveStepSecond('is_credit')\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "            <!--\n" +
    "            <div class=\"ui label basic mb10\"\n" +
    "                 ng-if=\"calculation.contributory_scheme\">\n" +
    "                <span dictionary=\"contributoryScheme\"\n" +
    "                      dictionary-prop=\"title\"\n" +
    "                      dictionary-id=\"calculation.contributory_scheme\"></span>\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setActiveStepSecond('contributory_scheme')\"\n" +
    "                   ng-click=\"setActiveStepSecond('contributory_scheme')\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>-->\n" +
    "\n" +
    "            <!--\n" +
    "            <div class=\"ui label basic mb10\"\n" +
    "                 ng-if=\"calculation.antitheft\">\n" +
    "                <span dictionary=\"antiThefts\"\n" +
    "                      dictionary-prop=\"title\"\n" +
    "                      dictionary-id=\"calculation.antitheft\"></span>\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setActiveStepSecond('antitheft')\"\n" +
    "                   ng-click=\"setActiveStepSecond('antitheft')\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>-->\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"p20\">\n" +
    "            <div class=\"ui divider\" style=\"border-top-style: dashed;\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-drivers_count pos-rel\">\n" +
    "        <div change-step=\"first\"\n" +
    "             change-step-type=\"back\"\n" +
    "             change-step-method=\"bigSteps.setBigStep\">\n" +
    "        </div>\n" +
    "        <h2 class=\"b-content_title mb20\">Выберите количество водителей:</h2>\n" +
    "\n" +
    "        <div class=\"five ui basic buttons\"\n" +
    "             ng-class=\"$root.currentBrand.main_buttons_color\">\n" +
    "            <button class=\"ui button\"\n" +
    "                    ng-repeat=\"item in driversChanging\"\n" +
    "                    ng-click=\"changeDriversCount(item)\"\n" +
    "                    type=\"button\">\n" +
    "                <span ng-bind=\"item.title\"></span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-drivers css-bigger-labels css-bigger-slider pos-rel\">\n" +
    "        <div change-step=\"drivers_count\"\n" +
    "             change-step-type=\"back\"\n" +
    "             change-step-method=\"setActiveStepSecond\">\n" +
    "        </div>\n" +
    "        <div ng-form=\"all_drivers_form\">\n" +
    "            <div ng-repeat=\"item in carFilterParams.drivers track by $index\"\n" +
    "                 ng-form=\"driver_kasko_form\">\n" +
    "                <h2 class=\"b-content_title mb20 mt30\"\n" +
    "                    ng-if=\"carFilterParams.currentDriverIndex === $index\"><span ng-bind=\"$index + 1\"></span>-й водитель:</h2>\n" +
    "                <h3 class=\"b-content_title mb20 mt30\"\n" +
    "                    ng-if=\"carFilterParams.lastDriverIndex > $index && carFilterParams.currentDriverIndex !== $index\">\n" +
    "                    <span>\n" +
    "                        <span ng-bind=\"$index + 1\"></span>-й водитель: <span ng-bind=\"item.gender === 'M' ? 'Муж.' : 'Жен.'\"></span>\n" +
    "                        <span ng-bind=\"item.age + '/' + item.expirience\"></span>\n" +
    "                        <i class=\"icon write ml10\"\n" +
    "                           ng-if=\"all_drivers_form.$valid && !carFilterParams.driverIsEditing\"\n" +
    "                           ng-click=\"toEditDriver($index)\"></i>\n" +
    "                    </span>\n" +
    "                </h3>\n" +
    "\n" +
    "                <div class=\"ui grid three column mt20 doubling stackable\"\n" +
    "                     ng-if=\"carFilterParams.currentDriverIndex === $index\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"column\">\n" +
    "                            <div class=\"field\"\n" +
    "                                 ng-class=\"{'error': item.age < 18 || item.age > 90}\">\n" +
    "                                <label for=\"id_driver_age_{{$index}}\">Возраст:</label>\n" +
    "                                <input type=\"text\"\n" +
    "                                       id=\"id_driver_age_{{$index}}\"\n" +
    "                                       class=\"input-has-slider\"\n" +
    "                                       price-formatter\n" +
    "                                       name=\"age\"\n" +
    "                                       required\n" +
    "                                       ng-model=\"item.age\"/>\n" +
    "\n" +
    "                                <div input-slider\n" +
    "                                     default-min=\"18\"\n" +
    "                                     slider-step=\"1\"\n" +
    "                                     default-max=\"90\"\n" +
    "                                     ng-model=\"item.age\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"column\">\n" +
    "                            <div class=\"field\"\n" +
    "                                 ng-class=\"{'error': item.age - item.expirience < 18}\">\n" +
    "                                <label for=\"id_driver_expirience_{{$index}}\">Стаж:</label>\n" +
    "                                <input type=\"text\"\n" +
    "                                       id=\"id_driver_expirience_{{$index}}\"\n" +
    "                                       required\n" +
    "                                       class=\"input-has-slider\"\n" +
    "                                       name=\"expirience\"\n" +
    "                                       price-formatter\n" +
    "                                       ng-model=\"item.expirience\"/>\n" +
    "\n" +
    "                                <div input-slider\n" +
    "                                     default-min=\"0\"\n" +
    "                                     slider-step=\"1\"\n" +
    "                                     default-max=\"72\"\n" +
    "                                     ng-model=\"item.expirience\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"column\">\n" +
    "                            <div class=\"field\">\n" +
    "                                <label>Пол:</label>\n" +
    "\n" +
    "                                <div class=\"ui basic two buttons\">\n" +
    "                                    <button class=\"ui button\"\n" +
    "                                            ng-click=\"item.gender = 'M'\"\n" +
    "                                            ng-class=\"getActiveButtonClass(item.gender === 'M')\"\n" +
    "                                            type=\"button\">Мужской\n" +
    "                                    </button>\n" +
    "                                    <button class=\"ui button\"\n" +
    "                                            ng-click=\"item.gender = 'F'\"\n" +
    "                                            ng-class=\"getActiveButtonClass(item.gender === 'F')\"\n" +
    "                                            type=\"button\">Женский\n" +
    "                                    </button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row mt10\">\n" +
    "                        <div class=\"column\">\n" +
    "                            <div class=\"field\">\n" +
    "                                <label>В браке:</label>\n" +
    "\n" +
    "                                <div class=\"ui basic two buttons\">\n" +
    "                                    <button class=\"ui button\"\n" +
    "                                            ng-click=\"item.is_married = true\"\n" +
    "                                            ng-class=\"getActiveButtonClass(item.is_married)\"\n" +
    "                                            type=\"button\">Да\n" +
    "                                    </button>\n" +
    "                                    <button class=\"ui button\"\n" +
    "                                            ng-click=\"item.is_married = false\"\n" +
    "                                            ng-class=\"getActiveButtonClass(!item.is_married)\"\n" +
    "                                            type=\"button\">Нет\n" +
    "                                    </button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"column\">\n" +
    "                            <div class=\"field\">\n" +
    "                                <label>Дети:</label>\n" +
    "\n" +
    "                                <div class=\"ui basic two buttons\">\n" +
    "                                    <button class=\"ui button\"\n" +
    "                                            ng-click=\"item.has_children = true\"\n" +
    "                                            ng-class=\"getActiveButtonClass(item.has_children)\"\n" +
    "                                            type=\"button\">Да\n" +
    "                                    </button>\n" +
    "                                    <button class=\"ui button\"\n" +
    "                                            ng-click=\"item.has_children = false\"\n" +
    "                                            ng-class=\"getActiveButtonClass(!item.has_children)\"\n" +
    "                                            type=\"button\">Нет\n" +
    "                                    </button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"column\"></div>\n" +
    "                        <div class=\"column\"></div>\n" +
    "                        <div class=\"column\">\n" +
    "                            <div class=\"field\" align=\"right\">\n" +
    "                                <label>&nbsp;</label>\n" +
    "                                <button class=\"fluid ui button\"\n" +
    "                                        ng-disabled=\"driver_kasko_form.$invalid || item.age > 90 || item.age < 18\n" +
    "                                        || item.age - item.expirience < 18\"\n" +
    "                                        ng-click=\"goNextDriver($index)\"\n" +
    "                                        ng-class=\"$root.currentBrand.main_buttons_color\"\n" +
    "                                        type=\"button\">\n" +
    "                                    Далее\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div align=\"right\"\n" +
    "                 ng-if=\"carFilterParams.currentDriverIndex === carFilterParams.drivers.length\">\n" +
    "                <button class=\"ui button\"\n" +
    "                        ng-class=\"$root.currentBrand.main_buttons_color\"\n" +
    "                        type=\"button\">\n" +
    "                    Далее\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-multidrive css-bigger-labels css-bigger-slider pos-rel\">\n" +
    "        <div change-step=\"drivers_count\"\n" +
    "             change-step-type=\"back\"\n" +
    "             change-step-method=\"setActiveStepSecond\">\n" +
    "        </div>\n" +
    "        <div class=\"ui grid three column mt20 doubling stackable\"\n" +
    "             ng-form=\"multidrive_form\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"column\">\n" +
    "                    <div class=\"field\"\n" +
    "                         ng-class=\"{'error': item.age < 18 || item.age > 90}\">\n" +
    "                        <label for=\"id_drivers_minimal_age\">Минимальный возраст:</label>\n" +
    "                        <input type=\"text\"\n" +
    "                               id=\"id_drivers_minimal_age\"\n" +
    "                               class=\"input-has-slider\"\n" +
    "                               price-formatter\n" +
    "                               name=\"drivers_minimal_age\"\n" +
    "                               required\n" +
    "                               ng-model=\"carFilterParams.drivers_minimal_age\"/>\n" +
    "\n" +
    "                        <div input-slider\n" +
    "                             default-min=\"18\"\n" +
    "                             slider-step=\"1\"\n" +
    "                             default-max=\"90\"\n" +
    "                             ng-model=\"carFilterParams.drivers_minimal_age\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"column\">\n" +
    "                    <div class=\"field\"\n" +
    "                         ng-class=\"{'error': carFilterParams.drivers_minimal_age - carFilterParams.drivers_minimal_experience < 18}\">\n" +
    "                        <label for=\"id_drivers_minimal_experience\">Минимальный стаж:</label>\n" +
    "                        <input type=\"text\"\n" +
    "                               id=\"id_drivers_minimal_experience\"\n" +
    "                               required\n" +
    "                               class=\"input-has-slider\"\n" +
    "                               name=\"drivers_minimal_experience\"\n" +
    "                               price-formatter\n" +
    "                               ng-model=\"carFilterParams.drivers_minimal_experience\"/>\n" +
    "\n" +
    "                        <div input-slider\n" +
    "                             default-min=\"0\"\n" +
    "                             slider-step=\"1\"\n" +
    "                             default-max=\"72\"\n" +
    "                             ng-model=\"carFilterParams.drivers_minimal_experience\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"column\"></div>\n" +
    "                <div class=\"column\"></div>\n" +
    "                <div class=\"column\">\n" +
    "                    <div class=\"field\" align=\"right\">\n" +
    "                        <label>&nbsp;</label>\n" +
    "                        <button class=\"fluid ui green button\"\n" +
    "                                ng-disabled=\"multidrive_form.$invalid || carFilterParams.drivers_minimal_age > 90\n" +
    "                                || carFilterParams.drivers_minimal_age < 18\n" +
    "                                || carFilterParams.drivers_minimal_age - carFilterParams.drivers_minimal_experience < 18\"\n" +
    "                                ng-click=\"multidriveNext()\"\n" +
    "                                type=\"button\">\n" +
    "                            Далее\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-is_earlier_insurance pos-rel\">\n" +
    "        <div change-step=\"first\"\n" +
    "             change-step-type=\"back\"\n" +
    "             change-step-method=\"bigSteps.setBigStep\">\n" +
    "        </div>\n" +
    "        <h3 class=\"b-content_title mb20 mt30\">Страхование в прошлом году:</h3>\n" +
    "        <div class=\"ui grid\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"eight wide column\">\n" +
    "                    <div class=\"field\" align=\"left\">\n" +
    "                        <button class=\"ui button\"\n" +
    "                                style=\"min-width: 100px;\"\n" +
    "                                ng-click=\"selectIsEarlierInsurance(false)\"\n" +
    "                                type=\"button\">\n" +
    "                            Нет\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"eight wide column\">\n" +
    "                    <div class=\"field\" align=\"right\">\n" +
    "                        <button class=\"ui button\"\n" +
    "                                ng-click=\"selectIsEarlierInsurance(true)\"\n" +
    "                                style=\"min-width: 100px;\"\n" +
    "                                type=\"button\">\n" +
    "                            Да\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-is_credit pos-rel\">\n" +
    "        <div change-step=\"{{calculation.is_multidrive ? 'multidrive' : 'drivers'}}\"\n" +
    "             change-step-type=\"back\"\n" +
    "             change-step-method=\"setActiveStepSecond\">\n" +
    "        </div>\n" +
    "        <h3 class=\"b-content_title mb20 mt30\">\n" +
    "            Куплен в кредит?\n" +
    "        </h3>\n" +
    "        <div class=\"ui grid three column doubling stackable\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"column\">\n" +
    "                    <div class=\"ui basic buttons\"\n" +
    "                         ng-class=\"$root.currentBrand.main_buttons_color\"\n" +
    "                         style=\"width: 100%\">\n" +
    "                        <button class=\"ui button\"\n" +
    "                                ng-click=\"selectIsCredit(false)\"\n" +
    "                                type=\"button\">\n" +
    "                            Нет\n" +
    "                        </button>\n" +
    "                        <button class=\"ui button\"\n" +
    "                                ng-click=\"selectIsCredit(true)\"\n" +
    "                                type=\"button\">\n" +
    "                            Да\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"column\"></div>\n" +
    "                <div class=\"column\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-contributory_scheme pos-rel\">\n" +
    "        <h3 class=\"b-content_title mb20 mt30\">Рассрочка</h3>\n" +
    "        <div class=\"ui grid\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"eight wide column\">\n" +
    "                    <div class=\"field\">\n" +
    "                        <label>Рассрочка оплаты на год:</label>\n" +
    "\n" +
    "                        <div class=\"four ui buttons mt5\" style=\"border: none;\">\n" +
    "                            <button class=\"ui blue button\"\n" +
    "                                    ng-repeat=\"item in calculatorParams.contributoryScheme\"\n" +
    "                                    type=\"button\"\n" +
    "                                    ng-class=\"{basic: item.id !== carFilterParams.contributory_scheme}\"\n" +
    "                                    ng-click=\"carFilterParams.contributory_scheme = item.id\">\n" +
    "                                <span ng-bind=\"item.title\"></span>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"eight wide column\">\n" +
    "                    <div class=\"field\"\n" +
    "                         align=\"right\">\n" +
    "                        <label>&nbsp;</label>\n" +
    "\n" +
    "                        <button type=\"button\"\n" +
    "                                ng-click=\"contributorySchemeNext()\"\n" +
    "                                class=\"ui button branded mt20\">Далее\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-antitheft pos-rel\">\n" +
    "        <h3 class=\"b-content_title mb20 mt30\">Противоугонное устройство:</h3>\n" +
    "        <div class=\"ui grid\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"eight wide column\">\n" +
    "                    <div class=\"field\">\n" +
    "                        <label>Выберите противоугонное устройство</label>\n" +
    "\n" +
    "                        <div class=\"ui search selection dropdown\"\n" +
    "                             id=\"id_exploitation_area\"\n" +
    "                             ng-focus=\"carFilterParams.was_clicked = true;\"\n" +
    "                             ng-click=\"carFilterParams.was_clicked = true;\"\n" +
    "                             sem-dropdown\n" +
    "                             sem-dropdown-placeholder=\"Не выбран\"\n" +
    "                             ng-model=\"carFilterParams.antitheft\"\n" +
    "                             ng-change=\"carFilterParams.was_clicked && selectAntitheft()\"\n" +
    "                             sem-dropdown-items=\"antiThefts\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<style>\n" +
    "    .five.ui.basic.buttons {\n" +
    "        border: none;\n" +
    "    }\n" +
    "</style>");
  $templateCache.put("js/src/modules/carFilterC/views/third_big_step.html",
    "<div class=\"ui grid three column doubling stackable css-bigger-labels\">\n" +
    "    <div class=\"row one column\">\n" +
    "        <div class=\"column\">\n" +
    "            <h4>\n" +
    "                На следующем шаге Вы получите результаты расчетов стоимости КАСКО в различных страховых компаниях.\n" +
    "                <br>\n" +
    "                <span ng-bind=\"$root.currentBrand.sms_verification_text ? $root.currentBrand.sms_verification_text : 'Пройдите, пожалуйста, бесплатную sms-верификацию.' \">\n" +
    "                </span>\n" +
    "            </h4>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"column\">\n" +
    "            <div class=\"field\">\n" +
    "                <label for=\"id_client_name\">Как к вам обращаться?</label>\n" +
    "                <input type=\"text\"\n" +
    "                       ng-disabled=\"clientParams.client_params_are_disabled || clientParams.sms_is_visible\"\n" +
    "                       ng-model=\"clientParams.client_name\"\n" +
    "                       placeholder=\"Имя\"\n" +
    "                       id=\"id_client_name\"/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"column\">\n" +
    "            <div class=\"field\">\n" +
    "                <label for=\"id_client_phone\">Номер телефона:</label>\n" +
    "\n" +
    "                <input type=\"text\"\n" +
    "                       ui-mask=\"+7 (999) 999-9999\"\n" +
    "                       ng-disabled=\"clientParams.client_params_are_disabled || clientParams.sms_is_visible\"\n" +
    "                       placeholder=\"+7 (___) ___-____\"\n" +
    "                       model-view-value=\"true\"\n" +
    "                       ng-model=\"clientParams.client_phone\"\n" +
    "                       id=\"id_client_phone\"/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"column\">\n" +
    "            <div class=\"field\">\n" +
    "                <label>&nbsp;</label>\n" +
    "                <button class=\"ui button blue fluid\"\n" +
    "                        ng-disabled=\"!clientParams.client_phone || !clientParams.client_name\n" +
    "                        || clientParams.client_params_are_disabled || clientParams.sms_is_visible\"\n" +
    "                        ng-click=\"showSMSform();calculateKaskoCarFilter()\"\n" +
    "                        type=\"button\">\n" +
    "                    Показать тарифы\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\" ng-if=\"clientParams.sms_is_visible\">\n" +
    "        <div class=\"column\">\n" +
    "            <a href=\"\"\n" +
    "               class=\"css-bottom-dashed pt30\"\n" +
    "               style=\"font-size: 15px;\"\n" +
    "               ng-click=\"clientParams.sms_is_visible = false;calculatorParams.send_sms_text = false\">Изменить номер телефона</a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"column\">\n" +
    "            <div class=\"field\" ng-class=\"{error: !clientParams.sms_code}\">\n" +
    "                <label for=\"id_sms_code\">Код из СМС:</label>\n" +
    "\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"clientParams.sms_code\"\n" +
    "                       placeholder=\"1234\"\n" +
    "                       maxlength=\"4\"\n" +
    "                       input-integer\n" +
    "                       id=\"id_sms_code\"/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"column\">\n" +
    "            <div class=\"field\">\n" +
    "                <label>&nbsp;</label>\n" +
    "                <button class=\"ui button green fluid\"\n" +
    "                        ng-disabled=\"!clientParams.sms_code || clientParams.sms_button_is_disabled\"\n" +
    "                        ng-click=\"confirmCode()\"\n" +
    "                        type=\"button\">Подтвердить\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\" ng-show=\"calculatorParams.send_sms_text\">\n" +
    "        <div class=\"sixteen wide column\">\n" +
    "            <div class=\"ui message blue visible\">\n" +
    "                Вам на телефон отправлена sms, введите код из смс в поле для получения расчетов.\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\" ng-show=\"calculatorParams.confirm_code_is_incorrect\">\n" +
    "        <div class=\"sixteen wide column\">\n" +
    "            <div class=\"ui message error visible\">\n" +
    "                Код СМС не совпал с отправленным.\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>");
  $templateCache.put("js/src/modules/contract/views/contract.html",
    "<div class=\"contract-block\">\n" +
    "    <div class=\"contract-left-column\">\n" +
    "        <h1 class=\"main-content-header\">Полис КАСКО #</h1>\n" +
    "\n" +
    "        <div class=\"contract-status\">\n" +
    "            статус: <span dictionary=\"insuranceProductStatus\"\n" +
    "                          dictionary-id=\"contract.insurance_product_status\"\n" +
    "                          dictionary-prop=\"title\"></span>\n" +
    "        </div>\n" +
    "        <table class=\"contract-calculation-table\">\n" +
    "            <tbody>\n" +
    "            <tr>\n" +
    "                <td>Порядок оплаты</td>\n" +
    "                <td>\n" +
    "                        <span dictionary=\"contribSchemas\"\n" +
    "                              dictionary-id=\"calculation.contributory_scheme\"\n" +
    "                              dictionary-prop=\"title\"></span>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Срок страхования</td>\n" +
    "                <td>\n" +
    "                        <span dictionary=\"insuranceDurations\"\n" +
    "                              dictionary-id=\"calculation.insurance_duration\"\n" +
    "                              dictionary-prop=\"title\"></span>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Франшиза</td>\n" +
    "                <td>{{calculation.deductible_value}}</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Тип франшизы</td>\n" +
    "                <td>\n" +
    "                        <span dictionary=\"deductibleTypes\"\n" +
    "                              dictionary-id=\"calculation.deductible_type\"\n" +
    "                              dictionary-prop=\"title\"></span>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Лимит возмещения</td>\n" +
    "                <td>\n" +
    "                        <span dictionary=\"paymentTypes\"\n" +
    "                              dictionary-id=\"calculation.payment_type\"\n" +
    "                              dictionary-prop=\"title\"></span>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Условия покрытия</td>\n" +
    "                <td>\n" +
    "                        <span dictionary=\"coverageConditions\"\n" +
    "                              dictionary-id=\"calculation.coverage_condition\"\n" +
    "                              dictionary-prop=\"title\"></span>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Противоугонное оснащение</td>\n" +
    "                <td>\n" +
    "                        <span dictionary=\"antiThefts\"\n" +
    "                              dictionary-id=\"calculation.antitheft\"\n" +
    "                              dictionary-prop=\"title\"></span>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Территория покрытия</td>\n" +
    "                <td>\n" +
    "                        <span dictionary=\"exploitationArea\"\n" +
    "                              dictionary-id=\"calculation.exploitation_area\"\n" +
    "                              dictionary-prop=\"title\"></span>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Цель использования</td>\n" +
    "                <td>\n" +
    "                        <span dictionary=\"targetUsing\"\n" +
    "                              dictionary-id=\"calculation.target_of_using\"\n" +
    "                              dictionary-prop=\"title\"></span>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Типы ТС</td>\n" +
    "                <td>\n" +
    "                        <span dictionary=\"carTypes\"\n" +
    "                              dictionary-id=\"calculation.car_type\"\n" +
    "                              dictionary-prop=\"title\"></span>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Хранение ТС на <br/>охраняемой стоянке</td>\n" +
    "                <td>{{calculation.has_guarded_parking | boolFormatter}}</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Правый руль</td>\n" +
    "                <td>{{calculation.is_right_wheel | boolFormatter}}</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Бронированный авто</td>\n" +
    "                <td>{{calculation.is_armoured | boolFormatter}}</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Способ выплаты</td>\n" +
    "                <td>\n" +
    "                        <span dictionary=\"paymentForms\"\n" +
    "                              dictionary-id=\"calculation.payment_form\"\n" +
    "                              dictionary-prop=\"title\"></span>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"contract-right-column\">\n" +
    "        <button type=\"button\"\n" +
    "                class=\"button\"\n" +
    "                ng-click=\"printPolicy()\">Скачать договор\n" +
    "        </button>\n" +
    "        <button type=\"button\"\n" +
    "                class=\"button button-wrong contract-send_loss-button\">Заявить об убытке\n" +
    "        </button>\n" +
    "\n" +
    "        <div class=\"control-row\">\n" +
    "            <a ui-sref=\"index.formationPolicy.step_2({\n" +
    "              calculationId: contract.calculation_result__calculation__original_id,\n" +
    "              policy: contract.result_policy_id\n" +
    "            })\">Изменить договор</a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"contract-invoices-block\">\n" +
    "            <h2 class=\"contract-invoices-block-header\">\n" +
    "                {{contract.amount | priceFormatter:2:'.'}} руб.\n" +
    "            </h2>\n" +
    "\n" +
    "            <table class=\"contract-invoices-list\">\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                    <th>Сумма <i class=\"arrow\"></i></th>\n" +
    "                    <th class=\"column-payment_deadline\">Оплатить до <i class=\"arrow\"></i></th>\n" +
    "                    <th>Статус <i class=\"arrow\"></i></th>\n" +
    "                    <th></th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                <tr class=\"list-item contract-invoice\" ng-repeat=\"invoice in contract.invoice\">\n" +
    "                    <td>{{invoice.amount | priceFormatter:2:'.'}}</td>\n" +
    "                    <td>{{invoice.payment_deadline | date:'dd.MM.yyyy'}}</td>\n" +
    "                    <td>\n" +
    "                            <span dictionary=\"invoiceStatus\"\n" +
    "                                  dictionary-id=\"invoice.invoice_status\"\n" +
    "                                  dictionary-prop=\"title\"></span>\n" +
    "                    </td>\n" +
    "                    <td class=\"contract-invoice-link\">\n" +
    "                        <a href=\"\" ng-click=\"downloadInvoice(invoice.id)\">Скачать счет</a>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"contract-bottom-block\">\n" +
    "        <h2 class=\"contract-header\">\n" +
    "            Период страхования:\n" +
    "            с {{contract.start_date | date:'dd.MM.yyyy HH:mm'}}\n" +
    "            по {{contract.end_date | date:'dd.MM.yyyy HH:mm'}}\n" +
    "        </h2>\n" +
    "\n" +
    "        <div class=\"contract-insured_object-block\">\n" +
    "            <div ng-repeat=\"person in persons\" class=\"list-item\">\n" +
    "                <h2 class=\"f_policy-drivers-block-header\">\n" +
    "                    <span ng-if=\"person.isOwner\">Собственник,</span>\n" +
    "                    <span ng-if=\"person.isInsurant\">Страхователь,</span>\n" +
    "                    <span ng-if=\"person.isBeneficiary\">Выгодоприобретатель,</span>\n" +
    "                    <span ng-if=\"person.isDriver\">Водитель</span>\n" +
    "                </h2>\n" +
    "\n" +
    "                <div class=\"person-row\">\n" +
    "                    {{person | fioFormatter:'full'}},\n" +
    "                    дата рождения: {{person.birth_date}}\n" +
    "                </div>\n" +
    "                <div class=\"person-row\">\n" +
    "                    Серия, номер вод. удостоверения:\n" +
    "                    {{person.driver_license.series}} {{person.driver_license.number}},\n" +
    "                    действует с {{person.driver_license.issue_date}}\n" +
    "                </div>\n" +
    "                <div class=\"person-row\">\n" +
    "                    Серия, номер паспорта РФ:\n" +
    "                    {{person.passport.series}} {{person.passport.number}},\n" +
    "                    выдан {{person.passport.issue_date}},\n" +
    "                    {{person.passport.issue_point}}\n" +
    "                </div>\n" +
    "                <div class=\"person-row\">\n" +
    "                    Адрес регистрации:\n" +
    "                    <span ng-if=\"person.address_registration\">\n" +
    "                        {{person.address_registration.city}},\n" +
    "                        {{person.address_registration.street}},\n" +
    "                        дом {{person.address_registration.house}} {{person.address_registration.housing}},\n" +
    "                        квартира {{person.address_registration.flat}}\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "                <div class=\"person-row\">\n" +
    "                    Адрес проживания:\n" +
    "                    <span ng-if=\"person.address_residential\">\n" +
    "                        {{person.address_residential.city}},\n" +
    "                        {{person.address_residential.street}},\n" +
    "                        дом {{person.address_residential.house}} {{person.address_residential.housing}},\n" +
    "                        квартира {{person.address_residential.flat}}\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"contract-car-block\">\n" +
    "                <h2 class=\"contract-car-block-header\">\n" +
    "                    {{car.carMark.title}}\n" +
    "                    {{car.carModel.title}} &mdash;\n" +
    "                    {{car.manufacturing_date | date:'yyyy'}} &mdash;\n" +
    "                    {{car.cost | priceFormatter}}\n" +
    "                    <span class=\"currency\">р.</span>\n" +
    "                </h2>\n" +
    "\n" +
    "                <div class=\"car-row\">\n" +
    "                    Гос. номер автомобиля: {{car.number_plate}} VIN: {{car.vin_number}}\n" +
    "                </div>\n" +
    "                <div class=\"car-row\">\n" +
    "                    ПТС:\n" +
    "                    <span ng-if=\"car.vehicle_registration\">\n" +
    "                            №{{car.vehicle_registration.series}}\n" +
    "                            {{car.vehicle_registration.number}}\n" +
    "                            от {{car.vehicle_registration.issue_date}}\n" +
    "                        </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view></div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/contract/views/contract.list.html",
    "<div class=\"calculator_archive-header\">\n" +
    "    <h1 class=\"b-content_title ui dividing header\" style=\"font-weight: 200;\">Мои договоры страхования</h1>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"main-content-body\">\n" +
    "    <form name=\"contract_list_form\" style=\"margin-bottom: 20px;\">\n" +
    "        <div class=\"ui form\">\n" +
    "            <div class=\"fields\">\n" +
    "                <div class=\"four field wide\">\n" +
    "                    <label for=\"id_policy_status\">Статусы</label>\n" +
    "\n" +
    "                    <div class=\"ui search selection dropdown\"\n" +
    "                         id=\"id_policy_status\"\n" +
    "                         sem-dropdown\n" +
    "                         ng-model=\"params.status\"\n" +
    "                         name=\"policy_status\"\n" +
    "                         ng-change=\"updateList()\"\n" +
    "                         sem-dropdown-items=\"policyStatus\"\n" +
    "                         sem-dropdown-placeholder=\"Все\"></div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"three field wide\">\n" +
    "                    <label for=\"id_insurant\">Страхователь</label>\n" +
    "\n" +
    "                    <div class=\"ui icon input\">\n" +
    "                        <input class=\"prompt\"\n" +
    "                               id=\"id_insurant\"\n" +
    "                               type=\"text\"\n" +
    "                               ng-model=\"params.insurant\"\n" +
    "                               ng-change=\"changeInsurant()\"\n" +
    "                               placeholder=\"Все\"\n" +
    "                               autocomplete=\"off\"\n" +
    "                               name=\"insurant\">\n" +
    "                        <i class=\"search icon\"></i>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"three field wide\">\n" +
    "                    <label for=\"id_type_code\">Продукт</label>\n" +
    "\n" +
    "                    <div class=\"ui search selection dropdown\"\n" +
    "                         id=\"id_type_code\"\n" +
    "                         sem-dropdown\n" +
    "                         ng-model=\"params.type_code\"\n" +
    "                         name=\"type_code\"\n" +
    "                         ng-change=\"updateList()\"\n" +
    "                         style=\"min-width: 13em;\"\n" +
    "                         sem-dropdown-items=\"typeCodes\"\n" +
    "                         sem-dropdown-placeholder=\"Все\"></div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"six field wide\">\n" +
    "                    <label for=\"id_valid_from__gte\">Дата расчета</label>\n" +
    "\n" +
    "                    <div class=\"fields\">\n" +
    "                        <div class=\"eight wide field\">\n" +
    "                            <div class=\"ui icon labeled input\">\n" +
    "                                <label for=\"id_valid_from__gte\" class=\"ui label\">c</label>\n" +
    "                                <input type=\"text\"\n" +
    "                                       placeholder=\"01.01.2016\"\n" +
    "                                       jdatepicker\n" +
    "                                       ng-change=\"!contract_list_form.date_from.$invalid && updateList()\"\n" +
    "                                       id=\"id_valid_from__gte\"\n" +
    "                                       ng-model=\"params.valid_from__gte\"\n" +
    "                                       name=\"date_from\">\n" +
    "                                <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"eight wide field\">\n" +
    "                            <div class=\"ui icon labeled input\">\n" +
    "                                <label for=\"id_valid_from__lte\" class=\"ui label\">по</label>\n" +
    "                                <input type=\"text\"\n" +
    "                                       ng-model=\"params.valid_from__lte\"\n" +
    "                                       placeholder=\"01.02.2016\"\n" +
    "                                       jdatepicker\n" +
    "                                       ng-change=\"!contract_list_form.date_to.$invalid && updateList()\"\n" +
    "                                       id=\"id_valid_from__lte\"\n" +
    "                                       name=\"date_to\">\n" +
    "                                <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "\n" +
    "    <div infinite-scroll=\"getContracts()\"\n" +
    "         infinite-scroll-disabled=\"busy\"\n" +
    "         style=\"position: relative;\"\n" +
    "         infinite-scroll-distance=\"1\">\n" +
    "        <table class=\"ui selectable table\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th>№ договора <i class=\"icon dropdown\"></i></th>\n" +
    "                <th>Продукт <i class=\"icon dropdown\"></i></th>\n" +
    "                <th>Период <i class=\"icon dropdown\"></i></th>\n" +
    "                <th>Начало <i class=\"icon dropdown\"></i></th>\n" +
    "                <th>Страхователь <i class=\"icon dropdown\"></i></th>\n" +
    "                <th>Статус <i class=\"icon dropdown\"></i></th>\n" +
    "                <th>Менеджер <i class=\"icon dropdown\"></i></th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "\n" +
    "            <tr ng-repeat=\"contract in contracts\" ng-click=\"goToContract(contract)\">\n" +
    "                <td>{{contract.pnumber}}</td>\n" +
    "                <td>\n" +
    "                    {{contract.type_code_rus}}\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                    {{contract.result__calculation__valid_from | date:'dd.MM.yyyy'}} -\n" +
    "                    {{contract.result__calculation__valid_to | date:'dd.MM.yyyy'}}\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                    <span ng-bind=\"contract.valid_from|date:'dd.MM.yyyy'\"></span>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                    {{contract.insurant | fioFormatter}}\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                    <span dictionary=\"policyStatus\"\n" +
    "                          dictionary-id=\"contract.status\"\n" +
    "                          dictionary-prop=\"title\"></span>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                    {{contract.creator.last_name}} {{contract.creator.first_name}}\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr align=\"center\" ng-if=\"!contracts.length\">\n" +
    "                <td colspan=\"7\" ng-if=\"!busy\">Нет договоров</td>\n" +
    "            </tr>\n" +
    "\n" +
    "            <tr align=\"center\" ng-if=\"!contracts.length && busy\">\n" +
    "                <td colspan=\"7\">\n" +
    "                    <div class=\"ui active dimmer inverted\">\n" +
    "                        <div ng-class=\"{loader: busy}\" class=\"ui large\"></div>\n" +
    "                    </div>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div ui-view></div>");
  $templateCache.put("js/src/modules/footer/views/footer.html",
    "<div class=\"ui container clearfix\">\n" +
    "    <div class=\"p20\">\n" +
    "        <p align=\"right\">Разработка и поддержка <a href=\"//b2bpolis.ru\" target=\"_blank\">Умный полис</a></p>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/mainContent/views/main_content.html",
    "<div ui-view></div>\n" +
    "\n" +
    "<div align=\"right\" class=\"mt20 mr15\" ng-if=\"!currentBrand.watermark_is_hidden\">\n" +
    "    Разработка и поддержка <a href=\"http://b2bpolis.ru\" target=\"_blank\">Умный полис</a>\n" +
    "</div>\n" +
    "\n" +
    "<!-- BEGIN: MESSAGES -->\n" +
    "<messages></messages>\n" +
    "<!-- END: MESSAGES -->\n" +
    "");
  $templateCache.put("js/src/modules/notification/views/navigation.html",
    "<nav class=\"navigation-list\">\n" +
    "    <a href=\"\"\n" +
    "       class=\"list-item navigation-list-item\">\n" +
    "        Вопросы по договору\n" +
    "    </a>\n" +
    "    <a ui-sref-active=\"active\"\n" +
    "       ui-sref=\"index.notification\"\n" +
    "       class=\"list-item navigation-list-item\">\n" +
    "        Обращение в отдел продаж\n" +
    "    </a>\n" +
    "    <a href=\"\"\n" +
    "       class=\"list-item navigation-list-item\">\n" +
    "        Справочная информация\n" +
    "    </a>\n" +
    "</nav>");
  $templateCache.put("js/src/modules/notification/views/notification.message.html",
    "<h1 class=\"main-content-header\">Обращение</h1>\n" +
    "\n" +
    "<div class=\"notification_to_department-block\">\n" +
    "    <div class=\"calculator_archive-column-right\" tarif-block></div>\n" +
    "    <form name=\"notification_to_department\" ng-submit=\"sendNotification()\">\n" +
    "        <div class=\"notification-notification_type-block\">\n" +
    "            <label for=\"id_notification_type\" class=\"fp-label\">Тип обращения:</label>\n" +
    "            <ui-select ng-model=\"notification.message_type\" class=\"input-medium\" theme=\"select2\"\n" +
    "                       id=\"id_notification_type\">\n" +
    "                <ui-select-match>{{$select.selected.title}}</ui-select-match>\n" +
    "                <ui-select-choices repeat=\"type.id as type in notificationTypes\">\n" +
    "                    <div ng-bind-html=\"type.title | highlight: $select.search\"></div>\n" +
    "                </ui-select-choices>\n" +
    "            </ui-select>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"control-row\">\n" +
    "            <div class=\"notification-message-block\">\n" +
    "                <label for=\"id_message\" class=\"fp-label\">Своими словами о произошедшем:</label>\n" +
    "                <textarea name=\"message\"\n" +
    "                          required\n" +
    "                          class=\"textarea input-x_large\"\n" +
    "                          ng-model=\"notification.message\"\n" +
    "                          id=\"id_message\"></textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"control-row\">\n" +
    "            <div class=\"notification-name-block\">\n" +
    "                <label for=\"id_name\" class=\"fp-label\">Как к вам обращаться?</label>\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"notification.name\"\n" +
    "                       class=\"input-text input-medium\"\n" +
    "                       id=\"id_name\"\n" +
    "                       name=\"name\"/>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"notification-response_type-block\">\n" +
    "                <label for=\"id_response_type\" class=\"fp-label\">Удобная форма ответа:</label>\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"notification.response_type\"\n" +
    "                       class=\"input-text input-medium\"\n" +
    "                       id=\"id_response_type\"\n" +
    "                       name=\"response_type\"/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-actions\">\n" +
    "            <button type=\"submit\"\n" +
    "                    ng-disabled=\"notification_to_department.$invalid || busy\"\n" +
    "                    class=\"button notification_to_department-submit-button\">\n" +
    "                Отправить\n" +
    "            </button>\n" +
    "\n" +
    "            <div loading-spinner=\"busy\" class=\"notification-loading\"></div>\n" +
    "\n" +
    "            <div class=\"notification_to_department-errors\" ng-if=\"errors.length\">\n" +
    "                <div class=\"list-item\" ng-repeat=\"message in errors\">\n" +
    "                    {{message}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <div ui-view></div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/notification/views/notification.message.success.html",
    "<form name=\"notification_message_success\" class=\"user_register_message-form ngdialog-form\"\n" +
    "      ng-submit=\"closeThisDialog()\">\n" +
    "    <h1 class=\"header\">Спасибо</h1>\n" +
    "\n" +
    "    <div class=\"ngdialog-message\">\n" +
    "        Ваша сообщение отправлено\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-actions\">\n" +
    "        <button type=\"submit\"\n" +
    "                class=\"button notification_message_success-submit-button\">\n" +
    "            Ок\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</form>\n" +
    "");
  $templateCache.put("js/src/modules/person/views/person.html",
    "<h1 class=\"main-content-header\">Данные профиля</h1>\n" +
    "\n" +
    "<div class=\"main-content-body\">\n" +
    "    <form name=\"person_form\" class=\"person_edit-form\" ng-submit=\"savePerson()\">\n" +
    "        <div class=\"control-row\">\n" +
    "            <div class=\"f_policy-driver-last_name-block\">\n" +
    "                <label for=\"id_last_name\" class=\"fp-label\">Фамилия:</label>\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"person.last_name\"\n" +
    "                       class=\"input-text input-sub_medium\"\n" +
    "                       id=\"id_last_name\"\n" +
    "                       name=\"last_name\"\n" +
    "                       required/>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"f_policy-driver-first_name-block\">\n" +
    "                <label for=\"id_first_name\" class=\"fp-label\">Имя:</label>\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"person.first_name\"\n" +
    "                       class=\"input-text input-sub_medium\"\n" +
    "                       id=\"id_first_name\"\n" +
    "                       name=\"first_name\"\n" +
    "                       required/>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"f_policy-driver-patronymic-block\">\n" +
    "                <label for=\"id_patronymic\" class=\"fp-label\">Отчество:</label>\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"person.patronymic\"\n" +
    "                       class=\"input-text input-sub_medium\"\n" +
    "                       id=\"id_patronymic\"\n" +
    "                       name=\"patronymic\"/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"control-row\">\n" +
    "            <div class=\"f_policy-driver-driver_license-block\">\n" +
    "                <label for=\"id_driver_license_series\" class=\"fp-label\">Водительское удостоверение:</label>\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"person.driver_license.series\"\n" +
    "                       class=\"input-text input-nano\"\n" +
    "                       maxlength=\"4\"\n" +
    "                       id=\"id_driver_license_series\"\n" +
    "                       name=\"driver_license_series\"\n" +
    "                       required/>\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"person.driver_license.number\"\n" +
    "                       class=\"input-text input-small\"\n" +
    "                       maxlength=\"6\"\n" +
    "                       id=\"id_driver_license_number\"\n" +
    "                       name=\"driver_license_number\"\n" +
    "                       required/>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"f_policy-driver-driver_license_date-block\">\n" +
    "                <label for=\"id_driver_license_date_{{$index}}\" class=\"fp-label\">Дата получения прав:</label>\n" +
    "                <span class=\"input-date-wrap\">\n" +
    "                            <input type=\"text\"\n" +
    "                                   jdatepicker\n" +
    "                                   jdatepicker-year-count=\"90\"\n" +
    "                                   ng-model=\"person.driver_license.issue_date\"\n" +
    "                                   class=\"input-date input-mini\"\n" +
    "                                   id=\"id_driver_license_date_{{$index}}\"\n" +
    "                                   name=\"driver_license_date\"\n" +
    "                                   required/>\n" +
    "                             <i class=\"icon-calendar\"></i>\n" +
    "                        </span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"f_policy-driver-birth_date-block\">\n" +
    "                <label for=\"id_birth_date_{{$index}}\" class=\"fp-label\">Дата рождения:</label>\n" +
    "                <span class=\"input-date-wrap\">\n" +
    "                            <input type=\"text\"\n" +
    "                                   jdatepicker\n" +
    "                                   jdatepicker-year-count=\"90\"\n" +
    "                                   ng-model=\"person.birth_date\"\n" +
    "                                   class=\"input-date input-mini\"\n" +
    "                                   id=\"id_birth_date_{{$index}}\"\n" +
    "                                   name=\"birth_date\"\n" +
    "                                   required/>\n" +
    "                            <i class=\"icon-calendar\"></i>\n" +
    "                        </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"control-row\">\n" +
    "            <div class=\"f_policy-driver-passport-block\">\n" +
    "                <label for=\"id_passport_series\" class=\"fp-label\">Серия, номер паспорта:</label>\n" +
    "                <input type=\"text\"\n" +
    "                       input-integer\n" +
    "                       ng-model=\"person.passport.series\"\n" +
    "                       class=\"input-text input-nano\"\n" +
    "                       maxlength=\"4\"\n" +
    "                       id=\"id_passport_series\"\n" +
    "                       name=\"passport_series\"\n" +
    "                       required/>\n" +
    "                <input type=\"text\"\n" +
    "                       input-integer\n" +
    "                       ng-model=\"person.passport.number\"\n" +
    "                       class=\"input-text input-small\"\n" +
    "                       maxlength=\"6\"\n" +
    "                       id=\"id_passport_number\"\n" +
    "                       name=\"passport_number\"\n" +
    "                       required/>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"f_policy-driver-passport_point-block\">\n" +
    "                <label for=\"id_passport_point\" class=\"fp-label\">Кем выдан:</label>\n" +
    "                <input type=\"text\"\n" +
    "                       ng-model=\"person.passport.issue_point\"\n" +
    "                       class=\"input-text input-big\"\n" +
    "                       id=\"id_passport_point\"\n" +
    "                       name=\"passport_point\"/>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"f_policy-driver-passport_date-block\">\n" +
    "                <label for=\"id_passport_date_{{$index}}\" class=\"fp-label\">Дата выдачи:</label>\n" +
    "                <span class=\"input-date-wrap\">\n" +
    "                            <input type=\"text\"\n" +
    "                                   jdatepicker\n" +
    "                                   jdatepicker-year-count=\"90\"\n" +
    "                                   ng-model=\"person.passport.issue_date\"\n" +
    "                                   class=\"input-date input-mini\"\n" +
    "                                   id=\"id_passport_date_{{$index}}\"\n" +
    "                                   name=\"passport_date\"\n" +
    "                                   required/>\n" +
    "                            <i class=\"icon-calendar\"></i>\n" +
    "                        </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"control-row\">\n" +
    "\n" +
    "            <div class=\"f_policy-driver-address-block\">\n" +
    "                <div class=\"f_policy-driver-address_registration-block\">\n" +
    "                    <label for=\"id_address_registration_postal_index\" class=\"fp-label\">Адрес регистрации:</label>\n" +
    "\n" +
    "                    <div class=\"input-wrapper\">\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_registration.postal_index\"\n" +
    "                               class=\"input-text input-mini\"\n" +
    "                               placeholder=\"индекс\"\n" +
    "                               maxlength=\"6\"\n" +
    "                               id=\"id_address_registration_postal_index\"\n" +
    "                               name=\"address_registration_postal_index\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_registration.city\"\n" +
    "                               class=\"input-text input-mini\"\n" +
    "                               placeholder=\"город\"\n" +
    "                               id=\"id_address_registration_city\"\n" +
    "                               name=\"address_registration_city\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_registration.street\"\n" +
    "                               class=\"input-text input-mini\"\n" +
    "                               placeholder=\"улица\"\n" +
    "                               id=\"id_address_registration_street\"\n" +
    "                               name=\"address_registration_street\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_registration.house\"\n" +
    "                               class=\"input-text input-nano\"\n" +
    "                               placeholder=\"дом\"\n" +
    "                               id=\"id_address_registration_house\"\n" +
    "                               name=\"address_registration_house\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_registration.housing\"\n" +
    "                               class=\"input-text input-nano\"\n" +
    "                               placeholder=\"корп.\"\n" +
    "                               id=\"id_address_registration_housing\"\n" +
    "                               name=\"address_registration_housing\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_registration.flat\"\n" +
    "                               class=\"input-text input-nano\"\n" +
    "                               placeholder=\"кв.\"\n" +
    "                               id=\"id_address_registration_flat\"\n" +
    "                               name=\"address_registration_flat\"/>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"f_policy-driver-address_residential-block\" ng-if=\"!person.is_same_address\">\n" +
    "                    <label for=\"id_address_residential_postal_index\" class=\"fp-label\">Адрес проживания:</label>\n" +
    "\n" +
    "                    <div class=\"input-wrapper\">\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_residential.postal_index\"\n" +
    "                               class=\"input-text input-mini\"\n" +
    "                               placeholder=\"индекс\"\n" +
    "                               maxlength=\"6\"\n" +
    "                               id=\"id_address_residential_postal_index\"\n" +
    "                               name=\"address_residential_postal_index\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_residential.city\"\n" +
    "                               class=\"input-text input-mini\"\n" +
    "                               placeholder=\"город\"\n" +
    "                               id=\"id_address_residential_city\"\n" +
    "                               name=\"address_residential_city\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_residential.street\"\n" +
    "                               class=\"input-text input-mini\"\n" +
    "                               placeholder=\"улица\"\n" +
    "                               id=\"id_address_residential_street\"\n" +
    "                               name=\"address_residential_street\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_residential.house\"\n" +
    "                               class=\"input-text input-nano\"\n" +
    "                               placeholder=\"дом\"\n" +
    "                               id=\"id_address_residential_house\"\n" +
    "                               name=\"address_residential_house\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_residential.housing\"\n" +
    "                               class=\"input-text input-nano\"\n" +
    "                               placeholder=\"корп.\"\n" +
    "                               id=\"id_address_residential_housing\"\n" +
    "                               name=\"address_residential_housing\"/>\n" +
    "                        <input type=\"text\"\n" +
    "                               ng-model=\"person.address_residential.flat\"\n" +
    "                               class=\"input-text input-nano\"\n" +
    "                               placeholder=\"кв.\"\n" +
    "                               id=\"id_address_residential_flat\"\n" +
    "                               name=\"address_residential_flat\"/>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"f_policy-driver-is_same_address-block\">\n" +
    "                <div class=\"sub-block\">\n" +
    "                    <input type=\"checkbox\"\n" +
    "                           ng-model=\"person.is_same_address\"\n" +
    "                           class=\"checkbox\"\n" +
    "                           id=\"id_is_same_address\"\n" +
    "                           name=\"is_same_address\"/>\n" +
    "                    <label for=\"id_is_same_address\">Совпадает с фактическим</label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-actions\">\n" +
    "            <button type=\"submit\"\n" +
    "                    ng-disabled=\"isSavePersonProgress\"\n" +
    "                    class=\"button person-submit\">\n" +
    "                Сохранить\n" +
    "                <i class=\"icon-done\"></i>\n" +
    "            </button>\n" +
    "            <div loading-spinner=\"isSavePersonProgress\" class=\"calc-loading\"></div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>    \n" +
    "");
  $templateCache.put("js/src/modules/person/views/person.save_message.success.html",
    "<form name=\"person_message_success\" class=\"formation_policy_message-form ngdialog-form\" ng-submit=\"closeThisDialog()\">\n" +
    "    <div class=\"ngdialog-message\">\n" +
    "        Персона сохранена\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-actions\">\n" +
    "        <button type=\"submit\"\n" +
    "                class=\"button person_message_success-submit-button\">\n" +
    "            Ок\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</form>\n" +
    "");
  $templateCache.put("js/src/modules/postCalculatorC/views/post_calculator.rolf.html",
    "<div class=\"b-full-width-bg mt30 p20 pt20 pb20\">\n" +
    "\n" +
    "  <h3>\n" +
    "    Для того, чтобы получить максимально выгодное предложение свяжитесь с нами по телефону\n" +
    "    8&nbsp;800&nbsp;123&#045;67&#045;89 или напишите нам.\n" +
    "  </h3>\n" +
    "  <div class=\"ui form\">\n" +
    "    <div class=\"ui grid two column stackable\">\n" +
    "      <div class=\"row three column\">\n" +
    "        <div class=\"column\">\n" +
    "          <div class=\"field\">\n" +
    "            <label for=\"id_manager__client_name\">Имя</label>\n" +
    "            <input type=\"text\"\n" +
    "                   id=\"id_manager__client_name\"\n" +
    "                   ng-disabled=\"postCalculatorParams.is_visible\"\n" +
    "                   ng-model=\"postCalculatorParams.client_name\"/>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"column\">\n" +
    "          <div class=\"field\">\n" +
    "            <label for=\"id_manager__client_phone\">Телефон</label>\n" +
    "            <input type=\"text\"\n" +
    "                   ng-disabled=\"postCalculatorParams.is_visible\"\n" +
    "                   ui-mask=\"+7 (999) 999-9999\"\n" +
    "                   placeholder=\"+7 (___) ___-____\"\n" +
    "                   ng-model=\"postCalculatorParams.client_phone\"\n" +
    "                   id=\"id_manager__client_phone\"/>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"ui grid stackable\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"wide column\">\n" +
    "\n" +
    "          <div class=\"field\">\n" +
    "            <label></label>\n" +
    "            <textarea rows=\"4\" placeholder=\"Текст сообщения\"\n" +
    "                      ng-disabled=\"postCalculatorParams.is_visible\"\n" +
    "                      ng-model=\"postCalculatorParams.message\">\n" +
    "            </textarea>\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"column\">\n" +
    "          <button class=\"ui button green\"\n" +
    "                  ng-click=\"preSendToManager()\"\n" +
    "                  ng-disabled=\"!postCalculatorParams.client_name || !postCalculatorParams.client_phone || !postCalculatorParams.message\n" +
    "                  || postCalculatorParams.button_is_disabled\"\n" +
    "                  type=\"button\">Отправить\n" +
    "          </button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div><!-- /.b-full-width-bg -->");
  $templateCache.put("js/src/modules/preCalculatorC/views/pre_calculator.other.html",
    "");
  $templateCache.put("js/src/modules/preCalculatorC/views/pre_calculator.rolf.html",
    "<div class=\"b-full-width-bg mt40 p20 pt20\">\n" +
    "\n" +
    "  <div class=\"ui grid stackable\">\n" +
    "    <div class=\"two wide column\"></div>\n" +
    "    <div class=\"six wide column\">\n" +
    "      <button type=\"button\"\n" +
    "              ng-if=\"!preCalculatorParams.is_second_step\"\n" +
    "              ng-click=\"preCalculatorParams.is_second_step = true;\"\n" +
    "              class=\"ui button fluid big branded\"\n" +
    "              style=\"height: 100%;\">\n" +
    "        КАСКО на новый автомобиль\n" +
    "      </button>\n" +
    "    </div>\n" +
    "    <div class=\"six wide column\">\n" +
    "      <a ui-sref=\"index.calculator.kasko\"\n" +
    "         ng-if=\"!preCalculatorParams.is_second_step\"\n" +
    "         type=\"button\"\n" +
    "         class=\"ui button fluid big blue\">\n" +
    "        КАСКО на авто с пробегом для новых клиентов\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"two wide column\"></div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <div ng-if=\"preCalculatorParams.is_second_step\">\n" +
    "    <div class=\"ui grid stackable\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"column wide\">\n" +
    "          <h2 class=\"b-content_title m0 mb30\">Укажите нужный вариант</h2>\n" +
    "\n" +
    "          <div class=\"mt15\">\n" +
    "            <sem-checkbox ng-model=\"preCalculatorParams.selectedType\"\n" +
    "                          sem-label=\"{{ typesToSelect.first.title }}\"\n" +
    "                          sem-type=\"radio\"\n" +
    "                          class=\"\"\n" +
    "                          name=\"selected_type\"\n" +
    "                          value=\"first\">\n" +
    "            </sem-checkbox>\n" +
    "          </div>\n" +
    "          <div class=\"mt15\">\n" +
    "            <sem-checkbox ng-model=\"preCalculatorParams.selectedType\"\n" +
    "                          sem-label=\"{{ typesToSelect.second.title }}\"\n" +
    "                          sem-type=\"radio\"\n" +
    "                          class=\"\"\n" +
    "                          name=\"selected_type\"\n" +
    "                          value=\"second\">\n" +
    "            </sem-checkbox>\n" +
    "          </div>\n" +
    "\n" +
    "          <button type=\"button\"\n" +
    "                  ng-disabled=\"!preCalculatorParams.selectedType\"\n" +
    "                  ng-click=\"preCalculatorParams.toNextSteps()\"\n" +
    "                  ng-class=\"$root.currentBrand.main_buttons_color\"\n" +
    "                  class=\"ui button right floated\">\n" +
    "            Далее\n" +
    "          </button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<style>\n" +
    "    .ui.button {\n" +
    "        font-weight: 400;\n" +
    "    }\n" +
    "</style>");
  $templateCache.put("js/src/modules/calculatorC/views/kasko/calculation.program_list.html",
    "<!--\n" +
    "<div ng-show=\"params.resultsAreCreated && !calculationResult.length\">\n" +
    "    <h2 class=\"b-content_title c-tac mb40\">К сожалению, мы не можем оформить КАСКО на данный автомобиль</h2>\n" +
    "</div>\n" +
    "-->\n" +
    "\n" +
    "<div ng-include=\"templates.program_list_manager\" class=\"mt40\"></div>\n" +
    "\n" +
    "<div class=\"c-tac b-content-loading mt40\" ng-if=\"!calculationResult.length\">\n" +
    "  <i class=\"spinner loading icon big grey\" tabindex=\"0\" style=\"font-size: 40px;\"></i>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ui form b-full-width-bg_white mt50 pos-rel\"\n" +
    "     ng-if=\"calculationResult.length\">\n" +
    "  <div change-step=\"second\"\n" +
    "       change-step-type=\"back\"\n" +
    "       change-step-method=\"bigSteps.setBigStep\">\n" +
    "  </div>\n" +
    "  <div class=\"p20\">\n" +
    "    <div class=\"b-results\">\n" +
    "      <div class=\"ui grid five column stackable\"><!--doubling-->\n" +
    "        <div class=\"b-result-kasko column pb80 pt20\"\n" +
    "             align=\"center\"\n" +
    "             ng-repeat=\"result in calculationResult | limitTo:5\"\n" +
    "             ng-class=\"'b-result-kasko--index-' + $index\">\n" +
    "          <div>\n" +
    "            <div class=\"b-result-kasko_best-price\"\n" +
    "                 ng-class=\"{'vis-hidden': !$index && $root.currentBrand.results_head_title}\">\n" +
    "              <span>Лучшая цена!</span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"b-result-kasko_head-title\" ng-if=\"!$index\">\n" +
    "              <span ng-bind=\"$root.currentBrand.results_head_title\"></span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"b-result-kasko_head\"\n" +
    "                 ng-class=\"{'vis-hidden': !$index && $root.currentBrand.results_head_title}\"\n" +
    "                 title=\"{{result.insurance_company.title}}\">\n" +
    "              <div class=\"b-result-kasko_insurance_company-logo mb5\">\n" +
    "                <img ng-src=\"{{result.company_logo}}\" alt=\"\"/>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"b-result-kasko_insurance_company-title mb20 mt15\">\n" +
    "                <h3>\n" +
    "                  <span ng-bind=\"result.insurance_company.title\"></span>\n" +
    "                </h3>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"b-result-kasko_sum mt10 mb20 nowrap\">\n" +
    "              <h3>\n" +
    "                <span>\n" +
    "                  <span ng-bind=\"result.program.sum\n" +
    "                                    | priceFormatter:0:'':false\">\n" +
    "                  </span>.\n" +
    "                  <small ng-bind=\"result.program.sum | fractionalFormatter:2\"></small>\n" +
    "                  руб.\n" +
    "                </span>\n" +
    "              </h3>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"b-result-kasko_option_set\">\n" +
    "              <div ng-repeat=\"option in result.program.option_set | filter:{'is_active': true}\">\n" +
    "                <span ng-bind=\"option.title\"></span>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"b-result-kasko_actions\" align=\"center\">\n" +
    "              <button class=\"ui button green small\"\n" +
    "                      title=\"Перейти к заказу\"\n" +
    "                      ng-click=\"selectResult(result.id)\"\n" +
    "                      type=\"button\">Выбрать\n" +
    "              </button>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"p20 mt30\" ng-if=\"root.messages.length\">\n" +
    "  <div class=\"ui error message\">\n" +
    "    <ul class=\"list\">\n" +
    "      <li ng-repeat=\"message in root.messages\"><span ng-bind=\"message\"></span></li>\n" +
    "    </ul>\n" +
    "    <i class=\"close icon\" ng-click=\"root.messages.length = 0;\"></i>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"p20 mt30\" ng-if=\"$root.currentBrand.addresses_are_visible\">\n" +
    "  <div class=\"ui grid\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"ten wide column\">\n" +
    "        <h4>\n" +
    "          За подробной информацией Вы можете обратиться к менеджерам кредитно-страхового отдела:\n" +
    "        </h4>\n" +
    "        <div class=\"ui list\">\n" +
    "          <div class=\"item mb10\" ng-repeat=\"item in officeAddresses\">\n" +
    "            <i class=\"marker icon blue\"></i>\n" +
    "            <div class=\"content\">\n" +
    "              <strong class=\"header\" ng-bind=\"item.name\"></strong>\n" +
    "              <div class=\"description\">\n" +
    "                <span ng-bind=\"item.address\"></span> тел. <span ng-bind=\"item.phone\"></span>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("js/src/modules/calculatorC/views/kasko/calculation.step_2.html",
    "<!-- step 2 start -->\n" +
    "<div class=\"ui form b-full-width-bg_white css-small-sized-fields\">\n" +
    "    <div class=\"p20\">\n" +
    "        <div class=\"ui doubling stackable grid four column bottom aligned\">\n" +
    "            <div class=\"column\">\n" +
    "                <div class=\"field\" align=\"left\">\n" +
    "                    <label for=\"id_is_legal_entity\">\n" +
    "                        Тип страхователя:\n" +
    "                    </label>\n" +
    "\n" +
    "                    <div class=\"ui search selection dropdown\"\n" +
    "                         id=\"id_is_legal_entity\"\n" +
    "                         sem-dropdown\n" +
    "                         ng-model=\"calculation.is_legal_entity\"\n" +
    "                         sem-dropdown-items=\"dicts.isLegalEntity\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"column\">\n" +
    "                <div class=\"field\" ng-if=\"!$root.currentBrand.insurance_duration_is_hidden\">\n" +
    "                    <label>Срок страхования:</label>\n" +
    "\n" +
    "                    <div class=\"ui search selection dropdown\"\n" +
    "                         id=\"id_insurance_duration\"\n" +
    "                         sem-dropdown\n" +
    "                         ng-model=\"calculation.insurance_duration\"\n" +
    "                         sem-dropdown-items=\"dicts.insuranceDuration\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"column\">\n" +
    "                <div class=\"field\" ng-if=\"!$root.currentBrand.calculation_at_date_is_hidden\">\n" +
    "                    <label for=\"id_calculation_at_date\">Дата начала действия договора:</label>\n" +
    "\n" +
    "                    <div class=\"ui icon input\">\n" +
    "                        <input type=\"text\"\n" +
    "                               jdatepicker\n" +
    "                               jdatepicker-year-range=\"{{getYearRange(-1, 0)}}\"\n" +
    "                               jdatepicker-only-future=\"true\"\n" +
    "                               placeholder=\"__.__.____\"\n" +
    "                               id=\"id_calculation_at_date\"\n" +
    "                               required\n" +
    "                               ng-model=\"calculation.calculation_at_date\">\n" +
    "                        <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- step 2 end -->");
  $templateCache.put("js/src/modules/calculatorC/views/kasko/calculation.step_3.html",
    "<!-- step 3 start -->\n" +
    "\n" +
    "<div class=\"css-cars-filter b-full-width-bg m0 mt30\"\n" +
    "     ng-class=\"'css-cars-filter--step-' + bigSteps.getBigStep().name\"\n" +
    "     style=\"font-size: 15px;\"\n" +
    "     ng-show=\"!params.resultsAreVisible || bigSteps.getBigStep().name !== 'third'\">\n" +
    "    <div class=\"p20\">\n" +
    "        <car-filter cf-model-car-mark=\"calculation.car_mark\"\n" +
    "                    cf-model-car-model=\"calculation.car_model\"\n" +
    "                    cf-model-car-model-group=\"calculation.car_model_group\"\n" +
    "                    cf-model-car-cost=\"calculation.car_cost\"></car-filter>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- step 3 end -->");
  $templateCache.put("js/src/modules/calculatorC/views/kasko/calculation.step_6.html",
    "<div class=\"ui form b-full-width-bg_white\">\n" +
    "    <div class=\"p20\">\n" +
    "        <div class=\"ui grid stackable four column bottom aligned\">\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "                <div class=\"twelve wide column\">&nbsp;</div>\n" +
    "\n" +
    "                <div class=\"column\" align=\"right\">\n" +
    "                    <div class=\"field\">\n" +
    "                        <button class=\"button ui green\"\n" +
    "                                style=\"margin-right: 0;\"\n" +
    "                                ng-click=\"calculateKasko()\"\n" +
    "                                ng-class=\"{loading: params.isCalculationProgress}\"\n" +
    "                                ng-disabled=\"calculation_form.$invalid || disabledSubmitButton()\"\n" +
    "                                type=\"button\">Рассчитать\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!--<div class=\"mt15\">\n" +
    "            <sem-checkbox ng-model=\"calculation.count_years_break_even_insurance\"\n" +
    "                          ng-true-value=\"1\"\n" +
    "                          ng-false-value=\"0\"\n" +
    "                          sem-label=\"Есть страховые случаи\"></sem-checkbox>\n" +
    "        </div>-->\n" +
    "    </div>\n" +
    "</div>");
}]);
