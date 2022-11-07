import React from 'react';
import { getDropdownMenuPlacement } from 'react-bootstrap/esm/DropdownMenu';

const dropdown = props => {
    return(
        <article>
            {props.children}
        </article>
    )
};

export default dropdown;