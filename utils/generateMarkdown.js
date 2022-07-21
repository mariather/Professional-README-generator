//  thi function will  return a license badge based on which license is passed in the index
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  switch (license) {
    case "Apache 2.0 License":
      licenseBadge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      break;

      case "Boost Software License 1.0":
        licenseBadge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
      break;

      case "GNU AGPLv3":
        licenseBadge = "https://img.shields.io/badge/License-AGPL_v3-blue.svg";
      break;

      case "GNU GPLv3":
        licenseBadge= "https://img.shields.io/badge/License-GPLv3-blue.svg";
      break;

      case "GNU LGPLv3":
        licenseBadge = "https://img.shields.io/badge/License-LGPL_v3-blue.svg";
        break;

     case "BSD 3-Clause License":
      licenseBadge = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
      break;

    case "MIT License":
      licenseBadge= "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;

    case "IBM Public License Version 1.0":
      licenseBadge = "https://img.shields.io/badge/License-IPL%201.0-blue.svg";
      break;
      
      case "Mozilla Public License 2.0":
        licenseBadge= "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
        break;

    default:
      licenseBadge = "";
      break;
  }

  return licenseBadge;
}


// function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  let licenseLink = "";
  switch (license) {
    case "Apache 2.0 License":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;

      case "Boost Software License 1.0":
        licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
      break;

      case "GNU AGPLv3":
        licenseLink = "https://www.gnu.org/licenses/agpl-3.0";
      break;

      case "GNU GPLv3":
        licenseLink= "https://www.gnu.org/licenses/gpl-3.0";
      break;

      case "GNU LGPLv3":
        licenseLink = "https://www.gnu.org/licenses/lgpl-3.0";
        break;

     case "BSD 3-Clause License":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;

    case "MIT License":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;

    case "IBM Public License Version 1.0":
      licenseLink = "https://opensource.org/licenses/IPL-1.0";
      break;
      
      case "Mozilla Public License 2.0":
        licenseLink = "https://opensource.org/licenses/MPL-2.0";
        break;

    default:
      licenseLink = "";
      break;
  }

  return licenseLink;
}


//function that returns license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}

// function to generate markdowns for README

function generateMarkdown(data) {
  if (data.install_code) {
    data.install_code = `\`\`\`${data.install_code}\`\`\``
  } else {
    data.install_code = ``
  }

  if (data.usage) {
    data.usage = `\`\`\`${data.usage_code}\`\`\``
  } else {
    data.usage = ``
  }

  return `# ${data.title}
  
  ${renderLicenseSection(data.license)}
  
  click to see deployment:${data.link}  
  
  ## Description
  
  ${data.description}
  

  ## Usage
  
  ${data.usage}  

  ## Test-Instructions
  
  ${data.instructions}
 
  
  ## Status 

  ${data.status}
  
  ## License
  
  ${data.license}
  
  ## Technologies Used
  
  ${data.technologies}
  
 
  
  GitHub Username: [@${data.github}](https://github.com/${data.github})  
  
  Email: [${data.email}](mailto:${data.email})  
  `;
}

module.exports = generateMarkdown;
