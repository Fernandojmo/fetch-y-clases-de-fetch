// programa para indicar suma de nombres//

// let nombre = "Fernando"
// let apellido = "Melo"

// let nombrecompleto=function(nombre,apellido){

//     console.log(nombre+" "+apellido)
// }

//funcion para indicar si una persona cumple con los permisos//

// function permiso(nombre, edad){
//     if (edad>=18){
//         console.log('${nombre}, puedes solicitar permiso')

//     }
//     else{
//         console.log('${nombre}, no puedes solicitar permiso')
//     }
// }

//para crear un arreglo se utilizan los []
// const ejemploarreglo = [1,2,3,4]
// los arreglos pueden tener diferentes  componentes al interior
// const ejemploarreglo = [1,[4], true, "hey"]
// se utiliza el termino unshift para extraer un dato del arreglo eliminandolo
// ejemploarreglo.unshift(3)
// const elementoquitado = arreglo.shift()
// console.log(ejemploarreglo)
// console.log(elementoquitado)



// tarea macionalidades jaffa
// const nacionalidades = ["mexicano","argentino","argentino","mexicano","argentino",

// "argentino","peruano","venezolano","mexicano","peruano","venezolano","mexicano"]
// function contar(arr,valor)

// { const cantidad=arr.filter(v => v===valor).length

//   console.log(`Nacionalidad ${valor} = ${cantidad}`)

// }

// var nacionalidadesUnicas = nacionalidades.filter(function(v, idx, arr)

// {return arr.indexOf(v) === idx;}).forEach((v) => (contar(nacionalidades,v)))


// modificar un objeto y agregarle un nuevo valor
// const gato ={
//     sexo: "h",
//     color: "gris",
//     pelo: "esponjoso",
//     caracter: "uraño",
//     anios:2,
// }
// console.log(gato)

// function cambiargato (edadnueva, pelouevo){
//     gato.anios=edadnueva
//     gato.pelo=pelouevo
// }

// cambiargato (3, "liso")
// console.log(gato)

// function agregarporpiedad (propiedad,valor){
//     gato[propiedad]=valor
// }
// agregarporpiedad("tamaño", "grande")



// ejercicio arreglo de objetos libros, funcion para agregar y para quitar libros del arreglo
// let arreglo =[]

// function agregarLibros(vnombre, vautor){
//     let libros ={
//         nombre: "",
//         autor: "",
//     }   
//     libros.nombre=vnombre
//     libros.autor=vautor
//     arreglo.push(libros)
// }

// agregarLibros ("Odisea", "homero")
// agregarLibros ("El quijote", "cervantes")

// function imprimirarreglo(){
//     console.log (arreglo)
// }


// function eliminarlibro(titulo){
//     arreglo = arreglo.filter((libros) => {
//         return libros.nombre != titulo
//     })

// }

// eliminarlibro("Odisea")
// imprimirarreglo()

class Carrito{
    constructor(){
        this.listaDeArticulos=[]
        // this.cantidad=cantidad
        // this.articulo=articulo
        // this.precio=precio
    }

    agregarArticulo(articulo){
        this.listaDeArticulos.push(articulo)
    }
    calcularPrecio(){

    }
    imprimirCarrito(){
        console.log(this.listaDeArticulos)
        
    }
}

class Articulo {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

const micarrito = new Carrito()

const pan = new Articulo("pan", 200)

micarrito.agregarArticulo(pan)

micarrito.imprimirCarrito()


// Carrito.agregarArticulo(pan)



