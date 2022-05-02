import * as Yup from 'yup';
import { ITask } from "../interfaces/task";
import { Storage } from "../services/storage";

const storage = new Storage();

export const getTasksFromStorage = async () => {
  try {
    const value:any = await storage.getTasks();
    return sortTasks(parseTasks(value));
  } catch (error) {
    console.log(error);
  }
}

export const addTaskToStorage = async (task: ITask) => {
  try {
    const tasks = await getTasksFromStorage();
    tasks?.push(task);
    await storage.setTasks(JSON.stringify(tasks));
  } catch (error) {
    console.log(error);
  }
}

export const updateTaskInStorage = async (task: ITask) => {
  try {
    const tasks = await getTasksFromStorage();
    const taskIndex = tasks?.findIndex((t: ITask) => t.id === task.id);
    // @ts-ignore
    tasks[taskIndex] = task;
    await storage.setTasks(JSON.stringify(tasks));
  } catch (error) {
    console.log(error);
  }
}

export const removeTaskFromStorage = async (taskId: string) => {
  try {
    const tasks = await getTasksFromStorage();
    const newTasks = tasks?.filter((t: ITask) => t.id !== taskId);
    await storage.setTasks(JSON.stringify(newTasks));
  } catch (error) {
    console.log(error);
  }
}

export const clearTasksFromStorage = async () => {
  try {
    await storage.removeTasks();
  } catch (error) {
    console.log(error);
  }
}


export const parseTasks = (tasks: string) => {
  if (tasks) {
    return JSON.parse(tasks);
  }
  return [];
}

export const stringifyTasks = (tasks: ITask[]) => {
  if (tasks) {
    return JSON.stringify(tasks);
  }
  return '';
}

export const sortTasks = (tasks: ITask[]) => {
  return tasks.sort((a: ITask, b: ITask) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });
}

export const parseTaskDate = (date: number) => {
  const dateObj = new Date(date);
  const dateString = dateObj.toLocaleDateString();
  const timeString = dateObj.toLocaleTimeString();
  return `${dateString} ${timeString}`;
}


export const wrapText = (text:string = '', maxLength:number) => {
  if (text && text.length > 0) {
    const textWithoutLineBreak = text.replace(/\n/g, ' ')
    const textArray = textWithoutLineBreak.split('');
    const textLength = textArray.length;
    if (textLength <= maxLength) return textWithoutLineBreak;
    const textArrayReduced = textArray.slice(0, maxLength);
    const textReduced = textArrayReduced.join('');
    let wrappedText = `${textReduced}...`;
    return wrappedText;
  }
  return null
}

export const validationSchema = Yup.object().shape({
  title: Yup.string().required('El título es requerido'),
  body: Yup.string().optional(),
});