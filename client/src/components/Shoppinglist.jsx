import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux'
import { getItems, deleteItem } from '../actions/itemActions'

class Shoppinglist extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (_id) => {
        this.props.deleteItem(_id);
    }

    render() {
        const { items } = this.props.item;

        return (
            <Container>

                <ListGroup>
                    {items.map(({ _id, name }) => (

                        <ListGroupItem className='m-2' key={_id}>
                            {name}

                            <Button className='remove-btn ml-5' color='danger' size='sm'
                                onClick={this.onDeleteClick.bind(this, _id)} > &times;
                            </Button>
                        </ListGroupItem>

                    ))}
                </ListGroup>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
})
export default connect(mapStateToProps, { getItems, deleteItem })(Shoppinglist)