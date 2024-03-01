// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'None':
      return '';
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT](https://choosealicense.com/licenses/mit/)';
    case 'Apache':
      return '[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)';
    case 'GNU GPLv3':
      return '[GPL](https://choosealicense.com/licenses/gpl-3.0/)';
    default:
      return '';
  }

  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  # ${data.title}

  ## Description
  ${data.description}

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Questions](#questions)

## Installation

  1. Clone the repository 
  2. Go to project directory 
  3. Install dependencies - 'nmp i inquirer@8.2.4'
  4. Run application - 'node index.js'

## Usage

Invoke the application by using this command: \`node index.js\`

${data.usage}

${renderLicenseSection(`${data.license}`)}

## Tests

To run tests, run the following command: ${data.Tests}

## Contributions

1. Create a new branch for your changes
2. Make your changes and revisions
3. Submit a pull request

## Questions

If you have any questions, please feel free to contact me:

Email: [${data.email}](emailto:${data.email})

Github Profile: [${data.github}](https://github.com/${data.github})

Link to Repository: [${data.githubUrl}](https://github.com/${data.github}/${data.githubUrl})


  `;
}

module.exports = generateMarkdown;
