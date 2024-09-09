function App() {
  return (
    <>
      <main>
        <div className="card">
          <img src="/avatar-jessica.jpeg" alt="avatar" className="card-avatar" />
          <h1 className="text-preset-1">Jessica Randall</h1>
          <div className="card-Introduction">
            <p className="text-preset-2">London, United Kingdom</p>
            <p className="text-preset-3">
              Front-end developer and avid reader.
            </p>
          </div>
          <ul className="card-Links" >
            <li className="link-hover">GitHub</li>
            <li className="link-hover">Frontend Mentor</li>
            <li className="link-hover">LinkedIn</li>
            <li className="link-hover">Twitter</li>
            <li className="link-hover">Instagram</li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
