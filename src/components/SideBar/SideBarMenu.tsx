import { FiHome, FiSearch, FiFileText } from 'react-icons/fi';
import { IoGameControllerOutline } from 'react-icons/io5';

export interface SideBarMenuProps {
  title: string;
  path: string;
  icon: unknown;
}

const SideBarMenu: SideBarMenuProps[] = [
  {
    title: 'Home',
    path: '/',
    icon: <FiHome size={24} />,
  },
  {
    title: 'Search',
    path: '/search',
    icon: <FiSearch size={24} />,
  },
  {
    title: 'My Games',
    path: '/mygames',
    icon: <IoGameControllerOutline size={24} />,
  },
  {
    title: 'News',
    path: '/mygames',
    icon: <FiFileText size={24} />,
  },
];

export default SideBarMenu;
