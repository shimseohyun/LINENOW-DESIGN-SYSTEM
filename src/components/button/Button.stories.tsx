import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button"; // Button 컴포넌트 경로

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"], // 자동 문서 생성
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// 기본 버튼 스토리
export const LargeDefault: Story = {
  args: {
    children: "button",
    scheme: "blue",
    shape: "fill",
  },
};

export const LargeIcon: Story = {
  args: {
    children: [
      <span>대기 재개하기</span>,
      <img src="https://i.ibb.co/CJBMF3K/play-arrow-24dp-5-F6368-FILL0-wght400-GRAD0-opsz24.png" />,
    ],
    width: "22rem",
    scheme: "blue",
    shape: "fill",
  },
};

export const LargeDisable: Story = {
  args: {
    children: "부스 운영 전이에요",
    width: "22rem",
    shape: "fill",
    disabled: true,
  },
};
export const LargeTimer: Story = {
  args: {
    children: [<span>입장 확정하기</span>, <span>3:00</span>],
    width: "22rem",
    scheme: "lime",
    shape: "fill",
  },
};

export const LargeInformation: Story = {
  args: {
    children: [<span>내 앞으로 지금</span>, <span>12 팀</span>],
    width: "22rem",
    scheme: "blueLight",
    shape: "fill",
    onClick: undefined,
  },
};
