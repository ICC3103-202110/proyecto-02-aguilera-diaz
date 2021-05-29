const {view} = require("./view")
const {update} = require("./update")
const {app} = require("./app")
const {initModel} = require("./model")

const state = {
    model: initModel,
    currentView: view(initModel)
}

app(state, update, view)