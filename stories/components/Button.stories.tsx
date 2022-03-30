import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    fontWeight: {
      control: {
        type: "check",
      },
    },
    buttonType: {
      defaultValue: "primary",
    },
  },
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = (args) => (
  <Button title={"Click here"} {...args} />
);
