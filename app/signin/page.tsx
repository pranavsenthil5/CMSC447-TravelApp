import AuthForm from './auth-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center text-black min-h-screen	">

        <img src="/Drift.svg" alt="logo" className="h-30 " />

        <AuthForm />
      </div>
    </main>

  );
}