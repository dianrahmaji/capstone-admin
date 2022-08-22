import BaseInput from "~/components/generic/form/BaseInput";
import BaseSelect from "~/components/generic/form/BaseSelect";
import FormModal from "~/components/FormModal";

import { fullName, email, accountType, major } from "~/utils/validation";

function ResearcherEditModal(props) {
  return (
    <FormModal
      title="Edit Researcher"
      validation={{ fullName, email, accountType, major }}
      handleSubmit={console.log}
      {...props}
    >
      <BaseInput label="Full Name" name="fullName" type="text" />
      <BaseInput label="Email" name="email" type="email" />
      <BaseInput label="Major" name="major" type="text" />
      <BaseSelect label="Account Type" name="accountType">
        <option value="lecturer">Lecturer</option>
        <option value="student">Student</option>
      </BaseSelect>
    </FormModal>
  );
}

export default ResearcherEditModal;
