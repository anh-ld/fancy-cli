#!/usr/bin/env node
"use strict";
const commands = require('./commands.js');
const argv = process.argv.slice(2);
commands(argv);