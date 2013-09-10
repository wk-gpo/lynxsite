&nbsp;{
    "name": "modulename",
    "version": "1.0",

    "dependencies": {
        "jquery": "provided",
        "wk.lynx": "combine",
        "wk.lynx.test": "test"
    },

    "scripts": {
        "prod": [ "js/prod.js" ],
        "src": [
            "js/src/CheetahModule.js",
            "js/src/**/*.js"
        ],
        "test": {
            "unit": {
                "include": [
                    "test/unit/**/*.js"
                ],
                "coverage": [
                    "js/**/*.js"
                ]
            }
        }
    }
}