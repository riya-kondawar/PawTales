import { useState } from 'react';
import { useAuthContext } from './UseAuthContext';

export const useSignup = () => {
  const [signupError, setSignupError] = useState(null);
  const [signupIsLoading, setSignupIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password, otp) => {
    setSignupIsLoading(true);
    setSignupError(null);

    try {
      const otpResponse = await fetch('http://localhost:4000/api/verifyotp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      })

      const jsonOtp = await otpResponse.json();
      if (!otpResponse.ok) {
        setSignupIsLoading(false);
        setSignupError(jsonOtp.error || 'OTP verification failed. Please try again.');
      } else {
        const response = await fetch('http://localhost:4000/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        });

        const json = await response.json();

        if (!response.ok) {
          setSignupIsLoading(false);
          setSignupError(json.error || 'Something went wrong. Please try again.');
        } else {
          localStorage.setItem('user', JSON.stringify(json));

          dispatch({ type: 'LOGIN', payload: json });

          setSignupIsLoading(false);
          setSignupError(null);
        }
      }
    } catch (error) {
      setSignupIsLoading(false);
      setSignupError('Network error. Please try again.');
    }
  };

  return { signup, signupIsLoading, signupError, setSignupError };
};
