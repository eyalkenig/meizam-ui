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
			'Will add a "monkey" member into your group with a random predictions',
		explanation:
			'The monkey will compete with you and your group members during the tournament and you can remove him through the group panel.',
		key: 'createMonkey',
	},
	{
		title: 'Allow single game predictions',
		explanationTitle: 'Group members can predict game results ',
		explanation:
			'If you choose this options group members will have the option to predict single game results. The members can update their predictions untill the game kick-off.',
		key: 'allowGamePredictions',
	},
	{
		title: 'Two beats mode ',
		explanationTitle:
			'During the groups stage the members can change their playoff predictions',
		explanation:
			'If you choose this options the members in your group will have the option to change their predictions during the groups stage (untill the final eight).',
		key: 'twoBeatsMode',
	},
];

export type CreateGroupFormValues = typeof initialValues;
