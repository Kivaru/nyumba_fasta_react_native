import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {theme} from '../configs/theme';
import {HouseCarousel, Header, Icon, Button} from '../components';
import numeral from 'numeral';
import {Amenity} from '../components';
import {selectedHouse} from '../redux/selectors';
import {useSelector} from 'react-redux';
import {AppMainLayout} from '../layouts';

export function SearchScreen({navigation}: any) {
  const house = useSelector(selectedHouse);
  const amenities = ['Tiles', 'Fence', 'Gypsum', 'Kitchen', 'AC'];

  const makePayment = () => navigation.navigate('Payment');

  return (
    <AppMainLayout>
      <Header title="House Details" icon="home" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.container}>
          <HouseCarousel images={house.media} />
          <View style={styles.details}>
            <View style={styles.itemContainer}>
              <Text
                style={styles.houseType}
                numberOfLines={1}
                ellipsizeMode="tail">
                {house.house_type}
              </Text>
              <View style={styles.rowcenter}>
                <Text style={styles.permonth}>Per month</Text>
                <Text style={styles.rentPrice}>
                  {numeral(house.rent).format('0,0')}
                </Text>
              </View>
            </View>
            <View style={styles.rowcenter}>
              <Icon icon="location" size={16} stroke={theme.color.gray.mid} />
              <Text style={styles.permonth}>{house.address}</Text>
            </View>
            <View style={styles.rowcenter}>
              <Text style={styles.rating}>4.0</Text>
              <Icon icon="rating" size={16} />
              <Text style={styles.permonth}>(120 reviews)</Text>
            </View>
            <View style={styles.rowcenter}>
              <Icon icon="bed" size={16} fill={theme.color.gray.mid} />
              <Text style={{...styles.detailsText, color: theme.color.black}}>
                {house.number_of_room} Rooms Available
              </Text>
            </View>
            <View style={styles.rowcenter}>
              <Icon
                icon="home"
                size={16}
                stroke={theme.color.gray.mid}
                strokeWidth={1.5}
              />
              <Text style={styles.detailsText}>House type:</Text>
              <Text style={{...styles.detailsText, color: theme.color.black}}>
                {house.house_type}
              </Text>
            </View>
            <View style={styles.rowcenter}>
              <Icon
                icon="user"
                size={16}
                stroke={theme.color.gray.mid}
                strokeWidth={1.5}
              />
              <Text style={styles.detailsText}>Luku:</Text>
              <Text style={{...styles.detailsText, color: theme.color.black}}>
                Alone
              </Text>
            </View>
            <View style={styles.rowcenter}>
              <Icon
                icon="calendar"
                size={16}
                stroke={theme.color.gray.mid}
                strokeWidth={1.5}
              />
              <Text style={styles.detailsText}>Rent End:</Text>
              <Text style={{...styles.detailsText, color: theme.color.black}}>
                No Date Provided
              </Text>
            </View>
          </View>
          <Text style={styles.facilitiesText}>Amenities</Text>
          <View style={styles.amenitiesContainer}>
            {amenities.map(amenity => (
              <View key={amenity}>
                <Amenity name={amenity} />
              </View>
            ))}
          </View>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{house.description}</Text>
          <Button
            onPress={makePayment}
            label="Make payment"
            type="filled"
            icon="payment"
          />
        </View>
      </ScrollView>
    </AppMainLayout>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  details: {
    marginVertical: 20,
    flexDirection: 'column',
    gap: 10,
  },
  houseType: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    color: theme.color.black,
    width: '50%',
    overflow: 'visible',
  },
  rowcenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  permonth: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: theme.color.gray.mid,
  },
  detailsText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: theme.color.gray.mid,
  },
  rentPrice: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    color: theme.color.black,
  },
  rating: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: theme.color.black,
  },
  facilitiesText: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 26,
  },
  amenitiesContainer: {
    marginTop: 15,
    flexDirection: 'column',
    gap: 20,
  },
  descriptionTitle: {
    marginTop: 25,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 26,
    color: theme.color.black,
  },
  descriptionText: {
    marginTop: 10,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: theme.color.gray.mid,
    marginBottom: 30,
  },
});
