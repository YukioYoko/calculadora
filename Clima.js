import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

export default class Clima extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempC: "0",
      imagenT: "",
      bandera: 0,
      ciudad: "Mexico City",
      textoTemporal: "Mexico City", 
      viento: "40",
      lluvia: "70",
      day_1:"",
      day_1_icon:"",
      day_1_temp:"",
      day_1_wind:"",
      day_1_humi:"",
      day_2:"",
      day_2_icon:"",
      day_2_temp:"",
      day_2_wind:"",
      day_2_humi:"",
      day_3:"",
      day_3_icon:"",
      day_3_temp:"",
      day_3_wind:"",
      day_3_humi:"",
      day_4:"",
      day_4_icon:"",
      day_4_temp:"",
      day_4_wind:"",
      day_4_humi:"",
      day_5:"",
      day_5_icon:"",
      day_5_temp:"",
      day_5_wind:"",
      day_5_humi:"",
    };
  }

  componentDidMount() {
    this.searchC(); // Se ejecuta solo una vez al iniciar la aplicación
  }

  searchC = () => {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=ff0dece62c7e47b89df161241242908&q=${this.state.ciudad}&days=5&aqi=no&alerts=no`)
      .then(response => {
        const datos = response.data;
        this.setState({
          tempC: datos.current.temp_c,
          imagenT: datos.current.condition.icon,
          bandera: 1,
          viento: datos.current.wind_kph,
          lluvia: datos.current.humidity,
          day_1: datos.forecast.forecastday[0].date,
          day_1_icon: datos.forecast.forecastday[0].day.condition.icon,
          day_1_temp: datos.forecast.forecastday[0].day.avgtemp_c,
          day_1_wind: datos.forecast.forecastday[0].day.maxwind_kph,
          day_1_humi: datos.forecast.forecastday[0].day.avghumidity,
          day_2: datos.forecast.forecastday[1].date,
          day_2_icon: datos.forecast.forecastday[1].day.condition.icon,
          day_2_temp: datos.forecast.forecastday[1].day.avgtemp_c,
          day_2_wind: datos.forecast.forecastday[1].day.maxwind_kph,
          day_2_humi: datos.forecast.forecastday[1].day.avghumidity,
          day_3: datos.forecast.forecastday[2].date,
          day_3_icon: datos.forecast.forecastday[2].day.condition.icon,
          day_3_temp: datos.forecast.forecastday[2].day.avgtemp_c,
          day_3_wind: datos.forecast.forecastday[2].day.maxwind_kph,
          day_3_humi: datos.forecast.forecastday[2].day.avghumidity,
          day_4: datos.forecast.forecastday[3].date,
          day_4_icon: datos.forecast.forecastday[3].day.condition.icon,
          day_4_temp: datos.forecast.forecastday[3].day.avgtemp_c,
          day_4_wind: datos.forecast.forecastday[3].day.maxwind_kph,
          day_4_humi: datos.forecast.forecastday[3].day.avghumidity,
          day_5: datos.forecast.forecastday[4].date,
          day_5_icon: datos.forecast.forecastday[4].day.condition.icon,
          day_5_temp: datos.forecast.forecastday[4].day.avgtemp_c,
          day_5_wind: datos.forecast.forecastday[4].day.maxwind_kph,
          day_5_humi: datos.forecast.forecastday[4].day.avghumidity,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleSearch = () => {
    this.setState({ ciudad: this.state.textoTemporal }, () => {
      this.searchC();
    });
  };

  render() {
    return (
      <View style={styles.bg}>
        <View style={styles.search}>
          <TextInput
            style={{ fontSize: 15, color: "blue" }}
            onChangeText={textoTemporal => this.setState({ textoTemporal })}
            value={this.state.textoTemporal}
            placeholder="Escribe una ciudad"
          />
          <TouchableOpacity onPress={this.handleSearch}>
            <Image style={styles.searchlupe} source={require("./img/lupa.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.prinback}>
          <View style={styles.prinele}>
            <Text style={{fontSize: 30}}>
              {this.state.ciudad}
            </Text>
            {this.state.bandera ? (
              <Image style={styles.prinicon}
                source={{ uri: `https:${this.state.imagenT}` }}
              />
            ) : (
              <Image style={styles.prinicon}
                source={require("./img/sunny.png")}
              />
            )}
            <Text style={{fontSize: 60}}>
              {this.state.tempC} °C
            </Text>
          </View>

          <View style={styles.prinicons}>
            <View style={{ alignItems: 'center' }}>
              <Image style={styles.priniconsize}
                source={require("./img/wind.png")}
              />
              <Text style={{fontSize: 20}}>
                {this.state.viento} km/h
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image style={styles.priniconsize}
                source={require("./img/humidity.png")}
              />
              <Text style={{fontSize: 20}}>
                {this.state.lluvia}%
              </Text>
            </View>
          </View>
        </View>

        {/* Aquí inicia el Scroll */}
        <ScrollView horizontal> 
            <View style={styles.scroll}>

              {/* Dia 1 */}
              <View style={styles.card_bg}>
                <View style={styles.card_day}>
                  <View>
                    <Text style={{fontSize:15}}>
                      {this.state.day_1}
                    </Text>
                    </View>
                  <View>
                    <Image style={styles.card_icon}
                      source={{ uri: `https:${this.state.day_1_icon}` }}
                    />
                  </View>
                  <View style={{marginTop:-5}}>
                    <Text style={{fontSize:20}}>
                      {this.state.day_1_temp} °C
                    </Text>
                  </View>
                </View>
                <View style={styles.card_bottom}>
                  <View style={{alignItems:'center'}}>
                    <Image style={styles.card_icons}
                      source={require("./img/wind.png")}>
                    </Image>  
                    <Text style={{fontSize:10}}>
                      {this.state.day_1_wind} km/h
                    </Text>
                  </View>
                  <View style={{alignItems:'center'}}>
                    <Image style={styles.card_icons}
                      source={require("./img/humidity.png")}>
                    </Image>  
                    <Text style={{fontSize:10}}>
                      {this.state.day_1_humi}%
                    </Text>
                  </View>
                </View>
              </View>
            
                {/* Dia 2 */}
                <View style={styles.card_bg}>
                  <View style={styles.card_day}>
                    <View>
                      <Text style={{fontSize:15}}>
                        {this.state.day_2}
                      </Text>
                      </View>
                    <View>
                      <Image style={styles.card_icon}
                        source={{ uri: `https:${this.state.day_2_icon}` }}
                      />
                    </View>
                    <View style={{marginTop:-5}}>
                      <Text style={{fontSize:20}}>
                        {this.state.day_2_temp} °C
                      </Text>
                    </View>
                  </View>
                  <View style={styles.card_bottom}>
                    <View style={{alignItems:'center'}}>
                      <Image style={styles.card_icons}
                        source={require("./img/wind.png")}>
                      </Image>  
                      <Text style={{fontSize:10}}>
                        {this.state.day_2_wind} km/h
                      </Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                      <Image style={styles.card_icons}
                        source={require("./img/humidity.png")}>
                      </Image>  
                      <Text style={{fontSize:10}}>
                        {this.state.day_2_humi}%
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Dia 3 */}
                <View style={styles.card_bg}>
                  <View style={styles.card_day}>
                    <View>
                      <Text style={{fontSize:15}}>
                        {this.state.day_3}
                      </Text>
                      </View>
                    <View>
                      <Image style={styles.card_icon}
                        source={{ uri: `https:${this.state.day_3_icon}` }}
                      />
                    </View>
                    <View style={{marginTop:-5}}>
                      <Text style={{fontSize:20}}>
                        {this.state.day_3_temp} °C
                      </Text>
                    </View>
                  </View>
                  <View style={styles.card_bottom}>
                    <View style={{alignItems:'center'}}>
                      <Image style={styles.card_icons}
                        source={require("./img/wind.png")}>
                      </Image>  
                      <Text style={{fontSize:10}}>
                        {this.state.day_3_wind} km/h
                      </Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                      <Image style={styles.card_icons}
                        source={require("./img/humidity.png")}>
                      </Image>  
                      <Text style={{fontSize:10}}>
                        {this.state.day_3_humi}%
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Dia 4 */}
                <View style={styles.card_bg}>
                  <View style={styles.card_day}>
                    <View>
                      <Text style={{fontSize:15}}>
                        {this.state.day_4}
                      </Text>
                      </View>
                    <View>
                      <Image style={styles.card_icon}
                        source={{ uri: `https:${this.state.day_4_icon}` }}
                      />
                    </View>
                    <View style={{marginTop:-5}}>
                      <Text style={{fontSize:20}}>
                        {this.state.day_4_temp} °C
                      </Text>
                    </View>
                  </View>
                  <View style={styles.card_bottom}>
                    <View style={{alignItems:'center'}}>
                      <Image style={styles.card_icons}
                        source={require("./img/wind.png")}>
                      </Image>  
                      <Text style={{fontSize:10}}>
                        {this.state.day_4_wind} km/h
                      </Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                      <Image style={styles.card_icons}
                        source={require("./img/humidity.png")}>
                      </Image>  
                      <Text style={{fontSize:10}}>
                        {this.state.day_4_humi}%
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Dia 5 */}
                <View style={styles.card_bg}>
                  <View style={styles.card_day}>
                    <View>
                      <Text style={{fontSize:15}}>
                        {this.state.day_5}
                      </Text>
                      </View>
                    <View>
                      <Image style={styles.card_icon}
                        source={{ uri: `https:${this.state.day_5_icon}` }}
                      />
                    </View>
                    <View style={{marginTop:-5}}>
                      <Text style={{fontSize:20}}>
                        {this.state.day_5_temp} °C
                      </Text>
                    </View>
                  </View>
                  <View style={styles.card_bottom}>
                    <View style={{alignItems:'center'}}>
                      <Image style={styles.card_icons}
                        source={require("./img/wind.png")}>
                      </Image>  
                      <Text style={{fontSize:10}}>
                        {this.state.day_5_wind} km/h
                      </Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                      <Image style={styles.card_icons}
                        source={require("./img/humidity.png")}>
                      </Image>  
                      <Text style={{fontSize:10}}>
                        {this.state.day_5_humi}%
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg:{
    backgroundColor: '#bfcef8',
    paddingBottom: 100
  },
  search: {
    borderRadius: 15,
    height: 40,
    marginHorizontal: "5%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 19,
    backgroundColor: 'white'
  },
  searchlupe: {
    width: 27,
    height: 27,
    marginRight: 5,
    marginTop: 5
  },
  prinback: {
    backgroundColor: '#e1e7f8',
    borderRadius: 25,
    margin: 20,
    opacity: 0.7,
    paddingBottom: 20
  },
  prinele: {
    alignItems: 'center',
    marginTop: 10,
  },
  prinicon:{
    width: 250,
    height: 250
  },
  prinicons: {
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priniconsize: {
    width: 80,
    height: 80,
  },
  scroll: {
    backgroundColor:'#9db3f2',
    flexDirection:'row',
    borderRadius:20,
    marginTop:10,
    paddingVertical:20
  },
  card_bg: {
    backgroundColor:'#e1e7f8',
    borderRadius:25,
    opacity:70,
    paddingBottom:20,
    marginHorizontal:5
  },
  card_day: {
    alignItems:'center',
    marginTop:10,
  },
  card_icon: {
    width:50,
    height:50
  },
  card_bottom:{
    marginTop:10,
    paddingHorizontal:15,
    gap:15,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  card_icons: {
    width:20,
    height:20,
  }
});
