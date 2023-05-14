import * as Yup from 'yup';

const UserLoginSchema = Yup.object().shape({
  username: Yup.string()
    .required('* Kullanıcı adı gereklidir'),
  password: Yup.string()
    .required('* Şifre gereklidir')
});

export default UserLoginSchema;