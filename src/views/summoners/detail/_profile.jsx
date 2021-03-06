import React from 'react';
import styled from 'styled-components';

import {getImagePath as img} from 'assets';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-right: 10px;
  /*padding: 40px;*/
  width: 235px;
  height: 205px;

  background-color: #FFF;
`;

const ProfileImage = styled.img.attrs({alt: ''})`
  width: 80px;
`;

const Name = styled.div`
  margin: 10px 0;
  font-size: 1.25rem;
`;

const Profile = ({name, profileIconId, summonerLevel}) => (
  <Container>
    {profileIconId &&
      <ProfileImage src={img('profileicon', profileIconId)} />
    }
    <Name>{name}</Name>
    <div>{`Lv. ${summonerLevel}`}</div>
  </Container>
);

export default Profile;
