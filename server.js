const http = require('http');
const _ = require('lodash');

const server = http.createServer((req,res) => {
    console.log('request made');
})
server.listen(3000, 'localhost', () => {
    console.log('slucham');
})