import { ImageWithFallback } from "./figma/ImageWithFallback";
import styles from "./ProductCard.module.css";

interface Product {
  id: number;
  name: string;
  price: number;
  category: "bags" | "phones";
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return `${price} ₼`;
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className={styles.image}
        />
      </div>
      
      <div className={styles.content}>
        <span className={styles.category}>
          {product.category === "bags" ? "Çanta" : "Telefon"}
        </span>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        
        <div className={styles.footer}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          <button
            className={styles.addButton}
            onClick={() => onAddToCart(product)}
          >
            Səbətə at
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
