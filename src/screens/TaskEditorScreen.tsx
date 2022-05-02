import React, { useEffect, useRef, useState } from "react";
import { Keyboard, KeyboardAvoidingView, StyleSheet } from "react-native";
import { Formik, FormikProps, FormikValues } from 'formik';
import Container from "../components/Container";
import Editor from "../components/Editor";
import EditorHeader from "../components/EditorHeader";
import { TaskEditorScreenProps } from "../interfaces/navigator";
import { addTaskToStorage, updateTaskInStorage, validationSchema } from "../utils/task";
import EditorTitle from "../components/EditorTitle";
import Fab from "../components/Fab";
import icons from "../constants/icons";
import { useTask } from "../hooks/useTask";
import { userBackHandler } from "../hooks/useBackHandler";
import { Types } from "../store/reducer";

const TaskEditorScreen:React.FC<TaskEditorScreenProps> = ({ navigation, route }) => {
  userBackHandler({ isHome: false })
  const { dispatch } = useTask()
  const { task } = route.params || {}
  const [isEditable, setIsEditable] = useState(true)
  const formRef = useRef<FormikProps<FormikValues>>(null)
  
  useEffect(() => {
    if (task) {
      formRef.current?.setValues(task)
    }
  }, [task])

  const onGoBack = () => {
    navigation.goBack();
  }
  
  const onSubmit = async (values: any) => {
    if (task) {
      const updatedTask = {
        ...task,
        ...values
      }
      await dispatch({
        type: Types.UpdateTask,
        payload: {
          task: updatedTask
        }
      })
      await updateTaskInStorage(updatedTask)
    } else {
      const newTask = {
        id: Math.random().toString(),
        ...values,
        created_at: new Date().getTime(),
      }
      setIsEditable(false)
      dispatch({
        type: Types.AddTask,
        payload: {
          task: newTask
        }
      })
      await addTaskToStorage(newTask)
    }
    onGoBack()
  }

  const onPressSave = () => {
    if (formRef.current) {
      Keyboard.dismiss();
      formRef.current.handleSubmit()
    }
  }

  return (
    <Container>
      <KeyboardAvoidingView
        style={styles.container}
      >
        <EditorHeader
          onPressBack={onGoBack}
        />
        <Formik
          innerRef={formRef}
          initialValues={{
            title: "",
            body: ""
          }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount={true}
        >
          {({ handleChange, values, isValid }) => (
            <>
              <EditorTitle
                editable={isEditable}
                value={values.title}
                onChangeText={handleChange("title")}
              />
              <Editor
                editable={isEditable}
                value={values.body}
                onChangeText={handleChange("body")}
              />
              {
                isValid && (
                  <Fab
                    icon={icons.check}
                    onPress={onPressSave}
                  />
                )
              }
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default TaskEditorScreen;