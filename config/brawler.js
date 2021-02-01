module.exports = [
	// Power buff
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 31020,
		message: '{icon} up'
	},

	// Growing Fury
	{
        type: 'Removed',
		target: 'Self',
        abnormalities: [10153040, 10153561],
        message: '{icon} Off'
    },

	// Haymaker reset
   {
        type: 'Reset',
        skills: 61131, 
        message: '{icon} reset!'
    },
	
	// Ult buff
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 10153210, 
        message: '{icon} {duration}',
		time_remaining: [1,2]
    },
	
	// endurance debuff
	{
		type: 'MissingDuringCombat',
		target: 'MyBoss',
		abnormalities: [200302, 101200, 101210, 10153142],
		message: '{icon} JACKHAMMER RETARD',
		rewarn_timeout: 3
	},
	
	// 100% crit buff
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 89210100,
		message: '{icon} up'
	},
]