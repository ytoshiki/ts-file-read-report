"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reporters/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, reporter) {
        this.analyzer = analyzer;
        this.reporter = reporter;
    }
    Summary.windsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matchs) {
        var result = this.analyzer.run(matchs);
        this.reporter.print(result);
    };
    return Summary;
}());
exports.Summary = Summary;
