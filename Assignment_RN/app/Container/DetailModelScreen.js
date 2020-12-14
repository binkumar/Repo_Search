import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image
} from "react-native";
const imageSize = 30;
const DetailModelScreen = ({ data, onClose }) => {

    // const { item } = data;
    const detailsContainer = () => (
        <View style={styles.modalView}>
            <View style={{
                flex: 1,
                padding: 5,
                justifyContent: 'flex-start'

            }}>
                <Image
                    style={{ width: 200, height: 200, alignSelf: 'center' }}
                    resizeMode="contain"
                    source={{ uri: data.owner.avatar_url }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Image
                        style={{ width: imageSize, height: imageSize }}
                        resizeMode="contain"
                        backgroundColor={'white'}
                        source={require('../Resources/unbookmark.png')}
                    />
                    <Image
                        style={{ width: imageSize, height: imageSize, }}
                        resizeMode="contain"
                        source={require('../Resources/Pin-location.png')}
                    />
                </View>
                <Text style={{ color: 'white', fontSize: 16, marginTop: 5, fontWeight: 'bold' }}>
                    Title:
                    </Text>
                <Text style={{ color: 'white', fontSize: 14, marginTop: 5 }}>
                    {data.name}
                </Text>
                <Text style={{ color: 'white', fontSize: 16, marginTop: 5, fontWeight: 'bold' }}>
                    Description:
                    </Text>
                <Text style={{ color: 'white', fontSize: 14, marginTop: 5 }}>
                    {data.description}
                </Text>
                <Text style={{ color: 'white', fontSize: 16, marginTop: 5, fontWeight: 'bold' }}>
                    Fork count:
                    </Text>
                <Text style={{ color: 'white', fontSize: 14, marginTop: 5 }}>
                    {data.forks_count}
                </Text>
                <Text style={{ color: 'white', fontSize: 16, marginTop: 5, fontWeight: 'bold' }}>
                    Open issues:
                    </Text>
                <Text style={{ color: 'white', fontSize: 14, marginTop: 5 }}>
                    {data.open_issues}
                </Text>

            </View>
        </View>
    )
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={true}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                            onClose();
                        }}
                    >
                        <Text style={styles.textStyle}>X</Text>
                    </TouchableHighlight>
                    {detailsContainer()}
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        marginTop: 44,
        backgroundColor: '#7E7C7C'
    },
    modalView: {
        marginHorizontal: 15,
        // marginBottom: 50,
        marginTop: 5,
        flex: 0.9,
        backgroundColor: "black",
        borderRadius: 20,
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginLeft: 15,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default DetailModelScreen;
