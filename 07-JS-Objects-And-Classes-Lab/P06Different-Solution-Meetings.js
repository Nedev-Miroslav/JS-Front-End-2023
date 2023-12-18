function getMeetingInfo(arr){
 const meeting = {};

 for (const line of arr) {
    let element = line.split(" ");
    let day = element[0];
    let name = element[1];

    if(!meeting.hasOwnProperty(day)){
        meeting[day] = name;
        console.log(`Scheduled for ${day}`)
    } else{
        console.log(`Conflict on ${day}!`)
    }

 }
    for (let entries of Object.entries(meeting)) {
       let [key, value] = entries;
       console.log(`${key} -> ${value}`);
    }

}

getMeetingInfo(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)