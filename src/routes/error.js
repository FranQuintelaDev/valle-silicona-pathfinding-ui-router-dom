import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1 className="title">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="description">
                {error.statusText || error.message}
            </p>
        </div>
    );
}