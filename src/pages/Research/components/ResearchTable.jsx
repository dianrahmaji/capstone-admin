import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import {
  CheckIcon,
  ExternalLinkIcon,
  PencilAltIcon,
  XIcon,
  TrashIcon
} from '@heroicons/react/outline'

import {
  repositoryList,
  respondRepository
} from '~/store/actions/repositoryActions'

import BaseTable from '~/components/generic/table/BaseTable'
import BaseTableItem from '~/components/generic/table/BaseTableItem'
import ResearchEditModal from './ResearchEditModal'

const header = ['Title', 'Status', 'Actions']

const ResearchTable = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedResearch, setSelectedResearch] = useState(null)

  const dispatch = useDispatch()

  const { repositories } = useSelector(state => state.repositoryList)

  useEffect(() => {
    dispatch(repositoryList())
  }, [dispatch])

  const handleEdit = r => {
    setSelectedResearch(r)
    setOpenDialog(true)
  }

  const handleApprove = (id, approve) => {
    dispatch(respondRepository({ id, approve }))
  }

  return (
    <Fragment>
      <BaseTable header={header}>
        {repositories &&
          repositories.map(r => (
            <tr key={r._id}>
              <BaseTableItem>{r.name}</BaseTableItem>
              <BaseTableItem>
                <span
                  className={clsx(
                    'inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ',
                    {
                      'bg-blue-100 text-blue-800': r.status === 'pending',
                      'bg-yellow-100 text-yellow-800': r.status === 'updated',
                      'bg-green-100 text-green-800': r.status === 'accepted',
                      'bg-red-100 text-red-800': r.status === 'rejected'
                    }
                  )}
                >
                  {r.status}
                </span>
              </BaseTableItem>
              <BaseTableItem className="relative flex gap-2">
                {r.status !== 'accepted' && (
                  <Fragment>
                    <CheckIcon
                      className="h-6 w-6 text-gray-400 rounded-md hover:cursor-pointer hover:text-green-700"
                      onClick={() => handleApprove(r._id, true)}
                    />
                    <XIcon
                      className="h-6 w-6 text-gray-400 rounded-md hover:cursor-pointer hover:text-red-700"
                      onClick={() => handleApprove(r._id, false)}
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
                <Link to={`${r._id}`}>
                  <ExternalLinkIcon className="h-6 w-6 text-gray-400 rounded-md hover:cursor-pointer hover:text-gray-700" />
                </Link>
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
