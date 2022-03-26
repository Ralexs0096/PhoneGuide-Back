let csvToJson = require('convert-csv-to-json')

const convertToJson = csvFile => {
  let json = csvToJson.getJsonFromCsv(csvFile)
  for (let i = 0; i < json.length; i++) {
    console.log(json[i])
  }
}

module.exports = convertToJson
