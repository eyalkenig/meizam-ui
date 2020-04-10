import * as Yup from 'yup';
export default Yup.object({
	groupName: Yup.string()
		.required('Required')
		.min(3, 'Must contain at least 3 letters'),
	password: Yup.string().when('isPublic', {
		is: isPublic => !isPublic,
		then: Yup.string().required('Required'),
	}),
});
