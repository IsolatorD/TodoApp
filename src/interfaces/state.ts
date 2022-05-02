import { ITask } from "./task";

export interface ITaskState {
  task: ITask;
  tasks: ITask[];
  loading: boolean;
  addTask: (task: ITask) => void;
  viewTask: (task: ITask) => void;
  updateTask: (task: ITask) => void;
  removeTask: (taskId: string) => void;
  clearTask: () => void;
}