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

      // Lightning Strike reset
   {
      type: 'Reset',
      skills: [111100, 110100],
      message: '{icon} reset!'
  },
]