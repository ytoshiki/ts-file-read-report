import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reporters/ConsoleReport';
import { HtmlReport } from './reporters/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface Reporter {
  print(report: string): void;
}

export class Summary {
  static windsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public reporter: Reporter) {}

  buildAndPrintReport(matchs: MatchData[]): void {
    const result = this.analyzer.run(matchs);
    this.reporter.print(result);
  }
}
