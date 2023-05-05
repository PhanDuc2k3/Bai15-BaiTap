import React from "react";
import { useForm } from "react-hook-form";

export default function MedicalDeclarationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>   
      <label htmlFor="name">Họ và tên:</label>
      <input
        type="text"
        id="name"
        {...register("name", { required: true })}
      />
      </div>
      {errors.name && <span>Vui lòng nhập họ và tên.</span>}
      <div> 
      <label htmlFor="address">Địa chỉ:</label>
      <input
        type="text"
        id="address"
        {...register("address", { required: true })}
      />
      </div>
      {errors.address && <span>Vui lòng nhập địa chỉ.</span>}
      <div>  
      <label htmlFor="phone">Số điện thoại:</label>
      <input
        type="text"
        id="phone"
        {...register("phone", { required: true, pattern: /^\d+$/i })}
      />
      </div>
      {errors.phone && (
        <span>Vui lòng nhập số điện thoại và chỉ chứa các ký tự số.</span>
      )}
        <div>  
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      </div>
      {errors.email && (
        <span>Vui lòng nhập email và định dạng đúng.</span>
      )}
        <div>  
      <label htmlFor="symptoms">
        Trong vòng 14 ngày qua, bạn có dấu hiệu triệu chứng gì không?
      </label>
      </div>
      <div>
        <input type="checkbox" id="cough" {...register("cough")} />
        <label htmlFor="cough">Ho</label>
      </div>
      <div>
        <input type="checkbox" id="fever" {...register("fever")} />
        <label htmlFor="fever">Sốt</label>
      </div>
      <div>
        <input type="checkbox" id="fatigue" {...register("fatigue")} />
        <label htmlFor="fatigue">Mệt mỏi</label>
      </div>

      <button type="submit">Gửi đăng ký</button>
    </form>
  );
}
