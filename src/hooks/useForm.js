import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

const useFormName = (callback, validate) => {
  const [nvalues, setValues] = useState({});
  const [nerrors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(nerrors).length === 0 && isSubmitting) {
      callback();
    }
  }, [nerrors]);

  const nhandleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(nvalues));
    setIsSubmitting(true);
  };

  const nhandleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    nhandleChange,
    nhandleSubmit,
    nvalues,
    nerrors,
  };
};

const useFormPassword = (callback, validate, login) => {
  const [pw_values, setValues] = useState({});
  const [pw_errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(pw_errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [pw_errors]);

  const pw_handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(pw_values, login));
    setIsSubmitting(true);
  };

  const pw_handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    pw_handleChange,
    pw_handleSubmit,
    pw_values,
    pw_errors,
  };
};

export { useForm, useFormName, useFormPassword };
