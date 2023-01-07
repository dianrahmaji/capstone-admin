import { CheckIcon, XIcon } from "@heroicons/react/solid";

import BaseButton from "~/components/generic/button/BaseButton";
import BaseForm from "~/components/generic/form/BaseForm";
import BaseModal from "~/components/generic/modal/BaseModal";
import BaseTextArea from "~/components/generic/form/BaseTextArea";

import { review } from "~/utils/validation";

function ResearchRespondModal({ open, setOpen }) {
  return (
    <BaseModal title="Respon Pengajuan" open={open} setOpen={setOpen}>
      <BaseForm validation={{ review }} initialValues={{ review: "" }}>
        <BaseTextArea label="Review" name="review" />
        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-3 sm:gap-3">
          <BaseButton className="inline-flex w-full justify-center rounded-md border border-transparent shadow-sm focus:outline-none sm:text-sm">
            <CheckIcon className="mr-2 h-5 w-5" />
            Terima
          </BaseButton>
          <BaseButton className="inline-flex w-full justify-center rounded-md border border-transparent shadow-sm focus:outline-none sm:col-start-2 sm:text-sm">
            <XIcon className="mr-2 h-5 w-5" />
            Tolak
          </BaseButton>
          <BaseButton
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md border shadow-sm sm:mt-0 sm:text-sm"
            secondary
            onClick={() => setOpen(false)}
          >
            Batal
          </BaseButton>
        </div>
      </BaseForm>
    </BaseModal>
  );
}

export default ResearchRespondModal;
