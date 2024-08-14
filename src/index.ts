import { CsvFileReader } from "./csvFileReader";
import { MatchReader } from "./matchReader";
import { MatchResult } from "./matchResult";

import { ConsoleReport } from "./reportTargets/consoleReport";
import { WinsAnalysis } from "./analyzers/winsAnalysis";
import { Summary } from "./summary";
import { HtmlReport } from "./reportTargets/HtmlReport";

const csvFileReader = new CsvFileReader('./data/football.csv');
const matchReader = new MatchReader(csvFileReader)
matchReader.load();

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);

const summaryInHTML = new Summary(
    new WinsAnalysis('Man United'),
    new HtmlReport()
);

summaryInHTML.buildAndPrintReport(matchReader.matches);
