import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    // Get user URL input
    {
        message: "Enter the URL to generate QR code:",
        name: "URL"
    }
  ])
  .then((answers) => {
   // Extract user input
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