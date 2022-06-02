import { Fragment, useState } from 'react'
import clsx from 'clsx'
import {
  CheckIcon,
  ExternalLinkIcon,
  PencilAltIcon,
  XIcon,
  TrashIcon
} from '@heroicons/react/outline'

import BaseTable from '~/components/generic/table/BaseTable'
import BaseTableItem from '~/components/generic/table/BaseTableItem'
import ResearchEditModal from './ResearchEditModal'

const header = ['Title', 'Faculty', 'Status', 'Actions']
const research = [
  {
    _id: 1,
    title: 'Capstone Project',
    description: 'Best project ever',
    faculty: 'Engineering',
    approval: 'approved',
    status: 'active'
  }
]

const ResearchTable = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedResearch, setSelectedResearch] = useState(null)

  const handleEdit = r => {
    setSelectedResearch(r)
    setOpenDialog(true)
  }

  return (
    <Fragment>
      <BaseTable header={header}>
        {research &&
          research.map(r => (
            <tr key={r._id}>
              <BaseTableItem>{r.title}</BaseTableItem>
              <BaseTableItem>{r.faculty}</BaseTableItem>
              <BaseTableItem>
                <span
                  className={clsx(
                    'inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ',
                    {
                      'bg-green-100 text-blue-800':
                        r.approval === 'approved' && r.status === 'done',
                      'bg-green-100 text-green-800':
                        r.approval === 'approved' && r.status === 'active',
                      'bg-red-100 text-red-800': r.approval === 'rejected',
                      'bg-yellow-100 text-yellow-800': r.approval === 'updated'
                    }
                  )}
                >
                  {r.approval === 'approved' ? r.status : r.approval}
                </span>
              </BaseTableItem>
              <BaseTableItem className="relative flex gap-2">
                {r.approval !== 'approved' && (
                  <Fragment>
                    <CheckIcon
                      className="h-6 w-6 text-gray-400 rounded-md hover:cursor-pointer hover:text-green-700"
                      onClick={() => {}}
                    />
                    <XIcon
                      className="h-6 w-6 text-gray-400 rounded-md hover:cursor-pointer hover:text-red-700"
                      onClick={() => {}}
                    />
                  </Fragment>
                )}
                <PencilAltIcon
                  className="h-6 w-6 text-gray-400 rounded-md hover:cursor-pointer hover:text-blue-700"
                  onClick={() => handleEdit(r)}
                />
                <TrashIcon
                  className="h-6 w-6 text-gray-400 rounded-md hover:cursor-pointer hover:text-red-700"
                  onClick={() => {}}
                />
                <ExternalLinkIcon
                  className="h-6 w-6 text-gray-400 rounded-md hover:cursor-pointer hover:text-gray-700"
                  onClick={() => {}}
                />
              </BaseTableItem>
            </tr>
          ))}
      </BaseTable>
      <ResearchEditModal
        open={openDialog}
        setOpen={setOpenDialog}
        initialValues={selectedResearch}
      />
    </Fragment>
  )
}

export default ResearchTable
