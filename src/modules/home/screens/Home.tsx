import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  SafeAreaView,
  ListRenderItemInfo,
} from 'react-native';
import postData from '@assets/data/posts';
import {Post} from '@src/components';
import {PostType} from '@src/shared/types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

const Home: React.FC = () => {
  const [posts, setPosts] = useState(postData);

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     // fetch all the posts
  //     try {
  //       const response = await API.graphql(graphqlOperation(listPosts));
  //       setPosts(response.data.listPosts.items);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };

  //   fetchPost();
  // }, []);

  const renderItem = ({item}: ListRenderItemInfo<PostType>): JSX.Element => (
    <Post post={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={posts}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          snapToInterval={Dimensions.get('window').height - 130}
          snapToAlignment="start"
          decelerationRate="fast"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
