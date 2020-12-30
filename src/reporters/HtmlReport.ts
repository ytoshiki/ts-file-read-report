import { Reporter } from '../Summary';
import fs from 'fs';

export class HtmlReport implements Reporter {
  print(result: string): void {
    const html = `<div><h1>Analysis Output</h1><div>${result}</div></div>`;
    fs.writeFileSync('report.html', html);
  }
}
