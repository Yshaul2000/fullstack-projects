# 🔗 URL to QR Code Generator

A command-line tool that generates QR codes from URLs and saves them as PNG images.

## ✨ Features

- Interactive command-line interface
- Generates QR codes from any URL
- Saves QR codes as PNG images with timestamps
- Keeps a history of all generated URLs in a text file

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your system

### Installation

1. Navigate to the project directory:
   ```bash
   cd Url-To-Qr-Project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Usage

Run the application:
```bash
node index.js
```

Follow the prompt to enter a URL, and a QR code will be generated!

## 🛠️ Built With

- **Node.js** - Runtime environment
- **inquirer** - Interactive command-line interface
- **qr-image** - QR code generation library

## 📝 Output

- QR code images are saved as `qrcode_<timestamp>.png`
- URL history is saved in `user_input.txt`

---

Enjoy generating QR codes! 📱
