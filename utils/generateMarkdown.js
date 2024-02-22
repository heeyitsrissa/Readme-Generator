// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if(!License){
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${License}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if(!License){
    return '';
  }
  return `(https://opensource.org/licenses/${License})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (!License) {
    return '';
}
return `This project is licensed under the [${License} License](${renderLicenseLink(License)}).`;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

  const licenseBadge = data.License ? renderLicenseBadge(data.License): '';

  const licenseSection = data.License ? renderLicenseSection(data.License): '';

     return `# ${data.Title}

${licenseBadge}
      
## Description
 ${data.Description}
      
## Table Of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
      
  <a id='Installation'></a>
## Installation 
  ${data.Installation}
      
  <a id='Usage'></a>
## Usage
  ${data.Usage}
      
  <a id='License'></a>
 ## License
  ${licenseSection}
      
  <a id='Contributing'></a>
## Contributing
  ${data.Contributing}
      
  <a id='Tests'></a>
## Tests
  ${data.Tests}
      
  <a id='Questions'></a>
## Questions
  Github: https://github.com/${data.Github}
  Email: ${data.email}
  ${licenseSection}`;
}

module.exports = generateMarkdown;
