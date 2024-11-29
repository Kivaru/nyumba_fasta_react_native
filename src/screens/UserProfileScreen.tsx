import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {Header, Avatar, Button, Icon} from '../components';
import {theme, userTestImage} from '../configs';
import {useSelector} from 'react-redux';
import {selectUser} from '../redux/selectors';
import {useGetUserProfileQuery} from '../redux/slices/UserApi';
import {IconTypes} from '../components/icons/iconTypes';
import {AppMainLayout} from '../layouts';

export function UserProfileScreen() {
  const savedUser = useSelector(selectUser);
  const {data: user} = useGetUserProfileQuery(savedUser.user_id);

  const details = [
    {
      icon: 'user',
      label: 'Name',
      data: user?.name,
    },
    {
      icon: 'email',
      label: 'Email',
      data: user?.email,
    },
    {
      icon: 'phone',
      label: 'Phone number',
      data: user?.contact,
    },
  ];

  const onSubmit = () => console.log('submit');

  return (
    <AppMainLayout>
      <Header title="Edit Profile" icon="user" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.container}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Avatar url={userTestImage} size={100} />
            </View>
            <Text style={styles.avatarText}>{user?.name}</Text>
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Personal Details</Text>
            <Text style={styles.update}>Update</Text>
          </View>
          <View style={styles.detailsContainer}>
            {details.map((detail, index) => (
              <View key={detail.label}>
                <View style={styles.detailItem}>
                  <View style={styles.detailItemContent}>
                    <Icon
                      icon={detail.icon as IconTypes}
                      size={20}
                      stroke={theme.color.gray.vdark}
                      strokeWidth={1.5}
                    />
                    <Text style={styles.detailLabel}>{detail.label}</Text>
                  </View>
                  <Text style={styles.detailData}>{detail.data}</Text>
                </View>
                {index !== details.length - 1 && (
                  <View style={styles.divider}></View>
                )}
              </View>
            ))}
          </View>
          <Button onPress={onSubmit} label="Done" type="filled" />
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
  avatarText: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    color: theme.color.black,
  },
  avatar: {
    borderWidth: 2,
    borderColor: theme.color.orange,
    width: 104,
    borderRadius: 50,
  },
  avatarContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: theme.color.gray.light,
    marginVertical: 20,
  },
  headingContainer: {
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 26,
    color: theme.color.black,
  },
  update: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: theme.color.gray.vdark,
  },
  detailsContainer: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: theme.color.gray.medium,
    borderRadius: 15,
    marginBottom: 30,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailLabel: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: theme.color.gray.mid,
  },
  detailData: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: theme.color.black,
  },
});
