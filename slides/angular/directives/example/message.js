angular.module("angularDirectivesExample", ["ng"])
    .directive("message", function() {
        return {
            restrict : "E",
            scope : { name: '=' },
            templateUrl: "content/slides/angular/directives/example/message.html"
        }
    });