
import React, { Component } from 'react';


const contextTypes = {
	// notes: React.PropTypes.array,
	// tasks: React.PropTypes.array,
};


class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {

	}

	componentWillUnmount() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				Home Page
			</div>
		)
	}
}

Home.contextTypes = contextTypes;
export default Home
