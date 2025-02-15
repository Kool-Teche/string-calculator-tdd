export class StringCalculator {
  add(numbers: string): number {
    if (!numbers.trim()) return 0; // Handle empty string safely

    const { delimiter, sanitizedNumbers } = this.extractDelimiter(numbers);
    const numArray = this.parseNumbers(sanitizedNumbers, delimiter);

    this.validateNumbers(numArray);

    return numArray.reduce((sum, num) => sum + num, 0);
  }

  // Extracts custom delimiters if present, else defaults to comma/newline.
  private extractDelimiter(numbers: string): {
    delimiter: RegExp;
    sanitizedNumbers: string;
  } {
    let delimiter = /,|\n/;
    let sanitizedNumbers = numbers.trim();

    if (sanitizedNumbers.startsWith("//")) {
      const parts = sanitizedNumbers.split("\n", 2);
      if (parts.length < 2)
        throw new Error("Invalid input format for custom delimiters");

      const delimiterPart = parts[0].slice(2);
      delimiter = new RegExp(delimiterPart);
      sanitizedNumbers = parts[1];
    }

    return { delimiter, sanitizedNumbers };
  }

  // Parses numbers from a string, using the provided delimiter.
  private parseNumbers(numbers: string, delimiter: RegExp): number[] {
    return numbers.split(delimiter).map((num) => {
      const parsedNum = Number(num.trim());
      if (isNaN(parsedNum)) throw new Error(`Invalid number found: '${num}'`);
      return parsedNum;
    });
  }

  // Validates numbers, ensuring no negatives exist.
  // Throws an error if any negatives are found.
  private validateNumbers(numArray: number[]): void {
    const negatives = numArray.filter((n) => n < 0);
    if (negatives.length) {
      throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }
  }
}
