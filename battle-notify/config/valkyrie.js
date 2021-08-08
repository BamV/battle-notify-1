module.exports = [
	
	// Ragnarok
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 10155130,
        message: '{icon} cd in {duration}',
		time_remaining: [5, 3, 1]
    },
	
	// Godsfall
	{
		type: 'Expiring',
		target: 'Self',
        abnormalities: 10155512,
        message: '{icon} cd in {duration}',
		time_remaining: [5, 3, 1]
	},	

	//Partial Eclipse Expiring
       {
         type: 'Expiring',
         target: 'Self',
         abnormalities: 10155533, 
         message: '{icon} Expiring {duration} ',
         time_remaining: [2,1]
      },
]