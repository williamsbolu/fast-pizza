import { useRouteError } from 'react-router-dom';
import LinkButton from '../ui/LinkButton';

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;

// since we're using this component as the "errorElement" property in app.js, this component get access to the error that occured
