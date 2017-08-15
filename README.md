# mozjpeg-compressor

Reads a directory of images and compresses all `.jpeg` and `.jpg` files.

### Prerequisites

**Install Homebrew:** Open a terminal and paste in this command: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

**Update Homebrew:** `brew update`

**Install libpng library:** `brew install libpng` (if you're still getting libpng errors, try running `brew upgrade libpng`)

**Install Node:** To find out if Node.js is installed, open a terminal window and run `node -v`. You'll see a version number printed to the console if Node is installed on your system. If Node is not installed, run `brew install node`.

*Additional References:*
https://changelog.com/posts/install-node-js-with-homebrew-on-os-x
https://github.com/Kurtz1993/ionic-minify/issues/14

## Installation Instructions (first use)

* Open a terminal to clone this repository: `git clone https://github.com/JstnEdr/mozjpeg-compressor.git`
* In the terminal, `cd mozjpeg-compressor`
* In the terminal: run `npm install` to install package dependencies (only need to do this once on initial install)
* Drop all files you want to compress into the **LARGE_IMAGES** directory
* To start the mozjpeg-compressor, run `npm start` in the terminal
* Access your minified files in **MINIFIED_IMAGES**

## Subsequent Usage Instructions

* Drop all files you want to compress into the **LARGE_IMAGES** directory
* From a terminal, `cd` into start the mozjpeg-compressor
* Run `npm start` in the terminal
* Access your minified files in **MINIFIED_IMAGES**

## Built With

* [mozjpeg](https://www.npmjs.com/package/mozjpeg) - The mozjpeg compression engine

## Authors

* **Justin Eder** - *EMC School* - [JstnEdr](https://github.com/JstnEdr)

## License

This project is licensed under the MIT License
