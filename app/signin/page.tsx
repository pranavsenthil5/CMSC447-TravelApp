// import AuthForm from './auth-form';

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between">
//       <div className="flex flex-col items-center justify-center text-black min-h-screen	">

//         <img src="/Drift.svg" alt="logo" className="h-30 " />

//         <AuthForm />
//       </div>
//     </main>

//   );
// }


import AuthForm from './auth-form';
import AccountForm from '@/components/Account';  // Make sure to use the correct import path for AccountForm

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center text-black min-h-screen">

        <img src="/Drift.svg" alt="logo" className="h-30" />

        {/* Include both AuthForm and AccountForm */}
        <div className="mb-8">
          <AuthForm />
        </div>

        <div className='w-3/4  mx-auto ml-0'>
                <AccountForm></AccountForm>
            {/* </div>

        <div>
          <AccountForm /> */}
        </div>
      </div>
    </main>
  );
}


