import React, { FC } from 'react';
import { Route } from 'react-router-dom';

interface Props {
	layout: FC<any>;
	component: FC<any>;
	path: string;
}

const RouteWithLayout: FC<Props> = props => {
	const { layout: Layout, component: Component, ...rest } = props;

	return (
		<Route
			{...rest}
			render={(matchProps: any) => (
				<Layout>
					<Component {...matchProps} />
				</Layout>
			)}
		/>
	);
};

export default RouteWithLayout;
