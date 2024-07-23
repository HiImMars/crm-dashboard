import keyIcon from "../../assets/icons/key-square.svg";
import squareIcon from "../../assets/icons/3d-square.svg";
import userIcon from "../../assets/icons/user-square.svg";
import walletIcon from "../../assets/icons/wallet-money.svg";
import promoteIcon from "../../assets/icons/promote.svg";
import helpIcon from "../../assets/icons/message-question.svg";
import { PATHNAMES } from "../../constants/routes";

export const SIDEBAR_ITEMS = [
  {
    id: "1",
    title: "Dashboard",
    link: PATHNAMES.HOME,
    icon: keyIcon,
  },
  {
    id: "2",
    title: "Product",
    link: PATHNAMES.PRODUCT,
    icon: squareIcon,
  },
  {
    id: "3",
    title: "Customers",
    link: PATHNAMES.CUSTOMERS,
    icon: userIcon,
  },
  {
    id: "4",
    title: "Income",
    link: PATHNAMES.INCOME,
    icon: walletIcon,
  },
  {
    id: "5",
    title: "Promote",
    link: PATHNAMES.PROMOTE,
    icon: promoteIcon,
  },
  {
    id: "6",
    title: "Help",
    link: PATHNAMES.HELP,
    icon: helpIcon,
  },
];
