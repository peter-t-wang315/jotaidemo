import React, { createContext, useContext, useState } from "react";

export type TableEntry = {
  firstName: string;
  lastName: string;
  count: number;
};

export type TableContents = Record<number, TableEntry>;

interface TableContentsContextType {
  tableContents: TableContents;
  setTableContents: React.Dispatch<React.SetStateAction<TableContents>>;
}

const TableContentsContext = createContext<
  TableContentsContextType | undefined
>(undefined);

export const useTableContents = (): TableContentsContextType => {
  const context = useContext(TableContentsContext);
  if (!context) {
    throw new Error(
      "useTableContents must be used within a TableContentsProvider"
    );
  }
  return context;
};

// 👇 Using React.FC to avoid ReactNode manually
export const TableContentsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tableContents, setTableContents] = useState<TableContents>({
    1: { firstName: "Zach", lastName: "Campbell", count: 1 },
    2: { firstName: "Mohan", lastName: "Rajendran", count: 2 },
    3: { firstName: "Doug", lastName: "Blacketer", count: 3 },
    4: { firstName: "Peter", lastName: "Wang", count: 4 },
    5: { firstName: "Logan", lastName: "Foster", count: 5 },
    6: { firstName: "Nickolas", lastName: "Whitman", count: 6 },
    7: { firstName: "Joe", lastName: "Schmoe", count: 7 },
  });

  console.log("What: ", tableContents);
  return (
    <TableContentsContext.Provider value={{ tableContents, setTableContents }}>
      {children}
    </TableContentsContext.Provider>
  );
};
