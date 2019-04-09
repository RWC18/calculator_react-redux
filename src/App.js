import React, { Component } from 'react';
import './App.scss';
import Input from "./components/input/Input";
import { connect } from "react-redux";
import * as actions from "./store/actions";
import { bindActionCreators } from "redux";

class App extends Component {
  state = {
    inputs: [
      {
        type: "text",
        class: "text"
      },
      {
        type: "button",
        value: 1,
        click: "sym",
      },
      {
        type: "button",
        value: 2,
        click: "sym",
      },
      {
        type: "button",
        value: 3,
        click: "sym",
      },
      {
        type: "button",
        value: 4,
        click: "sym",
      },
      {
        type: "button",
        value: 5,
        click: "sym",
      },
      {
        type: "button",
        value: 6,
        click: "sym",
      },
      {
        type: "button",
        value: 7,
        click: "sym",
      },
      {
        type: "button",
        value: 8,
        click: "sym",
      },
      {
        type: "button",
        value: 9,
        click: "sym",
      },
      {
        type: "button",
        value: '.',
        click: "sym",
      },
      {
        type: "button",
        value: 0,
        click: "sym",
        class: "last zero",
      },
      {
        type: "button",
        value: "+",
        click: "sym",
      },
      {
        type: "button",
        value: "-",
        click: "sym",
      },
      {
        type: "button",
        value: "/",
        click: "sym",
      },
      {
        type: "button",
        value: "*",
        click: "sym",
      },
      {
        type: "button",
        value: "=",
        click: "eq"
      },
      {
        type: "button",
        value: "<",
        click: "del",
      },
      {
        type: "button",
        value: "(",
        click: "sym",
        class: "brackets"
      },
      {
        type: "button",
        value: ")",
        click: "sym",
        class: "brackets"
      },
      {
        type: "button",
        value: "C",
        click: "cl",
        class: "last"
      }

    ]
  };



  render() {
    let inputs = this.state.inputs.map(inp => {
      if (inp.click === "sym"){
        return <Input val={inp.value} type={inp.type} click={() => this.props.addSym(inp.value)} change={inp.change} className={inp.class}/>
      } else if (inp.click === "cl") {
        return <Input val={inp.value} type={inp.type} click={this.props.clear} change={inp.change} className={inp.class}/>
      } else if (inp.click === "eq") {
        return <Input val={inp.value} type={inp.type} click={this.props.equale} change={inp.change} className={inp.class}/>
      } else if (inp.click === "del") {
        return <Input val={inp.value} type={inp.type} click={this.props.back} change={inp.change} className={inp.class}/>
      }
      else
      {
        return <Input val={this.props.val} type={inp.type} className={inp.class}/>
      }
    });
    return (
      <div>
        {inputs}
      </div>
    );
  }
}

const mapStateToProps = (state)  =>  {
  console.log(state);
  return {
    val: state
  }
};

const mapDispatchToProps = (dispatch) => {
      return{
        addSym: (sym) => dispatch(actions.addSym(sym)),
        clear: () => dispatch(actions.clear()),
        equale: () => dispatch(actions.equale()),
        back: () => dispatch(actions.back()),
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
