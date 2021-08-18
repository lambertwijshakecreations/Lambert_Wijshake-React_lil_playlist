import React from "react";
import ListItem from "./ListItem";
import Banner from "../../Containers/Banner";

const List = (props) => {
	return (
		<span className="song-list">
			<Banner />
			<ul>
				<ListItem songs={props.songs} />
			</ul>
		</span>
	);
};

export default List;
