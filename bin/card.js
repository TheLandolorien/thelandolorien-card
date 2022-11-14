#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const contact = require('./contact.json');
const boxOptions = require('./boxen.json');

const social = Object.entries(contact.social)
  .map(([name, info]) => {
    return `${chalk.bold(name)}: ${chalk.green(info)}`;
  })
  .join('\n');

const cardContents = `
  ${contact.name} / ${chalk.bold(contact.handle)}
  
  ${chalk.bold('Work')}: ${chalk.bold(contact.role)}
  ${social}
`;

console.log(boxen(cardContents, boxOptions));
