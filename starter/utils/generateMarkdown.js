function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## license
This project is licensed under the ${license} license.`
    )
  }
  return ''
}
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## description
  ${data.description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
   ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## installation
  To install necessary dependencies, run the following command:
 
  ${data.installation}
 
  ## usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
    
  ## contributing
  ${data.contributing}

  ## tests
  To run tests, run the following command:
  
  ${data.tests}
  

  ## questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  `;
}

module.exports = generateMarkdown;