import React, { useState } from "react";
import "./pagination.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Paginate({ setPageNum }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handleChange = (e, v) => {
    setCurrentPage(v);
    setPageNum(v);
  };

  return (
    <Stack spacing={4} className="pagination">
      <Pagination
        count={20}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
}
