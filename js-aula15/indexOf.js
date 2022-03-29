let num = [25, 17, 5 , 8]
num[4] = 18

num.push(20) //adicionando valor na última posição automaticamente
num[5] += 1

num.sort()
//organizar em ordem crescente (cuidar sequência na programação para rodar após quaisquer incremento ou adição de valor no array)


console.log(`A array tem ${num.length} posições`)
console.log(`O primeiro valor da array é ${num[0]}`)
let pos = num.indexOf(8)

console.log(`O valor 8 está na posição ${pos}`)

/*
for(let pos=0; pos < num.length; pos++) {
  console.log (`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num) {
  console.log(`A posição ${pos} tem valor ${num[pos]}`)
}
*/