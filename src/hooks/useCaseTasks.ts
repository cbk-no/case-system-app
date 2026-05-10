import {
  useTasksForCase,
  useCreateTask,
  useUpdateTask,
  useDeleteTask,
} from "./useTasks";
import { TaskStatus, type Task } from "src/types/task";

export function useCaseTasks(caseId: string) {
  const tasksQuery = useTasksForCase(caseId);

  const createTask = useCreateTask(caseId);
  const deleteTask = useDeleteTask(caseId);

  const updateTaskMutation = useUpdateTask(caseId);

  return {
    tasks: tasksQuery.data ?? [],
    isLoading: tasksQuery.isLoading,
    error: tasksQuery.error,

    addTask: (description: string, assignedUserId: string | null) =>
      createTask.mutate({
        description,
        caseId,
        status: TaskStatus.Todo,
        assignedUserId,
      }),

    updateTask: (taskId: string, update: Partial<Task>) =>
      updateTaskMutation.mutate({ taskId, update }),

    deleteTask: (taskId: string) => deleteTask.mutate(taskId),
  };
}
