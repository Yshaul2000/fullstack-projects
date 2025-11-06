/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Enter the URL to generate QR code:",
        name: "URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const userInput = answers.URL;

    // Generate QR code
    var qr_svg = qr.image(userInput);
    const file_name = `qrcode_${Date.now()}.png`
    qr_svg.pipe(fs.createWriteStream(file_name));

    // Save user input to a text file
    fs.appendFile('user_input.txt', `${userInput}\r\n`, (err) => {
        if (err) throw err;
        console.log('User input saved to user_input.txt');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });