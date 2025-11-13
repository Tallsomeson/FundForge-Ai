import React from 'react';

export const PasswordResetPage: React.FC = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Reset your password</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
             <div className="space-y-2">
                 <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">Email address</label>
                 <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-accent sm:text-sm sm:leading-6" />
            </div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-green-accent px-3 py-1.5 text-sm font-semibold text-darker-gray">Send reset link</button>
        </form>
      </div>
    </div>
  );
};
