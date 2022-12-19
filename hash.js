import crypto from 'crypto'
import fs from 'fs';

export function calculateHash(command) {
    const path = command.split(' ')[1]
    const hash = crypto.createHash('SHA256');
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) throw Error('FS operation failed');
        data = hash.update(data)
        const gen_hash = data.digest('hex');
        console.log("\nhash : " + gen_hash);
    })
};