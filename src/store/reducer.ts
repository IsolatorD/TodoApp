import { ITaskState } from "../interfaces/state";
import { ITask } from "../interfaces/task";

type ActionMap<M extends { [index: string]: any }> = {
  [key in keyof M]: M[key] extends undefined
    ? {
        type: key;
      }
      :
      {
        type: key;
        payload: M[key];
      }
}

export enum Types {
  GetTasks = 'GET_TASKS',
  ViewTask = 'VIEW_TASK',
  AddTask = 'ADD_TASK',
  DeleteTask = 'DELETE_TASK',
  UpdateTask = 'UPDATE_TASK',
  ClearTask = 'CLEAR_TASK',
  RemoveMultipleTasks = 'REMOVE_MULTIPLE_TASKS',
}

type TaskPayload = {
  [Types.GetTasks]: {
    tasks: ITask[];
  };
  [Types.ViewTask]: {
    task: ITask;
  };
  [Types.AddTask]: {
    task: ITask;
  };
  [Types.DeleteTask]: {
    taskId: string;
  };
  [Types.UpdateTask]: {
    task: ITask;
  };
  [Types.ClearTask]: {};
  [Types.RemoveMultipleTasks]: {
    taskIds: string[];
  };
}

export type TaskActions = ActionMap<TaskPayload>[keyof ActionMap<TaskPayload>];

export const taskReducer = (state: ITaskState, action: TaskActions) => {
  switch (action.type) {
    case Types.GetTasks:
      return {
        ...state,
        tasks: action.payload.tasks,
        loading: false,
      };
    case Types.ViewTask:
      return {
        ...state,
        task: action.payload.task
      };
    case Types.AddTask:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
      };
    case Types.DeleteTask:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.taskId)
      };
    case Types.UpdateTask:
      return {
        ...state,
        task: action.payload.task,
        tasks: state.tasks.map(task => task.id === action.payload.task.id ? {...task, ...action.payload.task} : task)
      };
    case Types.ClearTask:
      return {
        ...state,
        task: {}
      };
    case Types.RemoveMultipleTasks:
      return {
        ...state,
        tasks: state.tasks.filter(task => !action.payload.taskIds.includes(task.id))
      };
    default:
      return state;
  }
}