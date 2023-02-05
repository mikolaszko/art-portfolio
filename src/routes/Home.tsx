import { ThumbnailPost } from "../components"
import { HomeWrapper } from "./Home.styles"

export const Home = () => {
	return (
		<HomeWrapper>
			<ThumbnailPost
				slug="two-cars"
				description="1 police car and one good car"
				title="ACAB"
			/>
		</HomeWrapper>
	)
}
