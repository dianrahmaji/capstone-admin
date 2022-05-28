import { Form, Formik } from 'formik'
import * as Yup from 'yup'

const BaseForm = ({ initialValues, validation, handleSubmit, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object(validation)}
      onSubmit={handleSubmit}
    >
      <Form>{children}</Form>
    </Formik>
  )
}

export default BaseForm
