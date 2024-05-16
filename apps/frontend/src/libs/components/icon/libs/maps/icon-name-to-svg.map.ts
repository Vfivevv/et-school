import AddIcon from "~/assets/icons/add.svg?react";
import ArrowNext from "~/assets/icons/arrow-next.svg?react";
import BackIcon from "~/assets/icons/back.svg?react";
import BackArrowIcon from "~/assets/icons/back-arrow.svg?react";
import BurgerIcon from "~/assets/icons/burger.svg?react";
import Bus from "~/assets/icons/bus.svg?react";
import Car from "~/assets/icons/car.svg?react";
import CarDoor from "~/assets/icons/car-door.svg?react";
import Checked from "~/assets/icons/checked.svg?react";
import ClimateControl from "~/assets/icons/climate-control.svg?react";
import DeleteIcon from "~/assets/icons/delete.svg?react";
import EditIcon from "~/assets/icons/edit.svg?react";
import EyeIcon from "~/assets/icons/eye.svg?react";
import EyeOffIcon from "~/assets/icons/eye-off.svg?react";
import Facebook from "~/assets/icons/facebook.svg?react";
import FillChecked from "~/assets/icons/fill-checked.svg?react";
import Letter from "~/assets/icons/letter.svg?react";
import LinkedIn from "~/assets/icons/linkedin.svg?react";
import LockIcon from "~/assets/icons/lock.svg?react";
import LogOutIcon from "~/assets/icons/log-out.svg?react";
import Phone from "~/assets/icons/phone.svg?react";
import PlusIcon from "~/assets/icons/plus.svg?react";
import PlusOutlinedIcon from "~/assets/icons/plus-outlined.svg?react";
import SearchIcon from "~/assets/icons/search.svg?react";
import Trunk from "~/assets/icons/trunk.svg?react";
import Twitter from "~/assets/icons/twitter.svg?react";
import Wallet from "~/assets/icons/wallet.svg?react";
import { type IconName } from "~/libs/types/types.js";

const iconNameToSvg: Record<
	IconName,
	React.FC<React.SVGProps<SVGSVGElement>>
> = {
	add: AddIcon,
	arrowNext: ArrowNext,
	back: BackIcon,
	backArrow: BackArrowIcon,
	burger: BurgerIcon,
	bus: Bus,
	car: Car,
	carDoor: CarDoor,
	checked: Checked,
	climateControl: ClimateControl,
	delete: DeleteIcon,
	edit: EditIcon,
	eye: EyeIcon,
	eyeOff: EyeOffIcon,
	facebook: Facebook,
	fillChecked: FillChecked,
	letter: Letter,
	linkedin: LinkedIn,
	lock: LockIcon,
	logOut: LogOutIcon,
	phone: Phone,
	plus: PlusIcon,
	plusOutlined: PlusOutlinedIcon,
	search: SearchIcon,
	trunk: Trunk,
	twitter: Twitter,
	wallet: Wallet,
};

export { iconNameToSvg };
