// https://codeburst.io/how-to-pure-css-pie-charts-w-css-variables-38287aea161e

import * as React from 'react';

import { Statistics } from 'store';
import styled, { css } from 'themes';
import { floor } from 'utils';

const SIZE = 150;
const SMALL_SIZE = 100;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px;
    margin-right: 3px;
    margin-bottom: 3px;

    background-color: #FFF;
`;

const ChampIcon = styled.img`
    position: absolute;
    border: 3px solid #FFF;
`;

type PieProps = {
    size: number
}
const Pie = styled.div<PieProps>`
    position: relative;

    width: ${p => p.size}px;
    height: ${p => p.size}px;
    border-radius: ${p => p.size}px;
    margin-bottom: 5px;

    background-color: gray;

    overflow: hidden;

    ${p => css`
        & ${ChampIcon} {
            top: ${(p.size - (p.size / 4 * 3)) / 2}px;
            left: ${(p.size - (p.size / 4 * 3)) / 2}px;
            width: ${(p.size / 4 * 3)}px;
            border-radius: ${(p.size / 4 * 3)}px;
        }
    `}
`;

type PiePieceProps = {
    weight: number
    offset?: number
}
const PiePiece = styled.div<PiePieceProps>`
    position: absolute;
    width: 100%;
    height: 100%;

    background-color: transparent;
    overflow: hidden;
    ${p => p.weight > 0.5 && css`
        background-color: ${p.color};
        overflow: visible;
    `}

    transform: translate(0, -50%) rotate(90deg) rotate(${p => ((p.offset || 0) * 360)}deg);
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

type WinAndLoseProps = {
    size: number
}
const WinAndLose = styled.div<WinAndLoseProps>`
    ${p => p.size < 150 && css`
        font-size: 0.875rem;
    `}
`;
const KDA = styled.div`
  
`;

type ChampBriefProps = Statistics & {
    icon: string
}
const ChampBrief = ({
  icon,
  win,
  lose,
  game,
  playRate,
  stats,
}: ChampBriefProps) => {
    const pieSize = floor((playRate < 0.5 ? playRate : 0.5)) * 100 + 100;
    return (
        <Container>
            <Pie size={pieSize}>
                <PiePiece color='crimson' weight={lose / game} />
                {/* <PiePiece color='cornflowerblue' weight={win / game} offset={lose / game} /> */}
                <ChampIcon src={icon} />
            </Pie>
            <WinAndLose size={pieSize}>
                {`${win}승 ${lose}패 (${floor(win / game * 100)}%)`}
            </WinAndLose>
            <KDA>
                {floor((stats.kills + stats.assists) / stats.deaths)}
            </KDA>
            <div style={{color: 'green'}}>
                {`${floor(playRate * 100)}%`}
            </div>
        </Container>
    );
};

export default ChampBrief;
