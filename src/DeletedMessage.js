import React from 'react';

const DeletedMessage = props => {
  if (props.show) {
    return (
      <div class="alert alert-success show alert-dismissible" role="alert">
        All data deleted
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
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
