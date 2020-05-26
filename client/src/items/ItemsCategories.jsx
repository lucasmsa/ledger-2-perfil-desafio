import React from 'react';
import axios from 'axios';
import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp';
import EditIcon from '@material-ui/icons/Edit';

function ItemsCategories(props) {

    function handleClick(){
        props.onDelete(props.id)
    }

    return (
        <div className="items">
          <li><h5>{props.categoria} [{props.id}]
            <DeleteOutlineSharpIcon 
                color="secondary"
                onClick={handleClick}
            />
            <EditIcon 
                color="primary"
                onClick=""
            />
            </h5>
            </li>
            <hr 
                width="25%"
            />
        </div>
      );
}

export default ItemsCategories;