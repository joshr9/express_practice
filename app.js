var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var holidays = [
  {
    id: 1,
    name: "Thanksgiving",
    month: "November"
  }, {
    id: 2,
    name: "Christmas",
    month: "December"

  }, {
    id: 3,
    name: "New Year's Day",
    month: "January"
  }

]

app.get("/holidays", function (req, res){
  res.send(holidays)
})

app.get("/holidays/:id", function (req, res){
  var id = Number(req.params.id)
  console.log(id)
  res.json(getHoliday(holidays, id).obj)
})

app.post("/holidays", function (req, res){
  var addHoliday = {
    id: (holidays.length + 1),
    name: req.body.name,
    month: req.body.month
  }

  holidays.push(addHoliday)
  res.send(holidays)

})

app.delete("/holidays/delete", function (req, res){
  
})

function getHoliday (array, searchId){
  for(var i = 0; i < array.length; i++){
    if(array[i].id === searchId){
      return {obj: array[i], index: i}
    }
  }
  return "Holiday not found"
}


app.listen(4000, function() {
  console.log("Listening on Port 4000")
})
