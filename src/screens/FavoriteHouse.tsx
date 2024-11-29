import React, {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {theme} from '../configs/theme';
import {useGetFavoriteHousesQuery} from '../redux/slices/HousesApi';
// import {selectUser} from '../redux/selectors';
// import {useSelector} from 'react-redux';
import {HouseCard, Icon, SearchField, Loader, Header} from '../components';
import {AppMainLayout} from '../layouts';

export function FavoriteScreen() {
  //   const savedUser = useSelector(selectUser);
  const [searchTerm, setSearchTerm] = useState('');
  const {data: houses, isLoading} = useGetFavoriteHousesQuery(4);

  return (
    <AppMainLayout>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header title="Favorite Houses" icon="user" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <View style={styles.searchField}>
              <SearchField onChangeText={setSearchTerm} value={searchTerm} />
            </View>
            <View style={styles.filterContainer}>
              <Icon icon="filter" size={24} fill={theme.color.white} />
            </View>
          </View>
          <View style={styles.featuredContainer}>
            <Text style={styles.featured}>Featured Properties</Text>
            <Text style={styles.viewAll}>View all</Text>
          </View>
          {isLoading && <Loader />}
          <View style={styles.housesContainer}>
            {houses?.map(house => (
              <View key={house.id}>
                <HouseCard house={house} isFavorite />
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
    paddingTop: 5,
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  searchField: {
    width: '80%',
  },
  filterContainer: {
    backgroundColor: theme.color.orange,
    height: 56,
    width: 59,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  housesContainer: {
    flexDirection: 'column',
    gap: 30,
  },
  featuredContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
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
