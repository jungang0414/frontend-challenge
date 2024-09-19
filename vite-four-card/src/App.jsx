import Card from "./components/Card";

const cardInfo = [
  {
    title: "Supervisor",
    text: "Monitors activity to identify project roadblocks",
    src: "/icon-supervisor.svg",
  },
  {
    title: "Team Builder",
    text: "Scans our talent network to create the optimal team for your project",
    src: "/icon-team-builder.svg",
  },
  {
    title: "Karma",
    text: "Regularly evaluates our talent to ensure quality",
    src: "/icon-karma.svg",
  },
  {
    title: "Calculator",
    text: "Uses data from past projects to provide better delivery estimates",
    src: "/icon-calculator.svg",
  },
];

function App() {
  return (
    <div>
      <main className="container">
        <div className="header">
          <h1 className="title">
            Reliable, efficient delivery<span>Powered by Technology</span>
          </h1>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="cards">
          <div className="supervisor">
            <Card
              title={cardInfo[0].title}
              text={cardInfo[0].text}
              src={cardInfo[0].src}
            />
          </div>
          <div className="cards-middle">
            <div className="team">
              <Card
                title={cardInfo[1].title}
                text={cardInfo[1].text}
                src={cardInfo[1].src}
              />
            </div>
            <div className="karma">
              <Card
                title={cardInfo[2].title}
                text={cardInfo[2].text}
                src={cardInfo[2].src}
              />
            </div>
          </div>
          <div className="calculator">
            <Card
              title={cardInfo[3].title}
              text={cardInfo[3].text}
              src={cardInfo[3].src}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
