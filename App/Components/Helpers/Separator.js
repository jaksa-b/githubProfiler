var React = require('react-native');

var {
    View,
    StyleSheet

} = React;

var style = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: '#E4E4E4',
        flex: 1,
        marginLeft: 15
    }
});

class Separator extends React.Component{
    render(){
        return(
            <View style={style.separator}/>
        )
    }
}
module.exports = Separator;