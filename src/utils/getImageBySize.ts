export default function getImageBySize(
  path: string,
  filename: string,
  width: number
) {
  return (
    path +
    (width
      ? width < 950
        ? 'MD_' + filename
        : 'LG_' + filename
      : 'MD_' + filename)
  );
}
