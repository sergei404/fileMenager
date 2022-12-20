import fs from "fs";
import {list} from'./list.js';

export function cd(command) {
  const path = command.split(" ")[1];
  console.log("Starting directory: " + process.cwd());
  try {
    process.chdir(path);
    console.log("New directory: " + process.cwd());
    list()
  } catch (err) {
    console.log("chdir: " + err);
  }
}
