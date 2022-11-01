import { Meta, StoryObj} from '@storybook/react'
import {Text, TextProps} from './Text'

export default{
    title: 'Components/Text',
    component: Text,
    args: {
       children: 'Lorem ipsum.',
       size: 'lg',
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const moreSmall: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const small: StoryObj<TextProps> = {
    args: {
        size: 'md'
    }
}

export const large: StoryObj<TextProps> = {
    args: {
        size: 'xl'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children:(
            <p>Testando</p>
        )
    },
    argTypes: {
       children: {
        table: {
            disable: true,

        }
       },
       asChild: {
        table: {
            disable: true,
        }
       } 
    }
}


