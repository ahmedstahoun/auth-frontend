import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().min(3).required(),
  password: yup.string()
    .min(8)
    .matches(/[a-zA-Z]/, 'Must contain a letter')
    .matches(/\d/, 'Must contain a number')
    .matches(/[^a-zA-Z0-9]/, 'Must contain a special character')
    .required()
});

export const signInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
