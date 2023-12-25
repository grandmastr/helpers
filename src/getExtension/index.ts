//given a string, get the media extension of the string and return that

type Extensions = '.mp4' | '.mov' | '.bmp' | '.gif' | '.jpg' | '.jpeg' | '.png';

const index = (uri: string): Extensions | '' => {
  const pattern: RegExp = /\.(mp4|mov|bmp|gif|jpg|jpeg|png)\b/g;
  const match: RegExpExecArray | null = pattern.exec(uri);

  return (match ? match[0] : '') as Extensions | '';
};

export default index;
