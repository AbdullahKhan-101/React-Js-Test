import React from "react";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "name",
    headerName: "Name",
    width: 170,
    editable: false,
  },
  {
    field: "progress",
    headerName: "Progress",
    width: 130,
    editable: false,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    // type: "number",
    width: 130,
    editable: false,
  },
  {
    field: "date",
    headerName: "Date",
    width: 130,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    name: "Visric PRO",
    progress: "30.5%",
    date: "5.Jan.2021",
    quantity: 2.458,
  },
  {
    id: 2,
    name: "Visric Free",
    progress: "20.2%",
    date: "12.Feb.2023",
    quantity: 1.458,
  },
  {
    id: 3,
    name: "Weekly Update",
    progress: "18.5%",
    date: "1.Mar.2020",
    quantity: 1.024,
  },
  {
    id: 4,
    name: "Venus 3D Asset",
    progress: "40.1%",
    date: "3.Jun.2021",
    quantity: 258,
  },
  {
    id: 5,
    name: "Marketplace",
    progress: "10.3%",
    date: "10.Sep.2021",
    quantity: 858,
  },
];

const CheckTable = () => {
  return (
    <div className="flex-1 custom_scroll rounded-2xl overflow-x-auto sm:p-6 p-4 dark:bg-dark_primary bg-white transition">
      <div className="flex justify-between gap-2 items-center mb-2">
        <h2 className="text-[26px] dark:text-white text-primary transition font-semibold ">
          Check Table
        </h2>
        <div className="dark:bg-dark_light_bg transition rounded-xl flex items-center justify-center w-10 h-10 bg-light_bg text-primary dark:text-white">
          <MoreHorizSharpIcon />
        </div>
      </div>
      <Box
        className="!text-white !border-none !outline-none "
        sx={{ height: 400, width: "100%" }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default CheckTable;
