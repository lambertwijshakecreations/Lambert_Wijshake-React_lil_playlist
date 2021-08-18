import React, { Component } from "react";
import Songs from "./Componenten/Songs/Songs";
import List from "./Componenten/List/List";
import Footer from "./Containers/Footer";

class Container extends Component {
	constructor() {
		super();
		this.state = {
			songs: []
		};
		this.handleAddSong = this.handleAddSong.bind(this);
		this.handleDeleteSong = this.handleDeleteSong.bind(this);
	}

	handleAddSong = (song) => {
		const newSongs = [song, ...this.state.songs];
		this.setState({
			songs: newSongs
		});
	};

	handleDeleteSong = () => {
		this.setState({
			songs: []
		});
	};

	render() {
		return (
			<div className="container">
				<Songs onSubmit={this.handleAddSong} />
				<List songs={this.state.songs} />
				<Footer onClick={this.handleDeleteSong} />
			</div>
		);
	}
}

export default Container;
