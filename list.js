import fs from "fs";

export function list() {
  fs.readdir(process.cwd(), {withFileTypes: true}, (err, items) => {
    if (err) {
      console.log(err.message)
    };

    const itemsSort = items.map((el) => ({Name: el.name, Type: el[Object.getOwnPropertySymbols(el)[0]] === 2 ? 'directory' : 'file'}))

    console.log('\n');
    console.table([...itemsSort.sort((prev, next) => next.Type.length - prev.Type.length)])
  });
}
