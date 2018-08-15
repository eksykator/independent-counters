var Counter = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},


	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function() {
		return React.createElement('div', {},
					React.createElement('button', {onClick: this.increment}, '+'),
					React.createElement('button', {onClick: this.decrement}, '-'),
					React.createElement('span', {}, 'Counter value: ' + this.state.counter),
				);
	}
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));