import { createFileRoute } from "@tanstack/react-router";
import { TaskPlanner } from "@/components/TaskPlanner";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [
      { title: "AI Task Planner | AI Workplace Assistant" },
      {
        name: "description",
        content:
          "Turn a goal into a prioritised task plan with effort estimates, a daily schedule and a definition of done.",
      },
      { property: "og:title", content: "AI Task Planner" },
      {
        property: "og:description",
        content: "Break goals into prioritised, realistic tasks and a daily schedule.",
      },
    ],
  }),
  component: TaskPlanner,
});
