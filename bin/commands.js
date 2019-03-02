const chalk = require('chalk');
const package = require('../package.json');
const fancy = require('./fancy.js');

const types = ['music', 'movie', 'show', 'book', 'author', 'game'];

const version = () => {
	console.log(package.version);
}

const help = () => {
	console.log(`${chalk.blue('fancy-cli: Recommend music, movies, tv shows ... right from command-line.')}		

Usage:
	$ ${chalk.magenta('fancy')} ${chalk.cyan('<query_type>')} ${chalk.green('<query_string>')}
	$ ${chalk.magenta('fancy')} ${chalk.yellow('<command>')}

Commands:
	${chalk.yellow('--help')}     Display help
	${chalk.yellow('--version')}  Display version number

Types:
	${chalk.cyan('music')}      Music artists
	${chalk.cyan('movie')}      Movies
	${chalk.cyan('show')}       TV shows
	${chalk.cyan('book')}       Books
	${chalk.cyan('author')}     Authors
	${chalk.cyan('game')}       Games

Examples:
	$ ${chalk.magenta('fancy')} ${chalk.cyan('music')} ${chalk.green('justin bieber')}
	$ ${chalk.magenta('fancy')} ${chalk.cyan('show')} ${chalk.green('how i met your mother')}
	`);
}

const error = (errorMessage) => {
	console.log(chalk.redBright(errorMessage));
	console.log(`Try   $ ${chalk.magenta('fancy')} ${chalk.yellow('--help')}   to get instructions.`);
	process.exit(-1);
}

const commands = (argv) => {
	if (argv[0] == "--version" || argv[0] == "-v") {
		version();
	}
	else if (argv[0] == "--help" || argv[0] == "-h" || argv.length === 0) {
		help();
	}
	else if (types.includes(argv[0]) === true) {
		if (argv.length < 2) {
			error("Lack of query string!!!");
		}
		else {
			let type = argv[0];
			argv = argv.slice(1);
			fancy(type, argv);
		}
	}
	else {
		error("Wrong command!!!");
	}
}

module.exports = commands;