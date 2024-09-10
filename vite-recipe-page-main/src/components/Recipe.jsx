import "./recipe.css";

const Recipe = () => {
  return (
    <>
      <main className="container">
        <img src="/image-omelette.jpeg" alt="" />
        <section className="meal">
          <h1 className="young-serif-400">Simple Omelette Recipe</h1>
          <p className="outfit-400">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <section className="preparation">
            <h3 className="outfit-600">Preparation time</h3>
            <ul className="outfit-400 text-preset-1">
              <li>
                <p>
                  <span className="outfit-600">Total:</span> Approximately 10
                  minutes
                </p>
              </li>
              <li>
                <p>
                  <span className="outfit-600"> Preparation:</span> 5 minutes
                </p>
              </li>
              <li>
                <p>
                  <span className="outfit-600">Cooking:</span> 5 minutes
                </p>
              </li>
            </ul>
          </section>
        </section>
        <section className="ingredients">
          <h2 className="young-serif-400">Ingredients</h2>
          <ul className="outfit-400">
            <li>
              <p>2-3 large eggs</p>
            </li>
            <li>
              <p>Salt, to taste</p>
            </li>
            <li>
              <p>Pepper, to taste</p>
            </li>
            <li>
              <p>1 tablespoon of butter or oil</p>
            </li>
            <li>
              <p>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </p>
            </li>
          </ul>
        </section>
        <hr />
        <section className="instructions">
          <h2 className="young-serif-400">Instructions</h2>
          <ol className="text-preset-2">
            <li>
              <p className="outfit-400">
                <span className="outfit-600">Beat the eggs: </span>
                In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffier texture.
              </p>
            </li>
            <li>
              <p className="outfit-400">
                <span className="outfit-600">Heat the pan: </span>
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </p>
            </li>
            <li>
              <p className="outfit-400">
                <span className="outfit-600">Cook the omelette: </span>
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </p>
            </li>
            <li>
              <p className="outfit-400">
                <span className="outfit-600">Add fillings (optional): </span>
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </p>
            </li>
            <li>
              <p className="outfit-400">
                <span className="outfit-600">Fold and serve: </span>
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </p>
            </li>
            <li>
              <p className="outfit-400">
                <span className="outfit-600">Enjoy: </span>
                Serve hot, with additional salt and pepper if needed.
              </p>
            </li>
          </ol>
        </section>
        <hr />
        <section className="nutrition outfit-400">
          <h2 className="young-serif-400">Nutrition</h2>
          <p className="">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table>
            <tbody>
              <tr className="hr-line">
                <td>Calories</td>
                <td className="text-brown outfit-600">277kcal</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td className="text-brown outfit-600">0g</td>
              </tr>

              <tr>
                <td>Protein</td>
                <td className="text-brown outfit-600">20g</td>
              </tr>

              <tr>
                <td>Fat</td>
                <td className="text-brown outfit-600">22g</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default Recipe;
