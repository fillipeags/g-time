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
        <strong>GET IN TOUCH</strong> -
        <a href="mailto:mail@mail.com">mail@mail.com</a>
      </p>
      <p>
        <strong>Data Provided By</strong> -
        <a href="https://rawg.io/apidocs" target="_blank" rel="noreferrer">
          RAWG API
        </a>
      </p>
    </FooterContent>
  );
};

export default Footer;
