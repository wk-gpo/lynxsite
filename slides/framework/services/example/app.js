
/* Configurate velvet connection */
velvet.configure({
    host: "http://velvet.cheetah.dev.lynxapp.net",
    apikey: "5D2000D799874109A65DD0C984102DCC"
});

/**
 * @param {angular.Scope} $scope
 * @param {velvet.service.Search} $velvetSearch
 * @param {velvet.service.Authenticate} $velvetAuth
 */
var ServiceExampleCtrl =
    function($scope, $velvetSearch, $velvetAuth) {

        $scope.doLogin = function(login, pswd) {
            $velvetAuth.authenticate(login, pswd,
                function(authenticated) {
                    $scope.authenticated = authenticated;
                });
        };

        $scope.doSearch = function(query) {
            $scope.search = $velvetSearch.searchByPhrase(query);
        }
    };


