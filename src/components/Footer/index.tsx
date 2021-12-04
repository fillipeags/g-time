import styled from 'styled-components';

const FooterContent = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Footer: React.FC = () => {
  return (
    <FooterContent>
      <p>
        <strong>GET IN TOUCH</strong> - mail@mail.com
      </p>
      <p>
        <strong>Data Provided By</strong> - RAWG API
      </p>
    </FooterContent>
  );
};

export default Footer;
