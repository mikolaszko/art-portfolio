const artPieces = [
	{
		id: 1,
		title: "ACAB",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non iste quia, incidunt, amet assumenda, doloremque accusantium porro recusandae adipisci ratione ipsum temporibus molestias iusto esse maiores eveniet id alias molestiae voluptates eius est. Minima ab rerum nihil libero facere.",
		slug: "two-cars",
	},
	{
		id: 2,
		title: "Loooong face",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non iste quia, incidunt, amet assumenda, doloremque accusantium porro recusandae adipisci ratione ipsum temporibus molestias iusto esse maiores eveniet id alias molestiae voluptates eius est. Minima ab rerum nihil libero facere.",
		slug: "two-giraffes",
	},
]

export const retrieveDataPiece = (currentSlug: string) => {
	return artPieces.find(({ slug }) => slug === currentSlug)
}
