import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { resetCache } from './metro.config';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
       pesos:"0",
       resultado:"",
    };
  }

  render() {
    const dolarC = () =>{
  var temp = 0.053*this.state.pesos
     this.setState({resultado:temp})
    }


    const euro = () =>{
      var temp = 0.047*this.state.pesos
         this.setState({resultado:temp})
        }

    const libra = () =>{
          var temp = 0.04*this.state.pesos
             this.setState({resultado:temp})
            }
    const yen = () =>{
      var temp = 7.67*this.state.pesos
         this.setState({resultado:temp})
        }    
    return (
      <View>
        <Text style={styles.textoi}> Calculadora de divisas </Text>
         <View style={{
            borderRadius:10, 
            borderColor:"blue",
            borderWidth:2,
            width:200,
            marginTop:50,
            marginLeft:10,
            }}>
         {/* 
         para leer una variable no es asi a=pesos aqui ees
         a=this.state.pesos
         para asignar unvalor a la variable no es pesos=a
         this.setState({pesos:a})
         */}
                
            <TextInput
            placeholder='Cantidad en Pesos'
            keyboardType='numeric'
            onChangeText={pesos => this.setState({pesos})}
            ></TextInput>
         </View>
         <View style={{
            justifyContent:'center',
            marginVertical:20,

         }}>
            <Button title="Dolar" onPress={dolarC }></Button>
            <Button title="Euro"  onPress={euro}></Button>
            <Button title="Libra Esterlina"onPress={libra}></Button>
            <Button title="yen" onPress={yen}></Button>
         </View>
         <View>
            <Text style={{fontSize:20}}>La cantidad es: {this.state.resultado}</Text>
         </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
textoi:{
    fontSize:30,
    color:"red",
    textAlign:"center"

}
})