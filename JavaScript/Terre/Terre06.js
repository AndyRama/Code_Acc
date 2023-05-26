const args = process.argv.slice(2);

// version 1 (refacto)
let i = 0;
let result = '';

while (i < args.length) {
  result = result + args[i].split('').reverse().join('');
  i++;
}

console.log(result);
