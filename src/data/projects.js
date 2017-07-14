const projects = {
		'highline-veggies': {
			id: 'highline-veggies',
			name: 'Vegetable Garden',
			description: 'Be an urban pioneer and grow your own fruits and veggies',
			image: 'placeholder.jpg',
			difficulty: 'Easy',
			time: '1',
			price: '199',
			inputs: [
				{
					id: 'size',
					options: [
						{id: 'sizeSmall', name: 'Small'},
						{id: 'sizeMedium', name: 'Medium'},
						{id: 'sizeLarge', name: 'Large'}
					]
				},
				{
					id: 'sun',
					options: [
						{id: 'sunFull', name: 'Full sun'},
						{id: 'sunPartial', name: 'Partial sun'},
						{id: 'sunShade', name: 'Shade'}
					]
				}
			],
			products: {
				'plants': [
					{
						id: 'carrot',
						name: 'Carrot starters',
						amount: 30
					},
					{
						id: 'peas',
						name: 'Pea starters',
						amount: 30
					},
					{
						id: 'broccoli',
						name: 'Broccoli starters',
						amount: 8
					},
					{
						id: 'beet',
						name: 'Beet starters',
						amount: 8
					},
					{
						id: 'squash',
						name: 'Squash starters',
						amount: 3
					},
					{
						id: 'tomato',
						name: 'Tomato plants',
						amount: 3
					}
				],
				'materials': [
					{
						id: 'raisedbed',
						name: 'Raised plant bed',
						amount: 5
					},
					{
						id: 'irrigation',
						name: 'Irrigation drip system',
						amount: 1
					},
					{
						id: 'broccoli',
						name: 'Broccoli starters',
						amount: 8
					},
					{
						id: 'tomatosupport',
						name: 'Tomato plant metal supports',
						amount: 3
					}
				]
			}
  },
    'highline-dining': {
			id: 'highline-dining',
			name: 'Outdoor dining area',
			description: 'Eat outside with your family and friends.',
			image: 'placeholder.jpg',
			difficulty: 'Medium',
			time: '1',
			price: '499',
			products: []
  },
    'highline-plants': {
			id: 'highline-plants',
			name: 'Planting Beds',
			description: 'Curated plants groups to bring you joy.',
			image: 'placeholder.jpg',
			difficulty: 'Easy',
			time: '1',
			price: '399',
			products: []
  },
  	'highline-pots': {
			id: 'highline-pots',
			name: 'Pots',
			description: 'Pots and more pots with plants.',
			image: 'placeholder.jpg',
			difficulty: 'easy',
			time: '1',
			price: '249',
			products: []
  }
};

export default projects;