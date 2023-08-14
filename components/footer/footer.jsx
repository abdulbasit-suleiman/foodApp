import Link from 'next/link'
import './footer.css'
export function FooterPage(){
    return(
        <div className="footer-container">
<hr />
         <div>

         <span className='stroke-text'>Powered by :</span>
         <Link href="https://wa.me/08102444444">Foodnotion.com</Link>

         </div>
        </div>
    )
}

