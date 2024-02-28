// CaseDetailPage.tsx

/* As per client's instructions:

    A. Create a page that shows the details of a specific support case.
    B. Include case information, comments, and attachments.
    C. Implement a section for users to add comments.

*/

// 1. Import react components
import React, { useEffect, useState } from 'react';

// 2. Import Fluent UI components
import { Stack, Text, TextField, PrimaryButton } from '@fluentui/react';

const CaseDetailPage = () => {
  // 3.  State variables to store case details and comments
  const [caseDetails, setCaseDetails] = useState<any>(null);
  const [newComment, setNewComment] = useState('');

  // 4.  Fetch case details when component mounts (mock implementation)
  useEffect(() => {
    // 4A. Mock implementation to fetch case details
    // 4B. Replace this with your actual API call to fetch case details
    const fetchCaseDetails = async () => {
      // 4C. Mock data for demonstration
      const mockCaseDetails = {
        id: 1,
        title: 'Support Case 1',
        description: 'This is the description of Support Case 1.',
        comments: [
          { id: 1, author: 'User 1', text: 'Comment 1' },
          { id: 2, author: 'User 2', text: 'Comment 2' },
        ],
        attachments: ['Attachment 1', 'Attachment 2'],
      };
      setCaseDetails(mockCaseDetails);
    };

    fetchCaseDetails();
  }, []); // 5. Empty dependency array ensures this effect runs only once when the component mounts

  // 6.  Function to handle adding a new comment
  const handleAddComment = () => {
    // 6A. Add code to submit the new comment (mock implementation)
    console.log('New comment:', newComment);
    // 6B. Clear the comment field after submission
    setNewComment('');
  };

  if (!caseDetails) {
    return <div>Loading...</div>; // 7.  Display loading indicator while case details are being fetched
  }

  return (
    <Stack tokens={{ childrenGap: 20 }}>
      {/* Case details section */}
      <div>
        <h2>{caseDetails.title}</h2>
        <Text>{caseDetails.description}</Text>
        <h3>Comments</h3>
        {/* Display existing comments */}
        {caseDetails.comments.map((comment: any) => (
          <div key={comment.id}>
            <Text variant="medium">{comment.author}:</Text>
            <Text>{comment.text}</Text>
          </div>
        ))}
        {/* Add comment section */}
        <TextField
          label="Add Comment"
          multiline
          value={newComment}
          onChange={(event, newValue) => setNewComment(newValue || '')}
        />
        <PrimaryButton onClick={handleAddComment}>Add Comment</PrimaryButton>
      </div>
      {/* Attachments section */}
      <div>
        <h3>Attachments</h3>
        {/* Display attachments */}
        {caseDetails.attachments.map((attachment: string, index: number) => (
          <div key={index}>
            <Text>{attachment}</Text>
          </div>
        ))}
      </div>
    </Stack>
  );
};

export default CaseDetailPage;
