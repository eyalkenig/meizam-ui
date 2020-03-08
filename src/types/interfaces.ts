import { ReactElement } from 'react';

export type PlainFunction<T = any> = (params?: T) => any;

export interface RouterMatch {
	params: any;
}

export interface Page {
	title: string;
	href: string;
	icon: ReactElement;
	absolutePath?: boolean;
}
