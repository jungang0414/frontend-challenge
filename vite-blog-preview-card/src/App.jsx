import "./App.css";

function App() {
  return (
    <>
      <main className="container">
        <div className="card">
          <img src="/illustration-article.svg" alt="illustration-article" />
          <div className="card-text">
            <p className="text-preset-3">
              <span className="learning text-preset-3-b">Learning</span>
              <br />
              Published 21 Dec 2023
            </p>
            <h1 className="text-preset-1 active">HTML & CSS foundations</h1>
            <p className="text-preset-2">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
          <div className="card-footer">
            <img src="/image-avatar.webp" alt="image-avatar" className="avatar" />
            <p>Greg Hooper</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
