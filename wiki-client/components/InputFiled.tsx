import React, {InputHTMLAttributes} from 'react';
import {FormControl,Input} from '@chakra-ui/core'
import { useField } from 'formik';


type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
};

const InputField: React.FC<InputFieldProps> = ({size : _, ...props}) =>{

    const [field] = useField(props);

    return (
        <FormControl>
            <Input 
            {... field}
            {... props}
            id={props.id}
            width="80%"
            height="50px"
            borderColor="black"
            backgroundColor="#d2d2d2"
            placeholder = {props.placeholder}></Input>
      </FormControl>);
}

export default InputField;