lynx.module({
    deferred: true,
    moduleName: "modelsExample",
    velvetConfig : {
        host: "http://velvet.cheetah.dev.lynxapp.net",
        apikey: "5D2000D799874109A65DD0C984102DCC",
        authMode: velvet.service.Auth.AUTH_RC4_TOKEN
    },
    globals: {
        "$auth" : { "factory": lynx.models.AuthModel.factory}
    }
});
