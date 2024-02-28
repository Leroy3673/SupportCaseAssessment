
// This file Implements the login page using NextAuth.js for authentication.
// This will be done using the Fluent UI components

/* As per client's instructions:

    A. Implement a secure login page where users can enter their credentials to access the application.
    B. Utilize Fluent UI components for a clean and consistent user interface.
    
*/

// 1. Imports useState hook from React
import { useState } from 'react';

// 2. Imports Fluent UI components
import { TextField, PrimaryButton } from '@fluentui/react';

// 3. Imports signIn function and SignInResponse type from NextAuth.js
import { signIn, SignInResponse, useSession } from 'next-auth/react'; 

// 4. The crucial elements of the log in page
const LoginPage = () => {
  //4A. adding a state variable to store email input value
  const [email, setEmail] = useState('');
  
  //4B. adding a state variable to store password input value
  const [password, setPassword] = useState(''); 

  //4C. adding a state variable to store error message
  const [error, setError] = useState<string | null>(null);
  
  
  // 4C-A Use useSession hook to check authentication status
  const { data: session } = useSession(); 

  //4D. adding an event handler to update email state on blur
  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  //4E. adding an event handler to update password state on blur
  const handlePasswordBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  //4F. adding an event handler for form submission (login)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    
    //4F-1 Prevent default form submission behavior
    e.preventDefault(); 

    try {
      //4G calling the signIn method from NextAuth.js to authenticate user
      const result= await signIn('credentials', {
        redirect: false,                                                    //4G-1. Disables automatic redirection after login
        email,                                                             //4G-2. Passes email as username
        password,                                                         //4G-3.  Passes the password
      });

      //4H. Checks if result is defined
      if (result?.error) {
        
        //4H-1 Check if authentication was successful
        if (!result.error) {
          window.location.href = '/dashboard';                                    //4H-2 Redirect user to dashboard page upon successful login
        } else {
          setError('Login failed. Please check your credentials and try again.'); //4H-3 Set error message if authentication fails
        }
      } else {
        setError('An unexpected error occurred. Please try again later.');        //4H-4 Set error message if result is undefined
      }
    } catch (error) {
      console.error('Error during login:', error);                                //4I Log error to console
      setError('An unexpected error occurred. Please try again later.');         //4J Set error message for unexpected errors
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Email input field */}
        <TextField
          label="Email or Username"
          onBlur={handleEmailBlur}                                             //5. Calls handleEmailBlur function when email input is blurred
          required                                                             //6.  Makes email input field required
        />
        {/* Password input field */}
        <TextField
          label="Password"
          type="password"
          onBlur={handlePasswordBlur}                                     //7. Call handlePasswordBlur function when password input is blurred
          required                                                        //8. Make password input field required
        />
        {/* Submit button */}
        <PrimaryButton type="submit">Login</PrimaryButton>
      </form>
      {/* Display error message if present */}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default LoginPage;
