import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData(null);
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
        <label>Name</label>
        <input type="text" name="name" onInput={handleChange} />
        <label>Age</label>
        <input type="number" name="age" onInput={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
