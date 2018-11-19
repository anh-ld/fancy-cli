# fancy-cli
Recommend music artists, movies, tv shows, books, authors and games right from your terminal.

<p align="center"><img src="https://rawcdn.githack.com/culee/fancy-cli/master/cli.svg" alt="SVG"></p>

## Installation
via [npm]
```
$ npm install -g @culee/fancy
```
## Usage
```
Usage:
	$ fancy <query_type> <query_string>
	$ fancy <command>

Commands:
	--help     Display help
	--version  Display version number

Types:
	music      Music artists
	movie      Movies
	show       TV shows
	book       Books
	author     Authors
	game       Games

Examples:
	$ fancy music justin bieber
	$ fancy show how i met your mother
```
## Dependencies and API
- [chalk]
- [loading-cli]
- [axios]
- API from [Tastedive]

[npm]: <https://www.npmjs.com/>
[chalk]: <https://www.npmjs.com/package/chalk>
[loading-cli]: <https://www.npmjs.com/package/loading-cli>
[axios]: <https://www.npmjs.com/package/axios>
[Tastedive]: <https://tastedive.com/>