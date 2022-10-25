import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import './login.css'

const Login = () => {
    return (
        <div className='login'>
           
<form >
  <div className="mb-6  email">
    <Label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</Label>
    <TextInput type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required=""/>
  </div>
  <div className="mb-6 email">
    <Label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</Label>
    <TextInput type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
  </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5 ">
      <TextInput id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
    </div>
    <Label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</Label>
  </div>
  <Button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</Button>
</form>

        </div>
    );
};

export default Login;