/**
 * Implementation of search model.
 *
 * @protected
 * @constructor
 * @extends {lynx.models.BaseModel}
 */
lynx.models.SearchModel = function () {
};{

    lynx.models.SearchModel.prototype = new lynx.models.BaseModel;
    lynx.models.SearchModel.prototype.constructor = lynx.models.SearchModel;


    /**
     * Return search results object.
     *
     * @expose
     * @return {velvet.vo.Search}
     */
    lynx.models.SearchModel.prototype.getSearch = function () {
        ...
    };

    /**
     * Do new search by phrase.
     *
     * @expose
     * @fires searchByPhrase
     * @param {string} query
     * @param {?number} pageNo results page number.
     * @param {?number} perPage results page size.
     * @param {?string} sortOrder sort order.
     * @return {void}
     */
    lynx.models.SearchModel.prototype.searchByPhrase =
        function (query, pageNo, perPage, sortOrder) {
        ...
    };

}

