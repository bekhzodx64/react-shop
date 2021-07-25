function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    displayAssets: [{ full_background }],
    price: { finalPrice },
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={full_background} alt={displayName} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className='card-action'>
        <button
          className='btn blue'
          onClick={() =>
            addToBasket({
              mainId,
              displayName,
              price: { finalPrice },
            })
          }
        >
          Купить
        </button>
        <span className='right cost'>{finalPrice} руб.</span>
      </div>
    </div>
  );
}

export { GoodsItem };
