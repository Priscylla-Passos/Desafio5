import { Meta, StoryObj} from '@storybook/react'
import {Menu, MenuProps} from './Menu'

export default{
    title: 'Components/Menu',
    component: Menu,
    args: {
       children: 'Home',
       
    }
} as Meta<MenuProps>

export const Default: StoryObj<MenuProps> = {}

export const moreSmall: StoryObj<MenuProps> = {
    args: {
        size: 'sm'
    }
}

export const small: StoryObj<MenuProps> = {
    args: {
        size: 'md'
    }
}

export const large: StoryObj<MenuProps> = {
    args: {
        size: 'xl'
    }
}

export const CustomComponent: StoryObj<MenuProps> = {
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


