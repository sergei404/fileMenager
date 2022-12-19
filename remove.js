import fs from 'fs';

export function remove(command) {
  const path = command.split(' ')[1]
    fs.unlink(path, (err) => {
        if (err) console.log(err.message);
    });
};