import React from 'react';
import styled, {css} from 'styled-components';

import {getImagePath as img} from 'assets';
import {withProps} from 'lib';

import ChmapBrief from './_champBrief';
import ChampStats from './_champStats';

const Container = styled.div`
`;

const Section = styled.div`
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  flex-wrap: wrap;
`;

const StatisticsView = ({data, entry}) => (
  <Container>
    {data.map(([title, d], i) => d.length > 0 &&
      <Section key={i}>
        <h3>{title}</h3>
        <Row>
          {d.map(({championId, ...d}) =>
            <ChmapBrief
                key={championId}
                icon={img('champion', championId)}
                {...d}
                />
          )}
        </Row>
      </Section>
    )}
  </Container>
);

const Statistics = withProps(({data}) => {
  if(data.length === 0) {
    return {data: []};
  }

  if(
    data[0].playRate >= 0.5 ||
    (data[0].playRate >= 0.4 && data[1].playRate < 0.3)
  ) {
    return {
      data: [
        ['모스트 1', data.slice(0,1)],
        ['나머지', data.slice(1)]
      ]
    }
  }

  if(data[0].playRate + data[0].playRate >= 0.7) {
    return {
      data: [
        ['모스트 2', data.slice(0,2)],
        ['나머지', data.slice(2)]
      ]
    }
  }

  if(data.length < 6) {
    return {
      data: [
        [null, data]
      ]
    };
  }

  if(data.length < 15) {
    return {
      data: [
        ['모스트 3', data.slice(0,3)],
        ['나머지', data.slice(3)]
      ]
    }
  }

  if(data.length < 50) {
    return {
      data: [
        ['모스트 5', data.slice(0,5)],
        ['5회 이상 플레이', data.slice(5).filter(d => d.game >= 5)],
        ['나머지', data.slice(5).filter(d => d.game < 5)],
      ]
    }
  }

  return {
    data: [
      ['모스트 5', data.slice(0,5)],
      ['10회 이상 플레이', data.slice(5).filter(d => d.game >= 10)],
      ['5회 이상 플레이', data.slice(5).filter(d => d.game < 10 && d.game >= 5)],
      ['나머지', data.slice(5).filter(d => d.game < 5)],
    ]
  }

})(StatisticsView);

export default Statistics;
