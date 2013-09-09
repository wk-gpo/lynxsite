/**
 * @param {angular.$http} $http
 * @param {angular.Scope} $scope
 */
var VelvetPlayCtrl =
    function($scope, $http) {
        var base64 = new velvet.util.Base64(),
            host = "http://velvet.cheetah.dev.lynxapp.net/rsi-v1-debug.svc/",
            apikey = "5D2000D799874109A65DD0C984102DCC";

        $scope.doGet = function() {
            var authorization = 'Basic+' + base64.encode($scope.user + ':' + $scope.pswd);
            var url = host + $scope.query;
            if (url.indexOf("?") > 0) {
                url += "&";
            } else {
                url +="?";
            }
            url += "apikey=" + apikey;
            url += "&authorization=" +authorization;
            return $http.get(url);
        };
    };


