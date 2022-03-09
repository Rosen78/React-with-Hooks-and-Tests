import { Link } from "react-router-dom";
import { useState, useEffect} from "react";

function Home() {

  let [reposInfo, setReposInfo] = useState([]);

  let extractReposInfo = (reposInfo) => {
    return reposInfo.map((v, ind) => {return {id: v.id, name: v.name, html_url: v.html_url,
                                                full_name: v.full_name, description: v.description, language: v.language,
                                                forks_count: v.forks_count, open_issues_count: v.open_issues_count, watchers_count: v.watchers_count}})
  }

  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://api.github.com/orgs/godaddy/repos",
    {
      signal: signal
    })
      .then(response => response.json())
      .then(data => {
        setReposInfo(extractReposInfo(data));
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('successfully aborted');
        }
      });

    return () => {
      // cancel the request before component unmounts
      controller.abort();
    };
  }, []);

  return (
    <>
      {(reposInfo.length > 0) && <ul data-testid="repos-list">
        {reposInfo.map((repoInfo) => <li key={repoInfo.id}>
            <Link to="/repo-details" state={repoInfo}>{repoInfo.name}</Link>
          </li>)}
      </ul>}
    </>
  );
}

export default Home;
