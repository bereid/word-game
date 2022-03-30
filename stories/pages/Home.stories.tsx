import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Home from "../../pages/index";

export default {
  title: "Home",
  component: Home,
} as ComponentMeta<typeof Home>;

export const Primary: ComponentStory<typeof Home> = () => (
  <Home>
    <div>ide jön egy kontent</div>
  </Home>
);

export const Secondary: ComponentStory<typeof Home> = () => (
  <Home>
    <div>ide jön egy kontent2</div>
  </Home>
);
