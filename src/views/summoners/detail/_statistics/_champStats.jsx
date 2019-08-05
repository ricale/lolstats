import React from 'react';
import styled from 'styled-components';
import numeral from 'numeral';

const LABELS = {
  kills: '킬',
  deaths: '데스',
  assists: '어시스트',
  doubleKills: '더블킬',
  tripleKills: '트리플킬',
  quadraKills: '쿼드라킬',
  pentaKills: '펜타킬',
  totalDamageDealtToChampions: '딜량',
  totalHeal: '힐량',
  totalDamageTaken: '받은데미지량',
  goldEarned: '획득골드',
  totalMinionsKilled: 'CS',
  visionWardsBoughtInGame: '비전와드구매',
  // visionScore: '',
  wardsPlaced: '꽂은와드',
  wardsKilled: '제거한와드',
};

const DataTable = styled.div`
  & > * {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  & > * > :first-child {
    width: 100px;
  }
  & > * > :nth-child(2) {
    width: 70px;
    text-align:right;
  }
  & > * > :nth-child(3) {
    width: 70px;
    text-align:right;
  }
`;

const ChampStats = ({stats, game}) => (
  <div>
    <DataTable>
      {Object.keys(LABELS).map(key =>
        <div key={key}>
          <div>{LABELS[key] || key}</div>
          <div>{stats[key]}</div>
          <div>{numeral(stats[key] / game).format('0.00')}</div>
        </div>
      )}
    </DataTable>
  </div>
);

export default ChampStats;
