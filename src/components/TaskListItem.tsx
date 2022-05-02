import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { ITask } from "../interfaces/task"
import { parseTaskDate, wrapText } from "../utils/task";

interface ITaskListItemProps {
  task: ITask;
  onPressTask: (task: ITask) => void;
}

const TaskListItem: React.FC<ITaskListItemProps> = ({ task, onPressTask }) => {
  return (
    <TouchableOpacity
      onPress={() => onPressTask(task)}
    >
      <View style={styles.task}>
        <View>
          <Text style={styles.title}>
            {wrapText(task.title, 35)}
          </Text>
          {
            !!task.body && (
              <Text style={styles.body}>
                {wrapText(task.body, 40)}
              </Text>
            )
          }
        </View>
        <View
          style={styles.footer}
        >
          <Text style={styles.time}>
            {parseTaskDate(task.created_at)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  task: {
    padding: SIZES.padding / 2,
    backgroundColor: COLORS.tertiary,
    borderRadius: 10,
    margin: SIZES.base,
    justifyContent: "space-between",
  },
  title: {
    ...FONTS.subtitle,
    fontWeight: "bold"
  },
  body: {
    ...FONTS.body,
    color: "#666"
  },
  footer: {
    height: SIZES.padding / 2,
    justifyContent: "flex-end",
  },
  time: {
    ...FONTS.small,
    textAlign: "right",
  }
})

export default TaskListItem;