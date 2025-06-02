import React, { createContext, useContext, useState } from "react";

type TableContents = Record<number, number>;

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
  const [tableContents, setTableContents] = useState<TableContents>({});

  return (
    <TableContentsContext.Provider value={{ tableContents, setTableContents }}>
      {children}
    </TableContentsContext.Provider>
  );
};
