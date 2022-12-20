import fs from 'fs';

export const read = async (command) => {
    const path = command.split(' ')[1]
    await fs.createReadStream(path).setEncoding('utf8').pipe(process.stdout)
};
