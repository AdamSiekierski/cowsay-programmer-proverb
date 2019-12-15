#!/usr/bin/env node

const cowsay = require("cowsay")
const chalk = require("chalk")
const proverbs = require("./proverbs.json")

const randomProverb = () =>
  proverbs.proverbs[Math.floor(Math.random() * proverbs.proverbs.length)]

console.log(chalk.magenta(cowsay.say({ text: randomProverb() })))
