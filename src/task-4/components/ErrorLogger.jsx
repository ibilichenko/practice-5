import React from "react";
import { connect } from "react-redux";
import { deleteError } from "../actions/week-forecast";
import PropTypes from "prop-types";

class ErrorLogger extends React.Component {
  render() {
    return (
      this.props.errors.map(error => {
        return(
          <div key={error.id} className="alert alert-primary" role="alert">
            {error.error}
            <button className="closeBtn" id={error.id} onClick={(e) => this.props.deleteError(e.target.id)}>&times;</button>
          </div>
        )
      })
    )
  }
}

const mapStateToProps = props => ({
  errors: props.errors
})

const mapDispatchToProps = dispatch => ({
  deleteError: id => dispatch(deleteError(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ErrorLogger);

ErrorLogger.propTypes = {
  deleteError: PropTypes.func,
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      error: PropTypes.string
    })
  )
}