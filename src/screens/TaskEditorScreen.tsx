import React, { useRef, useState } from "react";
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Formik, FormikProps, FormikValues } from 'formik';
import Container from "../components/Container";
import Editor from "../components/Editor";
import EditorHeader from "../components/EditorHeader";
import { useKeyboard } from "../hooks/useKeyboard";
import { TaskEditorScreenProps } from "../interfaces/navigator";
import { validationSchema } from "../utils/task";
import EditorTitle from "../components/EditorTitle";
import Fab from "../components/Fab";
import icons from "../constants/icons";
import { useTask } from "../hooks/useTask";


const TaskEditorScreen:React.FC<TaskEditorScreenProps> = ({ navigation }) => {
  const { isKeyboardOpen } = useKeyboard()
  const { addTask } = useTask()
  const [isEditable, setIsEditable] = useState(true)
  const formRef = useRef<FormikProps<FormikValues>>(null)
  
  const onGoBack = () => {
    navigation.goBack();
  }
  
  const onSubmit = async (values: any) => {
    console.log(values);
    const task = {
      id: Math.random().toString(),
      ...values,
      created_at: new Date().getTime(),
    }
    setIsEditable(false)
    await addTask(task)
    onGoBack()
  }

  const onPressSave = () => {
    if (formRef.current) {
      Keyboard.dismiss();
      formRef.current.handleSubmit()
    }
  }

  const onPressUndo = () => {}

  const onPressRedo = () => {}

  return (
    <Container>
      <KeyboardAvoidingView
        style={styles.container}
      >
        <EditorHeader
          isKeyboardOpen={isKeyboardOpen}
          onPressBack={onGoBack}
          onPressUndo={onPressUndo}
          onPressRedo={onPressRedo}
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