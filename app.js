const {Questions1, Questions2, Location, DeleteCity, UpdateCity} = require("./view");
const {delet, update2} = require("./update");
const {printTable} = require('console-table-printer');

async function app(state, update, view){
    const cities = []
    let len = cities.length
    var cities_info = []
    let len2 = cities_info.length
    var citiesdel = []

    try {
        while (true){
            let {model, currentView} = state
            const {table, Title} = currentView
            console.clear()
            console.log(Title)
            len = cities.length
            len2 = cities_info.length
            if (len2 === 0){
                console.log("NO CITIES")
            }else{
                printTable(table)
                
            }
            console.log()
            
            model = { Name: '', Temp: '', Max: '', Min: '' }

            
    
            if (len2 === 0){
                const {Action_1, Add_City } = await(Questions1())
                const city = Add_City
                cities.push(city)
                
                cities_info.push(await(update(city, model)))
            }else{
                const {Action_2} = await(Questions2())
                var Action = Action_2
                if (Action === "Add City"){
                    const {Add_City_2} = await(Location())
                    const city = Add_City_2
                    cities_info.push(await(update(city, model)))
                }else if (Action === "Delete City"){
                    citiesdel = []
                    const {Delete_City} = await(DeleteCity(cities_info))
                    const dele = Delete_City
                    
                    cities_info = delet(cities_info, dele)
                
                    
                    
                    
                }else if (Action === "Update City"){
                    const {Update_City} = await(UpdateCity(cities_info))
                    const upcity = Update_City
                    
                    cities_info = await(update2(upcity, cities_info))
                }
            }
            
            
            
            state = {
                ...state,
                model: cities_info,
                currentView: view(cities_info)
            }       
        
        }
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = { 
    app
}