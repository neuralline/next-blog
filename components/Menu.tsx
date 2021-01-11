import Link from 'next/link'
import MenuCSS from './Menu.module.scss'

const Menu = () => {
  return (
    <ul className={MenuCSS.menu}>
      <li>
        <Link href="/">
          <a>Mini-Blog</a>
        </Link>
      </li>{' '}
      <li>
        <Link href="/">
          <a>SSG</a>
        </Link>
      </li>
      <li>
        <Link href="/home-ssr">
          <a>SSR</a>
        </Link>
      </li>
      <li>
        <Link href="/home-csr">
          <a>CSR</a>
        </Link>
      </li>
      {/*   <li>
        <Link href="/products">
          <a>Products</a>
        </Link>
      </li>
      <li>
        <Link
          href="/products/[category]"
          as={'/products/some-product-category'}
        >
          <a>Some product category</a>
        </Link>
      </li> */}
    </ul>
  )
}

export default Menu
