lynx.module ({
    moduleName: "routingExampe",

    velvetConfig: {
        host:"http://velvet.cheetah.dev.na.lynx-app.com",
        apikey: "5D2000D799874109A65DD0C984102DCC"
    },

    globals: {
        "$search" : { factory: lynx.models.SearchModel.factory }
    },

    pages: [{
            name: "resultsPage",
            path: "/results/id/{$search.getSearch().Id}" +
                "/{$search.getSearch().getParams().pageNo}",
            view: "page/res.html",

            eventBinding: [
                { model: "$search", event: "searchById"},
                { model: "$search", event: "searchByPhrase"}
            ],

            routes: [{
                    path: "/results/{phrase}",
                    eval: "$search.searchByPhrase(phrase)"
                }, {
                    path: "/results/id/{id}",
                    eval: "$search.searchById(id)"
                }  , {
                    path: "/results/id/{id}/{no}",
                    eval: "$search.searchById(id, no)"
                }]
        }],

    defaultPath: "/home"
});

