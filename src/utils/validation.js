import * as Yup from 'yup'

export const email = Yup.string()
  .email('Invalid email address')
  .required('Email is required')
export const password = Yup.string().required('Password is required')
