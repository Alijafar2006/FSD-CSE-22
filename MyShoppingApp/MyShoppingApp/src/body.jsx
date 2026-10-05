const books = [
	{
		id: 1,
		title: 'The Alchemist',
		author: 'Paulo Coelho',
		price: 12.99,
		cover: 'https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg',
	},
	{
		id: 2,
		title: 'Atomic Habits',
		author: 'James Clear',
		price: 18.5,
		cover: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg',
	},
	{
		id: 3,
		title: 'The Great Gatsby',
		author: 'F. Scott Fitzgerald',
		price: 10.75,
		cover: 'https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg',
	},
	{
		id: 4,
		title: 'Ikigai',
		author: 'Hector Garcia',
		price: 14.25,
		cover: 'https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg',
	},
	{
		id: 5,
		title: 'Educated',
		author: 'Tara Westover',
		price: 16.99,
		cover: 'https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg',
	},
	{
		id: 6,
		title: 'Deep Work',
		author: 'Cal Newport',
		price: 17.4,
		cover: 'https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg',
	},
];

const Body = ({ onAddToCart }) => {
	return (
		<section className="book-section" id="books">
			<div className="section-heading">
				<div>
					<p className="eyebrow">Curated reads</p>
					<h1>Find your next favorite book.</h1>
				</div>
				<p className="book-count">{books.length} books available</p>
			</div>

			<div className="book-grid">
				{books.map((book) => (
					<article className="book-card" key={book.id}>
						<div className="cover-wrap">
							<img src={book.cover} alt={`${book.title} book cover`} />
						</div>
						<div className="book-info">
							<p className="book-author">{book.author}</p>
							<h2>{book.title}</h2>
							<div className="book-bottom-row">
								<strong>${book.price.toFixed(2)}</strong>
								<button type="button" onClick={() => onAddToCart(book)}>
									Add to cart
								</button>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Body;
