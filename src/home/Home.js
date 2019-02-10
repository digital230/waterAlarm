import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Wave from 'react-native-waveview';
import styles from './style';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.interval = null;
    this.inc = 0;
  }

  componentDidMount() {
    this.interval =  setInterval(() => {
      this.inc = this.inc+10;
      if(this.inc < 200) {
        this._waveRect && this._waveRect.setWaterHeight(this.inc);
      } else {
        clearInterval(this.interval);
      }
    },500)
  }


  render() {

    return (
    <View style={styles.root}>
      <View style={styles.waveroot}>
        <Wave
          ref={ref=>this._waveRect = ref}
          style={styles.wave}
          H={1}
          waveParams={[
              {A: 20, T: 380, fill: '#62c2ff'},
              {A: 25, T: 280, fill: '#0087dc'},
              // {A: 20, T: 200, fill: '#1aa7ff'},
          ]}
          animated={true}
        />
      </View>
    </View>
    )
  }
}

export default Home;
