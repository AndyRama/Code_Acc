const args = process.argv.slice(2)

let i = 0
let result = ''

while (i < args.length) {
  result = result + args[i].length
  i++
}


console.log(result)