import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import cardItemList  from '../Consts/cardItemList';
import { useAuth } from '../providers/AuthProvider';


const Appheader = ({ navigator }) =>
{
  const { user } = useAuth();

    return (
        <View style={{backgroundColor: '#e2e5e7'}}>
          <SafeAreaView style={{backgroundColor: "#e2e5e7"}}>
              <View style={{backgroundColor: "#fff", flexDirection: 'row', marginTop: 10}}>
                  <Text style={{fontWeight: "bold", fontSize: 24, color: "", marginRight: 10, marginLeft: 8, fontFamily: 'NotoSerif_400Regular', backgroundColor: ''}}> WOMEN </Text>
                  <Text style={{fontWeight: "bold", fontSize: 24, color: "gray", fontFamily: 'NotoSerif_400Regular', backgroundColor: '', marginRight: 10}}>MEN</Text>
                  <Text style={{fontWeight: "bold", fontSize: 24, color: "gray", fontFamily: 'NotoSerif_400Regular', backgroundColor: ''}}>BEAUTY</Text>   
              </View>
    
              <View style={{backgroundColor: ""}}>
                  <View style={styles.header}>
                <FontAwesome name="navicon" size={24} color="gray" />
                <View style={{flexDirection:'row', alignItems:'flex-start'}}>
                <Text style={{
                  fontSize: 27,
                  color: '',
                  fontFamily: 'Poppins_700Bold_Italic',
                  letterSpacing: -1.8,
                  paddingLeft: 15,
                }}>
                  Wear Ethical
                </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity onPress={()=> user ? navigator("MyAccount") : navigator('LoginPage')}>
                    <FontAwesome name="search" size={24} color="gray" style={{ marginRight: 10 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> user ? navigator("MyAccount") : navigator('LoginPage')}>
                      <AntDesign name="user" size={24} color="gray" style={{ marginRight: 10 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>navigator('Bag')}>
                    <FontAwesome name="shopping-bag" size={24} color="gray" />
                  </TouchableOpacity>
                </View>              
              </View>            
            </View>
          </SafeAreaView>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 15
      },
})


export default Appheader;
