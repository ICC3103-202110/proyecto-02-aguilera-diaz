const axios = require('axios')

async function update(Add_City, model){ //PREGUNTAR SI PUEDEN HABER 2 FUNCIONES ASYNC
        const data = await(axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Add_City}&units=metric&appid=b27e4e025660c5bfb4b6bd18502560aa`))
        const temp = data.data.main.temp
        const max = data.data.main.temp_max
        const min = data.data.main.temp_min
    
        return {
            ...model,
            Name: Add_City, 
            Temp: temp, 
            Max: max, 
            Min: min
            
        }
    
}

function delet(cities_info, dele){
   /*var res = cities_info.filter(function(city,index,cities){
       return city.Name != dele //cities[index].Name;
   }) */

   //var res = cities_info.filter(city => city.Name != dele) //cities[index].Name;

   //city => city.Name != dele
   //console.log(res)
    //return result

    //usar map
    

    var city_filter = cities_info.filter(function(city){
        return city.Name !== dele
    })
    
    
    return city_filter
}
async function update2(Add_City, cities_info){
    const data = await(axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Add_City}&units=metric&appid=b27e4e025660c5bfb4b6bd18502560aa`))
    const temp = data.data.main.temp
    const max = data.data.main.temp_max
    const min = data.data.main.temp_min

    var city_filter2 = cities_info.filter(function(city){
        return city.Name === Add_City
    })
    const index = cities_info.indexOf(city_filter2[0]);
    cities_info.splice(index,1,{ Name: Add_City,Temp: temp, Max: max, Min: min })
    return cities_info
    /*return {
        Name: Add_City, 
        Temp: temp1, 
        Max: ma1, 
        Min: mi1
    }*/

}


module.exports = {
    update,
    delet,
    update2
}