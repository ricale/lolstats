import * as React from 'react';

import styled from 'themes';
import {getImagePath as img} from 'assets';

import { QUEUE_NAME } from 'consts';
import { Entry } from 'store';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    /*justify-content: center;*/
    align-items: center;

    width: 300px;
    padding: 20px;
    margin-right: 3px;

    /*box-shadow: 0 0 5px 5px #AAA;*/
`;

const TierImage = styled.img.attrs({alt: ''})`
    width: 100px;
`;

const Info = styled.div`
    margin-left: 5px;
`;
const Queue = styled.div`
    font-size: 0.75rem;
`;
const Rank = styled.div`
    margin-bottom: 5px;
    font-size: 1.125rem;
`;
const Record = styled.div`
`;

type TierProps = Entry
const Tier = ({
    queueType,
    tier,
    rank,
    wins,
    losses,
    leaguePoints
}: TierProps) => {
    return (
        <Container>
            <TierImage src={img('emblem', (tier || '').toLowerCase())} />
            <Info>
                <Queue>{QUEUE_NAME[queueType as keyof typeof QUEUE_NAME]}</Queue>
                <Rank>{`${tier} ${rank}`}</Rank>
                <Record>{`${leaguePoints}점 / ${wins}승 ${losses}패 (${Math.floor(wins / (wins + losses) * 100)}%)`}</Record>
            </Info>
        </Container>
    )
};

export default Tier;
