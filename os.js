import * as os from 'os'

export const objOs = {
  '--EOL': JSON.stringify(os.EOL),
  '--cpus': 'Количество ядер: ' + os.cpus().length + '\n' + (os.cpus().map(el => el.model + ', ' + Math.round(el.speed / 100) / 10 + 'Ггц')).join('\n') ,
  '--homedir': os.homedir(),
  '--username': os.userInfo().username,
  '--architecture': os.arch(),
}
