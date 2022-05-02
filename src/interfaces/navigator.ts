import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ITask } from './task';

interface ITaskDetailsParams {
  task: ITask;
}

export type AppNavigatorParamsList = {
  SplashScreen: undefined;
  HomeScreen: undefined;
  TaskEditorScreen: undefined;
  TaskDetailsScreen: ITaskDetailsParams;
}

export type SplashScreenProps = NativeStackScreenProps<AppNavigatorParamsList, 'SplashScreen'>;
export type HomeScreenProps = NativeStackScreenProps<AppNavigatorParamsList, 'HomeScreen'>;
export type TaskEditorScreenProps = NativeStackScreenProps<AppNavigatorParamsList, 'TaskEditorScreen'>;
export type TaskDetailsScreenProps = NativeStackScreenProps<AppNavigatorParamsList, 'TaskDetailsScreen'>;