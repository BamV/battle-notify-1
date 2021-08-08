module.exports = [
	//Flurry of Blows
	{
		type: 'expiring',
		target: 'Self',
		abnormalities: 400501,
		message: '{icon} {duration}',
		time_remaining:  [3]
		
	},

	//Unleash
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 401705, 
        message: '{icon} {duration} ',
		time_remaining: [5, 3, 1]
    },
		
	
	// Dash Cooldown soon
	{
		type: 'Expiring',
		skills: 50100,
		message: '{icon} CD {duration}',
		time_remaining: [2]
	},
	
	// Fiery Cooldown soon
,	{
		type: 'Expiring',
		skills: 80100,
		message: '{icon} CD {duration}',
		time_remaining: [3]
	},	

	// Cyclone reset
   {
        type: 'Reset',
        skills: 101100,
        message: '{icon} reset!'
    },

	// Lethal Strike reset
   {
        type: 'Reset',
        skills: 180600,
        message: '{icon} reset!'
    },

]