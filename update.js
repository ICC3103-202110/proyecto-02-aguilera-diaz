function update(Add_City, model){
        max1 = 40
        min1 = 12
        x = Math.floor(Math.random()* (1+max1 - min1)+min1)
        y = Math.floor(Math.random()* (1+max1 - min1)+min1)

        if (x>y){
            var max = x
            var min = y
        }else{
            var max = y
            var min = x
        }

        var random = Math.random()
        const temp = random * (max - min + 1) + max/4
        const ma = random * (max - min + 1) + max/3
        const mi = random * (max - min + 1) + max/6

        const temp1 = Math.round(temp * 100) / 100
        const ma1 = Math.round(ma * 100) / 100
        const mi1 = Math.round(mi * 100) / 100

        return {
            ...model,
            Name: Add_City, 
            Temp: temp1, 
            Max: ma1, 
            Min: mi1
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
    var lista = []
    
    var c = cities_info
    for( var i = 0; i < cities_info.length; i++){ 
        if ( cities_info[i].Name !== dele) { 
            //result = c.splice(i, 1); 
            lista.push({Name:cities_info[i].Name, Temp:cities_info[i].Temp, Max:cities_info[i].Max, Min:cities_info[i].Min})

        }
    }
    var city_filter = cities_info.filter(function(city){
        return city.Name === dele // funciona con el igual pero no el distinto
    })
    
    //console.log(result)  //lista que elimina
    
    return city_filter
}
function update2(Add_City){
    max1 = 40
    min1 = 12
    x = Math.floor(Math.random()* (1+max1 - min1)+min1)
    y = Math.floor(Math.random()* (1+max1 - min1)+min1)

    if (x>y){
        var max = x
        var min = y
    }else{
        var max = y
        var min = x
    }

    var random = Math.random()
    const temp = random * (max - min + 1) + max/4
    const ma = random * (max - min + 1) + max/3
    const mi = random * (max - min + 1) + max/6

    const temp1 = Math.round(temp * 100) / 100
    const ma1 = Math.round(ma * 100) / 100
    const mi1 = Math.round(mi * 100) / 100

    return {
        Name: Add_City, 
        Temp: temp1, 
        Max: ma1, 
        Min: mi1
    }

}


module.exports = {
    update,
    delet,
    update2
}