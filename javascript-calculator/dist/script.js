const btnclear = { height: "29px", width: "5px", marginTop: "9px", fontSize: "10px", textAlign: "center", justifyContent: "center", backgroundColor: "#E5F3FA", display: "flex", position: "absolute", left: "185px" };
const btnnum = { fontSize: "20px", width: "35px", marginLeft: "5px" };

const sumops = ['/', '*', '-'];
const divops = ['+', '*', '-'];
const multiops = ['/', '+', '-'];


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0' };


    this.zero = this.zero.bind(this);
    this.one = this.one.bind(this);
    this.two = this.two.bind(this);
    this.three = this.three.bind(this);
    this.four = this.four.bind(this);
    this.five = this.five.bind(this);
    this.six = this.six.bind(this);
    this.seven = this.seven.bind(this);
    this.eight = this.eight.bind(this);
    this.nine = this.nine.bind(this);

    this.sum = this.sum.bind(this);
    this.sub = this.sub.bind(this);
    this.div = this.div.bind(this);
    this.multi = this.multi.bind(this);
    this.eq = this.eq.bind(this);
    this.clear = this.clear.bind(this);
    this.dec = this.dec.bind(this);
  }

  zero() {
    if (this.state.result != '0') {
      this.setState({
        result: this.state.result + '0' });

    } else if (this.state.result = '0') {
      this.setState({
        result: '0' });

    }
  }

  one() {
    if (this.state.result != '0') {
      this.setState({
        result: this.state.result + '1' });

    } else if (this.state.result = '0') {
      this.setState({
        result: '1' });

    }
  }

  two() {
    if (this.state.result != '0') {
      this.setState({
        result: this.state.result + '2' });

    } else if (this.state.result = '0') {
      this.setState({
        result: '2' });

    }
  }

  three() {
    if (this.state.result != '0') {
      this.setState({
        result: this.state.result + '3' });

    } else if (this.state.result = '0') {
      this.setState({
        result: '3' });

    }
  }

  four() {
    if (this.state.result != '0') {
      this.setState({
        result: this.state.result + '4' });

    } else if (this.state.result = '0') {
      this.setState({
        result: '4' });

    }
  }

  five() {
    if (this.state.result != '0') {
      this.setState({
        result: this.state.result + '5' });

    } else if (this.state.result = '0') {
      this.setState({
        result: '5' });

    }
  }

  six() {
    if (this.state.result != '0') {
      this.setState({
        result: this.state.result + '6' });

    } else if (this.state.result = '0') {
      this.setState({
        result: '6' });

    }
  }

  seven() {
    if (this.state.result != '0') {
      this.setState({
        result: this.state.result + '7' });

    } else if (this.state.result = '0') {
      this.setState({
        result: '7' });

    }
  }

  eight() {
    if (this.state.result != '0') {
      this.setState({
        result: this.state.result + '8' });

    } else if (this.state.result = '0') {
      this.setState({
        result: '8' });

    }
  }

  nine() {
    if (this.state.result != '0') {
      this.setState({
        result: this.state.result + '9' });

    } else if (this.state.result = '0') {
      this.setState({
        result: '9' });

    }
  }

  sum() {
    const sumbreaker = this.state.result.slice(-1)[0];
    if (sumbreaker == '-') {
      /*const minus = this.state.result.slice(-2)[0]
      console.log(minus)
      console.log(sumbreaker)*/
      const sp = this.state.result.split(/[\+\-\*\/]/);
      const bk = sp.slice(0)[0];
      this.setState({
        result: bk + '+' });

    } else if (sumops.includes(sumbreaker))
    {
      this.setState({
        result: this.state.result.split(sumbreaker).join('') + '+' });

    } else if (this.state.result != '0' && sumbreaker != '+')
    {
      this.setState({
        result: this.state.result + '+' });

    }
  }

  sub() {
    if (this.state.result != '0') {
      this.setState({
        result: this.state.result + '-' });

    }
  }

  div() {
    const divbreaker = this.state.result.slice(-1)[0];
    if (divops.includes(divbreaker))
    {
      this.setState({
        result: this.state.result.split(divbreaker).join('') + '/' });

    } else if (this.state.result != '0' && divbreaker != '/')
    {
      this.setState({
        result: this.state.result + '/' });

    }
  }

  multi() {
    const multibreaker = this.state.result.slice(-1)[0];
    if (multiops.includes(multibreaker))
    {
      this.setState({
        result: this.state.result.split(multibreaker).join('') + '*' });

    } else if (this.state.result != '0' && multibreaker != '*')
    {
      this.setState({
        result: this.state.result + '*' });

    }
  }

  dec() {
    const splitter = this.state.result.split(/[\+\-\*\/]/);
    const breaker = splitter.slice(-1)[0];

    if (!breaker.includes('.')) {
      this.setState({
        result: this.state.result + '.' });

    }
  }

  eq() {
    var res = eval(this.state.result);
    this.setState({
      result: String(res) });

  }

  clear() {
    this.setState({
      result: '0' });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "calcgrid" }, /*#__PURE__*/
      React.createElement("button", { id: "clear", onClick: this.clear, style: btnclear }, "C"), /*#__PURE__*/
      React.createElement("input", { id: "display", style: { fontWeight: "bold" }, type: "text", className: "inputstyle", value: this.state.result, disabled: true }), /*#__PURE__*/
      React.createElement("div", { className: "btngrid" }, /*#__PURE__*/
      React.createElement("button", { id: "zero", onClick: this.zero, className: "btns", style: btnnum }, "0"), /*#__PURE__*/
      React.createElement("button", { id: "one", onClick: this.one, className: "btns", style: btnnum }, "1"), /*#__PURE__*/
      React.createElement("button", { id: "two", onClick: this.two, className: "btns", style: btnnum }, "2")), /*#__PURE__*/

      React.createElement("div", { className: "btngrid2" }, /*#__PURE__*/
      React.createElement("button", { id: "three", onClick: this.three, className: "btns", style: btnnum }, "3"), /*#__PURE__*/
      React.createElement("button", { id: "four", onClick: this.four, className: "btns", style: btnnum }, "4"), /*#__PURE__*/
      React.createElement("button", { id: "five", onClick: this.five, className: "btns", style: btnnum }, "5")), /*#__PURE__*/

      React.createElement("div", { className: "btngrid3" }, /*#__PURE__*/
      React.createElement("button", { id: "six", onClick: this.six, className: "btns", style: btnnum }, "6"), /*#__PURE__*/
      React.createElement("button", { id: "seven", onClick: this.seven, className: "btns", style: btnnum }, "7"), /*#__PURE__*/
      React.createElement("button", { id: "eight", onClick: this.eight, className: "btns", style: btnnum }, "8")), /*#__PURE__*/

      React.createElement("div", { className: "btngrid4" }, /*#__PURE__*/
      React.createElement("button", { id: "nine", onClick: this.nine, className: "btns", style: btnnum }, "9")), /*#__PURE__*/

      React.createElement("div", { className: "btnresults" }, /*#__PURE__*/
      React.createElement("button", { className: "btnstyle", id: "decimal", onClick: this.dec }, "."), /*#__PURE__*/
      React.createElement("button", { className: "btnstyle", id: "add", onClick: this.sum }, "+"), /*#__PURE__*/
      React.createElement("button", { className: "btnstyle", id: "subtract", onClick: this.sub }, "-"), /*#__PURE__*/
      React.createElement("button", { className: "btnstyle", id: "divide", onClick: this.div }, "/"), /*#__PURE__*/
      React.createElement("button", { className: "btnstyle", id: "multiply", onClick: this.multi }, "*"), /*#__PURE__*/
      React.createElement("button", { id: "equals", className: "btnequal", onClick: this.eq }, "="))));



  }}

ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById("show"));
