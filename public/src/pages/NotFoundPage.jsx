import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className="not-found-page">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;