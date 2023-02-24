// Script is called on the command line like node urls.js FILENAME, and it reads the contents of FILENAME (each line of that file will be a URL).

const fs = require('fs');
const axios = require('axios');
const process = require('process');

function generateTextFile(url) {
    let hostname = url.split('/')[2];
    return `${hostname}.txt`;
}

async function webCat(url) {
    try {
        let resp = await axios.get(url);
        fs.writeFile(generateTextFile(url), resp.data, 'utf8', function(err) {
            if (err) {
                console.error(`Error writing ${url} to file: ${err}`);
                // process.exit(1);
            }
        });
    } catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
        // process.exit(1);
    }

}



function readURLinFile(file){
    fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
            console.error(`Error reading ${file}: ${err}`);
            process.exit(1);
        }
        let urls = data.split('\n');
        for (let url of urls) {
            webCat(url);
        }
    });
}
let path = process.argv[2];
readURLinFile(path);