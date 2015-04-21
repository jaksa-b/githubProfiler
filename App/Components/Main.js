var React = require('react-native');
var api = require('../Utils/api');
var Dashboard = require('../Components/Dashboard');

var {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS
} = React;

var style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 55,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#48BBeC'
    },
    title:{
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        fontSize: 25,
        color:'#fff'
    },
    searchInput:{
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8
    },
    button:{
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    }
});
class Main extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           username: '',
           isLoading: false,
           error: false
       }
    }
    handleChange(event){
       this.setState({
           username: event.nativeEvent.text
       });
    }
    handleSubmit(){
        //Update for ActivityIndicatorIOS spinner
        this.setState({
            isLoading: true
        });
        //fetch data from github
        api.getBio(this.state.username).then((res) => {
            if(res.message === 'Not Found'){
                this.setState({
                    error: 'User not found',
                    isLoading: false
                })
            } else {
                this.props.navigator.push({
                    title: res.name || "Select an Option",
                    component: Dashboard,
                    passProps: {userInfo: res}
                });
                this.setState({
                    isLoading: false,
                    error: false,
                    username: ''
                })
            }
        });
    }
    render(){
        return (
           <View style={style.mainContainer}>
               <Text style={style.title}>Search Github User</Text>
               <TextInput
                   style={style.searchInput}
                   value={this.state.username}
                   onChange={this.handleChange.bind(this)}/>
               <TouchableHighlight
                   style={style.button}
                   onPress={this.handleSubmit.bind(this)}
                   underlayColor="white">
                   <Text style={style.buttonTest}>SEARCH</Text>
               </TouchableHighlight>
           </View>
        )
    }
}

module.exports = Main;