// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
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
        type: 'input',
        name: 'license',
        message: 'What license did you use?'
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
    } 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return inquirer
  .prompt(
    {
    type: 'confirm',
    name: "confirmation",
    message: 'Create a README.md? (Y/n)',
    default: false
    },
    {
      type: 'input',
      name: "title",
      message: 'Title your README.md',
      validate: fileName => {
        if (fileName) {
          return true;
        } else { 
          console.log('Please enter a title!');
          return false;
        }
      }
    }
  )
  // .then(data => {
  //   fileName.push(data);
  //   if (data.confirmAddProject) {
  //     return writeToFile(data);
  //   } else {
  //     return data;
  //   }
  // });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(writeToFile)
    .then(data => {
        const pageHTML = generateMarkdown(data);

        fs.writeFile('./README.md', pageHTML, err => {
            if (err) throw new Error(err);
            console.log("Read Me created. Check out README.md to see it.")
        })
    })
