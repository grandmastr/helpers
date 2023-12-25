type Extensions = '.mp4' | '.mov' | '.bmp' | '.gif' | '.jpg' | '.jpeg' | '.png';
declare const index: (uri: string) => Extensions | '';
export default index;
