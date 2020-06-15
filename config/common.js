module.exports = [
/*
	// Enrage Added
	{
		type: 'added',
		target: 'MyBoss',
		abnormalities: 8888888,
		message: 'Enrage {duration}'
	},	
*/
	// Contagion Added
	{
		type: 'added',
		target: 'MyBoss',
		abnormalities: [701700, 701701],
		message: '{icon} {duration}'
	},
/*
	// Contagion Expiring, notify 6 seconds remaining
	{
		type: 'expiring',
		target: 'MyBoss',
		abnormalities: [701700, 701701],
		message: '{icon} {duration}',
		time_remaining: 6
	},
	// Contagion Removed
	{
		type: 'removed',
		target: 'MyBoss',
		abnormalities: [701700, 701701],
		message: '{icon} Ended'
	},
*/
	// Adrenaline Rush  Added
	{
		type: 'added',
		target: 'Self',
		abnormalities: [200701, 200700],
		message: '{icon} {duration}'
	},
/*
	// Adrenaline Rush  Expiring, notify at 6 seconds remaining
	{
		type: 'expiring',
		target: 'Self',
		abnormalities: [200701, 200700],
		message: '{icon} {duration}',
		time_remaining: 6
	},
	// Adrenaline Rush Removed
	{
		type: 'removed',
		target: 'Self',
		abnormalities: [200701, 200700],
		message: '{icon} Ended'
	},
*/
     // Priest steroid  Added
	{
		type: 'added',
		target: 'Self',
		abnormalities: [805803],
		message: '{icon} {duration}'
	},

	// Mystic Wrath  Added
	{
		type: 'added',
		target: 'Self',
		abnormalities: [702004],
		message: '{icon} {duration}'
	},
	
/*	// Mystic Vengeance  Added
	{
		type: 'added',
		target: 'Self',
		abnormalities: [702003],
		message: '{icon}Vengeance {duration}'
	},
		
	// Priest Divine Charge  Added
	{
		type: 'added',
		target: 'Self',
		abnormalities: [ 805711, 805712, 805713],
		message: '{icon}Divine Charge {duration}'
	},
	
	// Holy Burst  Added
	{
		type: 'added',
		target: 'Self',
		abnormalities: [806021, 806021],
		message: '{icon} {duration}'
	},
*/
	// Kaia  Added
	{
		type: 'added',
		target: 'Self',
		abnormalities: [800300, 800302, 800303, 800304],
		message: '{icon} on'
	},
	
	// Mystic Shield  Added
	{
		type: 'added',
		target: 'Self',
		abnormalities: [702001],
		message: '{icon} on'
	},
	
	// Bahaar Laser
    {
		type: 'Added',
		target: 'PartyIncludingSelf',
		abnormalities: 90442502,
		message: '{name} has {icon}'
	},
	
	// Rhythmic Debuff Added
	{
		type: 'added',
		target: 'MyBoss',
		abnormalities: 10153141,
		message: '{icon} {duration}'
	},
	// Sea Stun
		{
			type: 'Added',
			target: 'PartyIncludingSelf',
			abnormalities: 30209101,
			message: '{name} has {icon}'
		},
		
	// Sea Fear
		{
			type: 'Added',
			target: 'PartyIncludingSelf',
			abnormalities: 30209102,
			message: '{name} has {icon}'
		},



		//1.5 Mounts
	//Dragon Master
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 6001,
		message: '{icon} up'
	},
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6001, 
        message: '{icon} ready in 10',
		time_remaining: [-45]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6001, 
        message: '{icon} ready in 5',
		time_remaining: [-50]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6001, 
        message: '{icon} ready',
		time_remaining: [-55]
    },
	
	//Blazing Aura I
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 6003,
		message: '{icon} up'
	},
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6003, 
        message: '{icon} ready in 10',
		time_remaining: [-45]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6003, 
        message: '{icon} ready in 5',
		time_remaining: [-50]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6003, 
        message: '{icon} ready',
		time_remaining: [-55]
    },
	
	//Will of Vitality
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 6012,
		message: '{icon} up'
	},
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6012, 
        message: '{icon} ready in 10',
		time_remaining: [-45]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6012, 
        message: '{icon} ready in 5',
		time_remaining: [-50]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6012, 
        message: '{icon} ready',
		time_remaining: [-55]
    },
	
	//Dark Lineage
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 6017,
		message: '{icon} up'
	},
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6017, 
        message: '{icon} ready in 10',
		time_remaining: [-45]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6017, 
        message: '{icon} ready in 5',
		time_remaining: [-50]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6017, 
        message: '{icon} ready',
		time_remaining: [-55]
    },
	
	//Mysterious Aura
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 6025,
		message: '{icon} up'
	},
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6025, 
        message: '{icon} ready in 10',
		time_remaining: [-45]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6025, 
        message: '{icon} ready in 5',
		time_remaining: [-50]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6025, 
        message: '{icon} ready',
		time_remaining: [-55]
    },
	
	//Frost Master
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 6040,
		message: '{icon} up'
	},
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6040, 
        message: '{icon} ready in 10',
		time_remaining: [-45]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6040, 
        message: '{icon} ready in 5',
		time_remaining: [-50]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6040, 
        message: '{icon} ready',
		time_remaining: [-55]
    },
	
	
	
	//2.0 Mounts
	//Dragonis Rex
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 6002,
		message: '{icon} up'
	},
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6002, 
        message: '{icon} ready in 10',
		time_remaining: [-45]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6002, 
        message: '{icon} ready in 5',
		time_remaining: [-50]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6002, 
        message: '{icon} ready',
		time_remaining: [-55]
    },
	
	//Blazing II
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 6004,
		message: '{icon} up'
	},
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6004, 
        message: '{icon} ready in 10',
		time_remaining: [-45]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6004, 
        message: '{icon} ready in 5',
		time_remaining: [-50]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6004, 
        message: '{icon} ready',
		time_remaining: [-55]
    },
	
	//Will of Luck
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 6013,
		message: '{icon} up'
	},
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6013, 
        message: '{icon} ready in 10',
		time_remaining: [-45]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6013, 
        message: '{icon} ready in 5',
		time_remaining: [-50]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6013, 
        message: '{icon} ready',
		time_remaining: [-55]
    },
	
	//Draconic Lineage
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 6018,
		message: '{icon} up'
	},
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6018, 
        message: '{icon} ready in 10',
		time_remaining: [-45]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6018, 
        message: '{icon} ready in 5',
		time_remaining: [-50]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6018, 
        message: '{icon} ready',
		time_remaining: [-55]
    },
	
	//Enigmatic Aura
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 6026,
		message: '{icon} up'
	},
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6026, 
        message: '{icon} ready in 10',
		time_remaining: [-45]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6026, 
        message: '{icon} ready in 5',
		time_remaining: [-50]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6026, 
        message: '{icon} ready',
		time_remaining: [-55]
    },
	
	//Hoarfrost Master
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 6041,
		message: '{icon} up'
	},
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6041, 
        message: '{icon} ready in 10',
		time_remaining: [-45]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6041, 
        message: '{icon} ready in 5',
		time_remaining: [-50]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 6041, 
        message: '{icon} ready',
		time_remaining: [-55]
    },
	
	
	//Card Collections
	//Magic and Physical Amplification 3000
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 30000019,
		message: '{icon} up'
	},
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 30000019, 
        message: '{icon} ready in 120',
		time_remaining: [-60]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 30000019, 
        message: '{icon} ready in 60',
		time_remaining: [-120]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 30000019, 
        message: '{icon} ready in 10',
		time_remaining: [-170]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 30000019, 
        message: '{icon} ready in 5',
		time_remaining: [-175]
    },
	
	//Magic and Physical Resistance 1500
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 30000020,
		message: '{icon} up'
	},
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 30000020, 
        message: '{icon} ready in 120',
		time_remaining: [-60]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 30000020, 
        message: '{icon} ready in 60',
		time_remaining: [-120]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 30000020, 
        message: '{icon} ready in 10',
		time_remaining: [-170]
    },
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 30000020, 
        message: '{icon} ready in 5',
		time_remaining: [-175]
    }
]
