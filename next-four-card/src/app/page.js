export default function Home() {
  return (
    <div>
      <main className="container">
        <div className="title-area">
          <p>Reliable, efficient delivery</p>
          <h1>Powered by Technology</h1>
          <p>Our Artificial Intelligence powered tools use millions of project data points
            to ensure that your project is successful</p>
        </div>
        <div className="cards-area">
          <div className="left-area">
            <p>Supervisor</p>
            <p>Monitors activity to identify project roadblocks</p>
          </div>
          <div className="mid-area">
            <div className="card-up">
              <p>Team Builder</p>
              <p>Scans our talent network to create the optimal team for your project</p>
            </div>
            <div className="card-down">
              <p>Karma</p>
              <p>Regularly evaluates our talent to ensure quality</p>
            </div>
          </div>
          <div className="right-area">
            <p>Calculator</p>
            <p>Uses data from past projects to provide better delivery estimates</p>
          </div>
        </div>
      </main>
    </div>
  );
}
