var Counter = React.createClass({
	getDefaultProps: function() {
		console.log('getDefaultProps');
	},

	getInitialState: function() {
		console.log('getInitialState');
		return {
			counter: 0
		};
	},

	componentWillMount: function() {
		console.log('componentWillMount');
	},

	componentDidMount: function() {
		console.log('componentDidMount');
	},

	componentWillReceiveProps: function(nextProps) {
		console.log('componentWillReceiveProps');
	},

	shouldComponentUpdate: function(nextProps, nextState) {
		console.log('shouldComponentUpdate');
		return true;
	},

	componentWillUpdate: function(nextProps, nextState) {
		console.log('componentWillUpdate');
	},

	componentDidUpdate: function(nextProps, nextState) {
		console.log('componentDidUpdate');
	},

	componentWillUnmount: function() {
		console.log('componentWillUnmount');
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
		console.log('render');
		return React.createElement('div', {},
					React.createElement('button', {onClick: this.increment}, '+'),
					React.createElement('button', {onClick: this.decrement}, '-'),
					React.createElement('span', {}, 'Counter value: ' + this.state.counter),
				);
	}
});

var element = React.createElement('div', {},
	React.createElement(Counter),
	React.createElement(Counter),
	React.createElement(Counter));
ReactDOM.render(element, document.getElementById('app'));