const chalk = require('chalk')
const axios = require('axios')
const loading = require('loading-cli')

const ACCESS_KEY = "323943-tastecli-TU53CZ9D"
const LIMIT = 15

const shuffle = array => {
    const newArray = array.sort(() => 0.5 - Math.random())
    return newArray
}

const fetchData = (type, queryString) => {
    const load = loading("Analyzing...").start()

    axios.get(`https://tastedive.com/api/similar?q=${type}:${queryString}&limit=${LIMIT}&k=${ACCESS_KEY}`)
        .then(response => {
            load.stop()
            let results = shuffle(response.data["Similar"]["Results"])
            results = (results.length > 10) ? results.slice(0, 10) : results
            if (!results.length) {
                console.log(chalk.redBright("Sorry! No results!!!"))
            } else {
                console.log(chalk.cyan("Some recommendations for you:"))
                results.forEach((result) => {
                    console.log(chalk.green("✔", result["Name"]))
                })
            }
        })
        .catch(() => {
            load.stop()
            console.log(chalk.redBright("Something was wrong with your Internet connection!!!"))
        })
}

const processing = (type, argv) => {
    const queryString = argv.join(" ").toLowerCase()
    fetchData(type, queryString)
}

module.exports = processing