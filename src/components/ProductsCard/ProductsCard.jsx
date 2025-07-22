import "./ProductsCard.css";

export default function ProductsCard({ imgSrc, title, description }) {
  return (
    <>
      <ul className="products-card">
        <li>
          <img src={imgSrc} />
          <h3>{title}</h3>
          <p>{description}.</p>
        </li>
      </ul>
    </>
  );
}
