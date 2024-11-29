import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {AppMainLayout} from '../layouts';
import {Header, HouseCard, Loader, SearchandFilter} from '../components';
import {theme} from '../configs';
import {
  useGetFavoriteHousesQuery,
  useGetHousesForRentQuery,
} from '../redux/slices/HousesApi';
import {useGetUserProfileQuery} from '../redux/slices/UserApi';
import {useSelector} from 'react-redux';
import {selectUser} from '../redux/selectors';

export function RentPropertiesScreen() {
  const savedUser = useSelector(selectUser);
  const [searchTerm, setSearchTerm] = useState('');
  const {data: houses, isLoading} = useGetHousesForRentQuery({});
  const {data: user} = useGetUserProfileQuery(savedUser.user_id);
  const {data: favoriteHouses} = useGetFavoriteHousesQuery(user?.id);

  const favoriteHousesIds = favoriteHouses?.map(house => house.id);

  return (
    <AppMainLayout>
      <Header title="Rent Properties" icon="notification" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.container}>
          <SearchandFilter
            onValueChange={setSearchTerm}
            searchTerm={searchTerm}
          />
          <View style={styles.featuredContainer}>
            <Text style={styles.featured}>For Rent</Text>
            <Text style={styles.viewAll}>View all</Text>
          </View>
          {isLoading && <Loader />}
          <View style={styles.housesContainer}>
            {houses?.map(house => (
              <View key={house.id}>
                <HouseCard
                  house={house}
                  isFavorite={favoriteHousesIds?.includes(house.id) as boolean}
                />
              </View>
            ))}
          </View>
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
  },
  featuredContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  housesContainer: {
    flexDirection: 'column',
    gap: 30,
  },
  featured: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 26,
    color: theme.color.black,
  },
  viewAll: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: theme.color.gray.mid,
  },
});
