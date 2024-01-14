import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // console.log(watch('name')); // watch input value by passing the name of it
  // console.log(watch('email')); // watch input value by passing the name of it

  const onSubmit = (formData: any) => console.log(formData);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
      <div className="flex gap-x-3">
        <div className="w-1/2 flex flex-wrap mb-4">
          <input
            {...register('name', { required: true })}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            placeholder="Masukkan nama Anda"
          />
        </div>
        <div className="w-1/2 flex flex-wrap mb-4">
          <input
            {...register('email', { required: true })}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            placeholder="Masukkan email Anda"
          />
          {errors.email && <span>This field is required</span>}
        </div>
      </div>
      <div className="flex flex-wrap mb-4">
        <div className="w-full">
          <input
            {...register('subject', { required: true })}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="subject"
            type="text"
            placeholder="Masukkan subjek"
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-4">
        <div className="w-full">
          <textarea
            {...register('message', { required: true })}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="message"
            placeholder="Masukkan pesan Anda"
          ></textarea>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <input type="submit" className="w-full bg-[#f7ab0a] hover:bg-[#FEC868] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
      </div>
    </form>
  );
}
