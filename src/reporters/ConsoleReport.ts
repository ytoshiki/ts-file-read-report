import { Reporter } from '../Summary';

export class ConsoleReport implements Reporter {
  print(result: string): void {
    console.log(result);
  }
}
