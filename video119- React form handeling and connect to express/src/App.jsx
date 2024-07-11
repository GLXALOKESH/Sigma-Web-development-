import { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

const styles = {
  red: {
    color: 'red'
  },
  size: {
    fontSize: '12px'
  }
};

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("username", {
            required: { value: true, message: "This field is required" },
            minLength: { value: 3, message: "Minimum length is 3" }
          })}
          style={{ display: "block" }}
        />
        {errors.username && <div style={{ ...styles.size, ...styles.red }}>{errors.username.message}</div>}
        
        <input
          type="password"
          {...register("password")}
          style={{ display: "block" }}
        />
        
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
