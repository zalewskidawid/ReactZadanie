import "./index.css";
import Content from "./components/content/index";
import Form from "./components/form";

const Contact = () => {
	return (
		<div className="contact">
			<div className="container">
				<div className="content">
					<Content></Content>
					<Form></Form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
