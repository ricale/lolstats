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
} from 'constants';

import actions from 'actions/summoners';

import Tier from './_tier';
import Profile from './_profile';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  margin-top: 30px;
`;

const SummonerDetailView = ({summoner, soloQueueEntry, flexQueueEntry}) => (
  <Container>
    <Profile {...summoner} />

    {soloQueueEntry &&
      <Tier {...soloQueueEntry} />
    }

    {flexQueueEntry &&
      <Tier {...flexQueueEntry} />
    }
  </Container>
);

const SummonerDetail = compose(
  withProps(({entry}) => ({
    soloQueueEntry: entry.filter((e) => QUEUE_TYPE.SOLO_QUEUE === e.queueType)[0],
    flexQueueEntry: entry.filter((e) => QUEUE_TYPE.FLEX_QUEUE === e.queueType)[0],
  })),
  lifecycle({
    componentDidMount () {
      this.props.fetchSummoner(this.props.username);
    },
    componentDidUpdate (prevProps) {
      const {summoner} = this.props;
      if(summoner.id !== prevProps.summoner.id) {
        this.props.fetchSummonerEntry(this.props.summoner.id);
        this.props.fetchSummonerMatches(
          this.props.summoner.accountId,
          QUEYE_TYPE_ID.SOLO_QUEUE
        );
      }
    },
  }),
)(SummonerDetailView);

const mapStateToProps = (state, ownProps) => ({
  username: ownProps.match.params.username,
  summoner: state.summoners.current,
  entry: state.summoners.entry,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSummoner: (...args) => dispatch(actions.fetchOne(...args)),
  fetchSummonerEntry: (...args) => dispatch(actions.fetchEntry(...args)),
  fetchSummonerMatches: (...args) => dispatch(actions.fetchMatches(...args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SummonerDetail);
