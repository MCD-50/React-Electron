import React from 'react';
import { render } from 'react-dom';
import { createHashHistory } from 'history';
import { Router } from 'react-router-dom'

import routes from './route/';
import injectTapEventPlugin from 'react-tap-event-plugin';

window.onload = () => {
	injectTapEventPlugin();
	render(
		<Router history={createHashHistory()}>
			{routes}
		</Router>,
		document.getElementById('app'))
}
