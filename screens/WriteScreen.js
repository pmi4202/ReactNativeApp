import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import WriteHeader from '../components/WriteHeader';

const { width, height } = Dimensions.get('window');

export default class WriteScreen extends React.Component {
    static navigationOptions = {
        tabBarOnPress:({navigation})=>{
            navigation.navigate('Write') //눌리면 Write로 이동해라
        }
    }
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.contentContainer}>
                    <WriteHeader/>
                    <TextInput 
                        placeholder = "제목을 입력하세요"
                        style = {styles.title}
                        returnKeyType = "done"
                    />
                    <TextInput
                        placeholder = "내용을 입력하세요"
                        multiline = {true}
                        style = {styles.content}
                    />
                </View>
                
        
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
        paddingTop: 30,
    },
    contentContainer: {
        width: width -60,
    },
    title: {
        marginVertical: 30, //위 아래 margin
        fontSize : 30,
        paddingBottom: 12,
        borderBottomWidth: 2,
    },
    content: {
        fontSize: 20,
    }
});
