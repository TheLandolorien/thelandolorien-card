#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const contact = require('./contact.json');
const boxOptions = require('./boxen.json');

const social = Object.entries(contact.social)
  .map(([name, info]) => {
    return `${name}: ${chalk.dim(info)}`;
  })
  .join('\n');

const cardContents = `
  ${chalk.green(contact.name)} / ${chalk.green(contact.handle)}
  
  ${contact.role}

  ${social}
`;

console.log(boxen(cardContents, boxOptions));
