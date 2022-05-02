import React, { useState } from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Container from "../components/Container";
import Fab from "../components/Fab";
import TaskGrid from "../components/Grid";
import Header from "../components/Header";
import TaskList from "../components/List";
import SearchBar from "../components/SearchBar";
import icons from "../constants/icons";
import { useTask } from "../hooks/useTask";
import { HomeScreenProps } from "../interfaces/navigator";
import { ITask } from "../interfaces/task";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { tasks } = useTask()
  const [search, setSearch] = useState("");
  const [showInList, setShowInList] = useState(false);

  console.log(tasks);
  const toggleViewMode = () => {
    setShowInList(!showInList);
  }

  const onPressTask = (task:ITask) => {
    navigation.navigate("TaskDetailsScreen", { task });
  }

  const createTask = () => {
    navigation.navigate("TaskEditorScreen");
  }

  return (
    <Container>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <>
          <Header
            viewMode={showInList}
            onPressViewMode={toggleViewMode}
          />
          <SearchBar
            value={search}
            onChangeText={setSearch}
          />
          {showInList ?
            (
              <TaskList tasks={tasks} onPressTask={onPressTask}/>
            )
            :
            (
              <TaskGrid tasks={tasks} onPressTask={onPressTask}/>
            )
          }
        </>
      </TouchableWithoutFeedback>
      <Fab
        icon={icons.plus}
        onPress={createTask}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  
})

export default HomeScreen;