import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';


export interface TextInputRootProps{
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps){
    return(
        <div className='flex items-center py-2.5 px-20 rounded-full bg-dark-7 '>
            {props.children}
        </div>
    )
}

export interface TextInputIconProps{
    children:ReactNode;
}
function TextInputIcon(props: TextInputIconProps){
    return(
        <Slot className='w-4 h-4 text-dark-5'>
            {props.children}

        </Slot>
    )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput(props: TextInputInputProps){
    return(
        <input
            className=" bg-dark-7 text-dark-5 text-lg font-medium placeholder:text-dark-5"
                {...props}
            />
          
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}