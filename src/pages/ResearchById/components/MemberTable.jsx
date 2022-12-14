import BaseTable from "~/components/generic/table/BaseTable";
import BaseTableItem from "~/components/generic/table/BaseTableItem";

const header = ["Name", "Faculty", "Type", "Role"];
const members = [
  {
    _id: 1,
    name: "Dian Rahmaji",
    faculty: "Engineering",
    type: "Student",
    role: "Backend Engineer",
  },
  {
    _id: 2,
    name: "Dzakiy Harissalam",
    faculty: "Engineering",
    type: "Student",
    role: "Frontend Engineer",
  },
];

function MemberTable() {
  return (
    <>
      <h2 className="mt-3 text-xl font-medium">Research Member</h2>
      <BaseTable header={header} loading={false} empty={members.length === 0}>
        {members &&
          members.map((m) => (
            <tr key={m._id}>
              <BaseTableItem>{m.name}</BaseTableItem>
              <BaseTableItem>{m.faculty}</BaseTableItem>
              <BaseTableItem>{m.type}</BaseTableItem>
              <BaseTableItem>{m.role}</BaseTableItem>
            </tr>
          ))}
      </BaseTable>
    </>
  );
}

export default MemberTable;
