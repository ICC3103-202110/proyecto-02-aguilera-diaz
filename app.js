const {Questions1, Questions2, Location, DeleteCity, UpdateCity} = require("./view");
const {delet, update2} = require("./update");
const {get_weather} = require("./api");
const {printTable} = require('console-table-printer');

async function app(state, update, view){
    const cities = []
    let len = cities.length
    var cities_info = []
    var citiesdel = []

    try {
        while (true){
            var {model, currentView} = state
            const {table, Title} = currentView
            //console.clear()
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

            
    
            if (len === 0){
                const {Action_1, Add_City } = await(Questions1())
                city = Add_City
                cities.push(city)
                
                cities_info.push(await(update(city, model)))
            }else{
                const {Action_2} = await(Questions2())
                Action = Action_2
                if (Action === "Add City"){
                    const {Add_City_2} = await(Location())
                    city = Add_City_2
                    cities_info.push(await(update(city, model)))
                }else if (Action === "Delete City"){
                    citiesdel = []
                    const {Delete_City} = await(DeleteCity(cities_info))
                    dele = Delete_City
                    //cities_info = delet(update(cities_info, dele))
                    //cities_info.update(delet(cities_info, dele))
                    //cities_info.splice(delet(cities_info,dele),1) //no me elimina el correcto
                    
                    
                    //citiesdel.push(delet(cities_info, dele))

                    /*citiesdel.push((delet(cities_info, dele)))
                    citydeleted = delet(cities_info, dele)
                    const index = cities_info.indexOf(citydeleted[0]);
                    if (index > -1) {
                        cities_info.splice(index, 1);
                    }*/
                    cities_info = delet(cities_info, dele)
                
                    
                    
                    
                }else if (Action === "Update City"){
                    const {Update_City} = await(UpdateCity(cities_info))
                    upcity = Update_City

                    /*cityupdated = update(upcity)
                    citydeleted = delet(cities_info, upcity)
                    console.log(cityupdated)
                    console.log(citydeleted)
                    const index = cities_info.indexOf(citydeleted[0]);
                    cities_info.splice(index,1,cityupdated)*/
                    
                    cities_info = await(update2(upcity, cities_info))
                }
            }
            
            
            
            
            
            //const newtable = update(Yes, Temp, From, To, model) 
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