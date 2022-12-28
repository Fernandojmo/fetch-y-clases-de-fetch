

// //peticion de tipo get
// fetch(url)
//     .then(response=> response.json()) //pasar de json a js
//     .then(data =>console.log(data))
//     .catch(error => console.log(`ha ocurrido un error: ${error}`))

// RESOLVIENDO LA PETICION COM FUNCIONES ASINC Y AWAIT


// async function infopokemon(pokemon){
//     try{
//         const url=`https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//         const response =await fetch(url) //obtener informacion de la url
//         const data= await response.json() //json a js informacion obtenida
//         // console.log(data)
//         habilidadespokemon=data.abilities
//         for(i=0; i<habilidadespokemon.length;i++){
//             habilidadpokemon=data.abilities[i].ability.name   
//             console.log(habilidadpokemon)
//         }
//     }catch{
//         console.log(error)
//     }


// }

// infopokemon('snorlax')

async function infonasa(){
    try{
        const url=`https://api.nasa.gov/planetary/apod?api_key=AjBoYfHOsfl5pc6gHzHCn1rslcwIrBNHQQU3XKyM`;
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        console.log("Fetch exitoso")
    }catch{
        console.log("error")    
    }
}

infonasa()