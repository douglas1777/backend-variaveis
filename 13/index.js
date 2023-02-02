let R = Math.floor(Math.random() * 5 + 1);
let H = Math.floor(Math.random() * 5 + 1);
const At = 2 * Math.PI * R * (R + H)
const att = At / Math.PI
console.log("Raio da Base: " + R + "\nAltura do cilindro: " + H + "\nArea total do cilindro: " + At + " ou " + att + "pi")
