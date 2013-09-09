lynx.module({
    deferred: true,
    moduleName: "authExample",
    velvetConfig : {
        host: "http://velvet.cheetah.dev.lynxapp.net",
        apikey: "5D2000D799874109A65DD0C984102DCC"
    },
    globals: {
        "$auth" : { "factory": lynx.models.AuthModel.factory}
    }
});
