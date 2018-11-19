const chalk = require('chalk');
const axios = require('axios');
const loading =  require('loading-cli');

const accessKey = "323943-tastecli-TU53CZ9D";
const limit = 10;

const fetchData= (type, queryString) => {
	const load = loading("Analyzing...").start()
	axios.get(`https://tastedive.com/api/similar?q=${type}:${queryString}&limit=${limit}&k=${accessKey}`)
  .then(function (response) {
  	load.stop();
    results = response.data["Similar"]["Results"];
    if (results.length === 0) {
    	console.log(chalk.redBright("Sorry! No results!!!"));
    }
    else {
    	console.log(chalk.cyan("Some recommendations for you:"))
    	results.forEach((result) => {
    		console.log(chalk.green("✔",result["Name"]));
    	})
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}

const processing = (type, argv) => {
	let queryString = argv.join(" ").toLowerCase();
	fetchData(type, queryString);
}

module.exports = processing;