import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import css from "./Sidebar.module.css";
import logo from "../../assets/images/logo.png";
import { Avatar } from "./Avatar";
import { SIDEBAR_ITEMS } from "./constants";
import { SidebarItem } from "./SidebarItem";
import { FC } from "react";

interface Props {
  setIsOpen?: (isOpen: boolean) => void;
}

export const Sidebar: FC<Props> = ({ setIsOpen }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const itemsRefs = useRef<(HTMLLIElement | null)[]>([]);

  useGSAP(
    () => {
      const items = itemsRefs.current;
      gsap.fromTo(
        items,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "power2.out",
          duration: 0.5,
        }
      );
    },
    { scope: sidebarRef }
  );

  return (
    <aside className={css.sidebarWrapper} ref={sidebarRef}>
      <div className={css.sidebarLogo_wrapper}>
        <img src={logo} alt="logo" className={css.sidebarLogo} />
        <ul className={css.sidebarList}>
          {SIDEBAR_ITEMS.map((item, index) => (
            <SidebarItem
              key={item.id}
              {...item}
              setIsOpen={setIsOpen}
              ref={(el) => (itemsRefs.current[index] = el)}
            />
          ))}
        </ul>
      </div>
      <Avatar />
    </aside>
  );
};

export default Sidebar;
