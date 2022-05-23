//This module is reading the input from a file
//And returning a array of skin instances 
const fs = require('fs');

//creating a skin class that holds the necessary input info
class skin {
    constructor(link,price,float)
    {
        this.link = link;
        this.price = parseFloat(price);
        this.float = parseFloat(float);
    }
}

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
                let n = 0;
                //Every 3 lines we have a new skin to analyze
                while(n < array.length){
                    if(array[n] !== undefined && array[n+1] !== undefined && array[n+2] !== undefined)
                    {
                        skinArray.push(new skin(array[n],array[n+1],array[n+2]));
                    }
                    else
                    {
                        console.log("Error you have typed not enough arguments for one of the skins");
                    }
                    n+=3;
                }
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