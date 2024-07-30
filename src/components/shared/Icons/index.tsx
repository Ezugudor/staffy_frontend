import classNames from "classnames";
import { CSSProperties, FC } from "react";
import { BiShare } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import { CgOpenCollective, CgPlayListAdd, CgShare } from "react-icons/cg";
import { CiLock, CiShare1, CiShare2, CiUndo, CiUnlock } from "react-icons/ci";
import { FaCoins } from "react-icons/fa6";
import { FcShare } from "react-icons/fc";
import {
  GiAbstract039,
  GiBlackBelt,
  GiBoxingGlove,
  GiHumanPyramid,
  GiLifeBuoy,
  GiMeepleCircle,
  GiMeepleGroup,
  GiSoccerBall,
  GiTwoCoins,
} from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp, IoMdTime } from "react-icons/io";
import {
  IoBasketballOutline,
  IoBriefcaseOutline,
  IoCheckmarkCircleOutline,
  IoChevronBackOutline,
  IoClose,
  IoCloseCircleOutline,
  IoFootballOutline,
  IoHomeOutline,
  IoLockClosedOutline,
  IoOptionsOutline,
  IoPeopleCircleOutline,
  IoPersonCircleOutline,
  IoRemoveCircleOutline,
  IoSaveOutline,
  IoSearchOutline,
  IoShareOutline,
  IoTennisballOutline,
} from "react-icons/io5";
import {
  LiaComment,
  LiaDoorOpenSolid,
  LiaInfoCircleSolid,
  LiaShareAltSolid,
} from "react-icons/lia";
import { LuDoorOpen, LuSettings2 } from "react-icons/lu";
import { PiShare } from "react-icons/pi";

import styles from "./Icons.module.css";
import { RiRefreshLine } from "react-icons/ri";
import { FaThList } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { MdFormatListBulletedAdd } from "react-icons/md";

export enum IconType {
  POOL_ICON = "poolIcon",
  SOCCER_ICON = "SoccerIcon",
  TENNIS_ICON = "TennisIcon",
  BASKET_BALL_ICON = "BasketBallIcon",
  BOXING_ICON = "BoxingIcon",
  UCL_ICON = "UCLIcon",
  P2P_ICON = "P2PIcon",
  COIN_ICON = "CoinIcon",
  PERSON_ICON = "PersonIcon",
  PEOPLE_ICON = "PeopleIcon",
  CLOCK_ICON = "ClockIcon",
  PRIVATE_ICON = "PrivateIcon",
  PUBLIC_ICON = "PublicIcon",
  OPEN_ICON = "OpenIcon",
  JOIN_POOL_ICON = "JoinPoolIcon",
  FILTER_ICON = "FilterIcon",
  HOME_ICON = "HomeIcon",
  SEARCH_ICON = "SearchIcon",
  BACKBUTTON_ICON = "BackButtonIcon",
  DROPDOWN_CLOSED_ICON = "DropdownClosedIcon",
  DROPDOWN_OPENED_ICON = "DropdownOpenedIcon",
  COMMENT_ICON = "CommentIcon",
  MARKET_ICON = "MarketIcon",
  WINNER_ICON = "WinnerIcon",
  INFO_ICON = "InfoIcon",
  MONEY_BAG_ICON = "MoneyBagIcon",
  RESET_ICON = "ResetIcon",
  REMOVE_ICON = "RemoveIcon",
  CLOSE_ICON = "CloseIcon",
  SUCCESS_ICON = "SuccessIcon",
  SAVE_ICON = "SaveIcon",
  SUBMIT_ICON = "SubmitIcon",
}

interface IconProps {
  name: IconType;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const resolveIcon = (iconName: string) => {
  switch (iconName) {
    case IconType.POOL_ICON:
      return <GiAbstract039 />;

    case IconType.SOCCER_ICON:
      return <IoFootballOutline />;

    case IconType.TENNIS_ICON:
      return <IoTennisballOutline />;

    case IconType.BASKET_BALL_ICON:
      return <IoBasketballOutline />;

    case IconType.BOXING_ICON:
      return <GiBoxingGlove />;

    case IconType.UCL_ICON:
      return <GiBlackBelt />;

    case IconType.P2P_ICON:
      return <GiLifeBuoy />;

    case IconType.COIN_ICON:
      return <FaCoins />;

    case IconType.PERSON_ICON:
      return <IoPersonCircleOutline />;

    case IconType.PEOPLE_ICON:
      return <IoPeopleCircleOutline />;

    case IconType.CLOCK_ICON:
      return <IoMdTime />;

    case IconType.PRIVATE_ICON:
      return <CiLock />;

    case IconType.PUBLIC_ICON:
      return <CiUnlock />;
    // return <IoLockClosedOutline />;

    case IconType.OPEN_ICON:
      // return <RiRefreshLine />;
      return <LiaDoorOpenSolid />;

    case IconType.JOIN_POOL_ICON:
      return <CgPlayListAdd />;

    case IconType.FILTER_ICON:
      return <LuSettings2 />;

    case IconType.BACKBUTTON_ICON:
      return <IoChevronBackOutline />;

    case IconType.HOME_ICON:
      return <IoHomeOutline />;

    case IconType.SEARCH_ICON:
      return <IoSearchOutline />;

    case IconType.DROPDOWN_CLOSED_ICON:
      return <IoIosArrowDown />;

    case IconType.DROPDOWN_OPENED_ICON:
      return <IoIosArrowUp />;

    case IconType.COMMENT_ICON:
      return <LiaComment />;

    case IconType.MARKET_ICON:
      return <FaThList />;

    case IconType.WINNER_ICON:
      return <GoTrophy />;

    case IconType.INFO_ICON:
      return <LiaInfoCircleSolid />;

    case IconType.MONEY_BAG_ICON:
      return <IoBriefcaseOutline />;

    case IconType.RESET_ICON:
      return <CiUndo />;

    case IconType.REMOVE_ICON:
      return <IoRemoveCircleOutline />;

    case IconType.SAVE_ICON:
      return <IoSaveOutline />;

    case IconType.SUBMIT_ICON:
      return <MdFormatListBulletedAdd />;

    case IconType.CLOSE_ICON:
      return <IoClose />;
    // return <IoCloseCircleOutline />;

    case IconType.SUCCESS_ICON:
      return <IoCheckmarkCircleOutline />;

    default:
      <span>Icon placeholder</span>;
  }
};

export const Icon: FC<IconProps> = ({ name, className, style, onClick }) => {
  const getClass = () => {
    return classNames(styles.Wrapper, {
      [className || ""]: className,
    });
  };

  const handleClick = () => {
    onClick?.();
  };
  return (
    <span style={style} className={getClass()} onClick={handleClick}>
      {resolveIcon(name)}
    </span>
  );
};
