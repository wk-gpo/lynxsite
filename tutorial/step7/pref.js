/* Configure Preferences Data Provider */
angular.module("wk.lynx.tutorial").run(
    ["$preferencesDataProvider", function ($preferencesDataProvider) {
        $preferencesDataProvider.init({
            "map": {
                "perPage": "userprefs.search.options.perpage"
            },
            "authenticated": "$auth.authenticated"
        });
    }]);