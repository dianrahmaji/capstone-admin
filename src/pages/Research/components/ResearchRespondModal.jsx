import { useDispatch } from "react-redux";

import { approve, review } from "~/utils/validation";
import { respondRepository } from "~/store/actions/repositoryActions";

import BaseCheckbox from "~/components/generic/form/BaseCheckbox";
import BaseTextArea from "~/components/generic/form/BaseTextArea";
import FormModal from "~/components/FormModal";

const initialValues = {
  review: "",
  approve: false,
};

export default function ResearchRespondModal({
  open,
  setOpen,
  selectedResearchId,
}) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    dispatch(respondRepository({ id: selectedResearchId, ...values }));
    setOpen(false);
  };

  return (
    <FormModal
      validation={{ approve, review }}
      initialValues={initialValues}
      open={open}
      setOpen={setOpen}
      handleSubmit={handleSubmit}
      title="Respon Permohonan Repositori"
    >
      <BaseTextArea label="Review" name="review" />
      <BaseCheckbox label="Terima Permohonan" name="approve" />
    </FormModal>
  );
}
