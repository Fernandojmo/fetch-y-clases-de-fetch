// let razasDePerros =['chihuahua','Poodle','Golden','Pastor Aleman'];
// const callback = (raza) =>raza;
// const nuevasRazas = razasDePerros.map(callback)
// nuevasRazas.push('San Bernardo')
// console.log(nuevasRazas)

// const callback = (e) => {
//     setTimeout(()=>{
    
//     console.log(e);
// },4000);
// }

// const saludar = (saludo, callback)=>{
//     saludo = saludo.toUpperCase();
//     callback(saludo);
// }

// let saludo="HoLa"
// saludar (saludo,callback);

const funcionPromesa=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Hola mundo, soy llamado desde una promesa`)
            reject(`Error 404`)
        },4000)
    }
    )
}

funcionPromesa()
.then((e)=>console.log(e))
.catch((err)=>console.log(err))