
function Time({timeStamp}) {

 
    // "2023-02-23T20:47:05.697Z"
    function formatTimeStamp(timeStamp) {
        const [date, time] = timeStamp.split('T');
        const [year, month, day] = date.split('-');
        const [hour, minute, seconds] = time.split(':');
        const timeOfDay = hour > 12 ? 'pm' : 'am';
        return `${month}/${day}/${year} at ${hour}:${minute}${timeOfDay}`;
      }

    return ( 
        <td>{formatTimeStamp(timeStamp)}</td>
    )
}

export default Time; 