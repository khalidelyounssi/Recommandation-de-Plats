export default function PlateCard({ name, price, is_available }) {
 return (
 <div style={{ border: "1px solid black    ", padding: "10px" }}>
 <h2>{name}</h2>
 <p>{price} MAD</p>
 {is_available && <span className="text-green-600">Disponible</span>}
 </div>
 );
}