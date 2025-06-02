import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import type { TableContents } from "../routes/context/TableContentsContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export function MyTable({
  tableContents,
  setTableEntry,
}: {
  tableContents: TableContents;
  setTableEntry: (args: {
    entryID: number;
    entryKey: string;
    entryValue: string | number;
  }) => void;
}) {
  return (
    <TableContainer>
      <Table size="small" sx={{ backgroundColor: "white" }}>
        <TableHead>
          <TableRow key="head" sx={{ backgroundColor: "#bdbdbd" }}>
            <TableCell variant="head">First Name</TableCell>
            <TableCell variant="head">Last Name</TableCell>
            <TableCell variant="head">Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(tableContents).map(([id, entry]) => (
            <TableRow key={id}>
              <TableCell>
                <TextField
                  value={entry.firstName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setTableEntry({
                      entryID: parseInt(id),
                      entryKey: "firstName",
                      entryValue: event.target.value,
                    });
                  }}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  value={entry.lastName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setTableEntry({
                      entryID: parseInt(id),
                      entryKey: "lastName",
                      entryValue: event.target.value,
                    });
                  }}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={() =>
                    setTableEntry({
                      entryID: parseInt(id),
                      entryKey: "count",
                      entryValue: entry.count + 1,
                    })
                  }
                >
                  <AddIcon />
                </IconButton>
                {entry.count}
                <IconButton
                  onClick={() =>
                    setTableEntry({
                      entryID: parseInt(id),
                      entryKey: "count",
                      entryValue: entry.count - 1,
                    })
                  }
                >
                  <RemoveIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
