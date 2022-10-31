import { Meta, StoryObj} from '@storybook/react'
import {Button, ButtonProps} from './Button'

export default{
    title: 'Components/Button',
    component: Button,
    args: {
       children: 'Tweet',
       size: 'sm',
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}



