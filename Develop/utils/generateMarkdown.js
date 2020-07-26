// function to generate markdown for README

function generateMarkdown(data) {
  //project name, description, table of contents, installation, usage, license,contributing tests, questions

  return `
  # ${data.title}
  
  ![License](https://img.shields.io/badge/license-${data.license}-informational.svg)

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
