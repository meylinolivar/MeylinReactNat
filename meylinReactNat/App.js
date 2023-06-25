import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const SumaNumeros = () => {
const [numeros, setNumeros] = useState([]);
const [suma, setSuma] = useState(0);
const handleAgregarNumero = () => { 
const nuevoNumero = parseInt(prompt('Ingrese un número'));

    if (!isNaN(nuevoNumero)) {
      setNumeros([...numeros, nuevoNumero]); 
      setSuma(suma + nuevoNumero);
  };

  return (
    <div>
      <button onClick={handleAgregarNumero}>Agregar número</button>{/* Botón para agregar un número */}
     <p>Arreglo de números: {numeros.join(', ')}</p>{/* Mostrar el arreglo de números */}
     <p>Suma de los elementos: {suma}</p>{/* Mostrar la suma de los elementos */}
    </div>

)};
};
const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: 'roxy',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SumaNumeros;