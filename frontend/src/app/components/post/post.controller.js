var summer;
(function (summer) {
    'use strict';
    var PostCtrl = (function () {
        /* @ngInject */
        function PostCtrl($scope, $http, $auth) {
            $scope.date = new Date();
            $scope.tweet = function () {
                if ($auth.isAuthenticated()) {
                    $http.post('/api/post/tweet', {
                        message: $scope.message
                    }).then(function (data) {
                        console.log(data);
                    });
                }
            };
        }
        return PostCtrl;
    })();
    summer.PostCtrl = PostCtrl;
})(summer || (summer = {}));
//# sourceMappingURL=post.controller.js.map