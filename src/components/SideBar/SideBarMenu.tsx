import { ReactChild } from 'react';
import { FiHome, FiSearch, FiFileText } from 'react-icons/fi';
import { IoGameControllerOutline } from 'react-icons/io5';

interface SideBarMenuProps {
  title: string;
  path: string;
  icon: ReactChild;
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
    path: '/news',
    icon: <FiFileText size={24} />,
  },
];

export default SideBarMenu;
