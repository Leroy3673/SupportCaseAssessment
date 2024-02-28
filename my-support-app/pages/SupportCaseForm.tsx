// SupportCaseForm.tsx

/* As per client's Instructions:
 
  A. Implement a form to create a new support case.
  B. Include fields for title, description, and any other relevant information.
  C. Leverage Fluent UI form components for a user-friendly interface.

*/

// 1. Import the react components
import React, { useState } from 'react';

// 2. Import the  necessary fluent ui components
import { Stack, TextField, PrimaryButton } from '@fluentui/react';

const SupportCaseForm = () => {
  // 3.  State variables to store form input values
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // 4.  Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 4A. Add code to handle form submission and create new support case
    console.log('Form submitted!');
    console.log('Title:', title);
    console.log('Description:', description);
    //4B. Reset form fields after submission
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack tokens={{ childrenGap: 10 }}>
        {/* Title field */}
        <TextField
          label="Title"
          value={title}
          onChange={(event, newValue) => setTitle(newValue || '')}
          required
        />
        {/* Description field */}
        <TextField
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={(event, newValue) => setDescription(newValue || '')}
          required
        />
        {/* Submit button */}
        <PrimaryButton type="submit">Create Support Case</PrimaryButton>
      </Stack>
    </form>
  );
};

export default SupportCaseForm;
