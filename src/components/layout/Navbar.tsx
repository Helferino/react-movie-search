import { Link } from 'react-router-dom';

const Navbar = () => {
  const items = [
    {
      title: 'Search Movie',
      to: '/',
    },
    {
      title: 'Favorites',
      to: '/my-favorites',
    }
  ]

  return (
    <div className='navbar'>
      {items.map((item, index) => {
        return <Link className='item' key={index} to={item.to}>{item.title}</Link>
      })}
    </div>
  )
}

export default Navbar;
