const cowsay = require('cowsay')
const chalk = require('chalk')
const chance = require('chance').Chance();
const fs = require('fs')

const proverbs = JSON.parse(fs.readFileSync(`${__dirname}/proverbs.json`, 'utf8'));
const randomProverb = () => proverbs.proverbs[chance.integer({ min: 0, max: proverbs.proverbs.length - 1 })]

const cowProgrammerProverb = () => {
  console.log(
    chalk.magenta(
      cowsay.say({ text: randomProverb() })
    )
  )
}

module.exports = cowProgrammerProverb;