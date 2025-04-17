import './odoo.css'
import OdooImg from '../../assets/odoo.avif'

import ProjectManagemnetIcon from '../../assets/icons/project_management.svg'
import EncryptIcon from '../../assets/icons/encrypt.svg'
import CloudIcon from '../../assets/icons/cloud.svg'
import CrmIcon from '../../assets/icons/crm.svg'
import SalesIcon from '../../assets/icons/invoice.svg'
import InventoryIcon from '../../assets/icons/inventory.svg'
import EmployeeIcon from '../../assets/icons/employee.svg'
import StoreIcon from '../../assets/icons/store.svg'
import PdvIcon from '../../assets/icons/pdv.svg'

import ContactButton from '../../components/buttons/ContactButton'
import SpotlightCard from '../../../Reactbits/SpotlightCard/SpotlightCard';
import { useEffect } from 'react'

function Odoo() {
    useEffect(() => {
        window.scrollTo(0, 0);

        return;
    });

    return (
        <div className='main-container'>
            <section className='hero-section'>
                <h1>Impulsa el crecimiento de tu empresa con nuestro software ERP Integral</h1>
                <p>Descubre una solución avanzada de gestión empresarial que optimiza tus procesos, integra todas tus áreas y mejora la toma de decisiones.</p>
                <ContactButton text="Prueba gratis" message="Hola, me interesa impulsar el crecimiento de mi empresa, podrían ayudarme?" />
                <img src={OdooImg} alt="" />
            </section>
            <section className='services-section'>
                <SpotlightCard className="custom-spotlight-card-odoo" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <img src={ProjectManagemnetIcon} alt="" />
                    <h3>Gestión de proyectos</h3>
                    <p>Asigna tareas, define plazos y monitorea el progreso en tiempo real. Garantiza una gestión transparente y organizada, fomentando la colaboración y la productividad.</p>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card-odoo" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <img src={EncryptIcon} alt="" />
                    <h3>Encriptación de datos</h3>
                    <p>Protegemos toda tu información con encriptación avanzada, asegurando la integridad de todos tus datos.</p>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card-odoo" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <img src={CloudIcon} alt="" />
                    <h3>Alojamiento en la nube</h3>
                    <p>Alojamos tu información en un VPS, con un rendimiento excepcional y acceso disponible 24/7 desde cualquier dispositivo.</p>
                </SpotlightCard>
            </section>
            <article className='odoo-modules'>
                <p>Caracteristicas del sistema</p>
                <h2>Mejorar la calidad del servicio es nuestra prioridad</h2>
                <p>Trabajamos en implementar mejoras para mantener el mejor funcionamiento posible.<br/> Nos encanta escuchar las recomendaciones para mantener un sistema estable y en constante crecimiento.</p>
                <section className='apps'>
                    <div className='app-card'>
                        <div className='app-title'>
                            <img src={CrmIcon} alt="crm icon" />
                            <p><span>CRM</span></p>
                        </div>
                        <p>Gestione oportunidades de ventas, seguimiento de potenciales clientes y automatice su proceso comercial para aumentar la productividad en su proyecto.</p>
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
                            <img src={InventoryIcon} alt="inventory icon" />
                            <p><span>Inventario</span></p>
                        </div>
                        <p>Administre existencias en tiempo real, ubicaciones múltiples y trazabilidad, optimizando el control logístico y reduciendo errores operativos.</p>
                    </div>
                    <div className='app-card'>
                        <div className='app-title'>
                            <img src={EmployeeIcon} alt="employees icon" />
                            <p><span>Empleados</span></p>
                        </div>
                        <p>Centralice la información del personal, gestiona contratos, ausencias y evaluaciones, facilitando la administración eficiente del talento humano.</p>
                    </div>
                    <div className='app-card'>
                        <div className='app-title'>
                            <img src={StoreIcon} alt="employees icon" />
                            <p><span>Ecommerce</span></p>
                        </div>
                        <p>Cree su catálogo en línea, integrado con inventario, ventas y pagos en línea, ofreciendo una experiencia de compra fluida y profesional.</p>
                    </div>
                    <div className='app-card'>
                        <div className='app-title'>
                            <img src={PdvIcon} alt="employees icon" />
                            <p><span>Punto de Venta</span></p>
                        </div>
                        <p>Ofrece ventas rápidas en tienda física, integradas con inventario, clientes y pagos, funcionando incluso sin conexión a internet.</p>
                    </div>
                </section>
                <ContactButton
                style={{ padding: '25px', scale: '1.2' }}
                text="Más información" message="Hola, me interesa impulsar el crecimiento de mi empresa, podrían ayudarme?" />
            </article>
        </div>
    );
}

export default Odoo;