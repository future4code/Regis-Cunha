import { useState, useEffect } from "react";
import axios from "axios";

import React from 'react';
import useForm from './hooks/useForm';

  const useForm = () => {
      [{ values, loading }, handleChange, handleSubmit] = useForm();

  const enviarContato = () => {
    // faça o que for preciso :)
    console.log(values);
  };

  return (
    <div>
      <h1>Contato</h1>
      <form onSubmit={handleSubmit(enviarContato)}>
        <input
          onChange={handleChange}
          type="text"
          name="trip"
          placeholder="Choice a trip"
        />
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="age"
          placeholder="Age"
        />

        <input
          onChange={handleChange}
          type="text"
          name="text"
          placeholder="Text Aplication"
        />

        <input
          onChange={handleChange}
          type="text"
          name="profession"
          placeholder="Profession"
        />

        <input
          onChange={handleChange}
          type="text"
          name="country"
          placeholder="Choice a Country"
        />
        
        <button type="submit">{loading ? 'Enviando...' : 'Enviar'}</button>
      </form>
    </div>
  );
  }

  export default useForm