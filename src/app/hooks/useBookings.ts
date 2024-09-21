import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { BookingService } from '../services/BookingService';

export function useBookings() {
  const [bookingId, setBookingId] = useState<string>();

  const {
    data: booking,
    isFetching: bookingLoading,
    refetch,
  } = useQuery({
    queryKey: ['booking', bookingId!],
    queryFn: BookingService.get,
    refetchInterval: Infinity,
    enabled: !!bookingId,
  });

  const { mutate: update, isPending: updateLoading } = useMutation({
    mutationFn: BookingService.update,
    onSuccess: () => {
      refetch();
    },
  });

  return { booking, bookingLoading, update, updateLoading, setBookingId };
}
