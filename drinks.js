/** @jsx React.DOM */

var drinks = [
	{vodka: ['screwdriver', 'majito']},
	{gin: ['corpse reviver #2', 'gin & tonic']},
	{rum: ['rum & coke', 'rum & coke']},
	{tequilla: ['margarita', 'straight']}
];

var LiquorList = React.createClass({
  render: function() {
    return <li>{this.props.drinkData}</li>;
  }
});

var DrinkList = React.createClass({
  render: function() {
  var listData = this.props.data.map(function(drink) {
    return <LiquorList drinkData={drink}></LiquorList>;
  });
	  return <ul>{listData}</ul>;
  }
});

var Drink = React.createClass({
  render: function() {
    return (
			<ul>
				{drinks.map(function(drink){
					return <li key={drink.id}>{drink.text} </li>;
		})}
	</ul>
);
}

React.render(
  <listData data={drinks} />, document.body
);
