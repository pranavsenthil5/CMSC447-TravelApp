import AuthForm from './auth-form';


// const headerStyle = {
//   fontSize: '3rem',
//   textAlign: 'center',
//   marginBottom: '1rem',
// };

// const descriptionStyle = {
//   fontSize: '1.5rem',
//   textAlign: 'center',
// };



export default function Home() {
  return (
    // create a small component in the middle of the page that contains the AuthForm
    // <main className="flex min-h-screen flex-col items-center justify-between">
    //   {/* set width 100px */}
    //   <div className="flex flex-col items-center justify-center text-black w-300 bg-red-100">

    //     <img src="/Drift.svg" alt="logo" className="h-25 5 ml-30 mr-30" />
        
    //     <AuthForm />
    //   </div>
    // </main>
    <main className="flex min-h-screen flex-col items-center justify-between">
  {/* Increase the width (e.g., to 300 pixels) */}
  <div className="flex flex-col items-center justify-center text-black min-h-screen	">

    <img src="/Drift.svg" alt="logo" className="h-30 " />
    
    <AuthForm />
  </div>
</main>

  );
}