import styles from './OrderItem.module.css';

function OrderItem(props) {

    console.log(props);
    console.log(props.products);

    return (
        <div className={styles.container}>
            <h3>
                OrderId: {props.order_id}
            </h3>
            {props.products.map(element =>
                <div key={element.id} style={{ display: 'flex' }}>
                    <p style={{margin:'2px'}}>
                        {element.name}
                    </p>
                    <p style={{ marginLeft: 'auto' }}>
                        <span style={{marginRight:'60px'}}>
                            x{element.quantity}
                        </span>
                        <span style={{marginRight:'60px'}}>
                            {element.price}
                        </span>
                    </p>
                </div>)}
            <p>Total Price: {props.amount}</p>
        </div>
    )
};


export default OrderItem;