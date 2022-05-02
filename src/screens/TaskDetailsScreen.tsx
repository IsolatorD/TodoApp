import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ButtonIcon from "../components/ButtonIcon";
import Container from "../components/Container";
import Fab from "../components/Fab";
import icons from "../constants/icons";
import { FONTS, SIZES } from "../constants/theme";
import { TaskDetailsScreenProps } from "../interfaces/navigator";

const TaskDetailsScreen:React.FC<TaskDetailsScreenProps> = ({ route, navigation }) => {
  const { task } = route?.params;
  
  const onBackPress = () => {
    navigation.goBack();
  }

  return (
    <Container>
      <View style={styles.header}>
        <ButtonIcon
          size={22}
          icon={icons.arrow}
          onPress={onBackPress}
          style={styles.backButton}
        />
      </View>
      <View
        style={styles.content}
      >
        <Text style={styles.title}>
          {task.title}
        </Text>
        <ScrollView
          style={styles.description}
        >
          <Text style={styles.body}>
            {task.body}
          </Text>
        </ScrollView>
      </View>
      <Fab
        icon={icons.edit}
        onPress={() => {}}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding / 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: SIZES.padding / 2
  },
  backButton: {
    transform: [{ rotate: '180deg' }],
  },
  title: {
    ...FONTS.title,
  },
  body: {
    ...FONTS.body,
  },
  description: {
    marginTop: SIZES.padding / 2,
  }
});

export default TaskDetailsScreen;