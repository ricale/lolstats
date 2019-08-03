// https://codeburst.io/how-to-pure-css-pie-charts-w-css-variables-38287aea161e

import React from 'react';
import styled, {css} from 'styled-components';
import numeral from 'numeral';

import {formatted} from 'lib';

const SIZE = 150;
const SMALL_SIZE = 100;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChampIcon = styled.img`
  position: absolute;
  border: 3px solid #FFF;
`;

const Pie = styled.div`
  position: relative;

  width: ${p => p.size}px;
  height: ${p => p.size}px;
  border-radius: ${p => p.size}px;
  margin-bottom: 5px;

  background-color: gray;

  overflow: hidden;

  ${p => css`
    & ${ChampIcon} {
      top: ${(p.size - (p.size / 3 * 2)) / 2}px;
      left: ${(p.size - (p.size / 3 * 2)) / 2}px;
      width: ${(p.size / 3 * 2)}px;
      border-radius: ${(p.size / 3 * 2)}px;
    }
  `}
`;

const PiePiece = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: transparent;
  overflow: hidden;
  ${p => p.weight > 0.5 && css`
    background-color: ${p.color};
    overflow: visible;
  `}

  ${p => css`
    transform: translate(0, -50%) rotate(90deg) rotate(${((p.offset || 0) * 360)}deg);
  `}
  transform-origin: 50% 100%;

  :before {
    content: '';
    position: absolute;

    width: 100%;
    height: 100%;

    ${p => css`
      background-color: ${p.color};
      transform: translate(0, 100%) rotate(${(p.weight || 0) * 360}deg);
    `}
    transform-origin: 50% 0;
  }
`;

const WinAndLose = styled.div`
  ${p => p.size === 'small' && css`
    font-size: 0.875rem;
  `}
`;
const KDA = styled.div`
  
`;

const ChmapBrief = ({
  icon,
  size,
  win,
  lose,
  game,
  stats = {},
}) => (
  <Container>
    <Pie size={size === 'small' ? SMALL_SIZE : SIZE}>
      <PiePiece color='crimson' weight={lose / game} />
      <PiePiece color='cornflowerblue' weight={win / game} offset={lose / game} />
      <ChampIcon src={icon} />
    </Pie>
    <WinAndLose size={size}>
      {`${win}승 ${lose}패 (${Math.floor(win / game * 100)}%)`}
    </WinAndLose>
    <KDA>
      {numeral((stats.kills + stats.assists) / stats.deaths).format('0.00')}
    </KDA>
  </Container>
);

export default ChmapBrief;
