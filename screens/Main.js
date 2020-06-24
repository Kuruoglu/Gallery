import React from 'react';
import {View} from "react-native";
import Gallery from "../components/Gallery";

class Main extends React.Component {

    static navigationOptions = {
        title:       'Gallery',
        headerStyle: {
            backgroundColor: '#324291',
        },
        headerTintColor:  '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        const {navigation} = this.props;
        return (
            <View>
                <Gallery navigation={navigation}/>
            </View>
        );
    }

}
export default Main;


