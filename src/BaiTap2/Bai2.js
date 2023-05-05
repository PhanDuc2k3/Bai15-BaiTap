import React from "react";
import { useFormik } from "formik";

export default function EmailForm() {
  const formik = useFormik({
    initialValues: {
      to: "",
      subject: "",
      message: "",
      attachment: null
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const errors = {};
      if (!values.to) {
        errors.to = "Vui lòng nhập địa chỉ email người nhận.";
      } else if (!/^\S+@\S+$/i.test(values.to)) {
        errors.to = "Địa chỉ email người nhận không đúng định dạng.";
      }
      if (!values.subject) {
        errors.subject = "Vui lòng nhập chủ đề.";
      }
      if (!values.message) {
        errors.message = "Vui lòng nhập nội dung.";
      }
      return errors;
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
        <div>
      <label htmlFor="to">Người nhận:</label>
      <input
        type="text"
        id="to"
        name="to"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.to}
      />
      </div>
      {formik.touched.to && formik.errors.to && (
        <div className="error">{formik.errors.to}</div>
      )}
        <div>
      <label htmlFor="subject">Chủ đề:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.subject}
      /></div>
      {formik.touched.subject && formik.errors.subject && (
        <div className="error">{formik.errors.subject}</div>
      )}
        <div>
      <label htmlFor="message">Nội dung:</label>
      <textarea
        id="message"
        name="message"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
      /></div>
      {formik.touched.message && formik.errors.message && (
        <div className="error">{formik.errors.message}</div>
      )}
        <div>
      <label htmlFor="attachment">Tệp đính kèm:</label>
      <input
        type="file"
        id="attachment"
        name="attachment"
        onChange={(event) => {
          formik.setFieldValue("attachment", event.currentTarget.files[0]);
        }}
      />
        </div>
      <button type="submit">Gửi email</button>
    </form>
  );
}
