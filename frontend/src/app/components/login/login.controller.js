var summer;
(function (summer) {
    'use strict';
    var LoginCtrl = (function () {
        /* @ngInject */
        function LoginCtrl($scope, $auth) {
            $scope.date = new Date();
            $scope.login = function () {
                $auth.authenticate('twitter');
            };
        }
        return LoginCtrl;
    })();
    summer.LoginCtrl = LoginCtrl;
})(summer || (summer = {}));
//# sourceMappingURL=login.controller.js.map