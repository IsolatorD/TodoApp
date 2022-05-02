import React from "react";
import { FlatList, StyleSheet } from "react-native";
import icons from "../constants/icons";
import { SIZES } from "../constants/theme";
import { ITask } from "../interfaces/task";
import Empty from "./Empty";
import TaskGridItem from "./TaskGridItem";

interface ITaskGridProps {
  tasks: ITask[];
  selectedTasks: string[];
  isOpenTaskSelector: boolean;
  onPressTask: (task: ITask) => void;
  onSelectTask: (taskId: string) => void;
}
const TaskGrid:React.FC<ITaskGridProps> = ({ tasks, selectedTasks, isOpenTaskSelector, onPressTask, onSelectTask}) => {
  return (
    <FlatList
      style={styles.content}
      contentContainerStyle={styles.grid}
      data={tasks}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TaskGridItem task={item} selectedTasks={selectedTasks} isOpenTaskSelector={isOpenTaskSelector} onPressTask={onPressTask} onSelectTask={onSelectTask} />}
      ListEmptyComponent={() => <Empty icon={icons.grid} message='No hay tareas' />}
      showsVerticalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: SIZES.padding / 2
  },
  grid: {
    paddingBottom: SIZES.padding
  }
})

export default TaskGrid;