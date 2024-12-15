import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';


const Header = () =>{
    return(
        <View style={styles.header}>
                <Image style={styles.gambar} source={require('../../assets/S.png')} />
                <View>
                <Text style={styles.nama}>Nama Kamu</Text>
                <Text style={styles.titl}>Title</Text>
                </View>
                <Image style={styles.gambarh} source={require('../../assets/gambarh.png')} />
                <Image style={styles.bell} source={require('../../assets/bell.png')} />
              </View>
    );
};


export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#98DED9',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 15,
        height: 142,
        width: 412,
        columnGap:10
      },

      gambar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#EAF2FF',
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      titl:{
        fontSize:9,
      },
    
     
      gambarh: {
        width:183,
        height: 40,
        backgroundColor: '#B4DBFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
      },
      bell: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
      },
})