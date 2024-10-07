import { Link } from 'react-router-dom'
import faHouse from '../icons/house-solid.svg'
import faUser from '../icons/user-solid.svg'
import faLocation from '../icons/location-dot-solid.svg'
/* CSS */
import '../css/style.css'
export const Navigation = () => {
    return (
        <div className=' container-menu'>
            <ul >
                <li>
                    <Link  to='/'><img src={faHouse} className='icono' /></Link>
                </li>
                <li>
                    <Link to="/user"><img src={faUser} className='icono' /></Link>
                </li>
                <li>
                    <Link to='/location'>
                        <img className='icono' src={faLocation} />
                    </Link>
                </li>
            </ul>
        </div>
    )
}