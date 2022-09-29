interface Gif {
  parseGIF(arrayBuffer: ArrayBuffer): any;
  decompressFrames(gifParsed: any, buildPatch: boolean): any[];
  decompressFrame(frame: any): any;
}

declare const gif: Gif;
export default gif;
