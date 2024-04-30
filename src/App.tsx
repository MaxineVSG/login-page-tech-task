import { useState, Component } from 'react';

import './style.css';
import Logo from './components/logo.component.jsx'
import Form from './components/form.component.jsx'
import Heading from './components/heading.component.jsx'
import Input from './components/input.component.jsx'
import Link from './components/link.component.jsx'
import Button from './components/button.component.jsx'
import Footer from './components/footer.component.jsx'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const App = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const canSubmit = form.username !== '' && form.password !== '';
  const hasError = form.password !== '' && !form.password.match(passwordRegex);

  const passwordRules = [
    '* At least 8 characters',
    '* Contains at least one lowercase letter',
    '* Contains at least one uppercase letter',
    '* Contains at least one digit'
  ]

  return (
    <main>
      <Logo />
      <Form submit={handleLogin}>
        <div className='u-mb-md'>
          <Heading title='Log in' subtitle='Please sign in to continue.'/>
        </div>
        <Input
          label='Username'
          type='text'
          form={form}
          change={(e) =>
            setForm((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <Input
          label='Password'
          type='password'
          invalid={hasError}
          form={form}
          change={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
          hasError={hasError}
          errorMsg={passwordRules}
        />
        <div className='u-mt-md'>
          <Link href='#' text='Forgot Password'/>
        </div>
        <Button
          classes='u-my-sm'
          color='primary'
          size='lg'
          isDisabled={!canSubmit || hasError}
          type='submit'
          text='Log in'
        />
      </Form>
      <Footer />
      <img src='BG.svg' className='background'></img>
    </main>
  );
};
