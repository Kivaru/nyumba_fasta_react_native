/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../configs/theme';
import {Icon} from '../icons';
import {House, HouseForSale} from '../../redux/types/houseApiDataTypes';
import numeral from 'numeral';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setSelectedHouse} from '../../redux/slices/Appstate';

type Props = {
  house: House;
  isFavorite: boolean;
};

type HouseForSaleProp = {
  house: HouseForSale;
};

export function HouseCard({house, isFavorite}: Props) {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const facilities = ['Tiles', 'Gypsum', 'Kitchen', 'Fence'];

  const navigateToHouseDetails = () => {
    dispatch(setSelectedHouse(house));
    navigation.navigate('Search');
  };
  return (
    <Pressable
      style={{...styles.container, height: 310}}
      onPress={navigateToHouseDetails}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: house.featured_image,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.imageContents}>
          <View style={styles.availability}>
            <Text style={styles.availabilityText}>
              {house.status === '0' ? 'Available' : 'Not Available'}{' '}
            </Text>
          </View>
          <View style={styles.favoriteContainer}>
            {isFavorite ? (
              <Icon icon="heart" size={28} fill={theme.color.lightRed} />
            ) : (
              <Icon
                icon="heart"
                size={28}
                fill={theme.color.white}
                stroke={theme.color.gray.mid}
              />
            )}
          </View>
        </View>
        <View style={styles.houseDetails}>
          <View style={styles.itemContainer}>
            <Text
              style={styles.houseType}
              numberOfLines={1}
              ellipsizeMode="tail">
              {house.house_type}
            </Text>
            <View style={styles.rent}>
              <Text style={styles.permonth}>Per month</Text>
              <Text style={styles.rentPrice}>
                {numeral(house.rent).format('0,0')}
              </Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.rent}>
              <Icon icon="location" size={16} stroke={theme.color.gray.mid} />
              <Text style={styles.permonth}>{house.address}</Text>
            </View>
            <View style={styles.rent}>
              <Text style={styles.rating}>4.0</Text>
              <Icon icon="rating" size={16} />
              <Text style={styles.permonth}>(120 reviews)</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            {facilities.map(facility => (
              <View key={facility} style={styles.facility}>
                <View style={styles.iconContainer}>
                  <Icon icon="tick" size={10} stroke={theme.color.gray.mid} />
                </View>
                <Text>{facility}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export function HouseForSaleCard({house}: HouseForSaleProp) {
  const navigateToHouseDetails = () => {};
  return (
    <Pressable
      style={{...styles.container, height: 266}}
      onPress={navigateToHouseDetails}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: house.media[0].original_url,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.imageContents}>
          <View style={styles.availability}>
            <Text style={styles.availabilityText}>For Sale</Text>
          </View>
        </View>
        <View style={styles.houseDetails}>
          <View style={styles.itemContainer}>
            <Text
              style={styles.houseType}
              numberOfLines={1}
              ellipsizeMode="tail">
              {house.property_type}
            </Text>
            <View style={styles.rent}>
              <Text style={styles.permonth}>Tsh</Text>
              <Text style={styles.rentPrice}>
                {numeral(house.price).format('0,0')}
              </Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.rent}>
              <Icon icon="location" size={16} stroke={theme.color.gray.mid} />
              <Text style={styles.permonth}>{house.address}</Text>
            </View>
            <View style={styles.rent}>
              <Text style={styles.permonth}>Property Type:</Text>
              <Text style={styles.permonth}>{house.property_type}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.color.gray.light,
    width: '100%',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  image: {
    height: 160,
    width: '100%',
    borderRadius: 15,
  },
  imageContainer: {
    position: 'relative',
  },
  imageContents: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 10,
    left: 10,
    right: 10,
  },
  availability: {
    width: 130,
    height: 40,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.white,
  },
  availabilityText: {
    color: theme.color.black,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
  },
  favoriteContainer: {
    height: 40,
    width: 40,
    backgroundColor: theme.color.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
  },
  houseDetails: {
    flexDirection: 'column',
    marginTop: 20,
    gap: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  houseType: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: theme.color.black,
    width: '50%',
    overflow: 'visible',
  },
  rating: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: theme.color.black,
  },
  rent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  permonth: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: theme.color.gray.mid,
  },
  rentPrice: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: theme.color.black,
  },
  facility: {
    height: 30,
    paddingHorizontal: 10,
    backgroundColor: theme.color.gray.moderate,
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  iconContainer: {
    height: 14,
    width: 14,
    borderWidth: 1,
    borderColor: theme.color.gray.mid,
    borderRadius: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
