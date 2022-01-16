import React, { Component } from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../Button';

const nameRegEx = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegEx =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegEx, 'The name must contain only characters')
    .required(),
  number: yup
    .string()
    .matches(phoneRegEx, 'Phone number is not valid')
    .min(7, "It's not looks like phone!")
    .max(13, 'Must be minimum 7 maximum 13 digits ')
    .required(),
});

export default class AppForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    this.props.getSubmitData(values);
    resetForm();
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{ name: '', number: '' }}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
        >
          <Form>
            <div className="FormField">
              <label htmlFor="name">Contact Name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />
            </div>

            <div className="FormField">
              <label htmlFor="number">Contact Number</label>
              <Field name="number" type="tel" />
              <ErrorMessage name="number" />
            </div>

            <Button type={'submit'} title={'Add Contact'} />
          </Form>
        </Formik>
      </div>
    );
  }
}
