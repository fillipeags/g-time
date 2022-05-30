import styled from 'styled-components';

const FooterContent = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 100px;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Footer = () => {
  return (
    <FooterContent>
      <p>
        <strong>GET IN TOUCH</strong> -
        <a href="fillipe484@gmail.com"> fillipe484@gmail.com</a>
      </p>
      <p>
        <strong>All Data Provided By</strong> -
        <a href="https://rawg.io/apidocs" target="_blank" rel="noreferrer">
          RAWG API
        </a>
      </p>
    </FooterContent>
  );
};

export default Footer;
