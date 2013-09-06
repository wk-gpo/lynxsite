var SearchForm = function() {
    return extendElement(
        element(".searchForm"), this);
};{
    SearchForm.prototype.getGoButton = function () {
        return element('.searchForm button');
    };

    SearchForm.prototype.getSearchInput = function () {
        return field('.searchForm  input');
    };

    SearchForm.prototype.doSearch = function(term) {
        this.getSearchInput().enter(term);
        this.getGoButton().click();
        return new ResultsPage();
    }
}

var SearchResultsRow = function(no) {
    this.rowNo = no;
    return extendElement(
        element(".resultsPage table tr:nth-child(" + no + ")"), this);
}; {
    SearchResultsRow.prototype.getNoLabel = function () {
        return element(
            ".resultsPage table tr:nth-child(" + this.rowNo + ") .no");
    };
    SearchResultsRow.prototype.getTitleLink = function () {
        return element(
            ".resultsPage table tr:nth-child(" + this.rowNo + ") .title");
    };
}
