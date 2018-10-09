
const algoliasearch = require("algoliasearch")

module.exports = function (express) {
  const client = algoliasearch("app_is", "api_key")
  const index = client.initIndex("index_name")

  var addDataToAlgolia = function () {

    //TODO: Add the data to algolia
    const topics = [{
      topic: "Coding skill",
      readCount: 100
    },
    {
      topic: "U Topic ",
      readCount: 10000
    }]

    index.addObject(topics)
  }
  

  var deleteDataToAlgolia = function () {

  }
  return {
    addDataToAlgolia: addDataToAlgolia,
    deleteDataToAlgolia: deleteDataToAlgolia
  }
}
