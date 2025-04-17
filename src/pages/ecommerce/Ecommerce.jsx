import './ecommerce.css'
import EcommerceImg from '../../assets/ecommerce_flyer.avif'

import EcommerceIcon from '../../assets/icons/store.svg'
import EncryptIcon from '../../assets/icons/encrypt.svg'
import PaymentsIcon from '../../assets/icons/payments.svg'
import SalesIcon from '../../assets/icons/invoice.svg'
import InventoryIcon from '../../assets/icons/inventory.svg'
import WebIcon from '../../assets/icons/web.svg'
import FileIcon from '../../assets/icons/file.svg'
import RecommendIcon from '../../assets/icons/recommend.svg'
import ChatIcon from '../../assets/icons/chat.svg'
import FavoritesIcon from '../../assets/icons/favorites.svg'
import CouponIcon from '../../assets/icons/coupon.svg'
import ReviewIcon from '../../assets/icons/review.svg'

import ContactButton from '../../components/buttons/ContactButton'
import SpotlightCard from '../../../Reactbits/SpotlightCard/SpotlightCard';
import { useEffect } from 'react'

function Ecommerce() {
    useEffect(() => {
        window.scrollTo(0, 0);

        return;
    });

    return (
        <div className='main-container'>
            <section className='hero-section'>
                <h1>Crea tu tienda online lista para crecer: <br/>integración total y pagos seguros</h1>
                <p>Lanza tu ecommerce con una plataforma fácil de usar, integrada con pagos en línea, gestión de inventario y herramientas de marketing. <br/>Ideal para negocios que quieren vender más por internet sin complicaciones.</p>
                <ContactButton text="Prueba gratis" message="Hola, me interesa impulsar el crecimiento de mi empresa, podrían ayudarme?" />
                <img src={EcommerceImg} alt="" />
            </section>
            <section className='services-section'>
                <SpotlightCard className="custom-spotlight-card-odoo" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <img src={EcommerceIcon} alt="" />
                    <h3>Personalice su tienda</h3>
                    <p>Elija entre cientos de plantillas gratuitas para su ecommerce o diseñe a medida la imagen perfecta para su marca.</p>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card-odoo" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <img src={EncryptIcon} alt="encrypt icon" />
                    <h3>Encriptación de datos</h3>
                    <p>Protegemos toda tu información con encriptación avanzada, asegurando la integridad de todos tus datos.</p>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card-odoo" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <img src={PaymentsIcon} alt="payment icon" />
                    <h3>Pagos en línea</h3>
                    <p>Acepta pagos en línea de forma segura. Automatiza el flujo desde la compra hasta la confirmación y seguimiento del pedido.</p>
                </SpotlightCard>
            </section>
            <article className='odoo-modules'>
                <p>Caracteristicas del sistema</p>
                <h2>Maximiza tus ingresos</h2>
                <p>Trabajamos en implementar mejoras para mantener el mejor funcionamiento posible.<br/> Nos encanta escuchar las recomendaciones para mantener un sistema estable y en constante crecimiento.</p>
                <section className='apps'>
                    <div className='app-card'>
                        <div className='app-title'>
                            <img src={WebIcon} alt="web icon" />
                            <p><span>Sitio web</span></p>
                        </div>
                        <p>Cree y administre su sitio web fácilmente con un editor visual, sin necesidad de conocimientos técnicos.</p>
                    </div>
                    <div className='app-card'>
                        <div className='app-title'>
                            <img src={InventoryIcon} alt="inventory icon" />
                            <p><span>Inventario</span></p>
                        </div>
                        <p>Administre existencias en tiempo real, ubicaciones múltiples y trazabilidad, optimizando el control logístico y reduciendo errores operativos.</p>
                    </div>
                    <div className='app-card'>
                        <div className='app-title'>
                            <img src={SalesIcon} alt="sales icon" />
                            <p><span>Ventas</span></p>
                        </div>
                        <p>Agilice la gestión de cotizaciones, pedidos y clientes, integrándose con inventario y facturación para optimizar el ciclo comercial completo.</p>
                    </div>
                    <div className='app-card'>
                        <div className='app-title'>
                            <img src={FileIcon} alt="file icon" />
                            <p><span>Reportes detallados</span></p>
                        </div>
                        <p>Genera reportes personalizables en cada módulo, con filtros avanzados y exportación en PDF o Excel para mejor toma de decisiones.</p>
                    </div>
                    <div className='app-card'>
                        <div className='app-title'>
                            <img src={RecommendIcon} alt="recommendations icon" />
                            <p><span>Ventas adicionales</span></p>
                        </div>
                        <p>Sugiere a tus clientes promociones o productos adicionales durante su visita y proceso de compra.</p>
                    </div>
                    <div className='app-card'>
                        <div className='app-title'>
                            <img src={ChatIcon} alt="chat icon" />
                            <p><span>Chat en vivo</span></p>
                        </div>
                        <p>Reciba mensajes de sus visitantes dentro de la plataforma para responder a todas sus preguntas al instante.</p>
                    </div>
                    <div className='app-card'>
                        <div className='app-title'>
                            <img src={FavoritesIcon} alt="wishlist icon" />
                            <p><span>Lista de deseos</span></p>
                        </div>
                        <p>Sus usuarios podrán agregar articulos a una lista de deseos para realizar la compra de sus productos favoritos más rápido.</p>
                    </div>
                    <div className='app-card'>
                        <div className='app-title'>
                            <img src={CouponIcon} alt="coupons icon" />
                            <p><span>Cupones y códigos</span></p>
                        </div>
                        <p>Cree cupones y códigos como incentivo o recompensas para sus usuarios y clientes potenciales.</p>
                    </div>
                    <div className='app-card'>
                        <div className='app-title'>
                            <img src={ReviewIcon} alt="review icon" />
                            <p><span>Reseñas de productos</span></p>
                        </div>
                        <p>Active los comentarios para que sus usuarios puedan calificar y comentar sobre sus productos.</p>
                    </div>
                </section>
                <ContactButton
                style={{ padding: '25px', scale: '1.2' }}
                text="Más información" message="Hola, me interesa impulsar el crecimiento de mi empresa, podrían ayudarme?" />
            </article>
        </div>
    );
}

export default Ecommerce;