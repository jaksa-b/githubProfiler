var React = require('react-native');
var Profile = require('./Profile');
var Repositories = require('./Repositories');
var Notes = require('./Notes');
var api = require('../Utils/api');


var {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableHighlight
} = React;

var style = StyleSheet.create({
    container: {
        marginTop: 65,
        flex: 1
    },
    image:{
        height: 350
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    }
});

class Dashboard  extends React.Component {
    makeBackground(btn){
        var obj = {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1
        };
        if(btn === 0){
            obj.backgroundColor = '#58B9BC';
        } else if (btn === 1){
            obj.backgroundColor = '#DE4D3A';
        } else {
            obj.backgroundColor = '#FCD36E';
        }
        return obj;
    }
    goToProfile(){
        this.props.navigator.push({
            title: 'Profile Page',
            component: Profile,
            passProps: {userInfo: this.props.userInfo}
        })
    }
    goToRepos(){
        api.getRepo(this.props.userInfo.login).then((res) => {
            this.props.navigator.push({
                title: 'Repo Page',
                component: Repositories,
                passProps: {
                    userInfo: this.props.userInfo,
                    repos: res
                }
            })
        });
    }
    goToNotes(){
        api.getNotes(this.props.userInfo.login).then((res) => {
            res = res || {};
            this.props.navigator.push({
                title: 'Notes',
                component: Notes,
                passProps: {
                    notes: res,
                    userInfo: this.props.userInfo
                }
            });
        });
    }
    render() {
        return (
            <View style={style.container}>
                <Image source={{uri: this.props.userInfo.avatar_url}} style={style.image}/>
                <TouchableHighlight
                    style={this.makeBackground(0)}
                    onPress={this.goToProfile.bind(this)}
                    underlayColor='#88D4F5'>
                    <Text style={style.buttonText}> View Profile </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(1)}
                    onPress={this.goToRepos.bind(this)}
                    underlayColor='#88D4F5'>
                    <Text style={style.buttonText}> View Repos </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(2)}
                    onPress={this.goToNotes.bind(this)}
                    underlayColor='#88D4F5'>
                    <Text style={style.buttonText}> View Notes </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

module.exports = Dashboard;