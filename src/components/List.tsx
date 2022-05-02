import React from "react";
import { FlatList, StyleSheet } from "react-native";
import icons from "../constants/icons";
import { SIZES } from "../constants/theme";
import { ITask } from "../interfaces/task";
import Empty from "./Empty";
import TaskListItem from "./TaskListItem";

interface ITaskListProps {
  tasks: ITask[];
  onPressTask: (task: ITask) => void;
}
const TaskList:React.FC<ITaskListProps> = ({ tasks, onPressTask }) => {
  return (
    <FlatList
      style={styles.content}
      contentContainerStyle={styles.list}
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TaskListItem task={item} onPressTask={onPressTask} />}
      ListEmptyComponent={() => <Empty icon={icons.list} message='No hay tareas' />}
      showsVerticalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: SIZES.padding / 2
  },
  list: {
    paddingBottom: SIZES.padding
  }
})

export default TaskList;