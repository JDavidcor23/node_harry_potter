const http = require("http")
const fs = require("fs")
const fetch = require('node-fetch');
const charactersHP = async()=>{
    const resp = await fetch("http://hp-api.herokuapp.com/api/characters")
    const data = await resp.json()
    return data
}
const replaceTemplate= (temp, character) => {
    let output = temp.replace(/{%IMAGE%}/g, character.image);
    output = output.replace(/{%NAME%}/g, character.name);
    return output;
}
const page = fs.readFileSync(`${__dirname}/characters.html`, "utf-8")
const tempOverview = fs.readFileSync(`${__dirname}/home.html`, "utf-8")
const server = http.createServer(async(req, resp) =>{
    const pathname = req.url
    if (pathname === "/"){
        const characters = await charactersHP()
        const cardsHtml = characters.map(cha => cha.image !=="" ? replaceTemplate(page, cha) : "").join('')
        const output = tempOverview.replace('{%CHARACTERS%}', cardsHtml);
        resp.end(output)
    }else{
        resp.end("<h1>NOT FOUND</h1>")
    }
})
server.listen(8000, '127.0.0.1', ()=>{
    console.log('Ready');
})