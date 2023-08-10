import { BackgroundImage, Container, Text } from "@mantine/core";
import { Navigate, useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate=useNavigate()
	return (
		<BackgroundImage src="Error404.png">
			<Container className="h-screen flex justify-center">
				<div className="pt-8">
					<Text color="white">404</Text>
					<br />
					<Text color="white">The page you looked for does not exsist</Text>
                <button onClick={()=>{navigate("/")}}>Home</button>
				</div>
			</Container>
		</BackgroundImage>
	);
};

export default PageNotFound;
