var figlet = require('figlet');
const chalk = require('chalk');
var inquirer = require('inquirer');

function Title(){
    return chalk.red(
        figlet.textSync(
            "WEATHER APP",
            {
                horizontalLayout: "full",
                
            }
        )
    )
}

function Questions1(){
    const question1 = "Select Action"
    const question2 = "Location"
    choices1 = ["Add City"]

    return inquirer.prompt([{
        type: "list",
        name: "Action_1",
        message: question1,
        default: "Use arrow keys",
        choices: choices1

    },{    
        name: "Add_City",
        message: question2,
    }])
}

function Questions2(){
    const question1 = "Select Action"
    choices2 = ["Add City", "Update City", "Delete City"]

    return inquirer.prompt([{
        type: "list",
        name: "Action_2",
        message: question1,
        default: "Use arrow keys",
        choices: choices2
    }])
}

function Location(){
    const question2 = "Location"
    return inquirer.prompt([{
        name: "Add_City_2",
        message: question2,
    }])
}

function DeleteCity(cities_info){
    const del = "Delete City"
    
    const getName = people => people.Name
    const citiesFilter = cities_info.map(getName)

    return inquirer.prompt([{
        type: "list", 
        name: "Delete_City",
        message: del,
        default: "Use arrow keys",
        choices: citiesFilter
    }])
}

function UpdateCity(cities_info){
    const update = "Update City"
    const getName = city => city.Name
    const citiesFilter = cities_info.map(getName)

    return inquirer.prompt([{
        type: "list",     
        name: "Update_City",
        message: update,
        default: "Use arrow keys",
        choices: citiesFilter
    }])
}

function table(model){
    const result = model
    
    return result
    
}
function view(model){
        return {
            Title: Title(),
            table: table(model)
        }
}

module.exports = {
    view,
    Questions1,
    Questions2,
    Location,
    DeleteCity,
    UpdateCity
}