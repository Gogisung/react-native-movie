import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const CatalogImage = Styled.View``;
const InfpContainer = Styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-itmes: flex-start;
`;
const LabelYear = Styled.Text`
  background-color: #E70915;
  color: #FFFFFF;
  padding: 4px 8px;
  margin-left: 4ps;
  margin-bottom: 4px;
  font-weight: bold;
  border-radius: 4px;
`;
const SubInfoContainer = Styled.View`
`;

interface Props {
  url: string;
  onPress: (id: number) => void;
}

const BigCatalogList = ({url, onPress}: Props) => {
  const [data, setData] = useState<Array<IMovie>>([]);
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json.data.movies);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={data}
        keyExtractor={(item, index) => {
          return `bigScreen-${index}`;
        }}
        renderItem={({item, index}) =>(
          <BigCatalog
            id={(item as IMovie).id}
          />
        )}
      />
    </Container>
  )
};

export default BigCatalogList;
