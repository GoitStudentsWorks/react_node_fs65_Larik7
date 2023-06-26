import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { StarRating } from './FeedbackForm.styled';
import { PencilBtn, TrashBn } from './FeedbackForm.styled';
import css from './feedbackForm.module.css';

// import { useDispatch } from 'react-redux';

let userValidSchema = object({
  rating: string().required(),
  text: string().required(),
});
export const FeedbackForm = ({ editedRating, editedMessage, editedId }) => {
  //   const dispatch = useDispatch();
  const [rating, setRating] = useState(editedRating || 0);
  const [message, setMessage] = useState(editedMessage || '');
  const [hover, setHover] = useState(null);
  const [id, setId] = useState('');

  console.log(id);
  useEffect(() => {
    // if (isEditReview) {
    //   setRating(editedRating);
    //   setMessage(editedMessage);
    //   setId(editedId);
    // }
  }, [editedMessage, editedRating, editedId]);
  const reset = () => {
    setMessage('');
    setRating(0);
    setHover(null);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const currentMessage = e.currentTarget.message.value;
    if (!rating) {
      return;
    }
    if (message.length <= 6) {
      return;
    }
    if (message.length >= 300) {
      return;
    }
    // if (isEditReview) {
    //   if (editedMessage === currentMessage && editedRating === rating) {
    //     return;
    //   }
    //   reset();
    // } else {
    //   reset();
    // }
  };
  return (
    <Formik
      initialValues={{ rating, message }}
      validationSchema={userValidSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.feedbackForm}>
        <label className={css.feedbackFormLabel}>Rating</label>
        <div className={css.starContainerWrap}>
          {[...Array(5)].map((star, i) => {
            const ratingValue = 1 + i;
            return (
              <label key={i}>
                <Field
                  className={css.feedbackFormStarInput}
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <StarRating
                  fill={
                    ratingValue <= (hover || rating) ? '#FFAC33' : '#CEC9C1'
                  }
                  width={24}
                  height={24}
                  style={{ marginRight: 1 }}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <div>
          <div className={css.labelandBtn}>
            <label htmlFor="FBId" className={css.feedbackFormLabel}>
              Review
            </label>
            {!editedRating ? (
              <div className={css.btnWrap}>
                <PencilBtn />
                <TrashBn />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <Field
            className={css.textInput}
            type="text"
            required
            value={message}
            onChange={event => setMessage(event.currentTarget.value)}
            id="FBId"
            name="message"
            placeholder="Enter text"
          />
        </div>
        <div className={css.btnWrap}>
          {editedRating === rating && editedMessage === message ? (
            <button className={css.btnSaveOrEdit} type="button">
              Edit
            </button>
          ) : (
            <button className={css.btnSaveOrEdit} type="submit">
              Save
            </button>
          )}
          <button className={css.btnCancel} type="button">
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
};
