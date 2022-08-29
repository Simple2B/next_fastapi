import { ComponentMeta, ComponentStory } from '@storybook/react';
import ForgotPassword, { IForgotPassword } from './ForgotPassword';
import { mockForgotPasswordProps } from './ForgotPassword.mocks';

export default {
  title: 'forms/ForgotPassword',
  component: ForgotPassword,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ForgotPassword>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ForgotPassword> = (args) => (
  <ForgotPassword {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockForgotPasswordProps.base,
} as IForgotPassword;
