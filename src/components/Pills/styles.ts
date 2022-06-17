import styled from 'styled-components';

const PillContent = styled.span`
  display: inline-block;
  padding: 16px;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.gray[700]};

  text-transform: lowercase;
`;

export default PillContent;
