// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//This code simply does what is asked about using if else statements.
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else 
  if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else 
  if (license === "GPL 3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else
   if (license === "BSD 3") {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//This follows the same process as the rendeLicenseBadge function, but this returns the link to the license.

function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`
  } else 
  if (license === "Apache 2.0") {
    return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`
  } else 
  if (license === "GPL 3.0") {
    return `[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)`
  } else 
  if (license === "BSD 3") {
    return `[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//Like the code above, this code renders the license section of the README file using an if else statement.
function renderLicenseSection(license) {
  if (license) {
    return ` ${license} license.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
//This code creates a function pre-titled generateMarkdown. This function forms a template that will be used to form the readme file. The function takes in data as a parameter and returns a string that will be used to form the readme file.
//the data. method is used to access the inputs for those respective questions asked when creating the readme.
//The Green Text Represents the header sections and their corresponding links in the table of contents.
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Features](#features)
  * [Authors](#authors)
  

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage} 
  ## License
  ${renderLicenseSection(data.license)}
  ## Features
  ${data.features}
  ## Authors
  ${data.authors}


`;
}

module.exports = generateMarkdown
