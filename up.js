export function up() {
  try {
    if (process.cwd() === 'C:\\') {
    return
  }
    process.chdir('../');
    console.log('New directory: ' + process.cwd());
  }
  catch (err) {
    console.log('chdir: ' + err);
  }
}
