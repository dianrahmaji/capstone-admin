import BaseInput from '~/components/generic/form/BaseInput'
import BaseTextArea from '~/components/generic/form/BaseTextArea'
import FormModal from '~/components/FormModal'

import { title, description, faculty } from '~/utils/validation'

const ResearchEditModal = props => {
  return (
    <FormModal
      title="Edit Research"
      validation={{ title, description, faculty }}
      handleSubmit={console.log}
      {...props}
    >
      <BaseInput label="Title" name="title" type="text" />
      <BaseInput label="Faculty" name="faculty" type="text" />
      <BaseTextArea label="Description" name="description" />
    </FormModal>
  )
}

export default ResearchEditModal
