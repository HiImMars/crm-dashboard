import { useState } from "react";
import { LIST_HEADERS, LIST_ITEMS } from "./constants";
import css from "./CustomersTable.module.css";
import { Pagination } from "../Pagination";

export const CustomersList = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const pageCount = Math.ceil(LIST_ITEMS.length / itemsPerPage);

  // Отримуємо елементи для поточної сторінки
  const currentItems = LIST_ITEMS.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
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
          {currentItems.map((item) => (
            <div key={item.id} className={css.table_list_row}>
              <div className={css.table_list_item}>{item.name}</div>
              <div className={css.table_list_item}>{item.company}</div>
              <div className={css.table_list_item}>{item.phone}</div>
              <div className={css.table_list_item}>{item.email}</div>
              <div className={css.table_list_item}>{item.country}</div>
              <div className={css.table_list_item}>
                <span
                  className={`${css.status} ${
                    item.status === "Active" ? css.active : css.inactive
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>
          Showing data {(page - 1) * itemsPerPage + 1} to{" "}
          {page * itemsPerPage > LIST_ITEMS.length
            ? LIST_ITEMS.length
            : page * itemsPerPage}{" "}
          of {LIST_ITEMS.length} entries
        </p>
        <Pagination page={page} pageCount={pageCount} setPage={setPage} />
      </div>
    </>
  );
};
