import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function Option (props) {

    return(
        <div>
            <InputGroup>

                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </InputGroupText>
                </InputGroupAddon>
                
                <ListGroupItem>{props.name}</ListGroupItem>

            </InputGroup>
         </div>
    )
}