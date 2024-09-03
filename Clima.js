import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Clima extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={
            {
                fontSize:30, color:"dodgerblue", textAlign:'center',
            }
        }> Clima </Text>
        <View style={{
            borderWidth:2,
            borderColor:'red',
            borderRadius:15,
            width:200,
            marginTop:40,
            marginLeft:100,
        }}>

        </View>
      </View>
    );
  }
}
