import { PostWrapper } from "./ThumbnailPost.styles.ts"
import PlaceholderImage from "../assets/7890ca157827891.637fdf9d2ef9c.png"
import { A } from "@solidjs/router"

type ThumbnailPostProps = {
	title: string
	description: string
	slug: string
}

export const ThumbnailPost = ({
	title,
	description,
	slug,
}: ThumbnailPostProps) => {
	return (
		<>
			<A href={`/art/${slug}`}>
				<PostWrapper url={PlaceholderImage}>
					<h4>{title}</h4>
					<p>{description}</p>
				</PostWrapper>
			</A>
		</>
	)
}
