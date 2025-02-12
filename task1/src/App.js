import { useState } from 'react';
import './App.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const App = () => {
  const [formValues, setFormValues] = useState([{ name: '', location: '', college: '' }]);

  // Handle change in form fields
  const handleChange = (i, e) => {
    const newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  // Add new form fields
  const addFormFields = () => {
    setFormValues([...formValues, { name: '', location: '', college: '' }]);
  };

  // Remove form fields
  const removeFormFields = (i) => {
    const newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="ad">
          <button className="button add" type="button" onClick={addFormFields}>
            <FaPlus />
          </button>
        </div>
        {formValues.map((element, index) => (
          <div className="form-inline" key={index}>
            <input
              className="btn"
              type="text"
              name="name"
              placeholder="Name"
              value={element.name || ''}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              className="btn"
              type="text"
              name="location"
              placeholder="Location"
              value={element.location || ''}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              className="btn"
              type="text"
              name="college"
              placeholder="College"
              value={element.college || ''}
              onChange={(e) => handleChange(index, e)}
            />
            {index > 0 && (
              <button type="button" className="button remove" onClick={() => removeFormFields(index)}>
                <FaMinus />
              </button>
            )}
          </div>
        ))}

      </form>
    </div>
  );
};

export default App;
