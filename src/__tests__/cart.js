import Cart from '../Cart.ts';
import Movie from '../Movie.ts';
import Book from '../Book.ts';
import MusicAlbum from '../MusicAlbum.ts';
import Notebook from '../Notebook.ts';

test('Cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'The Godfather', 'The Godfather', 1972, 'USA', 'Drama', 'Drama', 175, 10));
  cart.add(new Book(2, '1984', 'George Orwell', 10));
  cart.add(new MusicAlbum(3, 'Rammstein', 'Rammstein', 2019, 10));
  expect(cart.items).toEqual([
    {
      id: 1,
      name: 'The Godfather',
      englishName: 'The Godfather',
      year: 1972,
      country: 'USA',
      slogan: 'Drama',
      genre: 'Drama',
      duration: 175,
      price: 10,
      digitalItem: true,
      count: 1,
    },
    {
      id: 2,
      name: '1984',
      author: 'George Orwell',
      price: 10,
      digitalItem: true,
      count: 1,
    },
    {
      id: 3,
      name: 'Rammstein',
      artist: 'Rammstein',
      year: 2019,
      price: 10,
      digitalItem: true,
      count: 1,
    },
  ]);
});

test('Cart total price', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'The Godfather', 'The Godfather', 1972, 'USA', 'Drama', 'Drama', 175, 100));
  cart.add(new Book(2, '1984', 'George Orwell', 100));
  cart.add(new MusicAlbum(3, 'Rammstein', 'Rammstein', 2019, 100));
  cart.add(new Notebook(4, 'asus', 'zenbook', 2024, 1000));
  cart.add(new Notebook(4, 'asus', 'zenbook', 2024, 1000));
  expect(cart.totalPrice()).toBe(2300);
});

test('Cart total price with discount', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'The Godfather', 'The Godfather', 1972, 'USA', 'Drama', 'Drama', 175, 100));
  cart.add(new Book(2, '1984', 'George Orwell', 100));
  cart.add(new MusicAlbum(3, 'Rammstein', 'Rammstein', 2019, 100));
  expect(cart.totalPriceWithDiscount(5)).toBe(285);
});

test('Cart delete item', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'The Godfather', 'The Godfather', 1972, 'USA', 'Drama', 'Drama', 175, 10));
  cart.add(new Book(2, '1984', 'George Orwell', 10));
  cart.add(new MusicAlbum(3, 'Rammstein', 'Rammstein', 2019, 10));
  cart.deleteItem(1);
  expect(cart.items).toEqual([
    {
      id: 2,
      name: '1984',
      author: 'George Orwell',
      price: 10,
      digitalItem: true,
      count: 1,
    },
    {
      id: 3,
      name: 'Rammstein',
      artist: 'Rammstein',
      year: 2019,
      price: 10,
      digitalItem: true,
      count: 1,
    },
  ]);
});

test('Cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'The Godfather', 'The Godfather', 1972, 'USA', 'Drama', 'Drama', 175, 10));
  cart.add(new Movie(1, 'The Godfather', 'The Godfather', 1972, 'USA', 'Drama', 'Drama', 175, 10));
  expect(cart.items).toEqual([
    {
      id: 1,
      name: 'The Godfather',
      englishName: 'The Godfather',
      year: 1972,
      country: 'USA',
      slogan: 'Drama',
      genre: 'Drama',
      duration: 175,
      price: 10,
      digitalItem: true,
      count: 1,
    },
  ]);
});

test('Cart', () => {
  const cart = new Cart();
  cart.add(new Notebook(1, 'asus', 'zenbook', 2024, 10));
  cart.add(new Notebook(1, 'asus', 'zenbook', 2024, 10));
  expect(cart.items).toEqual([
    {
      id: 1,
      name: 'asus',
      model: 'zenbook',
      year: 2024,
      price: 10,
      digitalItem: false,
      count: 2,
    },
  ]);
});

test('Cart decrease count', () => {
  const cart = new Cart();
  cart.add(new Notebook(1, 'asus', 'zenbook', 2024, 10));
  cart.add(new Notebook(1, 'asus', 'zenbook', 2024, 10));
  cart.decreaseCount(1);
  expect(cart.items).toEqual([
    {
      id: 1,
      name: 'asus',
      model: 'zenbook',
      year: 2024,
      price: 10,
      digitalItem: false,
      count: 1,
    },
  ]);
});
