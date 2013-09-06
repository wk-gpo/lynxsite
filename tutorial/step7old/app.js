
/* Configure lynx app*/
lynx.module ({

    /* Name of angular app */
    moduleName: "wk.lynx.tutorial",

    /* Configuration for Velvet connection */
    velvetConfig: {
        host:"http://velvet.cheetah.dev.na.lynx-app.com",
        apikey: "5D2000D799874109A65DD0C984102DCC",
        productId: "WKUS-Legal-Skadden"
    },

    /* Global accesible objects, especially lynx models */
    globals: [
        { alias:"$auth", factory: lynx.models.AuthModel.factory },
        { alias:"$search", factory: lynx.models.SearchModel.factory },
        { alias:"$document", factory: lynx.models.DocumentModel.factory }
    ],

    /* App paging structure */
    pages: [
        { name: "homePage", path:"/home", view:"page/home.html" },
        {
            name: "resultsPage",
            path: "/results/id/{$search.getSearch().Id}" +
                    "/{$search.getSearch().getParams().perPage}" +
                    "/{$search.getSearch().getParams().pageNo}",
            view: "page/res.html",

            eventBinding: [
                {model: "$search", event: "searchById"},
                {model: "$search", event: "searchByPhrase"},
                {model: "$search", event: "searchSelectedContent"},
                {model: "$search", event: "narrowSearch"}
            ],

            routes: [
                // When only term is in url trigger search by term
                {
                    path: "/results/{query}",
                    evals: [
                        "$search.searchByPhrase(query)"
                    ]
                },
                // When only id is in url trigger search by id
                {
                    path: "/results/{searchId}",
                    evals: [
                        "$search.searchById(searchId)"
                    ]
                }  ,
                // When id and page number are in url trigger search by id, no
                {
                    path: "/results/id/{searchId}/{perPage}/{pageNo}",
                    evals: [
                        "$search.searchById(searchId, pageNo, perPage)"
                    ]
                }
            ]
        },
        {
            name: "document", path: "/document/{$document.documentId}", view: "page/doc.html",

            "eventBinding": [
                {"model": "$document", "event": "openDocument"},
                {"model": "$document", "event": "openDocumentById"}
            ],

            routes: [
                {
                    "path": "/document/{documentId}",
                    evals: [
                        "$document.openDocumentById(documentId)"
                    ]
                }
            ]
        }
    ],

    /* Default app path */
    defaultPath:"/home"

    /* At latest provide the dependend angular modules */
}, ["wk.lynx.ui"]);

