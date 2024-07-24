import css from "./Customers.module.css";
import { CustomersTable } from "../../components/CustomersTable";

const Customers = () => {
  return (
    <div className={css.customers_container}>
      <h2 className={css.title}>Hello Evano 👋🏼,</h2>
      <CustomersTable />
    </div>
  );
};

export default Customers;
