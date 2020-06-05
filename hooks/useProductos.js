import React, {useEffect, useState, useContext} from 'react';
import {FirebaseContext} from "../firebase";


const useProductos = orden => {

const [productos, guardarProductos] = useState([]);
const {firebase} =  useContext(FirebaseContext);

useEffect(() => {
  const obtenerProductos = () => {
      firebase.db.collection("productos").orderBy(orden, 'desc').onSnapshot(manejarSnapshot); //Snapshot  es lo que te permi
      // firebase.db.collection("productos").orderBy('creado', 'desc') esto es el query lo que te quieres traer
      // .onSnapshot(manejarSnapshot); pero este es el que realmente accede a los datos lo que te permite iterarlos
  }
  obtenerProductos()
}, [])

function manejarSnapshot(snapshot) {
  const productos = snapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    }
  });
  console.log(productos)
  guardarProductos(productos)
}
    return {
        productos
    }
}
 
export default useProductos;

