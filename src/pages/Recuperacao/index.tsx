import '../Recuperacao/style.css'
// import logo01 from "../../assets/img/Logo_Integradash_fundo_claro01.png"
import logo2 from "../../assets/img/logo2.png"
import integradash from "../../assets/img/DESENVOLVIDO_POR_CERTO.png"
import imagenD from "../../assets/img/imagendireito.png"

function Recuperacao() {

  return (
    <>
      <section className="esquerda">

        <div className="recuperacao_deconta">
        </div>

        <div className="imagen2">
          <img src={logo2}
            alt="" />
        </div>

        <div className="recuperadcaodeconta1">
          <p className="Texto_recuperacao">Recuperação de conta</p>
          <p className="Pronto">
            Pronto. Verifique o seu email e faça a redefinição de sua senha.
          </p>
          <button>Voltar</button>
        </div>

        <div className="rodape">
          <p className="testeresponsividade">
            Dashboard desenvolvido por{" "}
            <img src={integradash}
              className="imagenrodape"
              alt="" />
          </p>
        </div>
      </section >
      <section className="direito">
        <img src={imagenD}
          className="teste"
          alt="" />
      </section>
    </>
  )
}
export default Recuperacao