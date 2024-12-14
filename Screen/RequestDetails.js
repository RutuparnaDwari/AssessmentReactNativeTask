



import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, Modal,Image } from "react-native";

const RequestDetails = ({ route, navigation }) => {
    const { request } = route.params;

    const [modalVisible, setModalVisible] = useState(false);
    const [formData, setFormData] = useState({
        item: request.item,
        pickup: request.location,
        dropoff: "Remote Address",
        reward: request.reward,
    });

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <View style={styles.container}>
         
            <View style={styles.topBar}>
                <Pressable onPress={() => navigation.goBack()}>
                   <Image source={require('../assests/LeftArrowIcon.png')} style={styles.leftArrowIcon}/>
                </Pressable>
                <Text style={styles.screenTitle}>Delivery Request</Text>
            </View>

            
            <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.title}>{formData.item}</Text>
            <Text>Pickup: {formData.pickup}</Text>
            <Text>Drop-off: {formData.dropoff}</Text>
            <Text>Reward: {formData.reward}</Text>
            </View>
           

           
            <Pressable
                style={styles.addButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>Add/Edit Delivery Request</Text>
            </Pressable>
            <Pressable
                style={styles.addButton}
                onPress={() => navigation.navigate('UserProfile')}
            >
                <Text style={styles.buttonText}>User Profile</Text>
            </Pressable>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Add/Edit Delivery Request</Text>

                       
                        <TextInput
                            style={styles.input}
                            placeholder="Item"
                            value={formData.item}
                            onChangeText={(value) => handleInputChange("item", value)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Pickup Location"
                            value={formData.pickup}
                            onChangeText={(value) => handleInputChange("pickup", value)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Drop-off Address"
                            value={formData.dropoff}
                            onChangeText={(value) => handleInputChange("dropoff", value)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Reward"
                            value={formData.reward}
                            onChangeText={(value) => handleInputChange("reward", value)}
                        />

                        <View style={styles.buttonGroup}>
                            <Pressable
                                style={[styles.button, styles.saveButton]}
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                            >
                                <Text style={styles.buttonText}>Save</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.cancelButton]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.buttonText}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default RequestDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        padding: 20,
    
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        marginTop:10
        
    },
    screenTitle: {
        fontSize: 18,
        fontWeight: "bold",
        // marginLeft: '27%',
        textAlign:'center',
        color:'#235786',
        flex:1
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 20,
    },
    addButton: {
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#235786",
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "90%",
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: "#fff",
        textAlign: "center",
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    button: {
        flex: 1,
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        alignItems: "center",
    },
    saveButton: {
        backgroundColor: "#28a745",
    },
    cancelButton: {
        backgroundColor: "#dc3545",
    },
    leftArrowIcon:{
        width:30,
        height:30,
    }
});

