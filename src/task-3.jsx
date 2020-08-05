import React from "react";
import PropTypes from "prop-types";



class TabHeader extends React.Component {
  render() {
    return (
      <li id={this.props.id} className={`list-group-item ${this.props.active}`} onClick={this.props.onClick}>
        {this.props.headerTpl ? this.props.headerTpl({item: this.props.item, index: this.props.id + 1}) : this.props.item.header}
      </li>
    )
  }
}

class TabContent extends React.Component {
  render() {
    return(
      <div className={this.props.class}>
        {this.props.contentTpl ? this.props.contentTpl({item: this.props.item, index: this.props.id + 1}) : this.props.item.content}
      </div>
    )
  }
}

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state={showed: 0}
    this.changeActive = this.changeActive.bind(this);
  }

  changeActive(e) {
    this.setState({showed: Number(e.target.id)})
  }
  render() {
    return (
      <div className="row">
        <ul className="col-3 list-group">
          {
            this.props.tabs.map((element, index) => {
              return <TabHeader headerTpl={this.props.headerTpl} item={element} id={index} key={index} active={this.state.showed === index ? "active" : ""} onClick={this.changeActive}/>
            })
          }
        </ul>
        <div className="col-9">
          {
            this.props.tabs.map((element, index) => {
              return <TabContent contentTpl={this.props.contentTpl} item={element} id={index} key={index} class={this.state.showed !== index  ? "d-none" : ""}/>
            })
          }
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      content: PropTypes.string
    })
  ),
  headerTpl: PropTypes.func,
  contentTpl: PropTypes.func
}

TabHeader.propTypes = {
  id: PropTypes.number,
  active: PropTypes.string,
  headerTpl: PropTypes.func,
  item: PropTypes.shape({
    header: PropTypes.string,
    content: PropTypes.string
  }),
  onClick: PropTypes.func,
}
TabContent.propTypes = {
  class: PropTypes.string,
  contentTpl: PropTypes.func,
  item: PropTypes.shape({
    header: PropTypes.string,
    content: PropTypes.string
  }),
  id: PropTypes.number
}