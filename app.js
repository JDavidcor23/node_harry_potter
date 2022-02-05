// const http = require("http")
// const fs = require("fs")
const fetch = require('node-fetch');

 fetch("https://swapi.dev/api/people/1")
     .then(resp => resp.json())
     .then(data => console.log(data))

