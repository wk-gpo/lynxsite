var paramsExampleModule = lynx.module({
    deferred: true,
    moduleName: "paramsExample"
});

paramsExampleModule.run(
    ["$staticDataProvider", function($staticDataProvider) {
        $staticDataProvider.init({
            "propertyA": "A",
            "propertyB": "B"
        });
    }]);

paramsExampleModule.run(
    ["$storeDataProvider", function($storeDataProvider) {
        $storeDataProvider.init(["propertyB"]);
    }]);

