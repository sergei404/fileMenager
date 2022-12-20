import * as readline from "node:readline";
import {objOs} from'./os.js';
import {up} from'./up.js';
import {cd} from'./cd.js';
import {list} from'./list.js';
import {read} from'./read.js';
import {create} from'./create.js';
import {rename} from'./rename.js';
import {copy} from'./copy.js';
import {move} from'./move.js';
import {remove} from'./remove.js';
import {calculateHash} from'./hash.js';
import {compressOrDecompress} from'./compress.js';


const rl = readline.createInterface(process.stdin, process.stdout);

const userName = process.argv.slice(2)[0].split("=")[1];
console.log(`Welcome to the File Manager, ${userName}!`);

function question() {
  try {
    rl.question("Enter command ", async (command) => {
      switch (true) {
        case command === '.exit':
          console.log(
            `Thank you for using File Manager, ${userName}, goodbye!`
          );
          process.exit();
          break;
        case command.split(' ')[0] === 'os':
          console.log(objOs[command.split(' ')[1]] ?? 'Invalid input');
          break;
        case (command === "up"):
          up()
          break
        case (command.includes("cd")):
          cd(command)
          break
        case (command === "ls"):
          list()
          break
        case (command.includes("cat")):
          await read(command)
          break;
        case (command.includes("add")):
          create(command)
          break;
        case (command.includes("rn")):
          rename(command)
          break;
        case (command.includes("cp")):
          copy(command)
          break;
        case (command.includes("mv")):
          move(command)
          break;
        case (command.includes("rm")):
          remove(command)
          break;
        case (command.includes("hash")):
          calculateHash(command)
          break;
        case (command.includes("compress") || command.includes("decompress")):
          compressOrDecompress(command)
          break;
        default:
          console.log('Invalid input');
          break;
      }
      console.log(`You are currently in ${process.cwd()}`)
      question();
    });
  } catch (error) {
    console.log("Operation failed");
    question();
  }
}

question();
//process.stdin.setRawMode(true);
process.stdin.on("keypress", (chunk, key) => {
  if (key && key.name === "c" && key.ctrl) {
    console.log(`\nThank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
  }
});
