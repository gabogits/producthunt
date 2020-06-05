import React, {useState, useEffect} from 'react'

const useValidation = (stateInicial, validar, fn) => {
    const [valores, guardarValores] = useState(stateInicial);
    const [errores, guardarErrores] = useState({});
    const [submitForm, guardarSubmitForm] = useState(false);
    
    useEffect(() => {
        if(submitForm) {
            const noErrores = Object.keys(errores).length === 0; //para saber si el objeto de errores esta vacio
            if(noErrores) {
                fn(); //fn = funcion que se ejecuta en el componente
            }
            guardarSubmitForm(false)
        }
    }, [errores])

    //funcion que se ejecuta conform el ususario escribe algo
    const handleChange = e => {
        guardarValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    //funcion que se ejecuta cuando el usuario hace submit 
    const handleSubmit = e => {
        e.preventDefault();
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion)
        guardarSubmitForm(true)
    }

    //cuando se realiza un vento de blur 
    const handleBlur = () => {
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion)
    }

    return {
        valores,
        errores, 
        handleSubmit,
        handleChange,
        handleBlur
    };
}
 
export default useValidation;