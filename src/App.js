import React, { useState, useEffect } from "react";

// imports
import ImageSearch from "./components/ImageSearch/ImageSearch";

const API_KEY = "15067697-a347138b0dcbd88a15f281e67";

const App = () => {
	const [images, setImages] = useState([]);
	let [error, setError] = useState(null);

	useEffect(() => {
		const handleMakeRequest = async e => {
			// Remove default when submitting
			e.preventDefault();

			// Get input from form
			const searchValue = e.target.elements.searchValue.value;

			// make the request
			const request = await fetch(
				`https://pixabay.com/api/?key=${API_KEY}&q=${searchValue}&per_page=15`
			);

			const results = await request.json();
			console.log(images);

			// Validation
			if (!searchValue) {
				setError((error = "Please provide a value"));
			} else {
				setImages(results.hits);
				setError((error = null));
			}
		};
		handleMakeRequest();
	}, [images]);

	return (
		<>
			<ImageSearch handleMakeRequest={handleMakeRequest} />
		</>
	);
};

export default App;
