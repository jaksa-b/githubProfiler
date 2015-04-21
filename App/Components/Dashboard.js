var React = require('react-native');


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
        console.log('Go to Profile');
    }
    goToRepos(){
        console.log('Go to Repos');
    }
    goToNotes(){
        console.log('Go to Notes');
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