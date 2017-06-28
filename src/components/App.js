import React from 'react';
import Header from './Header';
import axios from 'axios';

import ContestPreview from './ContestPreview';

class App extends React.Component {
	state = {
		pageHeader : 'Naming Contests',
		contests : []
	};

	componentDidMount(){
		axios.get('/api/contests')
		.then(resp => {
			this.setState({
				contests : resp.data.contests
			})
		})
		.catch(console.error);
	}

	render() {
		return (
			<div>
				<Header message={this.state.pageHeader}/>
				<div>
					{this.state.contests.map( contest => 
						<ContestPreview key={contest.id} {...contest} />	
					)}
				</div>
			</div>
		);
	}
}

export default App;