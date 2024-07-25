import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import css from "./Customers.module.css";
import { CustomersTable } from "../../components/CustomersTable";

const Customers = () => {
  const titleRef = useRef(null);
  const tableRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        tableRef.current,
        { x: "100%", opacity: 0 },
        { x: 0, opacity: 1, ease: "power2.out", duration: 0.5 }
      );
    },
    { scope: tableRef }
  );

  return (
    <div className={css.customers_container}>
      <h2 className={css.title} ref={titleRef}>
        Hello Evano <span className={css.hand}>👋🏼</span>,
      </h2>
      <div className={css.table} ref={tableRef}>
        <CustomersTable />
      </div>
    </div>
  );
};

export default Customers;
