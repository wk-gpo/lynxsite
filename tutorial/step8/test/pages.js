var LoginPage = function () {}; {

    LoginPage.prototype.getUserNameInput = function () {
        return field('.loginForm input[type=text]');
    };
    LoginPage.prototype.getPasswordInput = function () {
        return field('.loginForm  input[type=password]');
    };
    LoginPage.prototype.getLoginButton = function () {
        return element('.loginForm button');
    };
    LoginPage.prototype.getAlertBox = function () {
        return element('.loginForm .alert');
    };

    LoginPage.prototype.doLogin = function (userName, password) {
        this.getUserNameInput().enter(userName);
        this.getPasswordInput().enter(password);
        this.getLoginButton().click();
        return new HomePage();
    };
}

var RegularPage = function() {}; {
    RegularPage.prototype.getLogOutButton = function() {
        return element('.logoutBtn');
    };
    RegularPage.prototype.getHomeLink = function() {
        return element('.homeLink');
    }
}

var HomePage = function () {
    expect(browser().location().path()).toContain("/home");
}; {
    HomePage.prototype = new RegularPage();
    HomePage.prototype.getSearchForm = function () {
        return new SearchForm();
    };
}

var ResultsPage = function () {
    expect(browser().location().path()).toContain("/results");
}; {
    ResultsPage.prototype = new RegularPage();
    ResultsPage.prototype.getSearchForm = function () {
        return new SearchForm();
    };
    ResultsPage.prototype.getQueryLabel = function() {
        return element('.resultsPage h3 .query');
    };
    ResultsPage.prototype.getAllSearchResultRows = function() {
        return element(".resultsPage table tr");
    };
    ResultsPage.prototype.getSearchResultRow = function(no) {
        return new SearchResultsRow(no);
    };

    ResultsPage.prototype.doOpenDocument = function(no) {
        this.getSearchResultRow(no).getTitleLink().click();
        return new DocumentPage();
    }
}

var DocumentPage = function () {
   expect(browser().location().path()).toContain("/document");
}; {
    DocumentPage.prototype = new RegularPage();
}
