import logo from '../assets/logo.png'
import getPageWidth from '../functions/getPageWidth'
import '../styles/footer.css'

export default function Footer(){

    const width = getPageWidth()

    return(
        <footer>
            {width > 600 ?
            <>
            <p>Website by {' '}
                <a
                href="https://donovanheynen.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Donovan Heynen
                </a>
            </p>
            <img src={logo} />
            </>
            :
            <>
            <img src={logo} />
            <p>Website by {' '}
                <a
                href="https://donovanheynen.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Donovan Heynen
                </a>
            </p>
            </>
            }
        </footer>
    )
}