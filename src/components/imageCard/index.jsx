import Image from "../image";
import Heading from "../heading";
import Text from "../text";
import "./index.css";

const ImageCard = ({ image, heading, text, link }) => {
	return (
		<div className="imageCard">
			<Image
				src={image}
				alt={heading}
				className="imageCard__image"
				placeholder={<div>Loading</div>}
				fallback={<div>Failed to load an image.</div>}
			/>
			<div className="imageCard__content">
				<Heading level={3}>{heading}</Heading>
				<Text className="imageCard__text"> {text} </Text>
				<a href={link} className="imageCard__link">
					Read More
				</a>
			</div>
		</div>
	);
};

export default ImageCard;
