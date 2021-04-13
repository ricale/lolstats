import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';

import { RootState, summonerActions } from 'store';
import { RouterParams } from 'router';
import { QUEUE_TYPE } from 'consts';
import styled, { css, keyframes } from 'themes';
import {getImagePath as img} from 'assets';

import Overlay from './Overlay';

const TIER_IMAGE_WIDTH = 350;
const TIER_IMAGE_ANIM_DURATION = 5;

const show = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;
const showBackground = keyframes`
    from { opacity: 0; }
    to { opacity: 0.075; }
`;

type ContainerProps = {
    full: boolean
}
const Container = styled.div<ContainerProps>`
    position: absolute;
    top: 0;
    left: 0;
    ${p => p.full && css`
        width: 100%;
    `}
    ${p => !p.full && css`
        width: ${TIER_IMAGE_WIDTH}px;
    `}
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: width 0.2s ease-out;
`;
const Layer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
type TierImageProps = {
    big?: boolean | number
    opacity?: number
    fadeIn?: boolean
    fadeInBackground?: boolean
}
const TierImage = styled.img.attrs({alt: ''})<TierImageProps>`
    width: ${TIER_IMAGE_WIDTH}px;
    ${p => p.big && css`
        width: ${TIER_IMAGE_WIDTH * (typeof p.big === 'number' ? p.big : 1.7)}px;
    `}

    ${p => p.opacity && css`
        opacity: ${p.opacity};
    `}
    ${p => p.fadeInBackground && css`
        animation: ${TIER_IMAGE_ANIM_DURATION}s ease-in-out 0s 1 normal forwards running ${showBackground};
    `}
    ${p => p.fadeIn && css`
        animation: ${TIER_IMAGE_ANIM_DURATION}s ease-in-out 0s 1 normal forwards running ${show};
    `}
`;
const Username = styled.p`
    ${p => p.theme.text.h1};
    color: ${p => p.theme.colors.colorOnBackground};
    text-align: center;

    background-color: rgba(0, 0, 0, 0.5);
    
`;

const SummonerDetailPage = () => {
    const { pathname } = useLocation();
    const { username } = useParams<RouterParams['SummonerDetail']>();
    const { detail, entries, statistics } = useSelector((s: RootState) => s.summoner);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(summonerActions.requestGetSummoner({username}));
    }, [username]);

    // const stats = useMemo(() => {
    //     return (
    //         statistics ?
    //             statistics.map((s) => ({
    //                 ...s,
    //                 playRate: s.game / (entries[0].wins + entries[0].losses)
    //             })) :
    //             []
    //      ) as typeof statistics;
    // }, [statistics]);

    const soloQueueEntry = entries.find(entry => entry.queueType === QUEUE_TYPE.SOLO_QUEUE);
    const tierImageSrc = soloQueueEntry && img('emblem', soloQueueEntry.tier?.toLowerCase());

    const tierImageCenter = !pathname.match(/most$/);

    return (
        <Container full={tierImageCenter}>
            <Layer>
                <TierImage
                    src={tierImageSrc}
                    big
                    opacity={0.075}
                    fadeInBackground
                    />
            </Layer>
            {/* <Layer>
                {soloQueueEntry &&
                    <TierImage
                        src={tierImageSrc}
                        big={1.03}
                        shakeAndFlash
                        />
                }
            </Layer> */}
            <Layer>
                {soloQueueEntry &&
                    <TierImage
                        src={tierImageSrc}
                        fadeIn
                        />
                }
            </Layer>
            {detail &&
                <Layer>
                    <Username>{detail.name}</Username>
                </Layer>
            }
        </Container>
    );
};

export default SummonerDetailPage;
