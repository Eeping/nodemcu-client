import React from 'react';

const DeletedMessage = props => {
  if (props.show) {
    return (
      <div className="alert alert-success show alert-dismissible" role="alert">
        All data deleted
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => {
            props.resetAlert();
          }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default DeletedMessage;
