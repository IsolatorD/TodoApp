import React from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import ButtonIcon from "../components/ButtonIcon";
import Container from "../components/Container";
import Fab from "../components/Fab";
import icons from "../constants/icons";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { userBackHandler } from "../hooks/useBackHandler";
import { useTask } from "../hooks/useTask";
import { TaskDetailsScreenProps } from "../interfaces/navigator";
import { Types } from "../store/reducer";
import { removeTaskFromStorage } from "../utils/task";

const TaskDetailsScreen:React.FC<TaskDetailsScreenProps> = ({ navigation }) => {
  userBackHandler({ isHome: false })
  const { state: { task }, dispatch } = useTask()

  const onBackPress = () => {
    navigation.goBack();
    dispatch({
      type: Types.ClearTask,
      payload: {}
    })
  }

  const onPressEdit = () => {
    navigation.navigate("TaskEditorScreen", { task });
  }

  const onPressDelete = () => {
    Alert.alert('Borrar nota', '¿Estás seguro de que quieres borrar esta nota?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Borrar',
        onPress: onConfirmDelete
      },
    ])
  }

  const onConfirmDelete = async () => {
    await dispatch({
      type: Types.DeleteTask,
      payload: {
        taskId: task.id
      }
    })
    await removeTaskFromStorage(task.id)
    onBackPress()
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
        <Text style={styles.headerTitle}>Detalles de la nota</Text>
        <ButtonIcon
          size={22}
          icon={icons.deleteIcon}
          onPress={onPressDelete}
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
        onPress={onPressEdit}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.padding / 2,
  },
  headerTitle: {
    ...FONTS.subtitle,
    fontWeight: 'bold',
    color: COLORS.black,
    textAlign: 'center',
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