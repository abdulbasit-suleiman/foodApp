import Link from 'next/link'
import './footer.css'
export function FooterPage(){
    return(
        <div className="footer-container">
<hr />
         <div>

         <span className='stroke-text'>Powered by :</span>
         <Link href="lcj">Foodnotion.com</Link>

         </div>
        </div>
    )
}

