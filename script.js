var Counter = React.createClass({
	getDefaultProps: function() {
		console.log('getDefaultProps - definiowanie domyślnych propsów dostępnych poprzez this.props');
	},

	getInitialState: function() {
		console.log('getInitialState - definiowanie prywatnych danych o obiekcie dostępnych z this.state');
		return {
			counter: 0
		};
	},

	componentWillMount: function() {
		console.log('componentWillMount - ostatni czas na optymalizacje przed wywołaniem this.render');
		console.log('componentWillMount - aktualizowanie stanu poprzez this.setState (jednak nie będzie to miało wpływu na this.render)');
	},

	componentDidMount: function() {
		console.log('componentDidMount - jest to etap, na którym można inicjalizować pobieranie danych z serwerów (np. AJAX)');
	},

	componentWillReceiveProps: function(nextProps) {
		console.log('componentWillReceiveProps - przykład: można ustawiać wewnętrzny stan objektu poprzez w zależoności od nowych propsów');
	},

	shouldComponentUpdate: function(nextProps, nextState) {
		console.log('shouldComponentUpdate - tu podejmujemy decyzję o konieczności aktualizowania wyświetlanych obiektów poprzez this.render');
		return true;
	},

	componentWillUpdate: function(nextProps, nextState) {
		console.log('componentWillUpdate - przeznaczenie jest analogiczne to componentWillMount jednak w procesie aktualizacji');
	},

	componentDidUpdate: function(nextProps, nextState) {
		console.log('componentDidUpdate - odpowiednik componentDidMount jednak w procesie aktualizacji');
	},

	componentWillUnmount: function() {
		console.log('componentWillUnmount - wykonywanie zadań sprzątających i czyszczących');
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