/* eslint-disable @typescript-eslint/no-unused-vars */
import type {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestResult,
} from "@playwright/test/reporter";
import fs from "fs";

class MdReporter implements Reporter {
  private readonly outputFilePath: string =
    "./playwright-report/test-report.md";
  private readonly testResults: {
    testTitle: string;
    result: string;
    duration: string;
  }[] = [];

  private formatDuration(duration: number): string {
    if (duration < 1500) {
      return `${duration} ms`;
    } else {
      const seconds = duration / 1000;
      return `${seconds.toFixed(2)} s`;
    }
  }

  private generateTestResultLine(
    testTitle: string,
    result: string,
    duration: string,
  ): string {
    return `| ${testTitle} | ${result} | ${duration} |`;
  }

  private generateMarkdownReport(): string {
    let report = "| Test | Result | Duration |\n";
    report += "| ---- | :----: | -------: |\n";

    this.testResults.forEach(({ testTitle, result, duration }) => {
      report += this.generateTestResultLine(testTitle, result, duration) + "\n";
    });

    return report;
  }

  onBegin(config: FullConfig, suite: Suite): void {
    // console.log(`Starting the run with ${suite.allTests().length} tests`);
  }

  onTestBegin(test: TestCase, result: TestResult): void {
    // console.log(`Starting test ${test.title}`);
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    // console.log(`Finished test ${test.title}: ${result.status}`);
    const testTitle = test.titlePath().slice(1).join(" > ");
    const resultStatus = result.status;
    const resultString = resultStatus === "passed" ? "✅" : "❌";
    const duration = this.formatDuration(result.duration); // Convert duration to seconds
    this.testResults.push({ testTitle, result: resultString, duration });
  }

  onEnd(result: FullResult): void {
    console.log(`Finished the run: ${result.status}`);

    const markdownReport = this.generateMarkdownReport();
    fs.writeFileSync(this.outputFilePath, markdownReport);

    console.log(`Test report generated at ${this.outputFilePath}`);
  }
}

export default MdReporter;
