import React from "react";
import { FlatList, StyleSheet } from "react-native";
import icons from "../constants/icons";
import { SIZES } from "../constants/theme";
import { ITask } from "../interfaces/task";
import Empty from "./Empty";
import TaskListItem from "./TaskListItem";

interface ITaskListProps {
  tasks: ITask[];
  selectedTasks: string[];
  isOpenTaskSelector: boolean;
  onPressTask: (task: ITask) => void;
  onSelectTask: (taskId: string) => void;
}
const TaskList:React.FC<ITaskListProps> = ({ tasks, selectedTasks, isOpenTaskSelector, onPressTask, onSelectTask }) => {
  return (
    <FlatList
      style={styles.content}
      contentContainerStyle={styles.list}
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TaskListItem task={item} selectedTasks={selectedTasks} isOpenTaskSelector={isOpenTaskSelector} onPressTask={onPressTask} onSelectTask={onSelectTask} />}
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