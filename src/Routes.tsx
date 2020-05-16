import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
	Feed as FeedView,
	NotFound as NotFoundView,
	GroupTable as GroupTableView,
	UserPrediction as UserPredictionView,
	SignIn as SignInView,
	SignUp as SignUpView,
	CreateGroup as CreateGroupView,
} from './views';

const Routes = () => {
	return (
		<Switch>
			<Redirect exact from='/' to='/feed' />
			<RouteWithLayout component={FeedView} layout={MainLayout} path='/feed' />
			<RouteWithLayout
				component={GroupTableView}
				layout={MainLayout}
				path='/table/:groupId'
			/>
			<RouteWithLayout
				component={GroupTableView}
				layout={MainLayout}
				path='/table'
			/>
			<RouteWithLayout
				component={UserPredictionView}
				layout={MainLayout}
				path='/prediction/:predictionId'
			/>
			<RouteWithLayout
				component={NotFoundView}
				layout={MinimalLayout}
				path='/not-found'
			/>
			<RouteWithLayout
				component={SignInView}
				layout={MinimalLayout}
				path='/sign-in'
			/>
			<RouteWithLayout
				component={SignUpView}
				layout={MinimalLayout}
				path='/sign-up'
			/>
			<RouteWithLayout
				component={CreateGroupView}
				layout={MainLayout}
				path='/group/create'
			/>
			<Redirect to='/not-found' />
		</Switch>
	);
};

export default Routes;
