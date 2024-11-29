import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../configs/theme';
import {Icon} from '../icons';
import {IconTypes} from '../icons/iconTypes';

export function HomeBottomTabBar({navigation}: any) {
  // const [screen, setScreen] = useState('');
  const onPress = (label: string) => {
    navigation.navigate(label);
    // setScreen(label);
  };
  // console.log('screen', screen);
  const screens = [
    {
      label: 'Home',
      icon: 'home',
      name: 'root',
    },
    {
      label: 'Search Home',
      icon: 'search',
      name: 'Search',
    },
    {
      label: 'Payment',
      icon: 'payment',
      name: 'Payment',
    },
    {
      label: 'Setting',
      icon: 'settings',
      name: 'Setting',
    },
  ];
  return (
    <View style={styles.container}>
      {screens.map(screen => (
        <Pressable key={screen.label} onPress={() => onPress(screen.name)}>
          <View style={styles.screen}>
            <Icon
              icon={screen.icon as IconTypes}
              size={24}
              stroke={
                screen.label === 'Home'
                  ? theme.color.orange
                  : theme.color.gray.vdark
              }
            />
            <Text
              style={{
                ...styles.screenName,
                color:
                  screen.label === 'Home'
                    ? theme.color.orange
                    : theme.color.gray.vdark,
              }}>
              {screen.label}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.white,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderTopWidth: 1,
    borderTopColor: theme.color.gray.light,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  screen: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  },
  screenName: {
    color: theme.color.orange,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 20,
  },
});
