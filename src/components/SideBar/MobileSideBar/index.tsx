import { Link } from 'react-router-dom';
import usePathName from '../../../hooks/usePathName';
import SideBarMenu from '../SideBarMenu';

import { Container, MenuItem, Content, MenuContainer, Wrapper } from './styles';

const MobileSideBar = () => {
  const currentPath = usePathName();

  return (
    <Wrapper>
      <Container>
        <Content>
          <nav>
            <MenuContainer>
              {SideBarMenu.map(item => {
                return (
                  <MenuItem key={item.path} active={currentPath === item.path}>
                    <Link to={item.path}>{item.icon}</Link>
                  </MenuItem>
                );
              })}
            </MenuContainer>
          </nav>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default MobileSideBar;
