import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";
import { fn } from "@storybook/test";

const meta = {
  title: "common/Checkbox",
  component: Checkbox,
  args: {
    onChange: fn(),
  },
  argTypes: {
    checked: { control: "boolean" },
    label: { control: "text" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "checkbox",
    label: "Checkbox",
    checked: false,
  },
};

export const LongText: Story = {
  args: {
    id: "checkbox",
    label: "This is very long label for a checkbox",
    checked: false,
  },
}
