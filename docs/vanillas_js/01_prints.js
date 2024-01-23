let name = "youngji"
// undefined
console.log(name)
// VM192:1 youngji

let welcome = 'Hello World !'
// undefined
welcome
// 'Hello World !'
let numbers = 55
// undefined
numbers
// 55

let concats = 'String:'+ welcome
// undefined
concats
// 'String:Hello World !'
concats = concats + ", Number:" + numbers
// 'String:Hello World !, Number:55'
concats
// 'String:Hello World !, Number:55'
alert(concats)
// undefined

concats
// 'String:Hello World !, Number:55'
`String : ${welcome}, Number: ${numbers}`
// 'String : Hello World !, Number: 55'
let concats_tilt = `String : ${welcome}, Number: ${numbers}`
// undefined
concats_tilt
// 'String : Hello World !, Number: 55'