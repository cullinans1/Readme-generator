// function to generate markdown for README
function generateLicense(license) {
  return `
  ![License](https://img.shields.io/badge/license-${license}-informational.svg)
  `
}
function generateMarkdown(data) {
  //project name, description, table of contents, installation, usage, license,contributing tests, questions

  return `
  # ${data.title}
  
  ${generateLicense()}

  ## Description
  
  ${data.description}

  ## Table of contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation

  ${data.instructions}



  `;
}

module.exports = generateMarkdown;
