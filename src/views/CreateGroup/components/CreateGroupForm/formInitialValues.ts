export const initialValues = {
	groupName: '',
	isPublic: true,
	password: '',
	createMonkey: true,
	allowGamePredictions: true,
	twoBeatsMode: true,
	uploadedImage: '',
};

interface SettingValue {
	title: string;
	explanationTitle: string;
	explanation: string;
	key: 'createMonkey' | 'allowGamePredictions' | 'twoBeatsMode';
}

export const settingValues: SettingValue[] = [
	{
		title: 'Create monkey prediction',
		explanationTitle:
			'Will add a "monkey" member into your group with a random prediction',
		explanation:
			'The monkey will compete as a regular member of your group. You can remove it anytime through the group admin panel.',
		key: 'createMonkey',
	},
	{
		title: 'Allow single game predictions',
		explanationTitle: 'Group members can predict game results ',
		explanation:
			'Group members will have the option to predict single-game results. Predictions can be updated until the game starts.',
		key: 'allowGamePredictions',
	},
	{
		title: 'Two beats mode ',
		explanationTitle:
			'Members can update their playoff predictions until the playoff starts',
		explanation:
			'Disabling this option means that once the tournament starts - no updates are allowed.',
		key: 'twoBeatsMode',
	},
];

export type CreateGroupFormValues = typeof initialValues;
