import React from 'react';
import {View, Image, StyleSheet, Text, ScrollView, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {getAllImageAction} from "../Redux/action/actionCreators";

class Gallery extends React.Component {

    render() {
        console.log(this.props)
        const { images } = this.props;
        const { navigate } = this.props.navigation;
        return(
            <ScrollView>
                {
                    images.map(item => {
                        const show = () => {
                            navigate('Foto', {
                                name: item.user.username,
                                url: item.urls.regular,

                            })
                        };

                        return (
                            <View
                                key={item.id}
                                style={styles.block}
                            >
                                <TouchableHighlight onPress = {() => show() }>
                                    <Image
                                        style={styles.image}
                                        source={ {
                                            uri: item.urls.regular
                                        } }

                                    />
                                </TouchableHighlight>

                            <Text style={styles.textFooter}>{item.user.username}</Text>
                            </View>
                        )
                    })
                }


            </ScrollView>
        )
    }
    componentDidMount = () => {
        this.props.getAllImages();
    };
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: 300,

    },
    textFooter: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    }
})


const mapStateToProps = (state) => ({
        images: state.imageReducer.images,
        isImagesLoading: state.imageReducer.isImagesLoading,
        error: state.imageReducer.imagesError,
});

const mapDispatchToProps = (dispatch) => ({
    getAllImages: ()=>dispatch(getAllImageAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)