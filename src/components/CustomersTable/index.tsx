import css from "./CustomersTable.module.css";
import { Search } from "../Search";
import { CustomersList } from "./CustomersList";

export const CustomersTable = () => {
  return (
    <div className={css.table_wrapper}>
      <div className={css.table_title_wrapper}>
        <div>
          <h3 className={css.table_title}>All Customers</h3>
          <span className={css.table_label}>Active Members</span>
        </div>
        <Search />
      </div>

      <CustomersList />
    </div>
  );
};
