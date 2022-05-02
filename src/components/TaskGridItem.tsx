import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import icons from "../constants/icons";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { ITask } from "../interfaces/task"
import { parseTaskDate, wrapText } from "../utils/task";

interface ITaskGridItemProps {
  task: ITask;
  selectedTasks: string[];
  isOpenTaskSelector: boolean;
  onPressTask: (task: ITask) => void;
  onSelectTask: (taskId: string) => void;
}

const TaskGridItem: React.FC<ITaskGridItemProps> = ({ task, selectedTasks, isOpenTaskSelector, onPressTask, onSelectTask }) => {
  return (
    <TouchableOpacity
      onPress={() => isOpenTaskSelector ? onSelectTask(task.id)  : onPressTask(task)}
      onLongPress={() => onSelectTask(task.id)}
    >
      <View style={styles.task}>
        {
          isOpenTaskSelector && (
            <TouchableOpacity
              onPress={() => onSelectTask(task.id)}
              style={styles.selected}
            >
              <View>
                {
                  selectedTasks.includes(task.id) && (
                    <Image
                      source={icons.check}
                      style={styles.checkIcon}
                    />
                  )
                }
              </View>
            </TouchableOpacity>
          )
        }
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
  },
  selected: {
    position: "absolute",
    right: 10,
    bottom: 10,
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.gray,
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    width: 15,
    height: 15,
    tintColor: COLORS.success
  }
})

export default TaskGridItem;