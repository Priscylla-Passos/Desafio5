import { Meta, StoryObj} from '@storybook/react'
import {TextInput, TextInputRootProps} from './TextInput'
import {MagnifyingGlass} from 'phosphor-react'

export default{
    title: 'Components/SearchBar',
    component: TextInput.Root,
    args: {
        children: (
            <>
            <TextInput.Icon>
                <MagnifyingGlass/>
            </TextInput.Icon>

            <TextInput.Input placeholder= 'Search Twitter'/>
            </>
        ),
    },
    argsTypes:{}
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}