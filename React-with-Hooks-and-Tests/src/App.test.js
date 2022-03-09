import { render, screen, within, fireEvent, configure } from '@testing-library/react';
// import '@testing-library/jest-dom'
import App from './App';
// import Home from './Home';

configure({asyncUtilTimeout: 5000})

it("renders without crashing", () => {
  render(<App />);
});

it("renders github repos list", async () => {
  render(<App />);
  const reposListElement = await screen.findByTestId("repos-list");
  expect(reposListElement).not.toBeEmptyDOMElement();
});

it("click on github repo link leads to the repo details page", async () => {
  render(<App />);
  const reposListElement = await screen.findByTestId("repos-list");
  const repoLink = within(reposListElement).getAllByRole("link")[0]
  fireEvent.click(repoLink);
  const repoDetailsElement = await screen.findByTestId("repo-details");
  expect(repoDetailsElement).toBeInTheDocument();
});

