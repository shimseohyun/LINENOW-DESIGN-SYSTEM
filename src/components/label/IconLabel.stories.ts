import type { Meta, StoryObj } from "@storybook/react";
import IconLabel from "./IconLabel";

const meta = {
  title: "Components/IconLabel",
  component: IconLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"], // 자동 문서 생성
} satisfies Meta<typeof IconLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LargeDefault: Story = {
  args: {
    font: "b1",
    gap: "0.12rem",
    icon: { name: "right_gray", size: "1rem" },
    children: "hello",
  },
};
