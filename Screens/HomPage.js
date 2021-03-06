import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import cardItemList  from '../Consts/cardItemList';
import Appheader from '../components/Appheader';


const width = (Dimensions.get("screen").width/2) - 15

const CardItem =({cardItemList, onPressed}) =>{
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(()=>{
    setIsFavorite(cardItemList.favorite);
  }, [cardItemList])

  return( 
   <TouchableWithoutFeedback onPress={onPressed}>
     <View style={styles.cardDesign}>
         <View style={{height: 250, alignContent: 'center'}}>
           <Image style={{resizeMode: 'contain', width: "100%", maxHeight: "100%"}} source={cardItemList.images.imageMain} />
         </View>
         <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}> 

           <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
             <Text style={{fontWeight: 'bold'}}>
               {cardItemList.price}円
             </Text>
           </View>
           <TouchableOpacity onPress={()=>setIsFavorite(!isFavorite)} >   
             <FontAwesome name={isFavorite ? "heart" : "heart-o"} size={20} color={isFavorite ? 'rgb(426,42,68)' : '#000'} />
           </TouchableOpacity>
         
         </View>
         <Text style={{fontSize: 13.5, fontFamily: 'Montserrat_600SemiBold', marginTop: 25,color: 'rgb(70,70,70)', marginBottom: 10}}>
           {cardItemList.name}
         </Text>
       
     </View>
    </TouchableWithoutFeedback>
  );
 };

const HomePage = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/home.png')} resizeMode="cover">
    <View style={{flex: 1, backgroundColor: ''}}>
      <SafeAreaView style={{backgroundColor: "#e2e5e7"}}>
          <Appheader navigator={navigation.navigate} />
          {/* <View style={{paddingHorizontal: 10, paddingVertical: 10, flexDirection: 'row', justifyContent: "space-between"}}>
            <View style={{...styles.rectangleView, marginRight: 10}}>
              <Text style={{fontSize: 20, textAlign: 'center', justifyContent: 'center'}}>
                Filter (0)
              </Text>
            </View>
            <View style={styles.rectangleView}>
              <Text style={{fontSize: 20, textAlign: 'center', justifyContent: 'center'}}>
                Featured
              </Text>
            </View>
          </View> */}
      </SafeAreaView>
      <FlatList 
          style={{paddingHorizontal: 5, paddingBottom: 100, flex: 1}} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          numColumns={2} 
          data={cardItemList} 
          renderItem={({item}) => <CardItem cardItemList={item} onPressed={()=>navigation.navigate("SinglePage", item)} />} />
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  rectangleView: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    alignContent: 'center',
    justifyContent: 'center',
  },
  cardDesign: {
    // height: 350,
    backgroundColor: '#fff',
    borderRadius:6,
    borderWidth: 1,
    borderColor: 'rgb(234,231,233)',
    width,
    marginBottom: 20,
    marginHorizontal: 5,
    padding: 15,
  }
});

export default HomePage;