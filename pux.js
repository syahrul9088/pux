const fetch = require('node-fetch');
var randomize = require('randomatic');
var random = require('random-name');
const readline = require("readline-sync");

const functionRegist = (username, email, reff) => new Promise((resolve, reject) => {
    const bodys = {
        "username":username,
        "email":email,
        "password":"Berak321#",
        "ref_code":reff
     } 
   
       fetch('https://api.polypux.com:3000/api/Users', { 
        method: 'POST', 
        body: JSON.stringify(bodys),
        headers: {
            'accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=utf-8',
            'Content-Length': 100,
            'Host': 'api.polypux.com:3000',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/3.12.12'
        }
       })
       .then(res => res.json())
       .then(result => {
           resolve(result);
       })
       .catch(err => reject(err))
   });

(async () => {
    var reff = readline.question('[?] Reff Code: ')
    const jumlah = readline.question('[?] Jumlah Reff: ')
    for (var i = 0; i < jumlah; i++){
    try {
        const rand = randomize('0', 5)
        const name = random.first()
        const username = `${name}${rand}`
        const email = `${username}@gmail.com`
        const regist = await functionRegist(username, email, reff)
        if(regist.id != ''){
            console.log('[+] Reff Success !')
        } else {
            console.log('[+] Reff Failed !')
        }
    } catch (e) {
        console.log(e)
  }
}
})()