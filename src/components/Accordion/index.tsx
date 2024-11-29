import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../configs';
import {Icon} from '..';

type Props = {
  question: string;
  answer: string;
};

export function Accordion({question, answer}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.questionContainer}
        onPress={() => setOpen(!open)}>
        <Text style={styles.question}>{question}</Text>
        {open ? (
          <Icon
            icon="chevron-up"
            size={24}
            stroke={theme.color.gray.vdark}
            strokeWidth={2}
          />
        ) : (
          <Icon
            icon="chevron-down"
            size={24}
            stroke={theme.color.black}
            strokeWidth={2}
          />
        )}
      </Pressable>
      {open && (
        <View>
          <View style={styles.divider}></View>
          <Text style={styles.answer}>{answer}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.color.gray.light,
    borderRadius: 15,
    padding: 15,
    backgroundColor: theme.color.gray.vLight,
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  question: {
    width: '90%',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: theme.color.black,
  },
  answer: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: theme.color.gray.mid,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: theme.color.gray.light,
    marginVertical: 10,
  },
});
