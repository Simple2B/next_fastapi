import { ComponentMeta, ComponentStory } from '@storybook/react';
import Success, { ISuccess } from './Success';
import { mockSuccessProps } from './Success.mocks';

export default {
  title: 'info/Success',
  component: Success,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Success>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Success> = (args) => (
  <Success {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSuccessProps.base,
} as ISuccess;
