import React from 'react';
import styled, {css} from 'styled-components';

import {getImagePath as img} from 'assets';

import ChmapBrief from './_champBrief';
import ChampStats from './_champStats';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFF;

  padding: 30px 0;
  margin: 0 0 30px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;

  width: 560px;
  & > * {
    margin: 0 5px 15px;
  }
`;



const Statistics = ({data}) =>(
  <Container>
    <Row>
      {data.slice(0,3).map(s =>
        <ChmapBrief
            key={s.championId}
            win={s.win}
            lose={s.lose}
            game={s.game}
            stats={s.stats}
            icon={img('champion', s.championId)}
            />
      )}
    </Row>

    <Row>
      {data.slice(3).map(s =>
        <ChmapBrief
            key={s.championId}
            win={s.win}
            lose={s.lose}
            game={s.game}
            stats={s.stats}
            icon={img('champion', s.championId)}
            size='small'
            />
      )}
    </Row>
  </Container>
);

export default Statistics;
