import React from "react";

const ImageSearch = ({ handleMakeRequest }) => {
	return (
		<div className="imageSearch">
			<form onSubmit={handleMakeRequest} className="imageSearch__form">
				<input
					type="text"
					placeholder="search for images..."
					name="searchValue"
					autoComplete="off"
				/>
				<button>Search</button>
			</form>
		</div>
	);
};

export default ImageSearch;
