import BaseButton from '~/components/generic/button/BaseButton'
import BaseForm from '~/components/generic/form/BaseForm'
import BaseInput from '~/components/generic/form/BaseInput'
import BaseModal from '~/components/generic/modal/BaseModal'
import BaseSelect from '~/components/generic/form/BaseSelect'

const FormModal = ({ title, open, setOpen, ...props }) => {
  return (
    <BaseModal title={title} open={open} setOpen={setOpen}>
      <BaseForm {...props} handleSubmit={console.log}>
        <BaseInput label="Full Name" name="fullName" type="text" />
        <BaseInput label="Email" name="email" type="email" />
        <BaseInput label="Major" name="major" type="text" />
        <BaseSelect label="Account Type" name="accountType">
          <option value="lecturer">Lecturer</option>
          <option value="student">Student</option>
        </BaseSelect>
        <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <BaseButton
            type="submit"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm focus:outline-none sm:col-start-2 sm:text-sm"
          >
            Simpan
          </BaseButton>
          <BaseButton
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border shadow-sm sm:mt-0 sm:col-start-1 sm:text-sm"
            secondary
            onClick={() => setOpen(false)}
          >
            Batal
          </BaseButton>
        </div>
      </BaseForm>
    </BaseModal>
  )
}

export default FormModal
