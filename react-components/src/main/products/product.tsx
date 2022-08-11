export const Product = ({url, title, year, company, weight, speed, color, popularity, amount}: any) => (
  <div className="product" style={{background: "#AAA"}}>
    <div
      className="product__img"
      style={{
        backgroundImage:
          `url("${url}")`,
      }}
    ></div>
    <div className="product__info">
      <h3 className="product__title">{title}</h3>
      <p className="product__year">Year: {year}</p>
      <p className="product__company">Company: {company}</p>
      <p className="product__weight-speed">Weight: {weight}, Top speed: {speed}</p>
      <p className="product__color-popular">Color: {color}, Popular: {popularity}</p>
      <p className="product__quantity">Amount left: {amount}</p>
    </div>
    <div className="product__btns">
      <div className="product__btn_group">
        <button className="product__btn_remove product__btn_group-item">
          -
        </button>
        <button className="product__btn_amount-in-cart product__btn_group-item">
          0
        </button>
        <button className="product__btn_add product__btn_group-item">+</button>
      </div>
      <button className="product__btn_add-to-cart">Add to cart</button>
    </div>
  </div>
);
