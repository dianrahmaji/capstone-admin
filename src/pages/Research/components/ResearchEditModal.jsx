import BaseInput from "~/components/generic/form/BaseInput";
import FormModal from "~/components/FormModal";
import TextEditorInput from "~/components/TextEditorInput";

import { name, title, description, date } from "~/utils/validation";

function ResearchEditModal(props) {
  return (
    <FormModal
      title="Edit Research"
      validation={{ name, title, description, startDate: date, endDate: date }}
      {...props}
    >
      <BaseInput label="Team Name" name="name" type="text" />
      <BaseInput label="Repository Title" name="title" type="text" />
      <div className="grid grid-cols-2 gap-3">
        <BaseInput label="Start Date" name="startDate" type="date" />
        <BaseInput label="End Date" name="endDate" type="date" />
      </div>
      <TextEditorInput label="Description" name="description" />
    </FormModal>
  );
}

export default ResearchEditModal;
