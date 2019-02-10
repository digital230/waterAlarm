import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: 'black',
    height: 250,
    width: 250,
    borderRadius: 150,
  },
  waveroot: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wave: {
        width: 250,
        aspectRatio: 1,
        overflow: 'hidden',
        borderRadius: 150,
    },
    waveBall: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 50,
        overflow: 'hidden',
    }

});
