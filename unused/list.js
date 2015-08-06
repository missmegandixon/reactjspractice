/** @jsx React.DOM */

var colors = ["Red","Green","Blue","Yellow","Black","White","Orange"];

var ListItem = React.createClass({
  render: function() {
    return <li>{this.props.itemData}</li>;
  }
})
var List = React.createClass({
  render: function() {
    var listItems = this.props.data.map(function(item) {
      return <ListItem itemData={item}></ListItem>;
    });
    return <ol>{listItems}</ol>;
  }
});

React.render(
  <List data={colors} />, document.body
);
