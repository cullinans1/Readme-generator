// function to generate markdown for README
function generateLicense(license) {
  let licenseArr =license.map(license => {
    return `
  ![License](https://img.shields.io/badge/license-${license}-informational.svg)
  `
  })
  return licenseArr;
}
function generateInfo(licenseName, username) {
  licenseInfo = [];
   licenseName.map(license => {
    if(license === 'apache') {
      licenseInfo.push(`
  #### Apache License

      Copyright 2020 ${username}

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.
      `)
    } 
    else if(license === 'mit') {
      licenseInfo.push(`
  #### MIT License

      Copyright (c) 2020 ${username}

      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.FTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS 
      FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
      COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
      IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
      WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      `)
    }
    else if(license === 'gpl') {
      licenseInfo.push(`
  #### GPL License

      Copyright (C) 2020 ${username}
      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.

      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
      `)
    }
  })
  return licenseInfo;
}
function generateMarkdown(data) {
  //project name, description, table of contents, installation, usage, license,contributing tests, questions

  return `
  # ${data.title}
  
  ${generateLicense(data.license)}

  ## Description
  
  ${data.description}

  ## Table of contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Testing](#testing)
  * [License](#license)

  ## Installation

  ${data.instructions}

  ## Usage 

  ${data.usage}

  ## Contribution

  Guidelines for contributions:

  ${data.contribution}

  ## Testing

  ${data.test}

  ## Questions?

  Contact me at 

  Email: ${data.email}

  GitHub: https://github.com/${data.username}

  ## License

  Information on the license(s)

  ${generateInfo(data.license, data.username)}

  `;
}

module.exports = generateMarkdown;
