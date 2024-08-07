import { Box } from "@chakra-ui/react";
import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagination-large.module.css";

export default function PaginationLarge() {
  return (
    <Box
      pt="50px"
      display={{
        us: "none",
        smmd: "block",
      }}
    >
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={() => {
          console.log("Ho");
        }}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        pageClassName={styles.pageItem}
        pageLinkClassName={styles.pageLink}
        previousClassName={styles.previous}
        previousLinkClassName={styles.previous}
        nextClassName={styles.pageItem}
        nextLinkClassName={styles.pageLink}
        breakLinkClassName={styles.pageLink}
        disabledClassName={styles.disabled}
      />
    </Box>
  );
}
