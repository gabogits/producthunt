export default function validarCrearCuenta(valores){
    let errores = {}
    //validar el nombre del usuario
    if(!valores.nombre){
        errores.nombre = "El nombre es obligatorio"
    }
    //validar el la empresa
    if(!valores.empresa){
        errores.empresa = "Nombre de empresa es obligatoria"
    }
   
    //Validar la url
    if(!valores.url){
        errores.url = "La url del producto es obligatoria"
    }else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
        errores.url = "URL no válida"
    }
    //validar descripcion

    if(!valores.descripcion){
        errores.descripcion = "Agrega una descripcion de tu producto"
    }

    return errores;
}