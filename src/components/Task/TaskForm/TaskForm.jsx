// Компонент форми для створення завдання
import css from './TaskForm.module.css';
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { IoMdClose } from 'react-icons/io';
import { SlPencil } from 'react-icons/sl';

export const TaskForm = ({ initialData, onClose }) => {
  const [task, setTask] = useState({});

  const initialValues = {
    title: 'Enter text',
    start: '9:00',
    end: '14:00',
    picked: 'low',
  };

  const handleSubmit = (values, { resetForm }) => {
    // Обробка введених даних
    setTask(values);

    resetForm();
  };

  console.log(task);

  return (
    <div className={css.modal_form}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form className={css.form}>
            <div className={css.box}>
              <label className={css.label} htmlFor="title">
                Title
              </label>
              <Field
                className={css.field}
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
            </div>
            <div className={css.box_time}>
              <div className={css.box}>
                <label className={css.label} htmlFor="start">
                  Start
                </label>
                <Field
                  className={css.field}
                  type="text"
                  name="start"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.start}
                />
              </div>
              <div className={css.box}>
                <label className={css.label} htmlFor="end">
                  End
                </label>
                <Field
                  className={css.field}
                  type="text"
                  name="end"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.end}
                />
              </div>
            </div>

            <div className={css.radio_group}>
              <label>
                <Field
                  className={css.hidden}
                  type="radio"
                  name="picked"
                  value="low"
                />
                <span
                  className={`${css.radio_button} ${css.radio_button_low}`}
                ></span>
                Low
              </label>
              <label>
                <Field
                  className={css.hidden}
                  type="radio"
                  name="picked"
                  value="medium"
                />
                <span
                  className={`${css.radio_button} ${css.radio_button_medium}`}
                ></span>
                Medium
              </label>
              <label>
                <Field
                  className={css.hidden}
                  type="radio"
                  name="picked"
                  value="high"
                />
                <span
                  className={`${css.radio_button} ${css.radio_button_high}`}
                ></span>
                High
              </label>
            </div>

            <button className={css.icon_close} onClick={onClose}>
              {<IoMdClose className={css.icon} />}
            </button>
            <button className={css.button} type="submit">
              {<SlPencil className={css.icon_pencil} />}
              Edit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
