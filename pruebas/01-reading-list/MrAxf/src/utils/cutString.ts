export default function cutString(input: string, maxLength: number): string {
  if (input.length <= maxLength) {
    return input;
  }

  return input.slice(0, maxLength - 3) + "...";
}
