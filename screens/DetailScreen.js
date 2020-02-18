import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import DetailHeader from '../components/DetailHeader';
import NullPage from '../components/NullPage';

export default class DetailScreen extends React.Component {
    post = this.props.navigation.getParam('post')

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <DetailHeader/>
                {this.post ? 
                <View>
                    <View style={styles.detailbox}>
                        <Text style={styles.detailtitle}>
                            {this.post.title}
                        </Text>
                    </View>
                    <View style={styles.detailbox}>
                        <Text style={styles.detailcontent}>
                            {this.post.content}
                        </Text>
                    </View>
                </View> 
                : <NullPage/>
    }
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        paddingTop: 50,

    },
    textstyle: {
        fontSize: 40,
    },
    detailtitle:{
        fontSize: 30,
    },
    detailcontent:{
        fontSize : 20,
    },
    detailbox: {
        marginVertical:30,
        marginLeft: 30,
        borderLeftColor: 'grey',
        borderLeftWidth: 5,
        paddingLeft: 20,
    }
});
