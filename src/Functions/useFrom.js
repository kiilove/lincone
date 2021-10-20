import { useEffect, useState } from "react";

function useForm({ initialValues, onSubmit, validate }) {
  const [values, setvalues] = useState(initialValues);
  const [err, setErr] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setvalues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    setSubmitting(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 100));
    setErr(validate(values));
  };

  useEffect(() => {
    if (submitting) {
      if (Object.keys(err).length === 0) {
        onSubmit(values);
      }
      setSubmitting(false);
    }
  }, [err]);

  return {
    values,
    err,
    submitting,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
