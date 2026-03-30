import {
  useTasksForCase,
  useCreateTask,
  useUpdateTask,
  useDeleteTask,
} from "./useTasks";
import { TaskStatus, type Task } from "src/types/task";

export function useCaseTasks(caseId: string) {
  const tasksQuery = useTasksForCase(caseId);

  const createTask = useCreateTask();
  const deleteTask = useDeleteTask();

  function updateTask(taskId: string, update: Partial<Task>) {
    const mutation = useUpdateTask(taskId);
    mutation.mutate(update);
  }

  return {
    tasks: tasksQuery.data ?? [],
    isLoading: tasksQuery.isLoading,
    error: tasksQuery.error,

    addTask: (description: string) =>
      createTask.mutate({
        description,
        caseId,
        status: TaskStatus.Todo, 
        assignedUserId: null, // or default user
      }),

    updateTask,

    deleteTask: (taskId: string) => deleteTask.mutate(taskId),
  };
}
