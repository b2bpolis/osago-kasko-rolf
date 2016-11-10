angular.module('appTemplates', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("js/src/modules/AddingDocuments/views/adding_documents.html",
    "<div ng-include=\"templates.navigation\"></div>\n" +
    "\n" +
    "<div class=\"mt30\">\n" +
    "    <div class=\"p20 mb40 c-tac\"\n" +
    "         ng-show=\"currentBrand.show_personal_data\">\n" +
    "        <div class=\"ui basic buttons\">\n" +
    "            <button class=\"ui button\"\n" +
    "                    tabindex=\"0\"\n" +
    "                    ng-click=\"typeInput = 'personalData'\"\n" +
    "                    ng-class=\"{active: typeInput === 'personalData'}\"\n" +
    "                    type=\"button\">\n" +
    "                Загрузить фото документов\n" +
    "            </button>\n" +
    "\n" +
    "            <button class=\"ui button\"\n" +
    "                    tabindex=\"0\"\n" +
    "                    ng-click=\"typeInput = 'uploader'\"\n" +
    "                    ng-class=\"{active: typeInput === 'uploader'}\"\n" +
    "                    type=\"button\">\n" +
    "                Заполнить личные данные\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <form name=\"f_policy_step_3_form\" class=\"f_policy_step_3-form\">\n" +
    "        <div ng-controller=\"personalDataCtrl\"\n" +
    "             ng-include=\"personalDataTemplate\"\n" +
    "             class=\"css-show-errors\"\n" +
    "             ng-if=\"typeInput === 'uploader'\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"typeInput === 'personalData'\" ng-include=\"templates.uploader\"></div>\n" +
    "    </form>\n" +
    "</div>");
  $templateCache.put("js/src/modules/AddingDocuments/views/adding_documents.uploader.html",
    "<div class=\"p20 mt20\">\n" +
    "\n" +
    "    <div ng-class=\"{'b-disabled-block': isNotUpload}\">\n" +
    "        <div class=\"ui grid stackable\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"six wide column\">\n" +
    "                    <ul class=\"uploader-queue\"\n" +
    "                        nv-file-drop\n" +
    "                        nv-file-over\n" +
    "                        uploader=\"uploader\"\n" +
    "                        over-class=\"uploader-queue_over\">\n" +
    "\n" +
    "                        <li ng-if=\"!uploader.queue.length\">\n" +
    "                            Для оформления полиса нужно загрузить файлы.\n" +
    "                        </li>\n" +
    "\n" +
    "                        <li ng-repeat=\"item in uploader.queue\" class=\"list-item animation-fade\">\n" +
    "                            <div ng-if=\"item._file.type.indexOf('image/') !== -1\">\n" +
    "                                <div ng-thumb=\"{ file: item._file, height: 70 }\"></div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div ng-if=\"item._file.type === 'application/pdf'\">\n" +
    "                                <a href=\"{{item.file_url}}\" target=\"_blank\">\n" +
    "                                    <img ng-src=\"{{params.images_path}}pdf.png\" alt=\"{{item.description}}\"\n" +
    "                                         height=\"70\"/>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div ng-if=\"item._file.type === 'application/msword' || isDocument(item._file.type)\">\n" +
    "                                <a href=\"{{item.file_url}}\" target=\"_blank\">\n" +
    "                                    <img ng-src=\"{{params.images_path}}doc_icon.png\" alt=\"{{item.description}}\"\n" +
    "                                         height=\"70\"/>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"uploader-queue-actions\">\n" +
    "                                <button type=\"button\"\n" +
    "                                        ng-click=\"item.remove()\"\n" +
    "                                        class=\"button button-wrong\">Удалить\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "\n" +
    "                    <div class=\"control-row mt15\">\n" +
    "                        <input type=\"file\"\n" +
    "                               nv-file-select\n" +
    "                               class=\"ui button\"\n" +
    "                               name=\"file\"\n" +
    "                               style=\"width: 100%;\"\n" +
    "                               uploader=\"uploader\"\n" +
    "                               multiple/>\n" +
    "                        <h4>Выбрано: {{uploader.queue.length}}</h4>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"ten wide column\">\n" +
    "                    <h2 class=\"b-content_title m0\">Подтверждаю загрузку минимального пакета документов</h2>\n" +
    "\n" +
    "                    <div class=\"b-full-width-bg\" style=\"padding: 15px 0;margin-left: -15px;\">\n" +
    "                        <div class=\"p20\">\n" +
    "                            Для заполнения полиса добавьте сканы или фотографии ваших документов. Мы внесем эти данные и проверим их самостоятельно.\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"b-uploader_confirmation-list\">\n" +
    "                        <div class=\"list-item\">\n" +
    "                            <sem-checkbox ng-model=\"confirmationList.id_is_1\"\n" +
    "                                          sem-label=\"Копия паспорта Страхователя (1 лист и лист с пропиской)\"\n" +
    "                                          required=\"required\"\n" +
    "                                          id=\"id_is_1\"\n" +
    "                                          name=\"is_1\">\n" +
    "                            </sem-checkbox>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"list-item\">\n" +
    "                            <sem-checkbox ng-model=\"confirmationList.id_is_2\"\n" +
    "                                          sem-label=\"Копия паспорта Собственника (1 лист и лист с пропиской)\"\n" +
    "                                          required=\"required\"\n" +
    "                                          id=\"id_is_2\"\n" +
    "                                          name=\"is_2\">\n" +
    "                            </sem-checkbox>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"list-item\">\n" +
    "                            <sem-checkbox ng-model=\"confirmationList.id_is_4\"\n" +
    "                                          sem-label=\"Копия ПТС или свидетельство о регистрации (с двух сторон)\"\n" +
    "                                          required=\"required\"\n" +
    "                                          id=\"id_is_4\"\n" +
    "                                          name=\"is_4\">\n" +
    "                            </sem-checkbox>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"list-item\">\n" +
    "                            <sem-checkbox ng-model=\"confirmationList.id_is_7\"\n" +
    "                                          sem-label=\"Копия вод. удостоверений с обеих сторон всех водителей\"\n" +
    "                                          required=\"required\"\n" +
    "                                          id=\"id_is_7\"\n" +
    "                                          name=\"is_7\">\n" +
    "                            </sem-checkbox>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"mt20 c-tar\">\n" +
    "        <a ui-sref=\"index.ordering\"\n" +
    "           ng-class=\"{loading: isSaveDataProgress, disabled: (f_policy_step_3_form.$invalid || !uploader.queue.length)}\"\n" +
    "           class=\"ui branded button\">\n" +
    "            Далее\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"mt40\" ng-if=\"errors.length\">\n" +
    "        <div class=\"ui error message\">\n" +
    "            <ul class=\"list\">\n" +
    "                <li ng-repeat=\"error in errors\" ng-if=\"errors.length > 0\"><span ng-bind=\"error\"></span></li>\n" +
    "            </ul>\n" +
    "            <i class=\"close icon\" ng-click=\"errors.length = 0;\"></i>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
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
  $templateCache.put("js/src/modules/calculator/views/calculation.form.html",
    "<div ui-view=\"step_2\"></div>\n" +
    "<div ui-view=\"step_3\"></div>\n" +
    "<div ui-view=\"step_4\" ng-if=\"getCurrentCalcType() === 'full'\"></div>\n" +
    "<div ui-view=\"step_5\" ng-if=\"getCurrentCalcType() === 'simple'\"></div>\n" +
    "<div ui-view=\"step_6\" ng-show=\"getCurrentCalcType()\"></div>\n" +
    "<div ng-include=\"templates.program_list\" class=\"js-kasko-result\"></div>");
  $templateCache.put("js/src/modules/calculator/views/calculation.messages.html",
    "<div class=\"control-row calc-result-messages\" ng-if=\"messages.length\">\n" +
    "    <div class=\"calc-result-errors\">\n" +
    "        <div class=\"list-item\" ng-repeat=\"message in messages\">\n" +
    "            {{message}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/calculator/views/calculator.html",
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
  $templateCache.put("js/src/modules/calculator/views/document_uploader.html",
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
  $templateCache.put("js/src/modules/calculator/views/navigation.html",
    "<div class=\"b-steps\">\n" +
    "    <div class=\"ui steps three\" ng-controller=\"calculatorNavigationCtrl\">\n" +
    "        <!--ng-class=\"{four: navigation.length === 4, five:  navigation.length === 5}\"-->\n" +
    "        <div class=\"step\"\n" +
    "             ng-repeat=\"navItem in navigation track by $index\"\n" +
    "             ng-click=\"goToStep($index)\"\n" +
    "             ng-hide=\"navItem.isHidden()\"\n" +
    "             ng-class=\"{\n" +
    "                active: navItem.active,\n" +
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
  $templateCache.put("js/src/modules/carFilter/views/car_filter.car_group_models_list.html",
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
  $templateCache.put("js/src/modules/carFilter/views/car_filter.car_manufacturing_years.html",
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
    "        <label class=\"ml15\">Другой:</label>\n" +
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
  $templateCache.put("js/src/modules/carFilter/views/car_filter.car_marks_list.html",
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
  $templateCache.put("js/src/modules/carFilter/views/car_filter.car_models_list.html",
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
  $templateCache.put("js/src/modules/carFilter/views/car_filter.html",
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
    "    .b-calc-step--owner_registration .show-active-owner_registration,\n" +
    "    .b-calc-step--calculation_type .show-active-calculation_type,\n" +
    "    .b-calc-step--drivers .show-active-drivers {\n" +
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
    "<div class=\"ui form b-calc-step\" ng-class=\"'b-calc-step--' + getActiveStep().name\">\n" +
    "    <div ng-show=\"getActiveStep().name !== 'year'\">\n" +
    "        <div class=\"ui large labels\" ng-class=\"$root.currentBrand.steps_buttons_color\">\n" +
    "            <div class=\"ui  label basic\">\n" +
    "                <span ng-bind=\"calculation.car_manufacturing_year\"></span> г.в.\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setActiveStep('year')\"\n" +
    "                   ng-click=\"setActiveStep('year')\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"ui  label basic\"\n" +
    "                 ng-show=\"selectedCarMark.title\">\n" +
    "                <span ng-bind=\"selectedCarMark.title\"></span>\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-click=\"setCarStep(1)\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setCarStep(1)\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"ui  label basic\"\n" +
    "                 ng-show=\"selectedCarModelGroup.title\">\n" +
    "                <span ng-bind=\"selectedCarModelGroup.title\"></span>\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setCarStep(2)\"\n" +
    "                   ng-click=\"setCarStep(2)\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"ui  label basic\"\n" +
    "                 ng-show=\"selectedCarModel.title\">\n" +
    "                <span ng-bind=\"selectedCarModel.title\"></span>\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setCarStep(3)\"\n" +
    "                   ng-click=\"setCarStep(3)\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"ui  label basic\"\n" +
    "                 ng-show=\"calculation.engine_power\">\n" +
    "                <span ng-bind=\"calculation.engine_power\"></span> л.с.\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setActiveStep('engine_power')\"\n" +
    "                   ng-click=\"setActiveStep('engine_power');\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"ui  label basic\"\n" +
    "                 ng-show=\"calculation.owner_registration\">\n" +
    "                <span ng-bind=\"carFilterParams.owner_registration_title\"></span>\n" +
    "                <i class=\"icon delete\"\n" +
    "                   ng-keydown=\"$event.keyCode == 13 && setActiveStep('owner_registration')\"\n" +
    "                   ng-click=\"setActiveStep('owner_registration');\"\n" +
    "                   tabindex=\"0\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"p20\">\n" +
    "            <div class=\"ui divider\" style=\"border-top-style: dashed;\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-year\">\n" +
    "        <div class=\"mb10\">\n" +
    "            <strong>Год выпуска автомобиля:</strong>\n" +
    "        </div>\n" +
    "\n" +
    "        <car-manufacturing-years></car-manufacturing-years>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-car\">\n" +
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
    "                {{selectedCarMark.title}} <span ng-if=\"!selectedCarModel.title\">{{selectedCarModelGroup.title}} </span> <span ng-if=\"selectedCarModel.title\">{{selectedCarModel.title}}</span>:\n" +
    "            </b>\n" +
    "\n" +
    "            <!--<a href=\"\"\n" +
    "               ng-if=\"carFilterStep > 1\"\n" +
    "               class=\"change-selected_car\"\n" +
    "               ng-click=\"goBack()\">Изменить</a>-->\n" +
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
    "    <div class=\"c-hidden show-active-engine_power\">\n" +
    "        <div class=\"fields\">\n" +
    "            <div class=\"five wide field\">\n" +
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
    "                        class=\"ui button branded\">Далее\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-owner_registration\">\n" +
    "        <h3 class=\"b-content_title mb20 mt30\">Выберите регион регистрации собственника:</h3>\n" +
    "\n" +
    "        <div class=\"ui grid stackable\">\n" +
    "            <div class=\"twelve wide column\"\n" +
    "                 ng-show=\"!carFilterParams.ownerRegistrationViewIsFull\">\n" +
    "                <h3 class=\"b-content_title p20 m0\">\n" +
    "                    <a href=\"\"\n" +
    "                       ng-repeat=\"item in mainRegions\"\n" +
    "                       ng-click=\"selectOwnerRegistration(item.id)\"\n" +
    "                       ng-bind=\"item.title\"\n" +
    "                       ng-class=\"{'css-bottom-dashed--active': item.id == carFilterParams.owner_registration}\"\n" +
    "                       class=\"mr25 css-bottom-dashed mb10\"></a>\n" +
    "\n" +
    "                    <a href=\"\" ng-click=\"toggleOwnerRegistrationView()\" ng-if=\"!carFilterParams.owner_registration_all_are_hidden\">другой</a>\n" +
    "                </h3>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"five wide column\" ng-show=\"carFilterParams.ownerRegistrationViewIsFull\">\n" +
    "                <div class=\"p20 field\">\n" +
    "                    <div class=\"ui search selection dropdown\"\n" +
    "                         id=\"id_owner_registration\"\n" +
    "                         ng-focus=\"carFilterParams.was_clicked = true;\"\n" +
    "                         ng-click=\"carFilterParams.was_clicked = true;\"\n" +
    "                         sem-dropdown\n" +
    "                         sem-dropdown-placeholder=\"Не выбран\"\n" +
    "                         ng-model=\"carFilterParams.owner_registration\"\n" +
    "                         ng-change=\"carFilterParams.was_clicked && selectOwnerRegistration()\"\n" +
    "                         sem-dropdown-items=\"ownerRegistration\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"seven wide column\" ng-show=\"carFilterParams.ownerRegistrationViewIsFull\">&nbsp;</div>\n" +
    "\n" +
    "            <!--<div class=\"four wide column c-tar\">\n" +
    "                <button class=\"ui button green\"\n" +
    "                        ng-click=\"ownerRegistrationNext()\"\n" +
    "                        type=\"button\">Далее</button>\n" +
    "            </div>-->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"c-hidden show-active-calculation_type\">\n" +
    "        <h3 class=\"b-content_title mb30 mt30\">Тип расчета ОСАГО:</h3>\n" +
    "\n" +
    "        <div class=\"p20 mb25\"\n" +
    "             ng-show=\"$root.currentBrand.show_user_agreement && !carFilterParams.calculation_type\">\n" +
    "            <sem-checkbox ng-model=\"personalData.user_agreement\"\n" +
    "                          sem-label=\"Я согласен(а) на обработку моих персональных данных\"\n" +
    "                          id=\"personal_data\"\n" +
    "                          name=\"personal_data\">\n" +
    "            </sem-checkbox>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-class=\"{'css-disabled-links': !personalData.user_agreement}\">\n" +
    "          <h3 class=\"b-content_title p20 m0\">\n" +
    "              <a href=\"\"\n" +
    "                 ng-repeat=\"item in calcTypes\"\n" +
    "                 ng-click=\"!personalData.user_agreement || setCalculationType(item.id)\"\n" +
    "                 ng-bind=\"item.title\"\n" +
    "                 ng-class=\"{'css-bottom-dashed--active': item.id == carFilterParams.calculation_type}\"\n" +
    "                 class=\"mr25 css-bottom-dashed\">\n" +
    "              </a>\n" +
    "          </h3>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
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
  $templateCache.put("js/src/modules/personalData/views/personal_data.address_registration.html",
    "<div dadata=\"person.address_registration\"\n" +
    "     dadata-type=\"address\">\n" +
    "    <div class=\"fields\">\n" +
    "        <div class=\"twelve field wide\">\n" +
    "            <label for=\"id_address_registration_postal_full\">Введите полный адрес:</label>\n" +
    "\n" +
    "            <div class=\"ui transparent input\">\n" +
    "                <input type=\"text\"\n" +
    "                       required\n" +
    "                       dadata-target\n" +
    "                       ng-blur=\"fieldBlurred()\"\n" +
    "                       class=\"ui transparent input\"\n" +
    "                       ng-class=\"{'css-error-input': !addressIsValid(person.address_registration)}\"\n" +
    "                       id=\"id_address_registration_postal_full\"\n" +
    "                       ng-model=\"person.address_registration.full\"\n" +
    "                       name=\"address_registration_postal_full\"/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"two field wide\">\n" +
    "            <label>Корпус:</label>\n" +
    "\n" +
    "            <div class=\"ui transparent input\">\n" +
    "                <input type=\"text\"\n" +
    "                       title=\"Корпус\"\n" +
    "                       ng-blur=\"fieldBlurred()\"\n" +
    "                       ng-model=\"person.address_registration.housing\"\n" +
    "                       name=\"address_registration_housing\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"two field wide\">\n" +
    "            <label>Кв./офис:</label>\n" +
    "\n" +
    "            <div class=\"ui transparent input\">\n" +
    "                <input type=\"text\"\n" +
    "                       title=\"Квартира\"\n" +
    "                       ng-blur=\"fieldBlurred()\"\n" +
    "                       ng-model=\"person.address_registration.flat\"\n" +
    "                       name=\"address_registration_flat\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"js-dadata-messages ui pointing red basic label\"></div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/personalData/views/personal_data.address_residential.html",
    "<div dadata=\"person.address_residential\"\n" +
    "     dadata-type=\"address\">\n" +
    "    <div class=\"fields\">\n" +
    "        <div class=\"twelve field wide\">\n" +
    "            <label for=\"id_address_residential_postal_full\">Введите полный адрес:</label>\n" +
    "\n" +
    "            <div class=\"ui transparent input\">\n" +
    "                <input type=\"text\"\n" +
    "                       required\n" +
    "                       dadata-target\n" +
    "                       ng-change=\"addressIsValid(person.address_residential)\"\n" +
    "                       ng-blur=\"fieldBlurred()\"\n" +
    "                       class=\"ui transparent input\"\n" +
    "                       ng-class=\"{'css-error-input': !addressIsValid(person.address_residential)}\"\n" +
    "                       id=\"id_address_residential_postal_full\"\n" +
    "                       ng-model=\"person.address_residential.full\"\n" +
    "                       name=\"address_residential_postal_full\"/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"two field wide\">\n" +
    "            <label>Корпус:</label>\n" +
    "\n" +
    "            <div class=\"ui transparent input\">\n" +
    "                <input type=\"text\"\n" +
    "                       title=\"Корпус\"\n" +
    "                       ng-change=\"addressIsValid(person.address_residential)\"\n" +
    "                       ng-blur=\"fieldBlurred()\"\n" +
    "                       ng-model=\"person.address_residential.housing\"\n" +
    "                       name=\"address_residential_housing\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"two field wide\">\n" +
    "            <label>Кв./офис:</label>\n" +
    "\n" +
    "            <div class=\"ui transparent input\">\n" +
    "                <input type=\"text\"\n" +
    "                       title=\"Квартира\"\n" +
    "                       ng-change=\"addressIsValid(person.address_residential)\"\n" +
    "                       ng-blur=\"fieldBlurred()\"\n" +
    "                       ng-model=\"person.address_residential.flat\"\n" +
    "                       name=\"address_residential_flat\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"js-dadata-messages ui pointing red basic label\"></div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/personalData/views/personal_data.addresses_block.html",
    "<div class=\"b-addresses\">\n" +
    "    <div class=\"b-address ui stackable grid\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"b-address_line column\">\n" +
    "                <div class=\"p20\">\n" +
    "                    <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                        <div class=\"b-addresses_checkboxes mb15\">\n" +
    "                            <strong>\n" +
    "                                Адрес регистрации:\n" +
    "                            </strong>\n" +
    "\n" +
    "                            <sem-checkbox sem-label=\"Совпадает с фактическим\"\n" +
    "                                          ng-model=\"person.is_same_address\"></sem-checkbox>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div ng-include=\"templates.address_registration\"></div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\" style=\"padding-top: 10px;\"\n" +
    "                         ng-if=\"!person.is_same_address\">\n" +
    "                        <label class=\"mb15\">Адрес проживания:</label>\n" +
    "\n" +
    "                        <div ng-include=\"templates.address_residential\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/personalData/views/personal_data.form.car.html",
    "<div class=\"ui form b-car-form\">\n" +
    "    <div class=\"p20\">\n" +
    "\n" +
    "        <h3 class=\"ui horizontal divider header\">\n" +
    "            <i class=\"icon car\"></i><span></span>\n" +
    "        </h3>\n" +
    "\n" +
    "        <div class=\"ui grid stackable four column b-full-width-bg is-form\"\n" +
    "             ng-form=\"car_form\"\n" +
    "             check-in-rsa=\"params\"\n" +
    "             check-in-rsa-send=\"{{car_form.$valid}}\"\n" +
    "             ng-model=\"car\">\n" +
    "            <div class=\"ui loader\" ng-class=\"{active: rsaParams.is_sending}\"></div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"sixteen wide column\">\n" +
    "                    <h2 class=\"b-content_title m0 mb15\">\n" +
    "                        Автомобиль\n" +
    "                        <strong ng-if=\"params.car_mark\" class=\"vam\">\n" +
    "                            <span ng-bind=\"params.car_mark\"></span> —\n" +
    "                            <span ng-bind=\"params.car_model_group\"></span> —\n" +
    "                            <span ng-bind=\"params.car_model\"></span>\n" +
    "                            '<span ng-repeat=\"char in calculation.car_manufacturing_year | limitTo: -2 track by $index\"\n" +
    "                                   ng-bind=\"char\"></span>\n" +
    "                        </strong>\n" +
    "                    </h2>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row bottom aligned\">\n" +
    "                <div class=\"column\">\n" +
    "                    <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "\n" +
    "                        <div align=\"center\" style=\"margin-top: -2em;\">\n" +
    "                            <sem-checkbox ng-model=\"params.number_type\"\n" +
    "                                          sem-label=\"VIN\"\n" +
    "                                          sem-type=\"radio\"\n" +
    "                                          name=\"number_type\"\n" +
    "                                          value=\"vin_number\"></sem-checkbox>\n" +
    "\n" +
    "                            <sem-checkbox ng-model=\"params.number_type\"\n" +
    "                                          sem-label=\"Номер кузова\"\n" +
    "                                          sem-type=\"radio\"\n" +
    "                                          class=\"ml10\"\n" +
    "                                          name=\"number_type\"\n" +
    "                                          value=\"car_body_number\"></sem-checkbox>\n" +
    "\n" +
    "                            <sem-checkbox ng-model=\"params.number_type\"\n" +
    "                                          sem-label=\"Номер шасси\"\n" +
    "                                          sem-type=\"radio\"\n" +
    "                                          name=\"number_type\"\n" +
    "                                          style=\"margin: 0.5em 0;\"\n" +
    "                                          value=\"chassis_number\"></sem-checkbox>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"ui input\" ng-if=\"params.number_type === 'vin_number'\">\n" +
    "                            <input type=\"text\"\n" +
    "                                   input-vin-number\n" +
    "                                   required\n" +
    "                                   maxlength=\"17\"\n" +
    "                                   ng-minlength=\"17\"\n" +
    "                                   ng-blur=\"fieldBlurred()\"\n" +
    "                                   placeholder=\"Введите VIN-номер автомобиля\"\n" +
    "                                   id=\"id_vin_number\"\n" +
    "                                   name=\"vin_number\"\n" +
    "                                   ng-model=\"car.vin_number\"/>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"ui label pointing basic top grey c-vin-error-label\" ng-show=\"car.vin_number.length === 17 && params.number_type === 'vin_number'\">Не совпадает контрольная сумма VIN</div>\n" +
    "\n" +
    "                        <div class=\"ui input\" ng-if=\"params.number_type === 'car_body_number'\">\n" +
    "                            <input type=\"text\"\n" +
    "                                   required\n" +
    "                                   ng-blur=\"fieldBlurred()\"\n" +
    "                                   name=\"car_body_number\"\n" +
    "                                   placeholder=\"Введите номер кузова автомобиля\"\n" +
    "                                   ng-model=\"car.car_body_number\"/>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"ui input\" ng-if=\"params.number_type === 'chassis_number'\">\n" +
    "                            <input type=\"text\"\n" +
    "                                   required\n" +
    "                                   name=\"chassis_number\"\n" +
    "                                   ng-blur=\"fieldBlurred()\"\n" +
    "                                   placeholder=\"Введите номер шасси автомобиля\"\n" +
    "                                   ng-model=\"car.chassis_number\"/>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"column\">\n" +
    "                    <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                        <label for=\"id_number_plate\">Гос. рег. знак:</label>\n" +
    "                        <input type=\"text\"\n" +
    "                               input-capitalize\n" +
    "                               ng-blur=\"fieldBlurred()\"\n" +
    "                               maxlength=\"10\"\n" +
    "                               required\n" +
    "                               id=\"id_number_plate\"\n" +
    "                               name=\"number_plate\"\n" +
    "                               ng-model=\"car.number_plate\"/>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"column\">\n" +
    "                    <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                        <label for=\"id_mileage\">Пробег:</label>\n" +
    "                        <input type=\"text\"\n" +
    "                               maxlength=\"8\"\n" +
    "                               input-integer\n" +
    "                               input-float\n" +
    "                               id=\"id_mileage\"\n" +
    "                               ng-blur=\"fieldBlurred()\"\n" +
    "                               name=\"mileage\"\n" +
    "                               ng-model=\"car.mileage\"/>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"column\">\n" +
    "                    <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                        <label for=\"id_engine_power_kilowatt\">Мощность в кВт:</label>\n" +
    "                        <input type=\"text\"\n" +
    "                               input-float\n" +
    "                               ng-max=\"735\"\n" +
    "                               max-precision=\"2\"\n" +
    "                               maxlength=\"6\"\n" +
    "                               id=\"id_engine_power_kilowatt\"\n" +
    "                               name=\"engine_power_kilowatt\"\n" +
    "                               ng-blur=\"fieldBlurred()\"\n" +
    "                               ng-model=\"car.engine_power_kilowatt\"/>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"column\">\n" +
    "                    <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                        <div>\n" +
    "                            <sem-checkbox ng-model=\"params.car_document_type\"\n" +
    "                                          sem-label=\"ПТС\"\n" +
    "                                          sem-type=\"radio\"\n" +
    "                                          name=\"car_document_type\"\n" +
    "                                          value=\"vehicle_registration\"></sem-checkbox>\n" +
    "\n" +
    "                            <sem-checkbox ng-model=\"params.car_document_type\"\n" +
    "                                          sem-label=\"СТС\"\n" +
    "                                          sem-type=\"radio\"\n" +
    "                                          class=\"ml10\"\n" +
    "                                          name=\"car_document_type\"\n" +
    "                                          value=\"vehicle_certificate\"></sem-checkbox>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"ui fields\" ng-if=\"params.car_document_type === 'vehicle_registration'\">\n" +
    "                            <div class=\"seven field wide mb10\">\n" +
    "                                <input type=\"text\"\n" +
    "                                       name=\"vehicle_registration_series\"\n" +
    "                                       required\n" +
    "                                       input-only=\"[А-Яа-я0-9]+\"\n" +
    "                                       maxlength=\"4\"\n" +
    "                                       ng-minlength=\"4\"\n" +
    "                                       ng-blur=\"fieldBlurred()\"\n" +
    "                                       placeholder=\"Серия\"\n" +
    "                                       id=\"id_vehicle_registration_series\"\n" +
    "                                       ng-model=\"car.vehicle_registration.series\"/>\n" +
    "                            </div>\n" +
    "                            <div class=\"nine field wide\">\n" +
    "                                <input type=\"text\"\n" +
    "                                       name=\"vehicle_registration_number\"\n" +
    "                                       placeholder=\"Номер\"\n" +
    "                                       required\n" +
    "                                       input-integer\n" +
    "                                       ng-blur=\"fieldBlurred()\"\n" +
    "                                       maxlength=\"6\"\n" +
    "                                       ng-model=\"car.vehicle_registration.number\"/>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"ui fields\" ng-if=\"params.car_document_type === 'vehicle_certificate'\">\n" +
    "                            <div class=\"seven field wide mb10\">\n" +
    "                                <input type=\"text\"\n" +
    "                                       name=\"vehicle_certificate_series\"\n" +
    "                                       required\n" +
    "                                       input-only=\"[А-Яа-я0-9]+\"\n" +
    "                                       ng-blur=\"fieldBlurred()\"\n" +
    "                                       maxlength=\"4\"\n" +
    "                                       ng-minlength=\"4\"\n" +
    "                                       placeholder=\"Серия\"\n" +
    "                                       id=\"id_vehicle_certificate_series\"\n" +
    "                                       ng-model=\"car.vehicle_certificate.series\"/>\n" +
    "                            </div>\n" +
    "                            <div class=\"nine field wide\">\n" +
    "                                <input type=\"text\"\n" +
    "                                       name=\"vehicle_certificate_number\"\n" +
    "                                       placeholder=\"Номер\"\n" +
    "                                       required\n" +
    "                                       ng-blur=\"fieldBlurred()\"\n" +
    "                                       input-integer\n" +
    "                                       maxlength=\"6\"\n" +
    "                                       ng-model=\"car.vehicle_certificate.number\"/>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"column\">\n" +
    "                    <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                        <label for=\"id_document_issue_date\">Дата получения:</label>\n" +
    "\n" +
    "                        <div class=\"ui icon input\">\n" +
    "                            <input type=\"text\"\n" +
    "                                   jdatepicker\n" +
    "                                   jdatepicker-year-range=\"{{getYearRange(0, 20)}}\"\n" +
    "                                   jdatepicker-only-past=\"true\"\n" +
    "                                   name=\"document_issue_date\"\n" +
    "                                   ng-change=\"fieldBlurred()\"\n" +
    "                                   placeholder=\"__.__.____\"\n" +
    "                                   id=\"id_document_issue_date\"\n" +
    "                                   required\n" +
    "                                   ng-model=\"car.document_issue_date\">\n" +
    "                            <i class=\"icon calendar circular blue inverted\"></i>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"column\">\n" +
    "                    <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                        <label for=\"id_engine_displacement\">Объем двигателя:</label>\n" +
    "                        <input type=\"text\"\n" +
    "                               input-float\n" +
    "                               ng-blur=\"fieldBlurred()\"\n" +
    "                               ng-max=\"100\"\n" +
    "                               id=\"id_engine_displacement\"\n" +
    "                               name=\"engine_displacement\"\n" +
    "                               ng-model=\"car.engine_displacement\"/>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"js-check-in-rsa_message ui message\" ng-class=\"rsaParams.message_type\" ng-bind=\"rsaParams.message\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/personalData/views/personal_data.form.person_block_legal.html",
    "<div class=\"ui form\">\n" +
    "    <div class=\"p20\">\n" +
    "        <div ng-include=\"templates.person_roles\"></div>\n" +
    "\n" +
    "        <div class=\"ui grid stackable\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"four wide column\">\n" +
    "                    <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                        <label for=\"id_title_{{$index}}\">Название:</label>\n" +
    "                        <input type=\"text\"\n" +
    "                               required\n" +
    "                               id=\"id_title_{{$index}}\"\n" +
    "                               name=\"legal_person_title\"\n" +
    "                               ng-model=\"person.title\"/>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"four wide column\">\n" +
    "                    <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                        <label for=\"id_inn_{{$index}}\">ИНН:</label>\n" +
    "                        <input type=\"text\"\n" +
    "                               required\n" +
    "                               id=\"id_inn_{{$index}}\"\n" +
    "                               input-integer\n" +
    "                               minlength=\"10\"\n" +
    "                               maxlength=\"10\"\n" +
    "                               name=\"legal_person_inn\"\n" +
    "                               ng-model=\"person.inn\"/>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"four wide column\">\n" +
    "                    <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                        <label for=\"id_ogrn_{{$index}}\">ОГРН:</label>\n" +
    "                        <input type=\"text\"\n" +
    "                               id=\"id_ogrn_{{$index}}\"\n" +
    "                               name=\"legal_person_ogrn\"\n" +
    "                               input-integer\n" +
    "                               minlength=\"13\"\n" +
    "                               maxlength=\"13\"\n" +
    "                               ng-model=\"person.ogrn\"/>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"b-addresses\"\n" +
    "         ng-if=\"person.hasRole()\">\n" +
    "\n" +
    "        <div class=\"b-address ui stackable grid\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"b-address_line column\">\n" +
    "                    <div class=\"p20\">\n" +
    "                        <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                            <label class=\"mb15\">Юридический адрес:</label>\n" +
    "\n" +
    "                            <div ng-include=\"templates.address_registration\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div align=\"right\" class=\"mt15\" ng-if=\"person.hasRole() && currentUser.is_legal_person\">\n" +
    "        <a href=\"\" user-to-person ng-model=\"person\">Заполнить данными из профиля</a>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/personalData/views/personal_data.form.person_block.html",
    "<div class=\"ui form\">\n" +
    "    <div class=\"p20\">\n" +
    "        <div ng-include=\"templates.person_roles\"></div>\n" +
    "\n" +
    "        <div ng-if=\"!person.isDriver && person.personType === 'natural_person' || person.showFioFields\">\n" +
    "            <div class=\"ui grid stackable four column\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"column\">\n" +
    "                        <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                            <label>Фамилия</label>\n" +
    "                            <input type=\"text\"\n" +
    "                                   required\n" +
    "                                   name=\"last_name\"\n" +
    "                                   ng-blur=\"fieldBlurred()\"\n" +
    "                                   ng-pattern=\"params.name_pattern\"\n" +
    "                                   placeholder=\"Иван\"\n" +
    "                                   ng-model=\"person.last_name\"/>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"column\">\n" +
    "                        <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                            <label>Имя</label>\n" +
    "                            <input type=\"text\"\n" +
    "                                   placeholder=\"Петров\"\n" +
    "                                   required\n" +
    "                                   ng-blur=\"fieldBlurred()\"\n" +
    "                                   name=\"first_name\"\n" +
    "                                   ng-pattern=\"params.name_pattern\"\n" +
    "                                   ng-model=\"person.first_name\"/>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"column\">\n" +
    "                        <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                            <label>Отчество</label>\n" +
    "                            <input type=\"text\"\n" +
    "                                   name=\"patronymic\"\n" +
    "                                   ng-blur=\"fieldBlurred()\"\n" +
    "                                   ng-pattern=\"params.name_pattern\"\n" +
    "                                   placeholder=\"Александрович\"\n" +
    "                                   ng-model=\"person.patronymic\"/>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"column\" ng-if=\"person.hasRole()\">\n" +
    "                        <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                            <label for=\"id_person_birth_date_{{$index}}\">Дата рождания</label>\n" +
    "\n" +
    "                            <div class=\"ui icon input\">\n" +
    "                                <input type=\"text\"\n" +
    "                                       jdatepicker\n" +
    "                                       ng-blur=\"fieldBlurred()\"\n" +
    "                                       jdatepicker-year-range=\"{{person.birthDateRange.yearRange}}\"\n" +
    "                                       jdatepicker-max-date=\"{{person.birthDateRange.max}}\"\n" +
    "                                       jdatepicker-min-date=\"{{person.birthDateRange.min}}\"\n" +
    "                                       name=\"birth_date\"\n" +
    "                                       placeholder=\"__.__.____\"\n" +
    "                                       id=\"id_person_birth_date_{{$index}}\"\n" +
    "                                       required\n" +
    "                                       ng-model=\"person.birth_date\">\n" +
    "                                <i class=\"icon calendar circular blue inverted\"></i>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"person.hasRole()\">\n" +
    "            <div class=\"ui grid stackable four column\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"column\">\n" +
    "                        <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                            <label for=\"id_person_passport_series_{{$index}}\">Серия и номер паспорта</label>\n" +
    "\n" +
    "                            <div class=\"ui fields\">\n" +
    "                                <div class=\"seven field wide mb10\">\n" +
    "                                    <input type=\"text\"\n" +
    "                                           name=\"person_passport_series\"\n" +
    "                                           class=\"focusing-first\"\n" +
    "                                           required\n" +
    "                                           ng-blur=\"fieldBlurred()\"\n" +
    "                                           input-integer\n" +
    "                                           maxlength=\"4\"\n" +
    "                                           minlength=\"4\"\n" +
    "                                           placeholder=\"Серия\"\n" +
    "                                           id=\"id_person_passport_series_{{$index}}\"\n" +
    "                                           ng-model=\"person.passport.series\"/>\n" +
    "                                </div>\n" +
    "                                <div class=\"nine field wide\">\n" +
    "                                    <input type=\"text\"\n" +
    "                                           name=\"person_passport_number\"\n" +
    "                                           placeholder=\"Номер\"\n" +
    "                                           ng-blur=\"fieldBlurred()\"\n" +
    "                                           required\n" +
    "                                           input-integer\n" +
    "                                           maxlength=\"6\"\n" +
    "                                           minlength=\"6\"\n" +
    "                                           ng-model=\"person.passport.number\"/>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"column\">\n" +
    "                        <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                            <label for=\"id_person_passport_issue_date_{{$index}}\">Дата выдачи</label>\n" +
    "\n" +
    "                            <div class=\"ui icon input\">\n" +
    "                                <input type=\"text\"\n" +
    "                                       jdatepicker\n" +
    "                                       jdatepicker-year-range=\"{{getYearRange(0, 20)}}\"\n" +
    "                                       jdatepicker-only-past=\"true\"\n" +
    "                                       name=\"passport_issue_date\"\n" +
    "                                       placeholder=\"__.__.____\"\n" +
    "                                       ng-change=\"fieldBlurred()\"\n" +
    "                                       id=\"id_person_passport_issue_date_{{$index}}\"\n" +
    "                                       required\n" +
    "                                       ng-model=\"person.passport.issue_date\">\n" +
    "                                <i class=\"icon calendar circular blue inverted\"></i>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"eight wide column\">\n" +
    "                        <div class=\"field\" ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                            <label for=\"id_passport_issue_point\">Кем выдан</label>\n" +
    "                            <input type=\"text\"\n" +
    "                                   name=\"passport_issue_point\"\n" +
    "                                   required\n" +
    "                                   ng-blur=\"fieldBlurred()\"\n" +
    "                                   id=\"id_passport_issue_point\"\n" +
    "                                   placeholder=\"Отделением УФМС по Санкт-Петербургу\"\n" +
    "                                   ng-model=\"person.passport.issue_point\"/>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row-margin\">\n" +
    "                <div ng-include=\"templates.addresses_block\"\n" +
    "                     ng-if=\"person.hasRole() || person.isDriver\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"js-check-in-rsa_message ui message\" ng-class=\"rsaParams.message_type\" ng-bind=\"rsaParams.message\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
  $templateCache.put("js/src/modules/personalData/views/personal_data.form.person_roles.html",
    "<div class=\"ui grid stackable\">\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"five wide column\">\n" +
    "            <h2 class=\"b-content_title\">\n" +
    "                <strong ng-if=\"person.isDriver && !person.showFioFields\"\n" +
    "                        ng-bind=\"person | fioFormatter:'full'\"></strong>\n" +
    "\n" +
    "                <strong ng-if=\"person.showFioFields\">Водитель</strong>\n" +
    "\n" +
    "                <strong ng-if=\"!person.isDriver\">Участник договора (<span\n" +
    "                        ng-bind=\"person.personType === 'legal_person' ? 'Юр. лицо' : 'Физ. лицо'\"></span>)</strong>\n" +
    "            </h2>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"seven wide column\">\n" +
    "            <div class=\"three fields\">\n" +
    "                <div class=\"field\">\n" +
    "                    <sem-checkbox ng-model=\"person.isDriver\"\n" +
    "                                  disabled=\"disabled\"\n" +
    "                                  sem-label=\"Водитель\">\n" +
    "                    </sem-checkbox>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"field\"\n" +
    "                     ng-class=\"{disabled: isDisabledForm, error: !personCheckUsed().isOwner}\">\n" +
    "                    <sem-checkbox ng-model=\"person.isOwner\"\n" +
    "                                  sem-label=\"Собственник\"\n" +
    "                                  ng-change=\"setPersonType(person, 'isOwner')\"\n" +
    "                                  name=\"person_is_owner\">\n" +
    "                    </sem-checkbox>\n" +
    "                </div>\n" +
    "                <div class=\"field\"\n" +
    "                     ng-class=\"{disabled: isDisabledForm, error: !personCheckUsed().isInsurant}\">\n" +
    "                    <sem-checkbox ng-model=\"person.isInsurant\"\n" +
    "                                  sem-label=\"Страхователь\"\n" +
    "                                  ng-change=\"setPersonType(person, 'isInsurant')\"\n" +
    "                                  name=\"person_is_insurant\">\n" +
    "                    </sem-checkbox>\n" +
    "                </div>\n" +
    "            </div><!-- /.fields -->\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"four wide column\">\n" +
    "            <div class=\"field without-dropdown-placeholder\"\n" +
    "                 style=\"min-width: 140px;\"\n" +
    "                 ng-class=\"{disabled: isDisabledForm}\">\n" +
    "                <div ng-if=\"!$index\">\n" +
    "                    <div class=\"ui floating blue dropdown button small\"\n" +
    "                         ng-model=\"params.person_type\"\n" +
    "                         sem-dropdown\n" +
    "                         ng-class=\"{disabled: isDisabledForm}\"\n" +
    "                         ng-change=\"addPerson({}, params.person_type)\"\n" +
    "                         sem-dropdown-action=\"select\"\n" +
    "                         sem-dropdown-items=\"insurantTypes\"\n" +
    "                         sem-dropdown-placeholder=\"Добавить участника договора\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <h3 ng-if=\"$index\">\n" +
    "                    <i ng-class=\"{disabled: isDisabledForm}\" class=\"icon remove red\"\n" +
    "                       ng-click=\"removePerson(person)\">\n" +
    "                    </i>\n" +
    "                </h3>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </div><!-- /.row -->\n" +
    "</div><!-- /.grid -->");
  $templateCache.put("js/src/modules/personalData/views/personal_data.form.persons.html",
    "<div class=\"b-full-width-bg_white b-f-policy_person ui form is-form\"\n" +
    "     ng-repeat=\"person in persons\"\n" +
    "     ng-form=\"person_form\"\n" +
    "     ng-model=\"person\">\n" +
    "    <div class=\"ui loader\"></div>\n" +
    "\n" +
    "    <div ng-if=\"person.personType === 'natural_person'\" ng-include=\"templates.person_block\"></div>\n" +
    "    <div ng-if=\"person.personType === 'legal_person'\" ng-include=\"templates.person_block_legal\"></div>\n" +
    "\n" +
    "    <div class=\"p20\">\n" +
    "        <h3 ng-if=\"persons.length > 1 && (persons.length - 1) !== $index\"\n" +
    "            class=\"ui horizontal divider header\">\n" +
    "            <i class=\"icon users\"></i><span></span>\n" +
    "        </h3>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/personalData/views/personal_data.html",
    "<div ng-include=\"templates.persons\"></div>\n" +
    "<div ng-include=\"templates.car\"></div>\n" +
    "\n" +
    "<div class=\"mt40 c-tar\">\n" +
    "    <button class=\"ui button green\"\n" +
    "            ng-disabled=\"f_policy_step_3_form.$invalid\"\n" +
    "            type=\"button\" ng-click=\"savePersonalData()\">Далее</button>\n" +
    "</div>");
  $templateCache.put("js/src/modules/policyOrdering/views/policy_ordering.html",
    "<div ng-include=\"templates.navigation\"></div>\n" +
    "\n" +
    "<div class=\"b-ordering\">\n" +
    "    <div class=\"ui grid stackable\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"eleven wide column\">\n" +
    "                <div class=\"b-ordering-block b-full-width-bg b-full-width-bg--green p30\" ng-if=\"carInfo.carMark\">\n" +
    "                    <h3 class=\"b-content_title m0\">Автомобиль</h3>\n" +
    "\n" +
    "                    <h3 class=\"b-content_title p20 mt10\">\n" +
    "                        <strong>\n" +
    "                            <span ng-bind=\"carInfo.carMark.title\"></span>\n" +
    "                            <span ng-bind=\"carInfo.carModelGroup.title\"></span>\n" +
    "                            <span ng-bind=\"carInfo.carModel.title\"></span> —\n" +
    "                            <span ng-bind=\"calculation.car_manufacturing_year\"></span> г. выпуска,\n" +
    "                            <span ng-bind=\"calculation.engine_power\"></span> л.с.\n" +
    "                        </strong>\n" +
    "                    </h3>\n" +
    "\n" +
    "                    <h3 class=\"b-content_title mt30\">Водители:</h3>\n" +
    "\n" +
    "                    <h3 class=\"b-content_title p20 mt10\">\n" +
    "                        <div ng-repeat=\"driver in calculation.driver_set\">\n" +
    "                            <strong>Возраст - <span ng-bind=\"driver.age\"></span>, стаж - <span ng-bind=\"driver.expirience\"></span></strong>\n" +
    "                        </div>\n" +
    "                    </h3>\n" +
    "\n" +
    "                    <div class=\"b-ordering-block_icon\">\n" +
    "                        <i class=\"icon info\"></i>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"five wide column\">\n" +
    "                <div class=\"b-full-width-bg b-ordering-block b-full-width-bg--red\" ng-if=\"calculationResult[0]\">\n" +
    "                    <h3 class=\"b-content_title m0\">Выбранный страховой продукт:</h3>\n" +
    "\n" +
    "                    <h3 class=\"b-content_title c-tar m0 mt10\">\n" +
    "                        <div class=\"b-ordering_ins-company\">\n" +
    "                            <strong ng-bind=\"selectedResult.insurance_company.title\"></strong>\n" +
    "                        </div>\n" +
    "                        <div class=\"mt5 b-ordering_price\">\n" +
    "                            <strong>\n" +
    "                                <span ng-bind=\"selectedResult.program.sum | priceFormatter:0:'':false\"></span>.\n" +
    "                                <small ng-bind=\"selectedResult.program.sum | fractionalFormatter:2\"></small>\n" +
    "                                р.\n" +
    "                            </strong>\n" +
    "                        </div>\n" +
    "                    </h3>\n" +
    "\n" +
    "                    <div class=\"b-ordering-block_icon\">\n" +
    "                        <i class=\"icon calculator\"></i>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"eleven wide column\">\n" +
    "                <div class=\"b-full-width-bg b-ordering-block b-ordering-block--form\">\n" +
    "                    <h3 class=\"b-content_title m0 mb20\">Введите данные для оформления заказа:</h3>\n" +
    "\n" +
    "                    <form name=\"ordering_form\">\n" +
    "                        <div class=\"ui form\">\n" +
    "                            <div class=\"ui grid stackable two column\">\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"field\">\n" +
    "                                            <label>Ваше имя:</label>\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   ng-model=\"formFields.client_name\"\n" +
    "                                                   required/>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"field\">\n" +
    "                                            <label>Ваш телефон:</label>\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   ui-mask=\"+7 (999) 999-9999\"\n" +
    "                                                   required\n" +
    "                                                   placeholder=\"+7 (___) ___-____\"\n" +
    "                                                   ng-model=\"formFields.client_phone\"/>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"field\">\n" +
    "                                            <label>Способ оплаты:</label>\n" +
    "\n" +
    "                                            <div class=\"ui search selection dropdown\"\n" +
    "                                                 id=\"id_owner_registration\"\n" +
    "                                                 sem-dropdown\n" +
    "                                                 ng-model=\"formFields.payment_type\"\n" +
    "                                                 sem-dropdown-simple=\"true\"\n" +
    "                                                 sem-dropdown-items=\"paymentType\"></div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row one column\">\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"mt10\">\n" +
    "                                            <sem-checkbox ng-model=\"formFields.receipt_type\"\n" +
    "                                                          sem-label=\"Бесплатная доставка в течение 2-х дней\"\n" +
    "                                                          sem-type=\"radio\"\n" +
    "                                                          class=\"mr25\"\n" +
    "                                                          name=\"receipt_type\"\n" +
    "                                                          value=\"delivery\"></sem-checkbox>\n" +
    "\n" +
    "                                            <sem-checkbox ng-model=\"formFields.receipt_type\"\n" +
    "                                                          sem-label=\"Оформление в офисе\"\n" +
    "                                                          sem-type=\"radio\"\n" +
    "                                                          name=\"receipt_type\"\n" +
    "                                                          value=\"office\"></sem-checkbox>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"ui grid\"\n" +
    "                                 ng-if=\"formFields.receipt_type === 'delivery'\">\n" +
    "                                <div class=\"row one column pt0\">\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"field\">\n" +
    "                                            <label for=\"id_delivery_address\">Адрес доставки:</label>\n" +
    "\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   required\n" +
    "                                                   id=\"id_delivery_address\"\n" +
    "                                                   ng-model=\"formFields.delivery_address\"/>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row two column pt0\">\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"field\"\n" +
    "                                             ng-class=\"{error: formFields.delivery_date && ordering_form.delivery_date.$invalid}\">\n" +
    "                                            <label for=\"id_delivery_date\">Дата доставки:</label>\n" +
    "\n" +
    "                                            <div class=\"ui icon input\">\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       jdatepicker\n" +
    "                                                       jdatepicker-year-range=\"{{getYearRange(0, 0)}}\"\n" +
    "                                                       jdatepicker-only-future=\"true\"\n" +
    "                                                       name=\"delivery_date\"\n" +
    "                                                       placeholder=\"__.__.____\"\n" +
    "                                                       id=\"id_delivery_date\"\n" +
    "                                                       required\n" +
    "                                                       ng-model=\"formFields.delivery_date\">\n" +
    "                                                <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"field\">\n" +
    "                                            <label for=\"id_delivery_time\">Время доставки:</label>\n" +
    "\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   required\n" +
    "                                                   ng-model=\"formFields.delivery_time\"\n" +
    "                                                   id=\"id_delivery_time\"/>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"ui grid\"\n" +
    "                                 ng-if=\"formFields.receipt_type === 'office'\">\n" +
    "                                <div class=\"row two column pt0\">\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"field\"\n" +
    "                                             ng-class=\"{error: formFields.arrival_date && ordering_form.arrival_date.$invalid}\">\n" +
    "                                            <label for=\"id_arrival_date\">Дата оформления:</label>\n" +
    "\n" +
    "                                            <div class=\"ui icon input\">\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       jdatepicker\n" +
    "                                                       jdatepicker-year-range=\"{{getYearRange(0, 0)}}\"\n" +
    "                                                       jdatepicker-only-future=\"true\"\n" +
    "                                                       name=\"arrival_date\"\n" +
    "                                                       placeholder=\"__.__.____\"\n" +
    "                                                       id=\"id_arrival_date\"\n" +
    "                                                       required\n" +
    "                                                       ng-model=\"formFields.arrival_date\">\n" +
    "                                                <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"column\">\n" +
    "                                        <div class=\"field\">\n" +
    "                                            <label for=\"id_arrival_time\">Время оформления:</label>\n" +
    "\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   required\n" +
    "                                                   ng-model=\"formFields.arrival_time\"\n" +
    "                                                   id=\"id_arrival_time\"/>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"b-ordering-block_send c-tar mt40\" ng-hide=\"true\">\n" +
    "                            <button class=\"ui branded green\" type=\"button\" disabled>Заказать полис</button>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "\n" +
    "                    <div class=\"b-ordering-block_icon\">\n" +
    "                        <i class=\"icon write\"></i>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"five wide column\">\n" +
    "                <div class=\"b-ordering-block_submit b-full-width-bg b-ordering-block b-full-width-bg--grey\">\n" +
    "                    <button type=\"button\"\n" +
    "                            ng-click=\"sendPolicyOrdering()\"\n" +
    "                            ng-class=\"{loading: policyOrderingInProgress}\"\n" +
    "                            ng-disabled=\"ordering_form.$invalid || policyOrderingInProgress\"\n" +
    "                            class=\"ui button branded nowrap\">Заказать полис\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/calculator/views/osago/calculation.program_list.html",
    "<div ng-show=\"params.resultsAreCreated && !calculationResult.length\">\n" +
    "    <h2 class=\"b-content_title c-tac mb40\">К сожалению, мы не можем оформить ОСАГО на данный автомобиль</h2>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ui form b-full-width-bg_white\" ng-if=\"calculationResult.length\">\n" +
    "    <div class=\"p20\">\n" +
    "        <div>\n" +
    "            <table class=\"b-kasko-result ui very basic table\">\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <h4 ng-show=\"getResultWithKbm().variables.KBM.length || getResultWithKbm().variables.kbm\">\n" +
    "                            КБМ:\n" +
    "                        </h4>\n" +
    "                    </td>\n" +
    "                    <td class=\"c-tar\">\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <h3 class=\"b-content_title mt5\"\n" +
    "                            ng-repeat=\"kbm in getResultWithKbm().variables.KBM track by $index\">\n" +
    "                            <span ng-bind=\"cachedDrivers[$index].last_name\"></span>\n" +
    "                            <span ng-bind=\"cachedDrivers[$index].first_name\"></span>\n" +
    "                            <span ng-if=\"cachedDrivers[$index].last_name\">—</span>\n" +
    "                            <span ng-bind=\"kbm\"></span>\n" +
    "                        <!--\n" +
    "                        <h2 class=\"b-content_title mt5 nowrap\" ng-if=\"getResultWithKbm().variables.kbm && (cachedDrivers.length || !getResultWithKbm().variables.KBM)\">\n" +
    "                        <span ng-bind=\"getResultWithKbm().variables.kbm | priceFormatter:2\"></span>\n" +
    "                        </h2>\n" +
    "                        -->\n" +
    "                        </h3>\n" +
    "\n" +
    "                        <div ng-if=\"!cachedDrivers.length\">\n" +
    "                            <span ng-bind=\"getResultWithKbm().variables.kbm\"></span>\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td></td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <div class=\"css-divider-tilde ui divider horizontal header\">~</div>\n" +
    "        <div>\n" +
    "            <h1 class=\"b-content_title c-tac\">Выберите компанию для оформления договора:</h1>\n" +
    "\n" +
    "            <div class=\"ui grid three column mt30\">\n" +
    "                <div class=\"b-result column\"\n" +
    "                     align=\"center\"\n" +
    "                     tabindex=\"0\"\n" +
    "                     ng-repeat=\"result in calculationResult\"\n" +
    "                     ng-if=\"result.program.sum && result.program.sum != 0\"\n" +
    "                     ng-mousedown=\"selectResult(result.id)\"\n" +
    "                     ng-keypress=\"$event.keyCode == 13 && selectResult(result.id)\"\n" +
    "                     ng-class=\"{'b-result--selected': result.id === root.selectedResult.id}\"><!---->\n" +
    "                    <div>\n" +
    "                        <img ng-src=\"{{result.company_logo}}\" alt=\"\"/>\n" +
    "                        <div class=\"b-result_select\">\n" +
    "                            <i class=\"icon checkmark\"></i>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"b-result_sum c-tac mt5\">\n" +
    "                            <span ng-bind=\"setSumWithOtherKbm(result) | priceFormatter:0:'':false\"></span>.<small ng-bind=\"setSumWithOtherKbm(result) | fractionalFormatter:2\"></small>\n" +
    "                            руб.\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"mt55 c-tac\">\n" +
    "                <button class=\"m0 button ui branded big\"\n" +
    "                        ng-class=\"{loading: params.isCalculationProgress}\"\n" +
    "                        ng-disabled=\"disabledFormationPolicyButton() || calculation_form.$invalid || !calculationResult.length || !root.selectedResult\"\n" +
    "                        ui-sref=\"index.addingDocuments({calculationId: calculation.id, companyId: root.selectedResult.id})\"\n" +
    "                        type=\"button\">Оформить\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"p20 mt30\" ng-if=\"root.messages.length\">\n" +
    "    <div class=\"ui error message\">\n" +
    "        <ul class=\"list\">\n" +
    "            <li ng-repeat=\"message in root.messages\"><span ng-bind=\"message\"></span></li>\n" +
    "        </ul>\n" +
    "        <i class=\"close icon\" ng-click=\"root.messages.length = 0;\"></i>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("js/src/modules/calculator/views/osago/calculation.step_2.html",
    "<!-- step 2 start -->\n" +
    "<div class=\"ui form b-full-width-bg_white css-small-sized-fields\">\n" +
    "    <div class=\"p20\">\n" +
    "        <div class=\"ui stackable grid four column bottom aligned\">\n" +
    "            <div class=\"column\">\n" +
    "                <div class=\"field\" align=\"left\">\n" +
    "                    <label for=\"id_is_legal_entity\">\n" +
    "                        Тип собственника:\n" +
    "                    </label>\n" +
    "\n" +
    "                    <div class=\"ui search selection dropdown\"\n" +
    "                         id=\"id_is_legal_entity\"\n" +
    "                         sem-dropdown\n" +
    "                         ng-change=\"fieldChanged('is_legal_entity')\"\n" +
    "                         ng-model=\"calculation.is_legal_entity\"\n" +
    "                         sem-dropdown-items=\"dicts.isLegalEntity\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"column\">\n" +
    "                <div class=\"field\">\n" +
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
    "                <div class=\"field\">\n" +
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
  $templateCache.put("js/src/modules/calculator/views/osago/calculation.step_3.html",
    "<!-- step 3 start -->\n" +
    "\n" +
    "<div class=\"css-cars-filter b-full-width-bg m0 mt30\" style=\"font-size: 15px;\">\n" +
    "    <div class=\"p20\">\n" +
    "        <car-filter cf-model-car-mark=\"calculation.car_mark\"\n" +
    "                    cf-model-car-model=\"calculation.car_model\"\n" +
    "                    cf-model-car-model-group=\"calculation.car_model_group\"\n" +
    "                    cf-model-car-cost=\"calculation.car_cost\"></car-filter>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- step 3 end -->");
  $templateCache.put("js/src/modules/calculator/views/osago/calculation.step_4.html",
    "<!-- step 4 start -->\n" +
    "\n" +
    "<div class=\"ui form b-full-width-bg pt55 m0 mt10\">\n" +
    "    <div class=\"p20\">\n" +
    "        <div class=\"nowrap css-show-errors ui grid stackable relaxed\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"four wide column\">\n" +
    "                    <div class=\"field mt15\" align=\"left\">\n" +
    "                        <label for=\"id_drivers_count\">\n" +
    "                            Количество водителей:\n" +
    "                        </label>\n" +
    "\n" +
    "                        <div class=\"ui search selection dropdown\"\n" +
    "                             id=\"id_drivers_count\"\n" +
    "                             sem-dropdown\n" +
    "                             ng-model=\"params.drivers_count_full\"\n" +
    "                             ng-class=\"{disabled: calculation.is_legal_entity}\"\n" +
    "                             ng-change=\"driversCountChanged()\"\n" +
    "                             sem-dropdown-items=\"dicts.driversCountOsago\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"twelve wide column b-drivers_osago\">\n" +
    "                    <h3 class=\"b-drivers_osago_person-type b-content_title\"\n" +
    "                        ng-if=\"drivers.length\">\n" +
    "                        <i class=\"icon\" ng-class=\"'user' + (drivers.length > 1 ? 's' : '')\"></i> Водители:\n" +
    "                    </h3>\n" +
    "\n" +
    "                    <div ng-repeat=\"driver in drivers\"\n" +
    "                         ng-form=\"driver_form\"\n" +
    "                         ng-model=\"driver\"\n" +
    "                         class=\"is-form\">\n" +
    "\n" +
    "                        <div class=\"ui grid three column stackable\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_driver_osago_last_name_{{$index}}\">Фамилия:</label>\n" +
    "                                        <input type=\"text\"\n" +
    "                                               required\n" +
    "                                               ng-pattern=\"params.name_pattern\"\n" +
    "                                               id=\"id_driver_osago_last_name_{{$index}}\"\n" +
    "                                               ng-model=\"driver.last_name\"/>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_driver_osago_first_name_{{$index}}\">Имя:</label>\n" +
    "                                        <input type=\"text\"\n" +
    "                                               required\n" +
    "                                               ng-pattern=\"params.name_pattern\"\n" +
    "                                               id=\"id_driver_osago_first_name_{{$index}}\"\n" +
    "                                               ng-model=\"driver.first_name\"/>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_driver_osago_patronymic_{{$index}}\">Отчество:</label>\n" +
    "                                        <input type=\"text\"\n" +
    "                                               ng-pattern=\"params.name_pattern\"\n" +
    "                                               id=\"id_driver_osago_patronymic_{{$index}}\"\n" +
    "                                               ng-model=\"driver.patronymic\"/>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_driver_license_series\">Водительское удостоверение:</label>\n" +
    "\n" +
    "                                        <div class=\"ui fields\">\n" +
    "                                            <div class=\"seven wide field\">\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       required\n" +
    "                                                       maxlength=\"4\"\n" +
    "                                                       minlength=\"4\"\n" +
    "                                                       placeholder=\"Серия\"\n" +
    "                                                       id=\"id_driver_license_series\"\n" +
    "                                                       ng-model=\"driver.driver_license.series\"/>\n" +
    "                                            </div>\n" +
    "\n" +
    "                                            <div class=\"nine wide field\">\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       required\n" +
    "                                                       input-integer\n" +
    "                                                       maxlength=\"6\"\n" +
    "                                                       minlength=\"6\"\n" +
    "                                                       placeholder=\"Номер\"\n" +
    "                                                       id=\"id_driver_license_number\"\n" +
    "                                                       ng-model=\"driver.driver_license.number\"/>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\"\n" +
    "                                         ng-class=\"{error: driver.dateIsInvalid}\">\n" +
    "                                        <label for=\"id_driving_experience_started_{{$index}}\">Дата начала стажа:</label>\n" +
    "\n" +
    "                                        <div class=\"ui icon input\">\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   jdatepicker\n" +
    "                                                   jdatepicker-year-range=\"{{getYearRange(0, 73)}}\"\n" +
    "                                                   jdatepicker-only-past=\"true\"\n" +
    "                                                   ng-change=\"driversDateChanged(driver)\"\n" +
    "                                                   placeholder=\"__.__.____\"\n" +
    "                                                   id=\"id_driving_experience_started_{{$index}}\"\n" +
    "                                                   required\n" +
    "                                                   ng-model=\"driver.driving_experience_started\">\n" +
    "                                            <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\"\n" +
    "                                         ng-class=\"{error: driver.dateIsInvalid}\">\n" +
    "                                        <label for=\"id_driver_birth_date_{{$index}}\">Дата рождения:</label>\n" +
    "\n" +
    "                                        <div class=\"ui icon input\">\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   jdatepicker\n" +
    "                                                   jdatepicker-year-range=\"{{getYearRange(18, 91)}}\"\n" +
    "                                                   jdatepicker-only-past=\"true\"\n" +
    "                                                   ng-change=\"driversDateChanged(driver);\"\n" +
    "                                                   placeholder=\"__.__.____\"\n" +
    "                                                   id=\"id_driver_birth_date_{{$index}}\"\n" +
    "                                                   required\n" +
    "                                                   ng-model=\"driver.birth_date\">\n" +
    "                                            <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"ui divider mt30 mb15\"\n" +
    "                             ng-if=\"drivers.length > 1 && (drivers.length - 1) !== $index\"></div>\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "                    <div ng-repeat=\"person in persons\"\n" +
    "                         ng-form=\"person_form\"\n" +
    "                         ng-model=\"person\"\n" +
    "                         class=\"is-form\">\n" +
    "                        <div class=\"ui loader\"></div>\n" +
    "\n" +
    "                        <h3 class=\"b-drivers_osago_person-type b-content_title\">\n" +
    "                            Собственник:\n" +
    "                        </h3>\n" +
    "\n" +
    "                        <div class=\"ui grid four column stackable\"\n" +
    "                             ng-if=\"!calculation.is_legal_entity\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_person_osago_last_name_{{$index}}\">Фамилия:</label>\n" +
    "                                        <input type=\"text\"\n" +
    "                                               required\n" +
    "                                               ng-pattern=\"params.name_pattern\"\n" +
    "                                               id=\"id_person_osago_last_name_{{$index}}\"\n" +
    "                                               ng-model=\"person.last_name\"/>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_person_osago_first_name_{{$index}}\">Имя:</label>\n" +
    "                                        <input type=\"text\"\n" +
    "                                               required\n" +
    "                                               ng-pattern=\"params.name_pattern\"\n" +
    "                                               id=\"id_person_osago_first_name_{{$index}}\"\n" +
    "                                               ng-model=\"person.first_name\"/>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_person_osago_patronymic_{{$index}}\">Отчество:</label>\n" +
    "                                        <input type=\"text\"\n" +
    "                                               ng-pattern=\"params.name_pattern\"\n" +
    "                                               id=\"id_person_osago_patronymic_{{$index}}\"\n" +
    "                                               ng-model=\"person.patronymic\"/>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_person_birth_date_{{$index}}\">Дата рождения:</label>\n" +
    "\n" +
    "                                        <div class=\"ui icon input\">\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   jdatepicker\n" +
    "                                                   jdatepicker-year-range=\"{{getYearRange(0, 90)}}\"\n" +
    "                                                   placeholder=\"__.__.____\"\n" +
    "                                                   id=\"id_person_birth_date_{{$index}}\"\n" +
    "                                                   required\n" +
    "                                                   ng-model=\"person.birth_date\">\n" +
    "                                            <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"six wide column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_person_passport\">Паспорт:</label>\n" +
    "\n" +
    "                                        <div class=\"ui fields\">\n" +
    "                                            <div class=\"seven wide field\">\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       required\n" +
    "                                                       input-integer\n" +
    "                                                       maxlength=\"4\"\n" +
    "                                                       minlength=\"4\"\n" +
    "                                                       placeholder=\"Серия\"\n" +
    "                                                       id=\"id_person_passport\"\n" +
    "                                                       ng-model=\"person.passport.series\"/>\n" +
    "                                            </div>\n" +
    "\n" +
    "                                            <div class=\"nine wide field\">\n" +
    "                                                <input type=\"text\"\n" +
    "                                                       required\n" +
    "                                                       input-integer\n" +
    "                                                       maxlength=\"6\"\n" +
    "                                                       minlength=\"6\"\n" +
    "                                                       placeholder=\"Номер\"\n" +
    "                                                       ng-model=\"person.passport.number\"/>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"four wide column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_person_passport_issue_date_{{$index}}\">Дата выдачи:</label>\n" +
    "\n" +
    "                                        <div class=\"ui icon input\">\n" +
    "                                            <input type=\"text\"\n" +
    "                                                   jdatepicker\n" +
    "                                                   jdatepicker-year-range=\"{{getYearRange(0, 26)}}\"\n" +
    "                                                   placeholder=\"__.__.____\"\n" +
    "                                                   id=\"id_person_passport_issue_date_{{$index}}\"\n" +
    "                                                   required\n" +
    "                                                   ng-model=\"person.passport.issue_date\">\n" +
    "                                            <i class=\"icon calendar circular branded inverted\"></i>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"six wide column\"\n" +
    "                                     ng-if=\"isVisible('vin_number')\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_vin_number_np\">VIN:</label>\n" +
    "\n" +
    "                                        <input type=\"text\"\n" +
    "                                               ng-model=\"osagoParams.vin_number\"\n" +
    "                                               input-vin-number\n" +
    "                                               minlength=\"17\"\n" +
    "                                               maxlength=\"17\"\n" +
    "                                               required\n" +
    "                                               id=\"id_vin_number_np\"/>\n" +
    "\n" +
    "                                        <div class=\"ui label pointing basic top grey c-vin-error-label css-can-wrap\" ng-show=\"osagoParams.vin_number.length === 17\">Не\n" +
    "                                            совпадает контрольная сумма VIN\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                        <div class=\"ui grid three column stackable\" ng-if=\"calculation.is_legal_entity\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"column\"\n" +
    "                                     ng-if=\"isVisible('vin_number')\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_vin_number\">VIN:</label>\n" +
    "\n" +
    "                                        <input type=\"text\"\n" +
    "                                               ng-model=\"osagoParams.vin_number\"\n" +
    "                                               input-vin-number\n" +
    "                                               minlength=\"17\"\n" +
    "                                               maxlength=\"17\"\n" +
    "                                               required\n" +
    "                                               id=\"id_vin_number\"/>\n" +
    "\n" +
    "                                        <div class=\"ui label pointing basic top grey c-vin-error-label css-can-wrap\" ng-show=\"osagoParams.vin_number.length === 17\">Не\n" +
    "                                            совпадает контрольная сумма VIN\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_legal_person_inn\">ИНН:</label>\n" +
    "                                        <input type=\"text\"\n" +
    "                                               required\n" +
    "                                               input-integer\n" +
    "                                               id=\"id_legal_person_inn\"\n" +
    "                                               ng-model=\"osagoParams.legal_person.inn\"/>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"column\">\n" +
    "                                    <div class=\"field\">\n" +
    "                                        <label for=\"id_legal_person_title\">Наименование юр. лица:</label>\n" +
    "                                        <input type=\"text\"\n" +
    "                                               required\n" +
    "                                               id=\"id_legal_person_title\"\n" +
    "                                               ng-model=\"osagoParams.legal_person.title\"/>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- step 4 end -->");
  $templateCache.put("js/src/modules/calculator/views/osago/calculation.step_5.html",
    "<div class=\"ui form b-full-width-bg pt35 m0 mt10\">\n" +
    "    <div class=\"p20\">\n" +
    "        <div class=\"nowrap css-show-errors ui grid stackable relaxed\">\n" +
    "            <div class=\"four wide column\">\n" +
    "                <div class=\"field\">\n" +
    "                    <label>\n" +
    "                        Количество водителей:\n" +
    "                    </label>\n" +
    "\n" +
    "                    <div class=\"ui search selection dropdown\"\n" +
    "                         sem-dropdown\n" +
    "                         ng-click=\"params.field_was_clicked = true;\"\n" +
    "                         ng-focus=\"params.field_was_clicked = true;\"\n" +
    "                         ng-class=\"{disabled: calculation.is_legal_entity}\"\n" +
    "                         ng-change=\"params.field_was_clicked && driversCountChangedSimple()\"\n" +
    "                         ng-model=\"params.drivers_count\"\n" +
    "                         sem-dropdown-items=\"dicts.driversCountOsago\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"five wide column\">\n" +
    "                <div class=\"field\"\n" +
    "                     ng-repeat=\"driver in calculation.driver_set\">\n" +
    "                    <label>Возраст и стаж водителя:</label>\n" +
    "\n" +
    "                    <div class=\"ui fields\">\n" +
    "                        <div class=\"eight wide field\"\n" +
    "                             ng-class=\"{'error': driver.age < 18 || driver.age > 87}\">\n" +
    "                            <input type=\"text\"\n" +
    "                                   ng-model=\"driver.age\"\n" +
    "                                   input-integer\n" +
    "                                   required/>\n" +
    "                        </div>\n" +
    "                        <div class=\"eight wide field\"\n" +
    "                             ng-class=\"{'error': driver.age - driver.expirience < 18}\">\n" +
    "                            <input type=\"text\"\n" +
    "                                   ng-model=\"driver.expirience\"\n" +
    "                                   input-integer\n" +
    "                                   required/>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("js/src/modules/calculator/views/osago/calculation.step_6.html",
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
    "                                ng-click=\"calculateOsago()\"\n" +
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
