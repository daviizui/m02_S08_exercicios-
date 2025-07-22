import "./Request.css";

export default function Request() {
  return (
    <section className="request" id="orcamento">
      <h2>Solicite seu Orçameto</h2>
      <form action="">
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu emal" />
        <input type="tel" placeholder="Telefone" />
        <textarea placeholder="Observações adicionais"></textarea>
        <button type="submit"> Enviar</button>
      </form>
    </section>
  );
}
