import React from 'react';

export default (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                   props.handleDeleteOption(props.optionText);
                }}
            >
              delete
            </button>
        </div>
    )
}