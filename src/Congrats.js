import React from "react";
import PropTypes from "prop-types";

//recieve the success state as aa prop

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message" className="alert alert-success">
          Congratulations!You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
export default Congrats;
