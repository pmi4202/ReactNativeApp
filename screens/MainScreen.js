import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

//icon이라는 옵션을 들고 가라
export default class MainScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon : ({tintColor})=>(
            <MaterialCommunityIcons name = "calendar-multiselect" size = {30} style={{color:tintColor}}/>
        )
    }

    state = {
        selectedDate :'',
        Posts : [{
            title : '2월 17일에 쓴 글',
            content: '본문',
            date : '2020-02-17',
        },
        {
            title : '2월 18일에 쓴 글',
            content: '본문',
            date : '2020-02-18',
        },
    ]
    }

    render(){
        return (
            //console.log(this.state.selectedDate),
            <SafeAreaView style={styles.container}>
                <Calendar 
                    onDayPress = { (day)=>{this.setState(this.state.selectedDate=day)} }
                    current={new Date()}/>
                <ScrollView style={styles.scrollstyle}>
                    <FlatList
                        data = {this.state.Posts.filter(data => { return data.date==this.state.selectedDate.dateString})}//array 보여주고싶은 data 
                        renderItem = {({item, index})=>{
                            return(
                                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Detail', {post:item})}}>
                                    <View>
                                        <Text>
                                            {item.title}
                                        </Text>
                                        <Text>
                                            {item.content}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )    
                        }}
                        keyExtractor ={(item, index) => {return `$(index)`}}/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
    },
    scrollstyle: {
        padding: 20,
    }
});
