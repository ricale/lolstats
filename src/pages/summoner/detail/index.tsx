import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { RootState, summonerActions } from 'store';
import { RouterParams } from 'router';

import Profile from './Profile';
import Tier from './Tier';
import SummonerStatistics from './Statistics';

const SummonerDetailPage = () => {
    const { username } = useParams<RouterParams['SummonerDetail']>();
    const { detail, entries, statistics } = useSelector((s: RootState) => s.summoner);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(summonerActions.requestGetSummoner({username}));
    }, [username]);

    const stats = useMemo(() => {
        return (
            statistics ?
                statistics.map((s) => ({
                    ...s,
                    playRate: s.game / (entries[0].wins + entries[0].losses)
                })) :
                []
         ) as typeof statistics;
    }, [statistics]);

    if(!detail) {
        return (
            <div></div>
        );
    }

    return (
        <div>
            <h1>SummonerDetailPage</h1>
            <Profile
                name={detail.name}
                profileIconId={detail.profileIconId}
                summonerLevel={detail.summonerLevel}
                />
            {(entries || []).map(entry =>
                <Tier
                    key={entry.queueType}
                    {...entry}
                    />
            )}
            <SummonerStatistics
                data={stats}
                />
        </div>
    );
};

export default SummonerDetailPage;
