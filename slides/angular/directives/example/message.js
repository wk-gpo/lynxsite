angular.module("angularDirectivesExample", ["ng"])
    .directive("message", function() {
        return {
            restrict : "E",
            scope : { name: '=' },
            templateUrl: "gitContents/slides/angular/directives/example/message.html"
        }
    });