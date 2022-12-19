import fs from "fs"
import path from 'path'

export function move(command) {
  const path2 = command.split(' ')
  const file = path.basename(path2[1])
  const dir = path.dirname(path2[2])
  fs.rename(path2[1], path.join(dir, file) , err => {
    if(err) console.log(err.message);
 });
}