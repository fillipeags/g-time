import { Container, Content, ActionContainer, Button } from './styles';

interface ISmallCardDetailsProps {
  id: string;
}

const SmallCardDetails = ({ id }: ISmallCardDetailsProps) => {
  return (
    <Container id={id}>
      <Content>
        <ActionContainer>
          <Button>See More</Button>
          <Button>Add To My Games</Button>
        </ActionContainer>
      </Content>
    </Container>
  );
};

export default SmallCardDetails;
