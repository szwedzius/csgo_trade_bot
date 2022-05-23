//This module is reading the input from a file
//And returning a array of skin instances 
const fs = require('fs');


//this array holds the result
const getSkins = (filename) =>
{
    //this is where the result is stored
    let skinArray = [];
    return new Promise((resolve, reject) =>{
        fs.readFile(filename, {encoding : "utf-8"}, (err,data) =>{
            if(err)
            {
                console.log(err.message);
            }
            else
            {
                //split by newline to get variables
                const array = data.split('\n');
                array.forEach(element => {
                    skinArray.push(element);
                });
            }
            let n = 0;
            /*  loop for development purposes
                skinArray.forEach(element => {
                n++;
                console.log("Skin ",n);
                console.log("Link to steamcommunity: ", element.link);
                console.log("Price or lower(euro): ", element.price);
                console.log("Float or lower: ", element.float);
            });*/
            resolve(skinArray);
        })
    });
}

exports.getSkins = getSkins;