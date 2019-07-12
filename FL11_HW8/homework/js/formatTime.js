function formatTime(minutes) {
    const stepToHours = 60;
    const stepToDays = 24;
    let m = minutes % stepToHours;
    let hours = (minutes - m) / stepToHours;
    let h = hours % stepToDays;
    let d = (hours - h) / stepToDays;
    return `${d} day(s) ${h} hour(s) ${m} minute(s).`;
}

console.log(formatTime(391));
