import * as os from 'os'

export const objOs = {
  '--EOL': JSON.stringify(os.EOL),
  '--cpus': 'Количество ядер: ' + os.cpus().length + '  ' + (os.cpus().map(el => Math.round(el.speed / 100) / 10 + 'Ггц')).join(' : ') ,
  '--homedir': os.homedir(),
  '--username': os.userInfo().username,
  '--architecture': os.arch(),
}
