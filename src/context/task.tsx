import React, { useEffect, useState } from "react";
import { ITaskState } from "../interfaces/state";
import { ITask } from "../interfaces/task";
import { getTasksFromStorage, addTaskToStorage, updateTaskInStorage, removeTaskFromStorage, clearTasksFromStorage, sortTasks } from "../utils/task";

export const TaskContext = React.createContext({} as ITaskState);

export const TaskProvider: React.FC = ({ children }) => {
  const [task, setTask] = useState<ITask>({} as ITask);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // clearTasksFromStorage();
    getTasks();
  }, []);

  const getTasks = async () => {
    setLoading(true);
    const tasks = await getTasksFromStorage();
    // @ts-ignore
    setTasks(tasks);
    setLoading(false);
  }
  const addTask = async (task: ITask) => {
    setTasks([...tasks, task]);
    await addTaskToStorage(task);
  }

  const viewTask = (task: ITask) => {
    setTask(task);
  }

  const updateTask = async (task: ITask) => {
    const newTasks = tasks.map(t => (t.id === task.id ? task : t));
    setTasks(newTasks);
    await updateTaskInStorage(task);
  }

  const removeTask = async (taskId: string) => {
    setTasks(tasks.filter(t => t.id !== taskId));
    await removeTaskFromStorage(taskId);
  }

  const clearTask = () => {
    setTask({} as ITask);
  }

  return (
    <TaskContext.Provider
      value={{
        task,
        tasks: sortTasks(tasks),
        loading,
        addTask,
        viewTask,
        updateTask,
        removeTask,
        clearTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}