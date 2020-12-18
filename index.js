
function am_or_pm(date) {
    var date_obj = new Date(date);
    var hours = date_obj.getHours()+7;
    var morn_or_night;
    // I wouldn't do this in production, but this is to make my logic really clear - I would probably use a conditional operator here. 
    // Handling Midnight
    if (hours === 0) {
        hours = 12;
        morn_or_night = 'AM';
        // Handling noon
    } else if (hours === 12) {
        morn_or_night = 'PM'
    } else if (hours > 12) {
        hours = hours - 12;
        morn_or_night = 'PM';
    } else {
        morn_or_night = 'AM';
    }
    return hours.toString() + ':' + date_obj.getMinutes() + ' ' + morn_or_night;
}

function convertDateTime(date) {
    if(typeof date === 'string'){
        const d = new Date(date)
        const monthNamesThai = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.",
            "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
        const dayNames = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];
    
        let newdate = `${dayNames[d.getDay()]} ${d.getDate()} ${monthNamesThai[d.getMonth()]} ${d.getFullYear()}`
        let newTime = am_or_pm(date)

        return newdate + " " + newTime
    }else{
    
        return "ไม่พบข้อมูล"
    }
    
}
// export default convertFormatNumber
const bcdt = module.exports = exports =convertDateTime;