// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, username, title) {
  if (!license) {
    return '';
  } else {
    return `
![GitHub](https://img.shields.io/github/${license}/${username}/${title})
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
  .map(({ title, license, description, installation, name, languages, test, username, email, otherinfo }) => {
  return `
# ${title}
${renderLicenseBadge(license, username, title)}


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

## Test
${test}

## Contributing
${name}

## Languages
${languages}

${renderLicenseLink(license)}

## Questions
${otherinfo}
Email: ${email}
Github: https://github.com/${username}
`;
})
.join('')};
`;
};


module.exports = generateMarkdown;
