import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const Appheader = () => {
    return (
        <View style={{backgroundColor: '#fff'}}>
          <SafeAreaView style={{backgroundColor: "#fff"}}>
              <View style={{backgroundColor: "#fff", flexDirection: 'row', marginTop: 10}}>
                  <Text style={{fontWeight: "bold", fontSize: 24, color: "#fff", marginRight: 10, marginLeft: 8, fontFamily: 'NotoSerif_400Regular', backgroundColor: '#000'}}> WOMEN </Text>
                  <Text style={{fontWeight: "bold", fontSize: 24, color: "#000", fontFamily: 'NotoSerif_400Regular', backgroundColor: '#fff', marginRight: 10}}>MEN</Text>
                  <Text style={{fontWeight: "bold", fontSize: 24, color: "#000", fontFamily: 'NotoSerif_400Regular', backgroundColor: '#fff'}}>BEAUTY</Text>   
              </View>
    
              <View style={{backgroundColor: "#000"}}>
                <View style={styles.header}>
                  <FontAwesome name="navicon" size={24} color="white" />
                  <Text style = {{fontWeight: "bold", fontSize: 24, color: "#fff", fontFamily: 'NotoSerif_400Regular'}}>SKERBEL's APPARELS</Text>
                  <View style={{flexDirection: 'row'}}>
                    <AntDesign name="user" size={24} color="white" style={{marginRight: 10}} />
                    <FontAwesome name="shopping-bag" size={24} color="white" />
                  </View>              
                </View>            
              </View>
            </SafeAreaView>
        </View>
                
    );
}
const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 20
      },
})


export default Appheader;

