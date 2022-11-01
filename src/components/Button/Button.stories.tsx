import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';


export default {
  title: 'Components/Button',
  component: Button,
 
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryBig = Template.bind({});

PrimaryBig.args = {
    label: 'Tweet',
    size: 'primaryBig',
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
    size: 'primaryMedium',
    label: 'Tweet',
};


export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  label: 'Tweet',
  size: 'secondarySmall',
};


export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
   label: 'Tweet',
   size: 'secondaryMedium',
};
