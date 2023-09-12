import "./style.css"
import logo_In from "../../assets/img/logo_INTEGRADASH_texto.png"
import Logoclaro from "../../assets/img/logoclaro.png"


function Possplash(){

    return(   
      <>     
        <main id="Possplash">
        
  <section className="esquerda">
    <div className="logopagina1">
      <img
        src={logo_In}
        className="integradash_texto"
        alt=""
      />
    </div>
    <div className="centro">
      <h1 className="teste_Container Alcancar">
        Alcançar <br /> os melhores resultados para a sua empresa.
      </h1>
      <h2 className="teste_Container oferecer">
        Oferecer soluções modernas e eficientes de monitoramento de produção,
        contribuindo para o aumento da eficiência e controle das operações das
        empresas.
      </h2>
      <a href="" className="teste_Container botao">
        Comecar agora
      </a>
    </div>
  </section>
  <section className="direito">
    <div className="logoclaro">
      <img src={Logoclaro} alt="" />
    </div>
    <div className="h3p">
      <h2 className="sobre_a_marca container2">Sobre a marca</h2>
      <p className="inovacao container2">
        A IntegraDash é uma marca que busca a inovação e a modernização dos
        sistemas de monitoramento de produção, com o objetivo de oferecer
        soluções eficientes e intuitivas para seus clientes. A empresa valoriza
        a transparência, a ética e a responsabilidade social em todas as suas
        ações.
      </p>
    </div>
  </section>
  </main>

  </>

    )
}
export default Possplash