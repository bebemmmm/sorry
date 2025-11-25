import styles from "./Cart.module.css";

interface Product {
  id: number;
  name: string;
  price: number;
  category: "bags" | "phones";
  image: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
  total: number;
}

// Icons as SVG components
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const MinusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const Trash2Icon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>
  </svg>
);

function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove, total }: CartProps) {
  const formatPrice = (price: number) => {
    return `${price} ₼`;
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.cart}>
        <div className={styles.header}>
          <h2 className={styles.title}>Səbət</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <XIcon />
          </button>
        </div>

        {items.length === 0 ? (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>Səbət boşdur</p>
            <p className={styles.emptySubtext}>Məhsul əlavə edin</p>
          </div>
        ) : (
          <>
            <div className={styles.items}>
              {items.map((item) => (
                <div key={item.id} className={styles.item}>
                  <img src={item.image} alt={item.name} className={styles.itemImage} />
                  
                  <div className={styles.itemInfo}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemPrice}>{formatPrice(item.price)}</p>
                    
                    <div className={styles.quantityControl}>
                      <button
                        className={styles.quantityButton}
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        <MinusIcon />
                      </button>
                      <span className={styles.quantity}>{item.quantity}</span>
                      <button
                        className={styles.quantityButton}
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <PlusIcon />
                      </button>
                    </div>
                  </div>

                  <button
                    className={styles.removeButton}
                    onClick={() => onRemove(item.id)}
                  >
                    <Trash2Icon />
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <div className={styles.total}>
                <span className={styles.totalLabel}>Cəmi:</span>
                <span className={styles.totalAmount}>{formatPrice(total)}</span>
              </div>
              <button className={styles.checkoutButton}>
                Ödəniş et
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;