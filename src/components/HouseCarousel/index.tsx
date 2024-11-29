import React, {useRef, useState} from 'react';
import {View, FlatList, Image, Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../configs';
import {Media} from '../../redux/types/houseApiDataTypes';

const {width} = Dimensions.get('window');

type Props = {
  images: Media[];
};

export function HouseCarousel({images}: Props) {
  const imageUrls = images.map(image => image.original_url);
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  const renderItem = ({item}: any) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item}} style={styles.image} />
    </View>
  );

  const renderDots = () => (
    <View style={styles.paginationContainer}>
      {imageUrls.map((imageUrl, index) => (
        <View
          key={imageUrl}
          style={[styles.dot, index === activeIndex && styles.activeDot]}
        />
      ))}
    </View>
  );

  return (
    <View>
      <FlatList
        data={imageUrls}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ref={flatListRef}
        keyExtractor={(item, index) => index.toString()}
      />
      {renderDots()}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 220,
    width: '95%',
    borderRadius: 15,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: theme.color.gray.light,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: theme.color.orange,
  },
});
