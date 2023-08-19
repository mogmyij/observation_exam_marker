import { BackgroundImage, Container, Text, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
	const navigate = useNavigate();
	return (
		<BackgroundImage src="Error404.png">
			<Container className="h-screen flex justify-center">
				<div className="pt-8 flex-col">
					<Text color="white">404</Text>
					<br />
					<Text color="white">The page you looked for does not exsist</Text>
					<Button
						onClick={() => {
							navigate("/");
						}}
					>
						Return to home
					</Button>
				</div>
			</Container>
		</BackgroundImage>
	);
};

export default PageNotFound;
