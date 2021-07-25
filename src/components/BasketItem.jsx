function BasketItem(props) {
  const {
    mainId,
    displayName,
    price: { finalPrice },
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className='collection-item'>
      {displayName}{' '}
      <i className='material-icons blue-text basket-quantity' onClick={() => decQuantity(mainId)}>
        remove_circle
      </i>{' '}
      x{quantity}{' '}
      <i className='material-icons blue-text basket-quantity' onClick={() => incQuantity(mainId)}>
        add_circle
      </i>{' '}
      = {finalPrice * quantity} руб.
      <span className='secondary-content' onClick={() => removeFromBasket(mainId)}>
        <i className='material-icons basket-delete red-text'>close</i>
      </span>
    </li>
  );
}

export { BasketItem };
