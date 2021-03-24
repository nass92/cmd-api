const readlineSync = require('readline-sync')
let msg = readlineSync.question('your message: ')

const { unlinkSync } = require('fs')
const { readFileSync } = require('fs')
const { writeFileSync } = require('fs')
writeFileSync('./original.txt', msg)
console.log('[1] ls = lire le fichier message,\n[2] dl = supprimez le fichier message\n[3] q = quittez le programme')

let cmdd = readlineSync.question('your commande: ')

const cmd = (cmdd) => {
  if (cmdd === 'ls') {
    let txt = readFileSync('./original.txt', 'utf-8')
    console.log(txt)
    cmdd = readlineSync.question('your commande: ')
  } else if (cmdd === 'dl') {
    unlinkSync('./original.txt')
    process.exit(1)
  } else if (cmdd === 'q') {
    process.exit(1)
  }
}

cmd(cmdd)
