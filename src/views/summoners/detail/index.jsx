import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {
  compose,
  lifecycle,
  withProps,
} from 'lib';

import {
  QUEUE_TYPE,
  QUEYE_TYPE_ID,
} from 'consts';

import actions from 'actions/summoners';

import Tier from './_tier';
import Profile from './_profile';
import Statistics from './_statistics';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;

  margin: 30px 0;
  padding: 0 30px;
`;

const SummonerDetailView = ({statistics, summoner, soloQueueEntry, flexQueueEntry}) => (
  <Container>
    <Row>
      <Profile {...summoner} />

      {soloQueueEntry &&
        <Tier {...soloQueueEntry} />
      }

      {flexQueueEntry &&
        <Tier {...flexQueueEntry} />
      }
    </Row>

    <Row>
      <Statistics
          entry={soloQueueEntry}
          data={statistics}
          />
    </Row>
  </Container>
);

const SummonerDetail = compose(
  withProps(({entry, statistics}) => {
    const soloQueueEntry = entry.filter((e) => QUEUE_TYPE.SOLO_QUEUE === e.queueType)[0];
    const flexQueueEntry = entry.filter((e) => QUEUE_TYPE.FLEX_QUEUE === e.queueType)[0];
    return {
      soloQueueEntry,
      flexQueueEntry,
      statistics: statistics.map(s => ({
        ...s,
        playRate: s.game / (soloQueueEntry.wins + soloQueueEntry.losses)
      })),
    };
  }),
  lifecycle({
    componentDidMount () {
      this.props.fetchSummoner(this.props.username);
    },
    componentDidUpdate (prevProps) {
      const {username, summoner} = this.props;
      if(username !== prevProps.username) {
        this.props.fetchSummoner(this.props.username);

      } else if(summoner.userId !== prevProps.summoner.userId) {
        console.log('this.props.summoner', this.props.summoner)
        this.props.fetchSummonerEntry(this.props.summoner.userId);
        // // this.props.fetchSummonerMatches(
        // //   this.props.summoner.accountId,
        // //   QUEYE_TYPE_ID.SOLO_QUEUE
        // // );
        // this.props.fetchSummonerStatistics(
        //   this.props.summoner.accountId,
        //   QUEYE_TYPE_ID.SOLO_QUEUE
        // );
      }
    },
  }),
)(SummonerDetailView);

const mapStateToProps = (state, ownProps) => ({
  username: ownProps.match.params.username,
  summoner: state.summoners.current,
  entry: state.summoners.entry,
  statistics: state.summoners.statistics,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSummoner: (...args) => dispatch(actions.fetchOne(...args)),
  fetchSummonerEntry: (...args) => dispatch(actions.fetchEntry(...args)),
  // fetchSummonerMatches: (...args) => dispatch(actions.fetchMatches(...args)),
  fetchSummonerStatistics: (...args) => dispatch(actions.fetchStatistics(...args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SummonerDetail);
