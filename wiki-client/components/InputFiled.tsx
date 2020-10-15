import React, {InputHTMLAttributes} from 'react';
import {FormControl,Input} from '@chakra-ui/core'


type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
};

const InputField: React.FC<InputFieldProps> = ({size : _, ...props}) =>{


    return (
        <FormControl>
            <Input 
            {... props}
            id={props.id}
            placeholder = {props.placeholder}></Input>
      </FormControl>);
}

export default InputField;