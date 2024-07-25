import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LIST_HEADERS, LIST_ITEMS } from "./constants";
import css from "./CustomersTable.module.css";
import { Pagination } from "../Pagination";
import { CustomersListItem } from "./CustomersListItem";
import { MobileCustomersListItem } from "./MobileCustomersListItem";

const ITEMS_PER_PAGE = 8;

export const CustomersList = () => {
  const isMobileOrTabletScreen = useMediaQuery({ maxWidth: "1024px" });

  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(LIST_ITEMS.length / ITEMS_PER_PAGE);

  const currentItems = LIST_ITEMS.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const headerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.fromTo(
        headerRefs.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, ease: "power2.out", duration: 0.5 }
      );
      gsap.fromTo(
        itemRefs.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "power2.out",
          duration: 0.5,
          delay: 0.5,
        }
      );
    },
    { scope: itemRefs }
  );

  return (
    <>
      <div className={css.table_list}>
        <div className={css.table_list_header}>
          {LIST_HEADERS.map((header, index) => (
            <div
              key={index}
              className={css.table_list_header_item}
              ref={(el) => (headerRefs.current[index] = el)}
            >
              {header}
            </div>
          ))}
        </div>

        <div className={css.table_list_body}>
          {currentItems.map((item, index) => {
            return isMobileOrTabletScreen ? (
              <MobileCustomersListItem
                key={item.id}
                {...item}
                ref={(el) => (itemRefs.current[index] = el)}
              />
            ) : (
              <CustomersListItem
                key={item.id}
                {...item}
                ref={(el) => (itemRefs.current[index] = el)}
              />
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
          pageRangeDisplayed={isMobileOrTabletScreen ? 2 : 4}
          className={css.table_bottom_pagination}
        />
      </div>
    </>
  );
};
