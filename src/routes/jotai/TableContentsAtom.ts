import { atomWithImmer } from "jotai-immer";
import type { TableContents } from "../context/TableContentsContext";
import { atom } from "jotai";

export const tableContentsAtom = atomWithImmer<TableContents>({
  1: { firstName: "Zach", lastName: "Campbell", count: 1 },
  2: { firstName: "Mohan", lastName: "Rajendran", count: 2 },
  3: { firstName: "Doug", lastName: "Blacketer", count: 3 },
  4: { firstName: "Peter", lastName: "Wang", count: 4 },
  5: { firstName: "Logan", lastName: "Foster", count: 5 },
  6: { firstName: "Nickolas", lastName: "Whitman", count: 6 },
  7: { firstName: "Joe", lastName: "Schmoe", count: 7 },
});

export const editTableContentsAtom = atom(
  null,
  (
    get,
    set,
    properties: {
      entryID: number;
      entryKey: string;
      entryValue: string | number;
    }
  ) => {
    set(tableContentsAtom, (tableContents) => {
      tableContents[properties.entryID] = {
        ...tableContents[properties.entryID],
        [properties.entryKey]: properties.entryValue,
      };
    });
  }
);
