import { FC } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "./components";

export const ErrorPage: FC = () => {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  const navigate = useNavigate();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button
        className="bg-slate-300"
        onClick={() => {
          navigate(-1);
        }}
        label={" \u2190 Go Back"}
      >
        Go back
      </Button>
    </div>
  );
};
