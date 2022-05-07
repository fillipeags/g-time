import { Link } from 'react-router-dom';
import SideBarMenu from '../SideBarMenu';

import {
  Container,
  OptionContainer,
  MenuItem,
  Content,
  MenuContainer,
  Wrapper,
} from './styles';

const MobileSideBar = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <nav>
            <MenuContainer>
              {SideBarMenu.map(item => {
                return (
                  <MenuItem key={item.path}>
                    <Link to={item.path}>
                      <OptionContainer>{item.icon}</OptionContainer>
                    </Link>
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
