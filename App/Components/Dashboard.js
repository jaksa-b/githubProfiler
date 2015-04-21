var React = require('react-native');


var {
    Text,
    View,
    StyleSheet
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
    render() {
        return (
            <View style={style.container}>
                <Text>This is dashboard</Text>
                <Text> {this.props.userInfo} </Text>
            </View>
        )
    }
}

module.exports = Dashboard;