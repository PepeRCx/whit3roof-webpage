import SpotlightCard from '../Reactbits/SpotlightCard/SpotlightCard'
import SplashCursor from '../Reactbits/SplashCursor/SplashCursor'

import RankingIcon from './assets/HugeiconsRanking.svg'
import AppsMenuIcon from './assets/HugeiconsMenuSquare.svg'
import WebDevIcon from './assets/icons/webdevelopment.svg'
import StoreIcon from './assets/HugeiconsStore.svg'
import EcommerceIcon from './assets/HugeiconsShoppingBag.svg'
import AiIcon from './assets/HugeiconsAi.svg'
import './App.css'

import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();

  const contactMe = () => {
    const message = "Hola, estoy interesado en sus servicios, podrían ayudarme?";
    window.open(`https://wa.me/7841391319?text=${message}`, '_blank')
  }

  return (
    <>
      <SplashCursor />
      <section className='hero-section'>
          <div className='title'>
            <h1>Desarrollamos tu solución</h1>
          </div>
          <p>Utilizamos tecnología moderna, optimizada y enfocada para los estandares actuales<br/>mejorando la experiencia de usuario y convertir visitas en clientes.</p>
          <p>Si tienes una idea o proyecto en mente no dudes<br/>en contactarnos te ayudamos a resolverlo!</p>
          <button className='contact-button' onClick={contactMe}>Quiero mi sitio web</button>
      </section>

      <section className='services-section'>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <img src={RankingIcon} alt="" />
          <h3>Posicionamiento en buscadores</h3>
          <p>Optimizamos tu página para mejorar <br/>su posicionamiento en motores de busqueda como Google.</p>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <img src={WebDevIcon} alt="web development icon" />
          <h3>Desarrollo web</h3>
          <p>Desarrollamos sitios web modernos, rápidos y responsivos para impulsar tu presencia en línea y mejorar la experiencia de tus usuarios.</p>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <img src={AiIcon} alt="" />
          <h3>Soluciones con IA</h3>
          <p>Buscas integrar inteligencia artificial a tus proyectos? nosotros te ayudamos a integrar cualquier modelo y optimizarlo para las necesidades de tu negocio.</p>
        </SpotlightCard>
      </section>

      <section className='services-section'>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <img src={StoreIcon} alt="" />
          <h3>Software de Administración</h3>
          <p>Controla tu negocio estés donde estés. Con capacitación, soporte y actualizaciones gratuitas.
          </p>
          <button className='see-more-button' onClick={() => navigate('/odoo')}>Ver más</button>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <img src={EcommerceIcon} alt="" />
          <h3>Ecommerce</h3>
          <p>Expande tu negocio con una tienda online personalizable, moderna y lista para generar ventas.</p>
          <button className='see-more-button' onClick={() => navigate('ecommerce')}>Ver más</button>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <img src={AppsMenuIcon} alt="" />
          <h3>Desarrollo de Aplicaciones</h3>
          <p>Creamos y publicamos aplicaciones Android, IOS o multiplataforma para tu proyecto.</p>
          <button className='see-more-button' onClick={() => navigate('app-development')}>Ver más</button>
        </SpotlightCard>
      </section>
    </>
  )
}

export default App
