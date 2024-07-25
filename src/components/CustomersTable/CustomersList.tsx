import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { LIST_HEADERS, LIST_ITEMS } from "./constants";
import css from "./CustomersTable.module.css";
import { Pagination } from "../Pagination";
import { CustomersListItem } from "./CustomersListItem";
import { MobileCustomersListItem } from "./MobileCustomersListItem";

const ITEMS_PER_PAGE = 8;

export const CustomersList = () => {
  const isMobileOrTabletScreen = useMediaQuery({
    maxWidth: "1024px",
  });

  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(LIST_ITEMS.length / ITEMS_PER_PAGE);

  const currentItems = LIST_ITEMS.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <>
      <div className={css.table_list}>
        <div className={css.table_list_header}>
          {LIST_HEADERS.map((header, index) => (
            <div key={index} className={css.table_list_header_item}>
              {header}
            </div>
          ))}
        </div>

        <div className={css.table_list_body}>
          {currentItems.map((item) => {
            return isMobileOrTabletScreen ? (
              <MobileCustomersListItem key={item.id} {...item} />
            ) : (
              <CustomersListItem key={item.id} {...item} />
            );
          })}
        </div>
      </div>

      <div className={css.table_list_bottom}>
        <p className={css.table_bottom_entries}>
          Showing data {(page - 1) * ITEMS_PER_PAGE + 1} to{" "}
          {page * ITEMS_PER_PAGE > LIST_ITEMS.length
            ? LIST_ITEMS.length
            : page * ITEMS_PER_PAGE}{" "}
          of {LIST_ITEMS.length} entries
        </p>
        <Pagination
          page={page}
          pageCount={pageCount}
          setPage={setPage}
          className={css.table_bottom_pagination}
        />
      </div>
    </>
  );
};
