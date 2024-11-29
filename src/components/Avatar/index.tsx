import React from 'react';
import {Image} from 'react-native';

type Avatar = {
  url: string;
  size: number;
};

export function Avatar({url, size}: Avatar) {
  return (
    <Image
      source={{uri: url}}
      width={size}
      height={size}
      style={{borderRadius: size}}
    />
  );
}
