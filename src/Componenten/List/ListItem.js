import React from "react";

const ListItem = (props) => {
	return (
		<div>
			{props.songs.map((song) => (
				<li key={song.id} className="song-list-item" value={song.title}>
					<span>{song.title}</span>
					<span>{song.artist}</span>
					<span>{song.genre}</span>
					<span>{song.rating}</span>
				</li>
			))}
		</div>
	);
};

export default ListItem;
