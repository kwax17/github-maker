// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseBadge) {
  if (!licenseBadge) {
    return '';
  }
  return `
  ![Badge](./assets/images)
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseLink) {
  if (!licenseLink) {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseLink) {
  renderLicenseLink();

  return `
    ### License
    Link: ${licenseLink}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${data
    .filter(({ feature }) => feature)
    .map(({ title, name, description, installation, test, languages, link, username, email }) => {
      return `
      # ${title}

      ## Description
      ${description}

      ## Installation
      ${installation}

      ## Contributing
      ${name}
      ${languages.map(language => language).join(',')}

      ## Tests
      ${test}

      ## Questions
      ${username}
      ${email}
      ${link}
    `;
    })
  }
  `;
};

module.exports = generateMarkdown => {
  const { title, badge, description, installation, usage, license, name, test, username, email, link } = generateMarkdown;
  return `
  # Title
  ${generateMarkdown(title)}
  ${renderLicenseBadge(badge)}

  ## Table of Contents

  ${generateMarkdown(description)}

  ${generateMarkdown(installation)}

  ${generateMarkdown(usage)}

  ${renderLicenseSection(license)}

  ${generateMarkdown(name)}

  ${generateMarkdown(test)}

  ${generateMarkdown(username)}
  ${generateMarkdown(email)}
  href="https://github.com/${generateMarkdown(username)}
  `;
};
