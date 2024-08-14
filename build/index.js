"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csvFileReader_1 = require("./csvFileReader");
const matchReader_1 = require("./matchReader");
const consoleReport_1 = require("./reportTargets/consoleReport");
const winsAnalysis_1 = require("./analyzers/winsAnalysis");
const summary_1 = require("./summary");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
const csvFileReader = new csvFileReader_1.CsvFileReader('./data/football.csv');
const matchReader = new matchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new summary_1.Summary(new winsAnalysis_1.WinsAnalysis('Man United'), new consoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
const summaryInHTML = new summary_1.Summary(new winsAnalysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport());
summaryInHTML.buildAndPrintReport(matchReader.matches);
