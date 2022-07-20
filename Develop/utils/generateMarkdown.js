// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)
    `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    return `
## License
${license}
    `
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   return `
//   ## License
//   Link: ${renderLicenseLink}
//   `;
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${data
  .map(({ title, license, description, installation, name, languages, test, username, email, link, otherinfo }) => {
  return `
# ${title}
${renderLicenseBadge(license)}

## Table of Contents
- [Description] (#description)
- [Installation] (#installation)
- [Contributing] (#contributing)
- [Languages] (#languages)
- [License] (#license)
- [Test] (#test)
- [Questions] (#question)

## Description
${description}

## Installation
${installation}

## Contributing
${name}

## Languages
${languages}

${renderLicenseLink(license)}

## Test
${test}

## Questions
${otherinfo}
${username}
${email}
href="https://github.com/${link}
`;
})
.join('')};
`;
};


module.exports = generateMarkdown;
