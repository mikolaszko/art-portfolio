import { styled } from "solid-styled-components"

export const PostWrapper = styled("div")<{ url: string }>`
	width: 200px;
	height: 200px;
	background-image: url(${({ url }) => url});
	background-repeat: no-repeat;
	background-position: center;
	transition: all 0.2s ease-in-out;
	-webkit-filter: brightness(100%);

	h4,
	p {
		display: none;
	}

	&:hover {
		transform: scale(1.1);
		-webkit-filter: brightness(70%);
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		cursor: pointer;
		h4,
		p {
			margin: 8px 5px;
			display: initial;
		}
	}
`
