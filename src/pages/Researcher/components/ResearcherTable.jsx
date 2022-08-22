import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { CheckIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/outline";

import {
  fetchResearchers,
  approveResearcher,
  deleteResearcher,
} from "~/store/actions/researcherActions";

import BaseTable from "~/components/generic/table/BaseTable";
import BaseTableItem from "~/components/generic/table/BaseTableItem";
import ResearcherEditModal from "./ResearcherEditModal";

const header = ["Name", "Email", "Role", "Major", "Status", "Actions"];

function ResearcherTable() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedResearcher, setSelectedResearcher] = useState(null);

  const dispatch = useDispatch();

  const { data: researchers } = useSelector((state) => state.researchers);

  useEffect(() => {
    dispatch(fetchResearchers());
  }, [dispatch]);

  const handleApprove = (id) => {
    dispatch(approveResearcher(id));
  };
  const handleEdit = (r) => {
    setSelectedResearcher(r);
    setOpenDialog(true);
  };
  const handleDelete = (id) => {
    dispatch(deleteResearcher(id));
  };

  return (
    <>
      <BaseTable header={header}>
        {researchers?.map((r) => (
          <tr key={r._id}>
            <BaseTableItem className="font-medium text-gray-900">
              {r.fullName}
            </BaseTableItem>
            <BaseTableItem>{r.email}</BaseTableItem>
            <BaseTableItem>{r.accountType}</BaseTableItem>
            <BaseTableItem>{r.major}</BaseTableItem>
            <BaseTableItem>
              <span
                className={clsx(
                  "inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ",
                  {
                    "bg-green-100 text-green-800": r.isApproved,
                    "bg-red-100 text-red-800": !r.isApproved,
                  },
                )}
              >
                {r.isApproved ? "active" : "inactive"}
              </span>
            </BaseTableItem>
            <BaseTableItem className="relative flex gap-2">
              {!r.isApproved && (
                <CheckIcon
                  className="h-6 w-6 rounded-md text-gray-400 hover:cursor-pointer hover:text-green-700"
                  onClick={() => handleApprove(r._id)}
                />
              )}
              <PencilAltIcon
                className="h-6 w-6 rounded-md text-gray-400 hover:cursor-pointer hover:text-blue-700"
                onClick={() => handleEdit(r)}
              />
              <TrashIcon
                className="h-6 w-6 rounded-md text-gray-400 hover:cursor-pointer hover:text-red-700"
                onClick={() => handleDelete(r._id)}
              />
            </BaseTableItem>
          </tr>
        ))}
      </BaseTable>
      <ResearcherEditModal
        open={openDialog}
        setOpen={setOpenDialog}
        initialValues={selectedResearcher}
      />
    </>
  );
}

export default ResearcherTable;
