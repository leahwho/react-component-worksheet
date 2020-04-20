import React from 'react';
import Avatar from './components/Avatar';
import Badge from './components/Badge';
import UserCard from './components/UserCard';
import ProductList from './components/ProductList';
import './App.css';

const productProps = [
  {
  name: 'Vintage Leather Jacket',
  imgUrl: 'https://www.glamourjackets.com/image/cache/2018%20Product%20Balance/Mens%20Biker%20Vintage%20Black%20Leather%20Retro%20Distressed%20Jacket/Mens-Biker-Vintage-Motorcycle-Distressed-Black-Retro-Leather-Jacket.1__85205.1486735793-900x900.jpg',
  alt: 'a black leather jacket',
  standardPrice: 199.99,
  discountPrice: 129.99,
}
];

const cardInfo = {
  name: 'Hela',
  imgUrl: 'https://avatarfiles.alphacoders.com/112/thumb-112846.jpg',
  alt: 'hela from Thor Ragnarok',
  rank: 'God of Death',
  score: 10000
};



const productList = [
  {
    name: 'Vintage Leather Jacket',
    imgUrl: 'https://www.glamourjackets.com/image/cache/2018%20Product%20Balance/Mens%20Biker%20Vintage%20Black%20Leather%20Retro%20Distressed%20Jacket/Mens-Biker-Vintage-Motorcycle-Distressed-Black-Retro-Leather-Jacket.1__85205.1486735793-900x900.jpg',
    alt: 'a black leather jacket',
    standardPrice: 199.99,
    discountPrice: 129.99,
  },
  {
    name: 'J.Crew Regent Blazer',
    imgUrl: 'https://www.jcrew.com/s7-img-facade/B0323_NA7295?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&wid=636&hei=636',
    alt: 'a blazer',
    standardPrice: 199.99,
    discountPrice: 129.99,
  },
  {
    name: 'Discovery Rain Jacket',
    imgUrl: 'https://cdni.llbean.net/is/image/wim/233155_467_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2',
    alt: 'a yellow rain coat',
    standardPrice: 39.95,
  },
  {
    name: 'Patagonia Pelican Vest',
    imgUrl: 'https://cdn.shopify.com/s/files/1/0312/6537/products/22826-PLCN-F_1024x1024.jpg?v=1571278063',
    alt: 'a cream-colored fuzzy vest',
    standardPrice: 119.99,
    discountPrice: 99.99,
  },
  {
    name: 'Levis Buffalo Jacket',
    imgUrl: 'https://i.ebayimg.com/images/g/Mk0AAOSwD2tcBYVG/s-l640.jpg',
    alt: 'a blue jean jacket with red plaid trim',
    standardPrice: 69.99,
  },
  {
    name: 'TinySpark Patchwork Track Windbreaker',
    imgUrl: 'https://cdn.shopify.com/s/files/1/0865/1016/products/product-image-1019055536.jpg?v=1571613891',
    alt: 'a purple, teal, and white windbreaker',
    standardPrice: 62.99,
    discountPrice: 49.95,
  },
];

function App() {

  return (
    <div className="App">

      <header className="App-header">
          <Avatar imgUrl='https://vignette.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png/revision/latest/top-crop/width/360/height/360?cb=20190409004811' />
      </header>

      <section className='badge'>
        <Badge number={101} />
      </section>

      <section className='product'>
        <ProductList productList={productProps} />
      </section>

      <section className='user-div'>
        <UserCard cardInfo={cardInfo} />
      </section>

      <section className='product-div'>
        <ProductList productList={productList} />
      </section>

    </div>
  );
}

export default App;
