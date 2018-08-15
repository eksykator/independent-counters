var Counter = React.createClass({
	render: function() {
		return React.createElement('div', {},
					React.createElement('button', {}, '+'),
					React.createElement('button', {}, '-'),
					React.createElement('span', {}, 'Counter value: 0'),
				);
	}
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));