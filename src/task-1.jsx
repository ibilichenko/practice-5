import React from "react";
import PropTypes from "prop-types";



class TabItem extends React.Component {
  openBody(e) {
    const header = e.target;
    const content = e.target.nextElementSibling;
    if(header.classList.contains('active')) {
      header.classList.remove('active')
      content.classList.add('d-none')
    } else {
      header.classList.add('active');
      content.classList.remove('d-none')
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-header text-white bg-info" onClick={(e) => this.openBody(e)}>
          {this.props.header}
        </div>
        <div className="card-body d-none">
          {this.props.content}
        </div>
      </div>
    )
  }
}
export default class Accordion extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.tabs.map((tab, index) => {
            return <TabItem key={index} header={tab.header} content={tab.content}></TabItem>
          })
        }
      </div>
    );
  }
}

TabItem.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string
}

Accordion.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      content: PropTypes.string
    })
  )
};
