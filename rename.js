import fs from 'fs';

export function rename(command) {
  const path = command.split(' ')
  fs.rename(path[1], path[2], (err) => {
      if (err) console.log(err.message);
  });   
};