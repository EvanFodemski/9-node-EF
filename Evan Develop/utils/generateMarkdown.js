// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (license === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === "GPLv2") {
        return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    } else if (license === "GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (license === "Mozilla Public 2.0") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    } else if (license === "LGPLv3") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
    } else if (license === "AGPLv3") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    } else {
        return "Invalid Selection"
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.pageTitle}
   
  ${renderLicenseBadge(data.pageLicsense)}
  # Description
  ${data.pageDescription}

  # Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [License](#licsense)
  - [Testing](#tests)
  - [Questions](#questions)
  

  # Installation 
  ${data.pageInstall}

  # Usage
  ${data.pageUsage}

  # Licsense
  ${data.pageLicsense}

  # Contributors
  ${data.pageContributers}

  # Tests
  ${data.pageTesting}


  # Questions
  My Github Profile: [${data.pageGitHub}](https://github.com/${data.pageGitHub})
  Contact us via email at: [${data.pageEmail}](mailto:${data.pageEmail})
  `;

}
module.exports = generateMarkdown;