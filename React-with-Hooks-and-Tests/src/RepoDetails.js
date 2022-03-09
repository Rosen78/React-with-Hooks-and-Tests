import { useLocation } from "react-router-dom";

function RepoDetails() {

    let location = useLocation();

    return (
        <div data-testid="repo-details">
            {Object.keys(location.state).map(key => {
                if(location.state.hasOwnProperty(key)) {
                    return <div key={key}>{key} : {location.state[key]}</div>
                }
            })}

        </div>
    );

}

export default RepoDetails;