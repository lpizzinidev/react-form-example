import { useState } from 'react';
import axios from 'axios';

function App() {
  const initialFormData = {
    name: '',
    age: '',
    email: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request
      const res = await axios.post(
        'http://localhost:5000/api/v1/person',
        formData
      );

      // HTTP req successful

      // Reset form data
      setFormData(initialFormData);
    } catch (err) {
      handleErrors(err);
    }
  };

  const handleErrors = (err) => {
    const { errors } = err.response.data;

    for (let error in errors) {
      const { param, msg } = error;
      console.log(error);
      setFormErrors({
        ...formErrors,
        param: msg,
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onInput={handleChange}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type='number'
            name='age'
            value={formData.age}
            onInput={handleChange}
          />
        </div>
        <div>
          <label>E-mail</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onInput={handleChange}
          />
        </div>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default App;
