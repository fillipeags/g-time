/* eslint-disable prettier/prettier */
import { AiOutlineStar } from 'react-icons/ai';
import { FaPlaystation, FaSteam, FaXbox } from "react-icons/fa";
import { SiEpicgames } from 'react-icons/si';
import { useParams } from 'react-router-dom';
import { Rating } from '../../components/Cards/MediumCard/styles';
import Header from '../../components/Header';
import Pill from '../../components/Pills';
import {
  AlignContainer,
  BoxInfo,
  Container, Content,
  GridContent,
  LeftContent,
  RightContent
} from './styles';


const GameDetails = () => {
  const { id } = useParams();

  return (
    <Container>
      <Header />
      <Content>
        <GridContent>
          <LeftContent>
            <h1>Death Stranding Directors Cut</h1>
            <Rating>
              <h3>Rating 7.4</h3>
              <AiOutlineStar size={24} color="yellow" />
            </Rating>
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              tempora, commodi libero autem fugit mollitia aliquam corrupti eius
              ea labore odio dolorem ex iure cupiditate soluta nemo, provident
              impedit quaerat! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aut tempora, commodi libero autem fugit mollitia aliquam
              corrupti eius ea labore odio dolorem ex iure cupiditate soluta nemo,
              provident impedit quaerat!

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              tempora, commodi libero autem fugit mollitia aliquam corrupti eius
              ea labore odio dolorem ex iure cupiditate soluta nemo, provident
              impedit quaerat! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aut tempora, commodi libero autem fugit mollitia aliquam
              corrupti eius ea labore odio dolorem ex iure cupiditate soluta nemo,
              provident impedit quaerat!
            </p>

            <h2>Tags</h2>
            <Pill># action</Pill>
            <Pill># scary</Pill>
            <Pill># horror</Pill>
            <Pill># horror</Pill>
            <Pill># horror</Pill>
            <Pill># horror</Pill>

          </LeftContent>

          <RightContent>
            <h3>
              Average Playtime <span>80 Hours</span>
            </h3>
            <h3>
              Release Date <span>19 July 2019</span>
            </h3>

            <BoxInfo>
              <h3>Rating Age</h3>
              <p>18</p>
            </BoxInfo>
            <BoxInfo>
              <h3>Publisher</h3>
              <p>Square Enix</p>
            </BoxInfo>

            <BoxInfo>
              <h3>Genres</h3>
              <AlignContainer>
                <Pill>adventure</Pill>
                <Pill>horror</Pill>
                <Pill>shooting</Pill>
                <Pill>shooting</Pill>
              </AlignContainer>

            </BoxInfo>

            <h3>Where to buy</h3>
            <AlignContainer>
              <Pill><FaSteam size={32} /></Pill>
              <Pill><FaPlaystation size={32} /></Pill>
              <Pill><SiEpicgames size={32} /></Pill>
              <Pill><FaXbox size={32} /></Pill>
            </AlignContainer>

          </RightContent>
        </GridContent>

        <h2>Trailers and screenshots</h2>
        <div>
          <p>carrousel aqui</p>
        </div>
        <h2>System Requirements</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed
          nobis eaque cum unde rem facere odio laudantium, illum, nulla et
          deserunt dolor, placeat repellendus voluptate rerum commodi eius
          possimus!
        </p>

        <h2>Games Recomendation</h2>

      </Content>
    </Container>
  );
};

export default GameDetails;
