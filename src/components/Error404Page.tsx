import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

function Error404Page() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="font-display text-7xl md:text-9xl font-bold mb-8">404</h1>
        <p className="font-body text-xl text-muted-foreground mb-8">
          Uh oh! Looks like the page you're looking for doesn't exist.
        </p>
        <Link to="/portfolio/">
          <Button variant="outline" size="lg">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Error404Page;
