import Header from '../header/Header';
import './style.css'

function Layout(props){ 
  return ( 
    <div className = "layout">
      <Header/>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;