import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {AppMainLayout} from '../layouts';
import {Header, HouseForSaleCard, Loader, SearchandFilter} from '../components';
import {theme} from '../configs';
import {useGetHousesForSaleQuery} from '../redux/slices/HousesApi';

export function SalePropertiesScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const {data: houses, isLoading} = useGetHousesForSaleQuery({});
  return (
    <AppMainLayout>
      <Header title="Sale Properties" icon="notification" />
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
            <Text style={styles.featured}>For Sale</Text>
            <Text style={styles.viewAll}>View all</Text>
          </View>
          {isLoading && <Loader />}
          <View style={styles.housesContainer}>
            {houses?.data.map(house => (
              <View key={house.id}>
                <HouseForSaleCard house={house} />
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
  housesContainer: {
    flexDirection: 'column',
    gap: 30,
  },
  featuredContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
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
