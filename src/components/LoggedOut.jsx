import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function LoggedOut() {
  const { login, register } = useKindeAuth();
  return (
    <>
      <header>
        <nav className="nav container">
          <h1 className="text-display-3">DevFest Demo</h1>
          <div>
            <button className="btn btn-ghost sign-in-btn" onClick={login}>
              Sign in
            </button>
            <button className="btn btn-dark" onClick={register}>
              Sign up
            </button>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="card hero">
            <p className="text-display-1 hero-title">
              RSVP for free for DevFest Owerri 2023
            </p>
            <p className="text-body-1 hero-tagline">DevFest Owerri at 1000 RSVPs <br></br>Login/ SignUp to RSVP</p>
            <button className="btn btn-light btn-big" onClick={register}>
              Sign up
            </button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <strong className="text-heading-2">DevFest Demo</strong>
          <p className="footer-tagline text-body-3">
            Visit our{" "}
            <a className="link" href="https://kinde.com/docs">
              help center
            </a>
          </p>

          <small className="text-subtle">
            © 2023 KindeAuth, Inc. All rights reserved
          </small>
        </div>
      </footer>
    </>
  );
}
