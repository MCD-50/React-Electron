import React from 'react';
import { Route, Switch } from 'react-router-dom'

import App from '../components/app';
import Splash from '../components/splash';
import Home from '../components/home';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default (
	<MuiThemeProvider>
		<App>
			<Switch>
				<Route exact path="/" component={Splash} />
				<Route path="/home" component={Home} />
			</Switch>
		</App>
	</MuiThemeProvider>
);