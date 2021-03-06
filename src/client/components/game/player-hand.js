import "./player-hand.scss";

import React from "react";
import Card from "./card";

export default function PlayerHand(props) {
	const {hand, opSelectCard, selectCard, toggle, isOpen} = props;

	return (
		<div className={`c-player-hand ${isOpen ? "is-open" : "is-closed"}`}>
			<div className={`title ${opSelectCard.can ? "is-active" : ""}`} onClick={toggle}>
				{isOpen ? <p>Hide Deck</p> : <p>Show Deck</p>}
				{opSelectCard.error}

			</div>
			<div className="cards">
				{hand.map((card, key) =>
					<Card
						key={card.id}
						isSelectable={opSelectCard.can && !opSelectCard.inProgress}
						onClick={() => selectCard(card)}
						type="white"
						card={card}
						style="small"
						canZoom
						floating
						id={key} />)}
			</div>
		</div>
	);
}
