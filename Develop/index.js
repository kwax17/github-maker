// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Title your README.md',
    validate: fileName => {
      if (fileName) {
        return true;
      } else { 
        console.log('Please enter a title!');
        return false;
      }
    }
  },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else { 
              console.log('Please enter your name!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions.',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('You need to enter installation instructions!');
            return false;
          }
        }
    },
    {
      type: 'input',
      name: 'test',
      message: 'Provide test instructions.',
      validate: testInput => {
        if (testInput) {
          return true;
        } else {
          console.log('You need to enter test instructions!');
          return false;
        }
      }
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your account. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What license did you use?',
        choices: ['MIT', 'Apache', 'GPL']
      },
    {
      type: 'input',
      name: 'username',
      message: 'What is your username?',
      validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter an email for questions. (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('You need to enter an email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'otherinfo',
      message: 'Any other info for the user?'
    } 
];

// TODO: Create a function to write README file
function writeToFile(data) {
  const pageHTML = generateMarkdown(data);
  fs.writeFile('./README.md', pageHTML, err => {
    if (err) {
      console.log(error);
    } else {
    console.log("Generating README...")
    }
  });
}

// TODO: Create a function to initialize app
function init(data) {
  if (!data) {
    data = [];
  }
  return inquirer
    .prompt(questions)
    .then(answers => {
      data.push(answers);
      return data;
    });
}

// Function call to initialize app
init().then(data => {
  writeToFile(data);
});
