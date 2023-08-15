import Header from './Header'
import Footer from './Footer'

function Layout({children}){
    return(
        <div>
        {/* Common header */}
        <header>
         <Header/>
        </header>
        
        {/* Content area */}
        <main>
          {children}
        </main>
        
        {/* Common footer */}
        <footer>
          <Footer/>
        </footer>
      </div>
    )
}
export default Layout;