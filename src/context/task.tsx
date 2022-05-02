import React, { createContext, useReducer, Dispatch } from "react";
// import { getTasksFromStorage, addTaskToStorage, updateTaskInStorage, removeTaskFromStorage, clearTasksFromStorage, sortTasks } from "../utils/task";
import { taskReducer, TaskActions } from '../store/reducer'
import { ITask } from "../interfaces/task";

type InitialStateType = {
  task: ITask,
  tasks: ITask[],
  loading: boolean,
}

const initialState = {
  task: {} as ITask,
  tasks: [],
  loading: false,
}

const TaskContext = createContext<{ state: InitialStateType, dispatch: Dispatch<TaskActions> }>({
  state: initialState,
  dispatch: () => null,
});

const TaskProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskContext, TaskProvider };

// export const TaskContext = createContext({} as ITaskState);

// export const TaskProvider: React.FC = ({ children }) => {

//   useEffect(() => {
//     getTasks();
//   }, []);

//   const getTasks = async () => {
//     setLoading(true);
//     const tasks = await getTasksFromStorage();
//     // @ts-ignore
//     setTasks(tasks);
//     setLoading(false);
//   }
//   const addTask = async (task: ITask) => {
//     setTasks([...tasks, task]);
//     await addTaskToStorage(task);
//   }

//   const viewTask = (task: ITask) => {
//     setTask(task);
//   }

//   const updateTask = async (task: ITask) => {
//     const newTasks = tasks.map(t => (t.id === task.id ? task : t));
//     setTasks(newTasks);
//     await updateTaskInStorage(task);
//   }

//   const removeTask = async (taskId: string) => {
//     setTasks(tasks.filter(t => t.id !== taskId));
//     await removeTaskFromStorage(taskId);
//   }

//   const clearTask = () => {
//     setTask({} as ITask);
//   }

//   return (
//     <TaskContext.Provider
//       value={{
//         task,
//         tasks: sortTasks(tasks),
//         loading,
//         addTask,
//         viewTask,
//         updateTask,
//         removeTask,
//         clearTask
//       }}
//     >
//       {children}
//     </TaskContext.Provider>
//   )
// }