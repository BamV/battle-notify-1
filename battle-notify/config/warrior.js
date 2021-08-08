module.exports = [
	// Missing stance
	{
		type: 'MissingDuringCombat',
		target: 'Self',
		abnormalities: [100100, 100101, 100102, 100103, 100200, 100201, 100202, 100203],
		message: '{icon} Missing Stance',
		rewarn_timeout: 10
	},

		//Traverse buff expiring
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: [101300,101301], 
        message: '{icon}T-cut {duration} ',
		time_remaining: [2, 5, 8]
    },
	
       //DG Expiring
    {
	   type: 'Expiring',
	   target: 'Self',
	   skills: 200100,
	   abnormalities: [100811,100801], 
	   message: '{icon} Expiring {duration} ',
	   time_remaining: [5]
    },
	
     // Decreases Endurance Added
	{
		type: 'added',
		target: 'MyBoss',
		abnormalities: 101210,
		message: '{icon} Debuff RETARD'
	},
	  // Decreases Endurance, notify at 12 and 6 seconds remaining
	{
		type: 'expiring',
		target: 'MyBoss',
		abnormalities: 101210,
		message: '{icon} Debuff RETARD',
		time_remaining: [5]
	},
	  // Decreases Endurance
	{
		type: 'removed',
		target: 'MyBoss',
		abnormalities: 101210,
		message: '{icon} Debuff RETARD'
	},

	// Blade Draw reset
   {
        type: 'Reset',
        skills: [290900, 370130],
        message: '{icon} reset!'
    },

	// Reaping Slash reset
   {
        type: 'Reset',
        skills: 310800,
        message: '{icon} reset!'
    },

	// Charging Slash reset
   {
        type: 'Reset',
        skills: 161000,
        message: '{icon} reset!'
    },

]