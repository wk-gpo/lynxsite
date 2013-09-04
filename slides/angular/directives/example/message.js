alert("dupsdsdadsaa");

angular.module("wk.lynx.site").directive("message", function() {
    return {
        restrict : "E",
        scope : { name: '=' },
        templateUrl: "gitContents/slides/angular/directives/example/message.html"
    }
});