import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // For validation
import styled from 'styled-components'; // For styling

// Styled components
const FormContainer = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
  }
`;

const ErrorText = styled.div`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  background-color: #0066cc;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0052a3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

// Validation schema
const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must contain only digits')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

export const MyFormikComponent = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
      resetForm();
      alert('Form submitted successfully!');
    }, 1000);
  };

  return (
    <FormContainer>
      <h2>Contact Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <FormGroup>
              <Label htmlFor="firstName">First Name</Label>
              <StyledField
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
              />
              <ErrorMessage name="firstName" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="lastName">Last Name</Label>
              <StyledField
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
              />
              <ErrorMessage name="lastName" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <StyledField
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">Phone</Label>
              <StyledField
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
              />
              <ErrorMessage name="phone" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <StyledField
                as="textarea"
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="4"
              />
              <ErrorMessage name="message" component={ErrorText} />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};
