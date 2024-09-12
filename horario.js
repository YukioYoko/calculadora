import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default class Horario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombreAlumno: '',
            carrera: '',
            campus: '',
            ciclo: '',
        };
    }

    componentDidMount() {
        this.buscarC();
    }

    buscarC = () => {
        axios.get('http://148.202.152.33/cucei/semestre.php')
            .then((response) => {
                const datos = response.data;

                this.setState({ 
                    nombreAlumno: datos.alumno,
                    carrera: datos.carrera,
                    campus: datos.campus,
                    ciclo: datos.ciclo,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.saludo}>Bienvenido {this.state.nombreAlumno}</Text>
                <View style={styles.infoEstudiante}>
                    <View style={styles.contenedorIzq}>
                        <Text style={styles.infoExtra}>CARRERA:</Text>
                        <Text style={styles.infoExtra}>CAMPUS:</Text>
                        <Text style={styles.comodin}></Text>
                        <Text></Text>
                        
                        <Text style={styles.infoExtra}>CICLO:</Text>
                    </View>
                    <View style={styles.contenedorDer}>
                        <Text style={styles.infoExtra}>{this.state.carrera}</Text>
                        <Text style={styles.infoExtra}>{this.state.campus}</Text>
                        <Text style={styles.infoExtra}>{this.state.ciclo}</Text>                            
                    </View>
                </View>
                <View style={styles.texthorario}>
                    <Text style={styles.infoExtra}>HORARIO</Text>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#061B3A',
        width:'100%',
        height:'100%',
       
    },
    saludo: {
        marginTop: 30,
        marginBottom: 30,
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,
    },
    infoEstudiante: {
        flexDirection: 'row',
        marginTop: 30,
        alignSelf: 'center',
        borderColor: 'white',
        height: 150, // Ajusta la altura según sea necesario
        width: '100%',
        borderWidth: 3,
        padding: 10, // Añadido padding para mejor espaciado
    },

    contenedorIzq:{
        width:120,
    },

    contenedorDer:{
        flex:1,
    },

    campus:{
        with:50,
    },

    infoExtra: {
        color: 'white',
        fontSize: 20,
    },

    comodin: {
        marginTop:10,
    },

    texthorario:{
        marginTop:30,
        alignSelf:'center',
        justifyContent:'center'
    },
});