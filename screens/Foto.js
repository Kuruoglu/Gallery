import React from 'react';
import {View, Image, StyleSheet, Dimensions } from "react-native";

const Foto = ({ route }) => {
    const {  url } = route.params;
    const win = Dimensions.get('window');
    const size = {width: win.width, height: win.height - 75};

    return (
            <View>
                <Image
                    style={size}
                    source={ {uri: url} }/>
            </View>
        )
    };
const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: 300,
        height: 500,
    }
});

export default Foto;