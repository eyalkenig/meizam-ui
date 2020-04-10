import * as Yup from 'yup';
export default Yup.object({
	groupName: Yup.string()
		.required('Required')
		.min(4, 'Must contain at least 4 letters'),
	password: Yup.string().required('Required'),
});
