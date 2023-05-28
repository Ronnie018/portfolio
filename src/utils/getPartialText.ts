export default function getPartialText(text: string) {
  return text.length > 10 ? text.slice(0, 10).trim() + '...' : text;
}
