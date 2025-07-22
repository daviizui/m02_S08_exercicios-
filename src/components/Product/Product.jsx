import ProductsCard from "../ProductsCard/ProductsCard";
import "./Product.css";

export default function Product() {
  return (
    <section className="product" id="produto">
      <h2>Nossos Produtos</h2>
      <div>
        <ProductsCard
          imgSrc={
            "https://www.neosolar.com.br/media/catalog/product/p/a/painel_solar_fotovoltaico_450w_monocristalino_-_osda_-_lado.jpg"
          }
          title={"Placa Solar 450W"}
          description={"Alta eficiência para uso residenciais e comerciais."}
        />
        <ProductsCard
          imgSrc={
            "https://acdn-us.mitiendanube.com/stores/003/582/147/products/2-5f181e08e8387f564e17256327119658-1024-1024.jpg"
          }
          title={"Kit solar completo"}
          description={
            "Inclui placas, inversor, estrutura, cabos e instalação profissional."
          }
        />
        <ProductsCard
          imgSrc={
            "https://canalsolar.com.br/wp-content/uploads/2022/03/canal-solar-Inversor-solar-o-que-e-e-pra-que-serve-2.jpg"
          }
          title={"Inversol solar"}
          description={
            "Transforma energia solar em energia elátrica para sua casa"
          }
        />
      </div>
    </section>
  );
}
