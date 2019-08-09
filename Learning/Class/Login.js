import React, { Component } from 'react';
import { View, Text, Image,Alert,StyleSheet,TextInput,Button} from 'react-native';

export default class Login extends Component <Props> {

    static navigationOptions = {
        header:null, //隐藏导航栏
    };

    TextInputDIY = (leftText, placeholderStr)=>{

        return(
            <View style={{marginHorizontal:16,height:46,justifyContent:'center'}}>

                <View style={styles.inputItem}>
                    <Text style={styles.itemLeft}>
                        {leftText}
                    </Text>

                    <TextInput
                        placeholder={placeholderStr} style={styles.itemRight}
                        
                />
                </View>

            </View>

        )
    };
    Lin = ()=>{

        return(
            <View style={
                {
                    backgroundColor:'red',
                    marginHorizontal:16,
                    height:1,
                }
            }/>
        )
    };

    LogoAndTielt =()=>{
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Image style={styles.logoStyle} />
                <Text style={{titleColor:'red',fontSize:18,paddingTop:16, fontWeight:'bold',paddingBottom:60}}> 清洁能源行业领创者</Text>

            </View>
        )
    }

    render() {

        return (
            //Text 赋值变量的话 需要放在 {}
            <View style={styles.loanContent}>

                {this.LogoAndTielt()}
                {this.TextInputDIY('账号','请输入账号')}
                {this.Lin()}

                {this.TextInputDIY('验证码','请输入验证码')}
                {this.Lin()}


            </View>
        )
    }
}
const styles = StyleSheet.create({
    loanContent: {
        flex: 1,

        // alignItems: 'center',
    },
    logoStyle:{
        marginTop:100,
        height:74,
        width:74,
        borderRadius:74/2,
        backgroundColor:'red',

    },
    itemLeft: {
        width: 70,
        textAlign: 'left',
        fontSize: 16,
        color: '#333333',
    },
    itemRight: {
        flex: 1,
        fontSize: 16,
        color: '#333333',
    },
    inputItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },

});