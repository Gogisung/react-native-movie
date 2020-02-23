import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import Styled from 'styled-components/native';

import {NavigationScreenProp, NavigationState} from 'react-navigation';

import BigCatalog from '~/Components/BigCatalog';
import CastList from './CastList';
import ScreenShotList from './ScreenShotList';

const Container = Styled.ScrollView`
  flex: 1;
  background-color: #141414;
`;
const LoadingContainer = Styled.View`
  flex: 1;
  background-color: #141414;
  align-items: center;
  justify-content: center;
`;
const ContainerTitle = Styled.Text`
  font-size: 16px;
  color: #FFFFFF;
  font-weight: bold;
  padding: 24px 16px 8px 16px;
`;
const DescriptionContainer = Styled.View``;
const Description = Styled.Text`
  padding: 0 16px;
  color: #FFFFFF;
`;
const SubInfoContainer = Styled.View``;
const InfoContainer = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
`;
const LabelInfo = Styled.Text`
  color: #FFFFFF;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const MovieDetail = ({navigation}: Props) => {
  const [data, setData] = useState<IMovieDetail>();
  return (
    <Container>
      <BigCatalog
        id={data.id}
        image={data.large_cover_image}
        year={data.year}
        title={data.title}
        genres={data.genres}
      />
    </Container>
  );
};

export default MovieDetail;
