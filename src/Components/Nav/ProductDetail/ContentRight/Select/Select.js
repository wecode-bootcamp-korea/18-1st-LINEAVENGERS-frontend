import React, { Component } from "react";
import SelectResult from "./Component/SelectResult";
import { v4 as uuid } from "uuid";
import "./Select.scss";

class Select extends Component {
  state = {
    listOpen: false,
  };
  showOptions = () => {
    const { listOpen } = this.state;
    this.setState({
      listOpen: !listOpen,
    });
  };
  render() {
    const {
      options,
      type,
      addSelect,
      selectList,
      deleteSelect,
      handleCount,
    } = this.props;
    const { listOpen } = this.state;

    return (
      <>
        <div className={`select-option ${listOpen ? "active" : ""}`}>
          <span className="option-title">{type}</span>
          <span className="option-arrow" onClick={this.showOptions}></span>
          <ul className="option-wrap">
            {options.map(option => {
              const id = uuid();
              return (
                <li
                  key={id}
                  id={id}
                  className="option-list"
                  name={option}
                  onClick={e => {
                    addSelect(e, id, option);
                    this.showOptions();
                  }}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
        {selectList.map(select => (
          <SelectResult
            key={select.id}
            data={select}
            deleteSelect={deleteSelect}
            handleCount={handleCount}
          />
        ))}
      </>
    );
  }
}

export default Select;
