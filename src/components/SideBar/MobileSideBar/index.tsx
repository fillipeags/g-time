import { Link } from 'react-router-dom';
import SideBarMenu from '../SideBarMenu';

import {
  Container,
  OptionContainer,
  MenuItem,
  Content,
  MenuContainer,
} from './styles';

const MobileSideBar = () => {
  return (
    <Container>
      <Content>
        <nav>
          <MenuContainer>
            {SideBarMenu.map(item => {
              return (
                <MenuItem key={item.path}>
                  <Link to={item.path}>
                    <OptionContainer>
                      {item.icon}
                      <span>{item.title}</span>
                    </OptionContainer>
                  </Link>
                </MenuItem>
              );
            })}
          </MenuContainer>
        </nav>
      </Content>
    </Container>
  );
};

export default MobileSideBar;
