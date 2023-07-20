import { useEffect } from 'react';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { useDispatch } from 'react-redux';
import { actions } from '@/slices/timestampSlice';

const FetchTime = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const notFormattedDate = format(now, 'dd MMMM, yyyy', { locale: ruLocale });
            const formattedDate =
                notFormattedDate.charAt(0) +
                notFormattedDate.charAt(1) +
                ' ' +
                notFormattedDate.charAt(3).toUpperCase() +
                notFormattedDate.slice(4);
            const formattedTime = format(now, 'HH:mm', { locale: ruLocale });
            const dayOfWeek = format(now, 'EEEE', { locale: ruLocale });
            const formattedDayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

            const updatedTimeNow = {
                currentDate: formattedDate,
                currentTime: formattedTime,
                currentDayOfWeek: formattedDayOfWeek,
                loaded: true,
            };

            dispatch(actions.updateDate(updatedTimeNow));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [dispatch]);

    return null;
};

export default FetchTime;
