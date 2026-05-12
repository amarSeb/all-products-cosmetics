export default function Home() {
  const products = [
    { name: "Luxury Serum", price: "4900 DA" },
    { name: "Gold Cream", price: "3500 DA" },
    { name: "Shampoo Pro", price: "2900 DA" },
    { name: "Skin Pack", price: "6200 DA" }
  ];

  return (
    <div style={{ padding: 20 }}>
      
      <h1 style={{ fontSize: 40, fontWeight: "bold" }}>
        ALL PRODUCTS COSMETICS
      </h1>

      <p>Premium Cosmetics Store</p>

      <hr />

      <h2>Products</h2>

      <div style={{ display: "grid", gap: 20 }}>
        {products.map((p, i) => (
          <div key={i} style={{ border: "1px solid #ddd", padding: 20 }}>
            <h3>{p.name}</h3>
            <p>{p.price}</p>

            <button style={{
              background: "black",
              color: "white",
              padding: 10,
              marginTop: 10
            }}>
              Order Now
            </button>
          </div>
        ))}
      </div>

      <hr />

      <h2>Payment Methods</h2>
      <ul>
        <li>USDT (Crypto)</li>
        <li>Visa</li>
        <li>BaridiMob</li>
      </ul>

      <hr />

      <p>Contact: WhatsApp</p>

    </div>
  );
          }
