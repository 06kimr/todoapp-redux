import { Meta, StoryObj } from "@storybook/react";
import TodoInput from "./TodoInput";
import { fn } from "@storybook/test";

const meta = {
  title: "todo/TodoInput",
  component: TodoInput,
  args: {
    onAddTodo: fn(),
  },
} satisfies Meta<typeof TodoInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
