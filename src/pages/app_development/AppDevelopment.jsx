import SpotlightCard from '../../../Reactbits/SpotlightCard/SpotlightCard'
import ContactButton from '../../components/buttons/ContactButton'

import AndroidIcon from '../../assets/icons/android.svg'
import IosIcon from '../../assets/icons/apple.svg'
import FlutterIcon from '../../assets/icons/flutter.svg'
import WhiteboardIcon from '../../assets/icons/whiteboard.svg'
import EncryptIcon from '../../assets/icons/encrypt.svg'
import LinkIcon from '../../assets/icons/link.svg'
import FileIcon from '../../assets/icons/file.svg'
import RecommendIcon from '../../assets/icons/recommend.svg'
import ChatIcon from '../../assets/icons/chat.svg'

function AppDevelopment() {
    return (
        <div className='main-container'>
            <section className='hero-section'>
                <h1>Soluciones móviles, web y de escritorio a la medida.</h1>
                <p>Impulsa tu proyecto con una app moderna, rápida y segura. <br/>Desarrollamos aplicaciones personalizadas para todo tipo de dispositivos.</p>
                <ContactButton text="Quiero mi app" message="Hola, me interesa impulsar el crecimiento de mi empresa, podrían ayudarme?" />
            </section>
            <section className='services-section'>
                <SpotlightCard className="custom-spotlight-card-odoo" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <img src={WhiteboardIcon} alt="app icon" />
                    <h3>Aplicaciones personalizadas</h3>
                    <p>Creamos aplicaciones únicas adaptadas a tus necesidades, destacando funcionalidad, escalabilidad y una experiencia de usuario sobresaliente.</p>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card-odoo" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <img src={EncryptIcon} alt="security icon" />
                    <h3>Seguridad avanzada</h3>
                    <p>Protegemos tus datos y los de tus usuarios con estándares de seguridad de primer nivel, garantizando privacidad y confianza en cada interacción.</p>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card-odoo" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <img src={LinkIcon} alt="integration icon" />
                    <h3>Integraciones</h3>
                    <p>Conectamos tu aplicación con plataformas y servicios que ya utilizas, optimizando flujos de trabajo y mejorando la productividad de tu negocio.</p>
                </SpotlightCard>
            </section>

            <article className='odoo-modules'>
                <h2>Servicios disponibles</h2>
                <p>Utilizamos tecnologías modernas y seguras para garantizar el mejor desarrollo posible.<br/> Ideal si buscas innovar, optimizar procesos y ofrecer mejores experiencias.</p>
                <section className='apps'>
                    <div className='app-card'>
                        <div className='app-title'>
                            <img src={AndroidIcon} alt="web icon" />
                            <p><span>Android</span></p>
                        </div>
                        <p>Creamos tu aplicación con funcionalidades y rendimiento nativo para este sistema con Android Studio y Kotlin.</p>
                    </div>
                    <div className='app-card'>
                        <div className='app-title'>
                            <img src={IosIcon} alt="inventory icon" />
                            <p><span>IOS</span></p>
                        </div>
                        <p>Creamos tu aplicación con funcionalidades y rendimiento nativo para este sistema con Swift y SwiftUI.</p>
                    </div>
                    <div className='app-card'>
                        <div className='app-title'>
                            <img src={FlutterIcon} alt="sales icon" />
                            <p><span>Multiplataforma</span></p>
                        </div>
                        <p>Una sola aplicación para escritorio o móviles con un rendimiento excepcional gracias a Flutter.</p>
                    </div>
                </section>
                <ContactButton
                style={{ padding: '25px', scale: '1.2' }}
                text="Más información" message="Hola, me interesa impulsar el crecimiento de mi empresa, podrían ayudarme?" />
            </article>
        </div>
    )
}

export default AppDevelopment;