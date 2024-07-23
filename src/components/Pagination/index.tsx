import { FC } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
// import PrevIcon from "../../assets/icons/prev-arrow.svg";
// import NextIcon from "../../assets/icons/next-arrow.svg";
import css from "./Pagination.module.css";

interface Props {
  className?: string;
  page: number;
  pageCount: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  setPage: (value: number) => void;
}

export const Pagination: FC<Props> = ({
  page,
  pageCount,
  pageRangeDisplayed = 5,
  marginPagesDisplayed = 3,
  setPage,
}) => {
  const currentPage = page - 1;

  const onPageChange: ReactPaginateProps["onPageChange"] = ({ selected }) =>
    setPage(selected + 1);

  return (
    <ReactPaginate
      containerClassName={css.pagination_container}
      pageClassName={css.page_classname}
      pageLinkClassName={css.page_link_classname}
      breakClassName={css.page_classname}
      breakLinkClassName={css.page_link_classname}
      //   activeClassName="default:opacity-100"
      //   activeLinkClassName="default:font-bold normal-nums"
      //   disabledClassName="!opacity-50"
      //   disabledLinkClassName="cursor-default"
      initialPage={currentPage}
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      onPageChange={onPageChange}
      previousLabel={"<PrevIcon />"}
      nextLabel={"<NextIcon />"}
    />
  );
};
