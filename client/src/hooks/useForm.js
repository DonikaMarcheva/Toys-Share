import { useState } from 'react';

export default function useForm(submitHandler, initialValues) {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialValues);

    const onChange = (e) => {
        
        setValues(state => ({
            ...state, [e.target.name]: e.target.value
        }))

        for (const key in values) {
            if (values[key].length === 0) {
                setErrors(state => ({
                    ...state, [key]: `${key} required`
                }))
            } else {
                if (key === 'email' && !/[A-Za-z1-9._]+@[a-z]+\.[a-z]+/.test(values[key])) {
                    setErrors(state => ({
                        ...state, [key]: `${key} must be valid`
                    }))
                }
                else if (key === 'password' && values[key].length < 6) {
                    setErrors(state => ({
                        ...state, [key]: `${key} must be min 6 characters`
                    }))
                } else if (key === 'repeat-password' && values[key] !== values['password']) {
                    setErrors(state => ({
                        ...state, [key]: `Passwords don\'t match`
                    }))
                }
                else {
                    setErrors(state => ({
                        ...state, [key]: 'ok'
                    }))
                }
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submitHandler(values);
        setValues(initialValues);
    };

        return {
        values,
        errors,
        onChange,
        onSubmit,
    }
}