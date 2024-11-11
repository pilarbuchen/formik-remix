import { Formik, Form, Field } from 'formik';

export const MyFormikComponent = () => (
    <div>
        <Formik initialValues={{ email: '' }} onSubmit={(values) => console.log(values)}>
            <Form>
                <label>Email:</label>
                <Field type="email" name="email" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
);
