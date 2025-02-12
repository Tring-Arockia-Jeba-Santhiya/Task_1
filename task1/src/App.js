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
    const lastField = formValues[formValues.length - 1];

    // Check if any of the fields are empty in the last form
    if (!lastField.name || !lastField.location || !lastField.college) {
      alert("Please fill in all the fields before adding another.");
    } else {
      // If all fields are filled, add a new field
      setFormValues([...formValues, { name: '', location: '', college: '' }]);
    }
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
    <div className='fp'>
      <div className="main">
        <h1>Basic Details</h1>
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
        <div>
        <div className="button-section">
            <button className="button submit" type="submit">Submit</button>
           </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default App;
