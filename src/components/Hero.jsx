import "./Hero.css";

export default function Hero({ message = "LAUNCHING SOON" }) {
  return (
    <div className="hero">
      <h2 className="hero__message">{message}</h2>
    </div>
  );
}
