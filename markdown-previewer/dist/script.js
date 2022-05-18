class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown:
      "# Hello! This is my Markdown Previewer.\n ## Feel free to write down anything you want on the left box and watch it become a fully html formatted text on the right box!\n **Please, check my [GitHub](https://www.youtube.com/watch?v=iik25wqIuFo) to see more of my work!**\n \nHere you can list things such as what are your favorite types of: \n- Cats \n- Dogs \n- Cows\n \nYou can also \n`<div>code</div>`\n in here!\n \nAs well as see pretty panda images: ![panda img](https://tinypng.com/images/example-orig.png)\n\nFree to code space: \n```\nfunction marker() \n{return <p>You're marking down!</p>\n};\n```\n \nAlso, note this amazing: \n> Block Quote!" };

  }
  update(markdown) {
    this.setState({ markdown });
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { className: "center" }, "MARKDOWN PREVIEWER - by Julio Silva"), /*#__PURE__*/
      React.createElement("p", { className: "mk" }, "Write here!"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", className: "left", value: this.state.markdown, onChange: e => {this.update(e.target.value);} }), /*#__PURE__*/

      React.createElement("p", { className: "mktext" }, "Markdown Preview"), /*#__PURE__*/
      React.createElement("div", { className: "right" }, /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.markdown, { sanitize: true }) } }))));




  }}

ReactDOM.render( /*#__PURE__*/React.createElement(MarkdownPreviewer, null), document.getElementById("show"));