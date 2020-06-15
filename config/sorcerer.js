module.exports = [
       //Mana Boost Expiring
       {
        type: 'Expiring',
        target: 'Self',
        skills: 340230,
        abnormalities: [500100,500150,503061,503072], 
        message: '{icon} Expiring {duration} ',
        time_remaining: [5]
     },

       //Keen Arcane Pulse Expiring
       {
         type: 'Expiring',
         target: 'Self',
         skills: 41200,
         abnormalities: [25201,25170], 
         message: '{icon} Expiring {duration} ',
         time_remaining: [1]
      },

       //Keen Nova Expiring
       {
         type: 'Expiring',
         target: 'Self',
         skills: 300900,
         abnormalities: [25171,25202], 
         message: '{icon} Expiring {duration} ',
         time_remaining: [1]
      },
]