function App() {
  return (
    <div>
      <main className="container">
        <div className="card daniel">
          <div className="card-img">
            <h1><img src="/image-daniel.jpg" alt="daniel" /></h1>
            <p>
              Daniel Clifford <span>Verified Graduate</span>
            </p>
          </div>
          <img
              className="background-svg"
              src="/bg-pattern-quotation.svg"
              alt="bg-pattern"
            />
          <section className="card-text">
            <h2 className="text-testimonial">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny’s worth.
            </h2>
            <h3 className="text-quote">
              “ I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup. ”
            </h3>
          </section>
        </div>
        <div className="card jonathan">
          <div className="card-img ">
            <img src="/image-jonathan.jpg" alt="jonathan" />
            <p>
              Jonathan Walters <span>Verified Graduate</span>
            </p>
          </div>
          <section className="card-text">
            <h2 className="text-testimonial">
              The team was very supportive and kept me motivated
            </h2>
            <h3 className="text-quote">
              “ I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I’ve made in myself. ”
            </h3>
          </section>
        </div>
        <div className="card jeanette">
          <div className="card-img">
            <img src="/image-jeanette.jpg" alt="jeanette" />
            <p>
              Jeanette Harmon <span>Verified Graduate</span>
            </p>
          </div>
          <section className="card-text">
            <h2 className="text-testimonial">
              An overall wonderful and rewarding experience
            </h2>
            <h3 className="text-quote">
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </h3>
          </section>
        </div>
        <div className="card patrick">
          <div className="card-img">
            <img src="/image-patrick.jpg" alt="patrick" />
            <p>
              Patrick Abrams <span>Verified Graduate</span>
            </p>
          </div>
          <section className="card-text">
            <h2 className="text-testimonial">
              Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </h2>
            <h3 className="text-quote">
              “ The staff seem genuinely concerned about my progress which I
              find really refreshing. The program gave me the confidence
              necessary to be able to go out in the world and present myself as
              a capable junior developer. The standard is above the rest. You
              will get the personal attention you need from an incredible
              community of smart and amazing people. ”
            </h3>
          </section>
        </div>
        <div className="card kira">
          <div className="card-img">
            <img src="/image-kira.jpg" alt="kira" />
            <p>
              Kira Whittle <span>Verified Graduate</span>
            </p>
          </div>
          <section className="card-text">
            <h2 className="text-testimonial">
              Such a life-changing experience. Highly recommended!
            </h2>
            <h3 className="text-quote">
              “ Before joining the bootcamp, I’ve never written a line of code.
              I needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I’ve often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </h3>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
