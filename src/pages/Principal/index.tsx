import '../Principal/style.css'
import Logo from "../../assets/img/Logo_Integradash_fundo_claro01.png"

function Principal() {


    return (
        <>
        <main id="principal">


            <div className="paginaprincipal">
                <img src={Logo}
                    className="Logo_Integradash_fundo_claro"
                    alt=""
                />
            </div>
        </main>


        </>
    )
}



export default Principal
