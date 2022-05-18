class RandomQuote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [
      {
        text: 'The greatest glory in living lies not in never falling, but in rising every time we fall',
        author: 'Nelson Mandela' },

      {
        text: 'The way to get started is to quit talking and begin doing.',
        author: 'Walt Disney' },

      {
        text: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
        author: 'Benjamin Franklin' },

      {
        text: 'It is during our darkest moments that we must focus to see the light.',
        author: 'Aristotle' },

      {
        text: 'Whoever is happy will make others happy too.',
        author: 'Anne Frank' },

      {
        text: 'Happiness can be found even in the darkest of times, if one only remembers to turn on the light.',
        author: 'Albus Dumbledore' },

      {
        text: 'In this life we cannot do great things. We can only do small things with great love.',
        author: 'Mother Teresa' },

      {
        text: 'The purpose of our lives is to be happy.',
        author: 'Dalai Lama' },

      {
        text: 'Success is not final; failure is not fatal: It is the courage to continue that counts.',
        author: 'Winston S. Churchill' },

      {
        text: 'Try not to become a man of success. Rather become a man of value.',
        author: 'Albert Einstein' }] };



    this.refresh = this.refresh.bind(this);
  }
  refresh() {
    this.setState({
      random: Math.floor(Math.random() * 10) });

  }
  render() {
    const random = [this.state.quotes[Math.floor(Math.random() * 10)]];

    const randomquote = random.map(({ text }) => text);

    const randomauthor = random.map(({ author }) => author);

    const tweet = 'https://twitter.com/intent/tweet?text="' + randomquote + '"' + '-' + randomauthor;

    return /*#__PURE__*/(
      React.createElement("div", { className: "center" }, /*#__PURE__*/
      React.createElement("h1", { style: { fontSize: 14, textAlign: "left" } }, "Random Quote Machine! - by Julio Silva"), /*#__PURE__*/


      React.createElement("p", { id: "text", className: "quotetext" }, "\" ", randomquote, " \""), /*#__PURE__*/

      React.createElement("p", { id: "author", className: "authortext" }, "- ", randomauthor), /*#__PURE__*/

      React.createElement("a", { class: "button", className: "ret", id: "tweet-quote", target: "_blank", href: tweet }, /*#__PURE__*/React.createElement("img", { src: "https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch13retweeticon.png.twimg.1920.png" })), /*#__PURE__*/

      React.createElement("button", { className: "button", id: "new-quote", onClick: this.refresh }, "New quote!")));



  }}

ReactDOM.render( /*#__PURE__*/React.createElement(RandomQuote, null), document.querySelector("#quote-box"));