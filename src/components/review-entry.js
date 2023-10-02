import "./review-entry.css";
import { useForm } from "../hooks/useForm";
import { reviewValidate } from "../validation/ValidationRules";

export default function ReviewEntry({ movieName }) {
  const { values, errors, handleChange, handleSubmit } = useForm(
    submitReview,
    reviewValidate
  );

  function submitReview() {
    console.log(values);
  }

  return (
    <div>
      <div className="review-entry-wrapper">
        <div className="review-entry-header">
          <h3>Leave a review for {movieName}!</h3>
        </div>
        <div className="review-entry-form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="review-entry-form-rating">
              <input
                type="radio"
                id="star5"
                name="rating"
                value="5"
                className="radio-btn hide"
                checked={values.rating === "5"}
                onChange={handleChange}
              />
              <label htmlFor="star5">☆</label>
              <input
                type="radio"
                id="star4"
                name="rating"
                value="4"
                className="radio-btn hide"
                checked={values.rating === "4"}
                onChange={handleChange}
              />
              <label htmlFor="star4">☆</label>
              <input
                type="radio"
                id="star3"
                name="rating"
                value="3"
                className="radio-btn hide"
                checked={values.rating === "3"}
                onChange={handleChange}
              />
              <label htmlFor="star3">☆</label>
              <input
                type="radio"
                id="star2"
                name="rating"
                value="2"
                className="radio-btn hide"
                checked={values.rating === "2"}
                onChange={handleChange}
              />
              <label htmlFor="star2">☆</label>
              <input
                type="radio"
                id="star1"
                name="rating"
                value="1"
                className="radio-btn hide"
                checked={values.rating === "1"}
                onChange={handleChange}
              />
              <label htmlFor="star1">☆</label>
            </div>
            {errors.rating && (
              <p className="error-message is-danger">{errors.rating}</p>
            )}
            <div className="review-entry-form-text">
              <textarea
                name="review"
                id="review"
                cols="60"
                rows="10"
                placeholder="Write your review here"
                value={values.review || ""}
                onChange={handleChange}
              ></textarea>
            </div>
            {errors.review && (
              <p className="error-message is-danger">{errors.review}</p>
            )}
            <input
              type="submit"
              className="review-entry-form-submit"
              value="Submit Review"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
