import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function LoginForm({ props, values, errors, touched, isSubmitting }) {
    return (
        <div className="login-form">
            <Form>
                <div>
                    <label>
                        Name:
                        <Field name="username" type="text" placeholder="Username" />
                        {touched.username && errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
                    </label>
                    <label>
                        Password:
                        <Field name="password" type="text" placeholder="Password" />
                        {touched.password && errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                    </label>
                </div>
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
        </div>
    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Name is required'),
        password: Yup.string()
            .min(8, 'Password must be 8 characters or longer')
            .required('Password is required')
    }),
    handleSubmit(values, { props, resetForm, setSubmitting }) {
        axios
            .post('http://localhost:5000/api/register', values)
            .then(res => {
                console.log(res);
                resetForm();
                setSubmitting(false);

                axios
                    .get('http://localhost:5000/api/restricted/data')
                    .then(res => {
                        props.addUser(res);
                    })
                    .catch(err => {
                        console.log('Error on Get:', err);
                    });
            })
            .catch(err => {
                console.log(err);
                setSubmitting(false);
            });
    }
})(LoginForm);

export default FormikLoginForm;
