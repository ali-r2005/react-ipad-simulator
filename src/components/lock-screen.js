import { useEffect,  useState } from 'react';
import lockScreenImage from '../assets/lock-screen.jpg';

const LockScreen = () => {
    function getCurrentDateTime() {
        const now = new Date();
      
        // Get hours and minutes
        let hours = now.getHours();
        let minutes = now.getMinutes();
      
        // Pad minutes with a leading zero if needed
        minutes = minutes < 10 ? '0' + minutes : minutes;
      
        const timeString = `${hours}:${minutes}`;
      
        // Get day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayOfWeek = daysOfWeek[now.getDay()];
      
        // Get day of the month
        const dayOfMonth = now.getDate();
      
        // Get month name
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthName = months[now.getMonth()];
      
        const dateString = `${dayOfWeek}, ${dayOfMonth} ${monthName}`;
      
        return { time: timeString, date: dateString };
      }
      const [ time, setTime ] = useState(getCurrentDateTime().time);
      const [ date, setDate ] = useState(getCurrentDateTime().date);
      useEffect(() => {
        const interval = setInterval(() => {
          const { time, date } = getCurrentDateTime();
          setTime(time);
          setDate(date);
        }, 1000);
      
        return () => clearInterval(interval);
      }, []);

    return (
        <div className="relative h-[426px] md:h-[654px]">
            <img src={lockScreenImage} alt="lock screen" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-5">
                <p className="text-white text-4xl mb-2">{date}</p>
                <h1 className="text-white text-9xl">{time}</h1>
            </div>
            
        </div>  
    );
}

export default LockScreen;