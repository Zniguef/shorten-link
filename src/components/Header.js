import '../css/main.css'
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">Shortly</div>
      <Navigation />
      <MobileNavigation />
    </div>
  )
}

export default Header;