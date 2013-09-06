/* Configure lynx application */
lynx.module ({

    /* Name of angular application */
    moduleName: "wk.lynx.tutorial",

    /* Pages structure */
    pages: [
        { name: "homePage", path:"/home", view:"page/home.html" },
        { name: "resultsPage", path: "/results", view: "page/res.html"},
        { name: "document", path: "/document", view: "page/doc.html" }
    ],

    /* Default Path */
    defaultPath: "/home"

    /* At latest provide the dependend angular modules */
}, ["wk.lynx.ui"]);

