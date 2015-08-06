/** @jsx React.DOM */

var drinks = [
	{liquor: 'vodka', drinks: ['screwdriver', 'mojito']},
	{liquor: 'gin', drinks: ['corpse reviver #2', 'gin & tonic']},
	{liquor: 'rum', drinks: ['rum & coke', 'rum & coke']},
	{liquor: 'tequila', drinks: ['margarita', 'straight']}
];

var DrinkList = React.createClass({
  render: function() {
  	var listData = this.props.data.map(function(item) {
    	return <LiquorList liquorName={item.liquor} drinkNames={item.drinks}></LiquorList>;
  	});
	  return <ul>{listData}</ul>;
  }
});

var LiquorList = React.createClass({
  render: function() {
		var listItems = this.props.drinkNames.map(function(name) {
			return (<li>{name}</li>);
		});
    return <span><h3>{this.props.liquorName}</h3><ul>{listItems}</ul></span>;
  }
});

React.render(
  <DrinkList data={drinks} />, document.body
);
