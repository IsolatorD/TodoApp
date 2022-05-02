import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { ITask } from "../interfaces/task"
import { parseTaskDate, wrapText } from "../utils/task";

interface ITaskGridItemProps {
  task: ITask;
  onPressTask: (task: ITask) => void;
}

const TaskGridItem: React.FC<ITaskGridItemProps> = ({ task, onPressTask }) => {
  return (
    <TouchableOpacity
      onPress={() => onPressTask(task)}
    >
      <View style={styles.task}>
        <View>
          <Text style={styles.title}>
            {wrapText(task.title, 13)}
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
    width: SIZES.width / 2 - SIZES.padding,
    height: 150,
    // maxHeight: 150,
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
  }
})

export default TaskGridItem;