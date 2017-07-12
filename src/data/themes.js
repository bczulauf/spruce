const themes = {
  'highline': {
		id: 'highline',
		name: 'Highline',
		description: 'Entertain in style. The Highline is our most popular theme for a reason - its clean lines and soft color palettes are a perfect backdrop for your next outdoor party.',
		image: 'highline.jpg',
		projects: [
			{
				id: 'highline-veggies',
				name: 'Vegetable Garden',
				description: 'Be an urban pioneer and grow your own fruits and veggies',
				image: 'veggies.jpg',
				difficulty: 'Easy',
				time: '1',
				price: '199'
			},
			{
				id: 'highline-dining',
				name: 'Outdoor dining area',
				description: 'Eat outside with your family and friends.',
				image: 'veggies.jpg',
				difficulty: 'Medium',
				time: '1',
				price: '499'
			},
			{
				id: 'highline-plants',
				name: 'Planting Beds',
				description: 'Curated plants groups to bring you joy.',
				image: 'veggies.jpg',
				difficulty: 'Easy',
				time: '1',
				price: '399'
			},
			{
				id: 'highline-pots',
				name: 'Pots',
				description: 'Pots and more pots with plants.',
				image: 'pots.jpg',
				difficulty: 'easy',
				time: '1',
				price: '249'
			}
		]
  },
	'yogi': {
		id: 'yogi',
		name: 'Yogi',
		description: 'Transform your space into an urban oasis. The Yogi combines lush plantings and natural materials to create a peaceful place to get your zen on.',
		image: 'yogi.jpg',
		projects: []
  }
};

export default themes;