import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  AnnotationIcon,
  // CheckIcon,
  DownloadIcon,
  ExternalLinkIcon,
  // PencilAltIcon,
  ReplyIcon,
  // XIcon,
  // TrashIcon,
} from "@heroicons/react/outline";

import {
  // respondRepository,
  editRepository,
  // deleteRepository,
  fetchRepositories,
} from "~/store/actions/repositoryActions";

import BaseTable from "~/components/generic/table/BaseTable";
import BaseTableItem from "~/components/generic/table/BaseTableItem";
import ResearchEditModal from "./ResearchEditModal";
import ResearchRespondModal from "./ResearchRespondModal";
import ResearchReviewModal from "./ResearchReviewModal";

const header = ["Title", "Status", "Actions"];

function ResearchTable() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openRespondDialog, setOpenRespondDialog] = useState(false);
  const [openReviewDialog, setOpenReviewDialog] = useState(false);
  const [selectedResearch, setSelectedResearch] = useState(null);

  const dispatch = useDispatch();

  const { data: repositories, loading } = useSelector(
    (state) => state.repositories,
  );

  useEffect(() => {
    dispatch(fetchRepositories());
  }, [dispatch]);

  // const handleEdit = (r) => {
  //   const { repository, ...rest } = r;
  //   repository.startDate = repository.startDate.slice(0, 10);
  //   repository.endDate = repository.endDate.slice(0, 10);
  //   setSelectedResearch({ ...repository, ...rest });
  //   setOpenDialog(true);
  // };

  // const handleApprove = (id, approve) => {
  //   dispatch(respondRepository({ id, approve }));
  // };

  // const handleDelete = (id) => {
  //   dispatch(deleteRepository(id));
  // };

  const handleDownload = (link) => {
    window.open(link);
  };

  const handleRespond = (r) => {
    setSelectedResearch(r);
    setOpenRespondDialog(true);
  };

  const handleReview = (r) => {
    setSelectedResearch(r);
    setOpenReviewDialog(true);
  };

  const handleSubmit = ({ status, administrator, members, ...rest }) => {
    dispatch(editRepository(rest));
    setOpenDialog(false);
  };

  return (
    <>
      <BaseTable
        header={header}
        loading={loading}
        empty={repositories.length === 0}
      >
        {repositories &&
          repositories.map((r) => (
            <tr key={r._id}>
              <BaseTableItem>{r.name}</BaseTableItem>
              <BaseTableItem>
                <span
                  className={clsx(
                    "inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ",
                    {
                      "bg-blue-100 text-blue-800": r.status === "pending",
                      "bg-yellow-100 text-yellow-800": r.status === "updated",
                      "bg-green-100 text-green-800": r.status === "accepted",
                      "bg-red-100 text-red-800": r.status === "rejected",
                    },
                  )}
                >
                  {r.status}
                </span>
              </BaseTableItem>
              <BaseTableItem className="relative flex gap-2">
                {/* {r.status !== "accepted" && (
                  <>
                    <CheckIcon
                      className="h-6 w-6 rounded-md text-gray-400 hover:cursor-pointer hover:text-green-700"
                      onClick={() => handleApprove(r._id, true)}
                    />
                    <XIcon
                      className="h-6 w-6 rounded-md text-gray-400 hover:cursor-pointer hover:text-red-700"
                      onClick={() => handleApprove(r._id, false)}
                    />
                  </>
                )} */}
                {r.status === "accepted" || r.status === "rejected" ? (
                  <AnnotationIcon
                    className="h-6 w-6 rounded-md text-gray-400 hover:cursor-pointer hover:text-blue-700"
                    onClick={() => handleReview(r)}
                  />
                ) : (
                  <ReplyIcon
                    className="h-6 w-6 rounded-md text-gray-400 hover:cursor-pointer hover:text-blue-700"
                    onClick={() => handleRespond(r)}
                  />
                )}

                <DownloadIcon
                  className="h-6 w-6 rounded-md text-gray-400 hover:cursor-pointer hover:text-blue-700"
                  onClick={() => handleDownload(r.document)}
                />
                {/* <PencilAltIcon
                  className="h-6 w-6 rounded-md text-gray-400 hover:cursor-pointer hover:text-blue-700"
                  onClick={() => handleEdit(r)}
                />
                <TrashIcon
                  className="h-6 w-6 rounded-md text-gray-400 hover:cursor-pointer hover:text-red-700"
                  onClick={() => handleDelete(r._id)}
                /> */}
                <Link to={`${r._id}`}>
                  <ExternalLinkIcon className="h-6 w-6 rounded-md text-gray-400 hover:cursor-pointer hover:text-gray-700" />
                </Link>
              </BaseTableItem>
            </tr>
          ))}
      </BaseTable>
      <ResearchEditModal
        open={openDialog}
        setOpen={setOpenDialog}
        initialValues={selectedResearch}
        handleSubmit={handleSubmit}
      />
      <ResearchRespondModal
        open={openRespondDialog}
        setOpen={setOpenRespondDialog}
        selectedResearchId={selectedResearch?._id}
      />
      <ResearchReviewModal
        open={openReviewDialog}
        setOpen={setOpenReviewDialog}
        selectedResearch={selectedResearch}
      />
    </>
  );
}

export default ResearchTable;
