/* Configure lynx application */
lynx.module ({

    /* Name of angular application */
    moduleName: "wk.lynx.tutorial",

    /* Configuration for Velvet connection */
    velvetConfig: {
        host:"http://velvet.cheetah.dev.na.lynx-app.com",
        apikey: "5D2000D799874109A65DD0C984102DCC",
        productId: "WKUS-Legal-Cheetah"
    },

    /* Global accesible objects */
    globals: [
        { alias: "$auth", factory: lynx.models.AuthModel.factory },
        { alias: "$search", factory: lynx.models.SearchModel.factory },
        { alias: "$document", factory: lynx.models.DocumentModel.factory }
    ],

    /* Pages structure */
    pages: [
        { name: "homePage", path:"/home", view:"page/home.html" },
        {
            name: "resultsPage",
            path: "/results/id/{$search.getSearch().Id}" +
                "/{$search.getSearch().getParams().pageNo}",
            view: "page/res.html",

            eventBinding: [
                { model: "$search", event: "searchById"},
                { model: "$search", event: "searchByPhrase"}
            ],

            routes: [
                // When only term is in url trigger search by term
                {
                    path: "/results/{phrase}",
                    eval: "$search.searchByPhrase(phrase)"
                },
                // When only id is in url trigger search by id
                {
                    path: "/results/id/{id}",
                    eval: "$search.searchById(id)"
                }  ,
                // When id and page number are in url trigger search by id, no
                {
                    path: "/results/id/{id}/{no}",
                    eval: "$search.searchById(id, no)"
                }
            ]
        },
        {
            name: "document",
            path: "/document/{$document.getDocument().Id}",
            view: "page/doc.html",

            eventBinding: [
                { model: "$document", event: "openDocument"},
                { model: "$document", event: "openDocumentById"}
            ],

            routes: [
                {
                    path: "/document/{id}",
                    eval: "$document.openDocumentById(id)"
                }
            ]
        }
    ],

    /* Default path */
    defaultPath: "/home"

    /* At latest provide the dependend angular modules */
}, ["wk.lynx.ui"]);

