// Importing toolset

var file = require('file'),
    path = require('path'),
    build = require('lynxbuild'),
    project = build.project,
    target = build.target,
    task = build.task;

const OUT_PATH = "dist";

// Lookup for modules
var modules = build.modules.find([
    path.resolve(__dirname)]);

////Project definition
project("App", "dist", function () {

    target("dist", ["compile", "test"]);

    target("clear", function () {
        file.rmdirSyncRecursive(
            path.resolve(__dirname, OUT_PATH));
    });

    target("compile", function(done) {

        var options = {
            "define": ["DEBUG=false", "ASSERT=false"],
            "compilation_level": "ADVANCED_OPTIMIZATIONS",
            "warning_level": "VERBOSE"
        };

        task.ccompile(
            done,
            modules["modulename"],
            options);

    });

    // Target for run tests on sinle module
    target("test", function (done) {
        task.karma(done, modules["modulename"],
            { type: "unit" }
        );
    });
});
