import { FC } from "react";
import cn from "classnames";
import { Sidebar } from ".";
import css from "./Sidebar.module.css";
import close from "../../assets//icons/close.svg";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileSidebar: FC<Props> = ({ isOpen, setIsOpen }) => {
  const onClose = () => setIsOpen(false);

  return (
    <div
      className={cn(css.mobile_sidebar_wrapper, {
        [css.mobile_sidebar_open]: isOpen,
        [css.mobile_sidebar_closed]: !isOpen,
      })}
    >
      <div className={css.mobile_sidebar_inner_container}>
        <button className={css.close_button} onClick={onClose}>
          <img src={close} alt="close" />
        </button>

        <Sidebar setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
