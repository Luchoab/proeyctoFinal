import { NavLink } from 'react-router-dom'
import { AboutSection } from '../AboutSection/AboutSection'
const imgHome = require.context('../../assets/img/homeImg', true)

export const GridItems = () => {
    return (
        <>
            <div className="grid-item tall" >
                <img src={imgHome(`./img-home-1.jpg`)} alt="" className='img-1' />
            </div>
            <div className="grid-item">
                <img src={imgHome(`./img-home-1.jpg`)} alt="" />
            </div>
            <div className="grid-item links-item">
                <NavLink href="/carta" to='carta' className='link-carta-container'>
                    <div className='link-carta'>
                        Carta
                    </div>
                </NavLink>
            </div>
            <div className="grid-item">
                <img src={imgHome(`./img-home-3.jpeg`)} alt="" />
            </div>

            <div className="grid-item pedir-item links-item">
                <NavLink href="/your-cart" to='your-cart' className='link-pedir-container'>
                    <div className='link-pedir'>
                        Carro
                    </div>
                </NavLink>
            </div>
            <div className="grid-item wide">
                <img src={imgHome(`./img-home-4.jpg`)} alt="" />
            </div>
            <div className="grid-item ">
                <img src={imgHome(`./img-home-5.jpg`)} alt="" />
            </div>
            <div className="grid-item wide ">
                <img src={imgHome(`./img-home-6.jpg`)} alt="" />
            </div>
            <div className="grid-item links-item link-registro-container">
                <NavLink href="/registro" to='registro' className='link-registrarse-container'>
                    <div className='link-registro'>
                        Registrarse
                    </div>
                </NavLink>
            </div>
            <div className="grid-item wide">
                <img src={imgHome(`./img-home-7.jpeg`)} alt="" />

            </div>
            <div className="grid-item">
                <img src={imgHome(`./img-home-8.jpg`)} alt="" />
            </div>
            <div className="grid-item wide about-main links-item">
                <AboutSection />
            </div>
        </>
    )
}
