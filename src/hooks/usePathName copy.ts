import { useState } from 'react';

const useIsExpanded = (): any => {
  const sideBarCollapsed = localStorage.getItem('sidebar-collapsed');

  const [isExpanded, setIsExpanded] = useState(!sideBarCollapsed);

  return [isExpanded, setIsExpanded];
};

export default useIsExpanded;
