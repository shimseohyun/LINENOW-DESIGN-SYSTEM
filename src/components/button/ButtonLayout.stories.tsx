import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import ButtonLayout from "./ButtonLayout";
import Button from "./Button";

const meta = {
  title: "Components/ButtonLayout",
  component: ButtonLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"], // 자동 문서 생성
} satisfies Meta<typeof ButtonLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

// 기본 버튼 스토리
export const Col1: Story = {
  args: {
    style: { width: "22rem" },
    $col: 1,
    $rowGap: "0.5rem",
    $colGap: "0.5rem",
    children: [
      <Button>primary</Button>,
      <Button shape={"outline"} scheme={"grayLight"}>
        second
      </Button>,
    ],
  },
};

export const Col2: Story = {
  args: {
    style: { width: "375px" },
    $col: 2,
    children: [
      <Button shape={"outline"} scheme={"grayLight"}>
        second
      </Button>,
      <Button>primary</Button>,
    ],
  },
};

export const Col2Temeplate: Story = {
  args: {
    style: { width: "375px" },
    $col: 2,
    $colTemplate: "1fr 5rem",
    children: [
      <Button>primary</Button>,
      <Button scheme={"blueLight"}>sec</Button>,
    ],
  },
};
