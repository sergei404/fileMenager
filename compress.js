import zlib from "zlib";
import fs from "fs";

export function compressOrDecompress(command) {
  const path = command.split(' ')
  const read = fs.createReadStream(path[1]);
  const write = fs.createWriteStream(path[2]);
  let brotli
  if (path[0] === 'compress') {
    brotli = zlib.createBrotliCompress();
  } else {
    brotli = zlib.createBrotliDecompress();
  }
  read.pipe(brotli).pipe(write);
}