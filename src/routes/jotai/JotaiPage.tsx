import { Typography } from "@mui/material";
import { MyTable } from "../../components/table";
import { editTableContentsAtom, tableContentsAtom } from "./TableContentsAtom";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import type { TableContents } from "../context/TableContentsContext";

export default function Jotai() {
  const [tableContents, setTableContents] = useAtom(tableContentsAtom);
  // const tableContents = useAtomValue(tableContentsAtom);
  // const editTableContents = useSetAtom(editTableContentsAtom);

  // function setTableEntry({
  //   entryID,
  //   entryKey,
  //   entryValue,
  // }: {
  //   entryID: number;
  //   entryKey: string;
  //   entryValue: string | number;
  // }) {
  //   editTableContents({ entryID, entryKey, entryValue });
  // }

  const setTableEntry = ({
    entryID,
    entryKey,
    entryValue,
  }: {
    entryID: number;
    entryKey: string;
    entryValue: string | number;
  }) => {
    setTableContents((draft: TableContents) => {
      // Only update the specific entry
      if (draft[entryID]) {
        (draft[entryID] as any)[entryKey] = entryValue;
      }
    });
  };

  return (
    <>
      <Typography variant="h1">Hello! This is the Jotai example!</Typography>
      <MyTable tableContents={tableContents} setTableEntry={setTableEntry} />
    </>
  );
}
