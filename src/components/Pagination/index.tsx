import { FC } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import prevIcon from "../../assets/icons/prev-arrow.svg";
import nextIcon from "../../assets/icons/next-arrow.svg";
import css from "./Pagination.module.css";

interface Props {
  className?: string;
  page: number;
  pageCount: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  setPage: (value: number) => void;
}

const PrevArrowIcon = () => (
  <img src={prevIcon} alt="left arrow" className={css.arrow_icon} />
);

const NextArrowIcon = () => (
  <img src={nextIcon} alt="right arrow" className={css.arrow_icon} />
);

export const Pagination: FC<Props> = ({
  page,
  pageCount,
  pageRangeDisplayed = 4,
  marginPagesDisplayed = 1,
  setPage,
}) => {
  const currentPage = page - 1;

  const onPageChange: ReactPaginateProps["onPageChange"] = ({ selected }) =>
    setPage(selected + 1);

  return (
    <ReactPaginate
      containerClassName={css.pagination_container}
      pageClassName={css.page_classname}
      breakClassName={css.page_classname}
      breakLinkClassName={css.page_link_classname}
      activeClassName={css.active_classname}
      activeLinkClassName={css.active_link_classname}
      disabledClassName={css.disabled_classname}
      disabledLinkClassName={css.disabled_link_classname}
      initialPage={currentPage}
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      onPageChange={onPageChange}
      previousLabel={<PrevArrowIcon />}
      nextLabel={<NextArrowIcon />}
    />
  );
};
