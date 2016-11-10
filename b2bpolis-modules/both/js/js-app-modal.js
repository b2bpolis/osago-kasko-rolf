(function () {
  var appsState = {
    kasko: false,
    osago: false
  };

  var apps = {
    Kasko: jQueryApp('#KaskoApp'),
    Osago: jQueryApp('#OsagoApp')
  };

  var $calcType = jQueryApp('.js-calc-type');

  jQueryApp('.js-calc-panel-item').click(function () {
    if (jQueryApp(this).hasClass('js-calc-panel-item--kasko')) {
      if (!appsState.kasko) {
        angular.bootstrap(apps.Kasko, ['KaskoApp']);
        appsState.kasko = true;
      }

      window.location.hash = '#!/pre';

      $calcType.text('КАСКО');
      apps.Osago.hide();
      apps.Kasko.show();
    } else {
      if (!appsState.osago) {
        angular.bootstrap(apps.Osago, ['OsagoApp']);
        appsState.osago = true;
      }

      $calcType.text('ОСАГО');
      apps.Osago.show();
      apps.Kasko.hide();

      window.location.hash = '#!/osago';
    }

    jQueryApp('.b-app-modal').removeClass('b-app-modal--is-hidden');

    return false;
  });

  jQueryApp('.js-app-modal-close').click(function () {
    jQueryApp('.b-app-modal').addClass('b-app-modal--is-hidden');
  });
}());
