/* 
1. Copy code
2. in Command line npm install inquirer and qr-image.
3. type node index.js to run code.
4. Separate png image file and text file will be generated.
*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {"message": "Type URL: ", "name": "URL"}
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
