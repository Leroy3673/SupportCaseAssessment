// DashboardPage.tsx

/* As per client's instructions:

  A.  Create a dashboard that displays all the support cases created by the user in a list.
  B.  Include relevant information such as case title, status, and creation date.
  C.  Make the dashboard visually appealing using Fluent UI styling.

*/

// 1. Import necessary React components
import React, { useEffect, useState } from 'react';

// 2. Import necessary Fluent UI components
import { List, Text, Stack, Separator } from '@fluentui/react';

// 2-A. Import useSession hook from NextAuth.js
import { getSession, useSession } from 'next-auth/react';


const DashboardPage = () => {
  const [supportCases, setSupportCases] = useState([]); // State variable to store support cases data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = await getSession(); // Get user session

        if (session) {
          // If user is authenticated, fetch support cases data
          const response = await fetch('/api/support-cases', {
            headers: {
              Authorization: `Bearer ${session.user}` // Pass access token for authentication
            }
          });

          if (response.ok) {
            const data = await response.json();
            setSupportCases(data.supportCases); // Set support cases data in state
          } else {
            console.error('Failed to fetch support cases:', response.statusText);
          }
        }
      } catch (error) {
        console.error('Error fetching support cases:', error);
      }
    };

    fetchData(); // Call fetchData function on component mount
  }, []);

  return (
    <Stack tokens={{ childrenGap: 20 }}>
      <h2>Dashboard</h2>
      <Separator />
      <div>
        <h3>Support Cases</h3>
        {/* Render support cases list */}
        <List items={supportCases} onRenderCell={renderSupportCaseItem} />
      </div>
    </Stack>
  );
};

const renderSupportCaseItem = (item?: any) => {
  if (!item) return null;
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <Text variant="medium">{item.title}</Text>
      <Text>Status: {item.status}</Text>
      <Text>Creation Date: {item.creationDate}</Text>
    </div>
  );
};

export default DashboardPage;

