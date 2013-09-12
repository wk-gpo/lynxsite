var file = require('file'),
    path = require('path'),
    build = require('lynxbuild'),
    project = build.project,
    target = build.target,
    task = build.task;

const OUT_PATH = "dist";

var modules = build.modules.find([
    path.resolve(__dirname)]);

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

    target("test", function (done) {
        task.karma(done, modules["modulename"],
            { type: "unit" }
        );
    });
});
