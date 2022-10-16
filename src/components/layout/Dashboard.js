import Navigation from "../Navigation"
import { Footer } from "../Footer"


export function Dashboard({children}) {
    return(
        <>
            {children}
        <Footer />
        </>
    )
}