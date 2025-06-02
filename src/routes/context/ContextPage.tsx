import { Typography } from "@mui/material";
import { MyTable } from "../../components/table";
import { useTableContents } from "./TableContentsContext";

export default function Context() {
  const { tableContents, setTableContents } = useTableContents();

  function setTableEntry({
    entryID,
    entryKey,
    entryValue,
  }: {
    entryID: number;
    entryKey: string;
    entryValue: string | number;
  }) {
    setTableContents((prevContents) => ({
      ...prevContents,
      [entryID]: {
        ...prevContents[entryID],
        [entryKey]: entryValue,
      },
    }));
  }

  return (
    <>
      <Typography variant="h1">Hello! This is the Context example!</Typography>
      <MyTable tableContents={tableContents} setTableEntry={setTableEntry} />
    </>
  );
}
