import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {theme} from '../configs/theme';
import {
  useGetFavoriteHousesQuery,
  useGetAllHousesQuery,
} from '../redux/slices/HousesApi';
import {userTestImage} from '../configs';
import {selectUser} from '../redux/selectors';
import {useSelector} from 'react-redux';
import {useGetUserProfileQuery} from '../redux/slices/UserApi';
import {HouseCard, Icon, Loader, Avatar, SearchandFilter} from '../components';
import {AppMainLayout} from '../layouts';

export function HomeScreen({navigation}: any) {
  const savedUser = useSelector(selectUser);
  const [searchTerm, setSearchTerm] = useState('');
  const {data: houses, isLoading} = useGetAllHousesQuery({});
  const {data: user} = useGetUserProfileQuery(savedUser.user_id);
  const {data: favoriteHouses} = useGetFavoriteHousesQuery(4);

  const favoriteHousesIds = favoriteHouses?.map(house => house.id);

  return (
    <AppMainLayout>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.screenHeaderContainer}>
        <View style={styles.leftContainer}>
          <Pressable onPress={() => navigation.openDrawer()}>
            <Icon icon="hambuger" size={40} stroke={theme.color.orange} />
          </Pressable>
          <Avatar url={userTestImage} size={40} />
          <View style={styles.userContainer}>
            <Text style={styles.greeting}>Hello, {user?.name}</Text>
            <View style={styles.location}>
              <Icon icon="location" size={14} stroke={theme.color.gray.mid} />
              <Text style={styles.address}>Dar es salaam</Text>
            </View>
          </View>
        </View>
        <Icon icon="notification" size={24} fill={theme.color.orange} />
      </View>
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
            <Text style={styles.featured}>Featured Properties</Text>
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
    paddingTop: 5,
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  screenHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: theme.color.white,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.gray.light,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  userContainer: {
    flexDirection: 'column',
    gap: 2,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  greeting: {
    color: theme.color.black,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
  },
  address: {
    color: theme.color.gray.mid,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
  },
  searchField: {
    width: '80%',
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
