export function returnImagePath(
  language: string,
  imagePaths: string,
  prefix: string,
  number: number = 1
) {
  switch (language) {
    case 'en':
      return `${imagePaths}${prefix}${number}-en.png`;
    case 'de':
      return `${imagePaths}${prefix}${number}-de.png`;
    case 'bs':
      return `${imagePaths}${prefix}${number}-bs.png`;
    default:
      return `${imagePaths}${prefix}${number}-en.png`;
  }
}
