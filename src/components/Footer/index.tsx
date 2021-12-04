import styled from 'styled-components';

const FooterContent = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Footer: React.FC = () => {
  return (
    <FooterContent>
      <p>GET IN TOUCH - mail@mail.com</p>
      <p>Data Provided By - RAWG API</p>
    </FooterContent>
  );
};

export default Footer;
