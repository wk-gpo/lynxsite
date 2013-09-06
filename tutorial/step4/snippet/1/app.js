/* Configure Lynx Application */
lynx.module ({

    /* Name of Angular Application */
    moduleName: "wk.lynx.tutorial",

    /* Configuration for Velvet connection */
    velvetConfig: {
        host:"http://velvet.cheetah.dev.na.lynx-app.com",
        apikey: "5D2000D799874109A65DD0C984102DCC",
        productId: "WKUS-Legal-Cheetah"
    },

    /* Global accesible objects, especially Lynx models */
    globals: [
        { alias: "$auth", factory: lynx.models.AuthModel.factory }
    ],

    /* Pages structure */
    pages: [
        { name: "homePage", path:"/home", view:"page/home.html" },
        { name: "resultsPage", path: "/results", view: "page/res.html"},
        { name: "document", path: "/document", view: "page/doc.html" }
    ],

    /* Default path */
    defaultPath: "/home"

    /* At latest provide the dependend angular modules */
}, ["wk.lynx.ui"]);

