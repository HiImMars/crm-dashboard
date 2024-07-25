import { forwardRef } from "react";
import cn from "classnames";
import css from "./CustomersTable.module.css";

interface Props {
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: string;
}

export const MobileCustomersListItem = forwardRef<HTMLDivElement, Props>(
  ({ name, company, phone, email, country, status }, ref) => (
    <div className={css.mobile_table_list_wrapper} ref={ref}>
      <div className={css.mobile_table_list_item_wrapper}>
        <div className={css.table_list_item}>{name}</div>
        <div className={css.table_list_item}>{company}</div>
      </div>

      <div>
        <div className={css.table_list_item}>{phone}</div>
        <div className={cn(css.table_list_item, css.table_list_email)}>
          {email}
        </div>
      </div>

      <div className={css.mobile_table_list_item_wrapper}>
        <div className={css.table_list_item}>{country}</div>
        <div className={css.table_list_item}>
          <span
            className={cn(css.status, {
              [css.active]: status === "Active",
              [css.inactive]: status !== "Active",
            })}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  )
);
