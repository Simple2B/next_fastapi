import { ComponentMeta, ComponentStory } from '@storybook/react';
import Error, { IError } from './Error';
import { mockErrorProps } from './Error.mocks';

export default {
  title: 'info/Error',
  component: Error,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Error>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockErrorProps.base,
} as IError;
