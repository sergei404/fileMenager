import fs from 'fs';

export const create = (command) => {
  const path = command.split(' ')[1]
    fs.writeFile(path, '', (err) => {
      if (err) {
        console.log(err.message);
      }
    })
};