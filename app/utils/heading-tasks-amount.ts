export function HeadingTasksAmount(numberOfTasks: number) {
  switch (true) {
    case numberOfTasks === 1:
      return "zadanie";
    case numberOfTasks > 1 && numberOfTasks < 5:
      return "zadania";
    case numberOfTasks > 4:
      return "zadań";
  }
}
