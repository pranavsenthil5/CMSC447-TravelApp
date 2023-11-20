import AuthForm from './auth-form';

const headerStyle = {
  fontSize: '3rem',
  textAlign: 'center',
  marginBottom: '1rem',
};

const descriptionStyle = {
  fontSize: '1.5rem',
  textAlign: 'center',
};

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="text-center">
            <h1 style={headerStyle}>Drift Travel</h1>
            <p style={descriptionStyle}>
              Explore, Share, Connect – Your Journey, Your Blog, Your Community!
            </p>
          </div>
        </div>
        <div className="col-md-6 auth-widget">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
