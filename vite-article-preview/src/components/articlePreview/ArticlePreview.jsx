function ArticlePreview() {
  return (
    <div className="artContinaer">
      <div className="left">
        <img src="/drawers.jpg" alt="" />
      </div>
      <div className="right">
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <h2>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </h2>
        <div className="right-footer">
          <img src="/avatar-michelle.jpg" alt="" />
          <h3>Michelle Appleton</h3>
          <h4>28 Jun 2020</h4>
          <button className="Share">
            <img src="/icon-share.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticlePreview;
