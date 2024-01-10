import { useAppSelector } from '@/stateManagement/hooks';
import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-native';

export const VenueStack = () => {
  const navigate = useNavigate();
  const { selectedVenue } = useAppSelector((state) => state.venue);

  useEffect(() => {
    if (selectedVenue === null) {
      navigate('/venue-stack/venue-list');
    } else {
      navigate('/venue-stack/venue-overview');
    }
  }, [selectedVenue]);

  return <Outlet />;
};
