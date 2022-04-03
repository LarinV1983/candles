function Header() {
	return (
		<header className="d-flex justify-between align-center p-40">
  <div className = "d-flex align-center">
  <img width={40} heidth={40} src="img/menu-burger.svg" alt=""/>
  <div className = "headerinfo">
    <h3 className="text-uppercase">React Sneakers</h3>
    <p>Магазин лучших кросовок</p>
  </div>
</div>
  <ul className="d-flex"> 
    <li className="mr-30">
<img width={18} heidth={18} src="img/menu-burger.svg" alt=""/>      
<span>1205 руб.</span>
    </li>
    <li>
<img width={18} heidth={18} src="img/menu-burger.svg" alt=""/>    </li>
  </ul>
  </header>
		);
}

export default Header;