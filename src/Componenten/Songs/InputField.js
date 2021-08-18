import React from "react";

const InputField = (props) => {
	return (
		<span className="input-field">
			<form onSubmit={props.handleSubmit}>
				<input
					type="text"
					value={props.song.title}
					name="title"
					placeholder="Title"
					onChange={props.handleChange}
				/>
				<input
					type="text"
					value={props.song.artist}
					name="artist"
					placeholder="Artist"
					onChange={props.handleChange}
				/>
				<select
					value={props.song.genre}
					name="genre"
					onChange={props.handleChange}
				>
					<option value="">Genre</option>
					<option value="Blues">Blues</option>
					<option value="Country">Country</option>
					<option value="Dance">Dance</option>
					<option value="Electronic">Electronic</option>
					<option value="Folk">Folk</option>
					<option value="Hardcore">Hardcore</option>
					<option value="Industrial">Industrial</option>
					<option value="Instrumental">Instrumental</option>
					<option value="Jazz">Jazz</option>
					<option value="Klasiek">Klasiek</option>
					<option value="Latin">Latin</option>
					<option value="Lounce">Lounce</option>
					<option value="Metal">Metal</option>
					<option value="Nederpop">Nederpop</option>
					<option value="Opera">Opera</option>
					<option value="Pop">Pop</option>
					<option value="Punk">Punk</option>
					<option value="RnB">RnB</option>
					<option value="Rock">Rock</option>
					<option value="Schlager">Schlager</option>
					<option value="Techno">Techno</option>
					<option value="Trance">Trance</option>
				</select>
				<select
					value={props.song.rating}
					name="rating"
					onChange={props.handleChange}
				>
					<option value="">Rating</option>
					<option value="*">1</option>
					<option value="**">2</option>
					<option value="***">3</option>
					<option value="****">4</option>
					<option value="*****">5</option>
				</select>
				<button>Submit</button>
			</form>
		</span>
	);
};

export default InputField;
