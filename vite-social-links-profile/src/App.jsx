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
            <li>GitHub</li>
            <li>Frontend Mentor</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
