import React, { useEffect, useState } from "react";
import { Alert, BackHandler, Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Container from "../components/Container";
import Fab from "../components/Fab";
import TaskGrid from "../components/Grid";
import Header from "../components/Header";
import TaskList from "../components/List";
import SearchBar from "../components/SearchBar";
import icons from "../constants/icons";
import { userBackHandler } from "../hooks/useBackHandler";
import { useTask } from "../hooks/useTask";
import { HomeScreenProps } from "../interfaces/navigator";
import { ITask } from "../interfaces/task";
import { Types } from "../store/reducer";
import { getTasksFromStorage, removeMultipleTasksFromStorage, sortTasks } from "../utils/task";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  userBackHandler({ isHome: true })
  const { state: { tasks }, dispatch } = useTask()
  const [notes, setNotes] = useState<ITask[]>([])
  const [search, setSearch] = useState("");
  const [showInList, setShowInList] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [isOpenTaskSelector, setIsOpenTaskSelector] = useState(false);

  useEffect(() => {
    getTasks()
  }, [])

  useEffect(() => {
    const newNotes = tasks.filter(note => note.title.toLowerCase().includes(search.toLowerCase()) || note.body?.toLowerCase().includes(search.toLowerCase()))
    setNotes([...newNotes])
  }, [tasks, search]);
  
  const getTasks = async () => {
    const tasks = await getTasksFromStorage();
    // @ts-ignore
    dispatch({
      type: Types.GetTasks,
      payload: {
        tasks,
      }
    })
  }

  const toggleViewMode = () => {
    setShowInList(!showInList);
  }

  const onPressTask = (task:ITask) => {
    dispatch({
      type: Types.ViewTask,
      payload: {
        task,
      }
    })
    navigation.navigate("TaskDetailsScreen");
  }

  const createTask = () => {
    navigation.navigate("TaskEditorScreen", {});
  }

  const onSelectTask = (taskId:string) => {
    if (selectedTasks.length === 0) {
      setIsOpenTaskSelector(true);
    }
    if (selectedTasks.includes(taskId)) {
      setSelectedTasks(selectedTasks.filter(id => id !== taskId))
    } else {
      setSelectedTasks([...selectedTasks, taskId])
    }
  }

  const onPressSelectAll = () => {
    if (selectedTasks.length === 0 || selectedTasks.length > 0 && selectedTasks.length < tasks.length) {
      setSelectedTasks(tasks.map(task => task.id))
    } else if (selectedTasks.length === tasks.length) {
      setSelectedTasks([])
    }
  }

  const onPressClose = () => {
    setIsOpenTaskSelector(false);
    setSelectedTasks([])
  }

  const onPressDelete = () => {
    Alert.alert('Borrar notas', `¿Borrar las notas seleccionadas?`, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Borrar',
        onPress: onConfirmDelete,
      }
    ])
  }

  const onConfirmDelete = async () => {
    dispatch({
      type: Types.RemoveMultipleTasks,
      payload: {
        taskIds: selectedTasks,
      }
    })
    await removeMultipleTasksFromStorage(selectedTasks);
    setSelectedTasks([])
    setIsOpenTaskSelector(false);
  }

  const onPressStatistics = () => {
    navigation.navigate("StatisticsScreen");
  }

  return (
    <Container>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <>
          <Header
            viewMode={showInList}
            isOpenTaskSelector={isOpenTaskSelector}
            onPressViewMode={toggleViewMode}
            onPressSelectAll={onPressSelectAll}
            onPressClose={onPressClose}
            onPressStatistics={onPressStatistics}
          />
          <SearchBar
            value={search}
            onChangeText={setSearch}
          />
          {showInList ?
            (
              <TaskList
                tasks={sortTasks(notes)}
                isOpenTaskSelector={isOpenTaskSelector}
                selectedTasks={selectedTasks}
                onSelectTask={onSelectTask}
                onPressTask={onPressTask}
              />
            )
            :
            (
              <TaskGrid
                tasks={sortTasks(notes)}
                isOpenTaskSelector={isOpenTaskSelector}
                selectedTasks={selectedTasks}
                onSelectTask={onSelectTask}
                onPressTask={onPressTask}
              />
            )
          }
        </>
      </TouchableWithoutFeedback>
      {
        !isOpenTaskSelector && (
          <Fab
            icon={icons.plus}
            onPress={createTask}
          />
        )
      }
      {
        isOpenTaskSelector && selectedTasks.length > 0 && (
          <Fab
            icon={icons.deleteIcon}
            onPress={onPressDelete}
          />
        )
      }
    </Container>
  );
}

const styles = StyleSheet.create({
  
})

export default HomeScreen;