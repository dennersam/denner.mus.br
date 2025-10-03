import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "5521982579799";
  const message =
    "Olá Denner, tenho interesse em fazer um evento, e gostaria de mais detalhes dos seus serviços musicais!";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: "#25D366",
        color: "white",
        padding: "12px 20px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px",
      }}
    >
      <FaWhatsapp style={{ marginRight: "8px", fontSize: "20px" }} />
      Fale comigo no WhatsApp
    </a>
  );
}

export default WhatsAppButton;
