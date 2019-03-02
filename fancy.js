const chalk = require('chalk');
const axios = require('axios');
const loading =  require('loading-cli');

const accessKey = "323943-tastecli-TU53CZ9D";
const limit = 15;

const shuffle = (anArray) => {
  anArray = anArray.sort(() => {return 0.5 - Math.random()});
  return anArray;
}

const fetchData= (type, queryString) => {
	const load = loading("Analyzing...").start();

	axios.get(`https://tastedive.com/api/similar?q=${type}:${queryString}&limit=${limit}&k=${accessKey}`)
  .then(response => {
  	load.stop();
    results = shuffle(response.data["Similar"]["Results"]);
    results = ((results.length > 10) ? results.slice(0, 10) : results);
    if (results.length === 0) {
    	console.log(chalk.redBright("Sorry! No results!!!"));
    }
    else {
    	console.log(chalk.cyan("Some recommendations for you:"));
    	results.forEach((result) => {
    		console.log(chalk.green("✔",result["Name"]));
    	})
    }
  })
  .catch(error => {
    load.stop();
    console.log(chalk.redBright("Something was wrong with your Internet connection!!!"));
  });
}

const processing = (type, argv) => {
	let queryString = argv.join(" ").toLowerCase();
	fetchData(type, queryString);
}

module.exports = processing;