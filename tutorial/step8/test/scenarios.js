'use strict';

describe('tutorial app', function() {

    beforeEach(function() {
        browser().navigateTo('../index.html');
    });

    it('should automatically redirect to /home when location hash/fragment is empty',
        function() {
            expect(browser().location().url()).toBe("/home");
        });

    describe('login form', function() {
        var page;

        it('after login with no proper data error msg should be displayed',
            function() {
                pause();
                var loginPage = new LoginPage();
                page = loginPage.doLogin("wrong_username", "wrong_pswd");
                expect(loginPage.getAlertBox().isVisible()).toBe(true);
                pause();
            });

        it('after login with proper data home page should be displayed',
            function() {
                var loginPage = new LoginPage();
                page = loginPage.doLogin("lynxuser1@wk.com", "password");
                expect(loginPage.getAlertBox().isVisible()).toBe(false);
                expect(page.getSearchForm().isVisible()).toBe(true);
                pause();
                page.getLogOutButton().click();
            });
    });

    describe('searching', function() {
        var page;

        beforeEach(function() {
            page = new LoginPage().doLogin("lynxuser1@wk.com", "password");
        });

        it('should render proper results page',
            function() {
                page = page.getSearchForm().doSearch('tax');
                expect(page.getQueryLabel().text()).toBe('tax');
                pause();
            });


        it('after click on result row should open document',
            function() {
                page = page.getSearchForm().doSearch('tax');
                page = page.doOpenDocument(1);
                pause();
            });

        afterEach(function() {
            page.getLogOutButton().click();
        });

    });
});