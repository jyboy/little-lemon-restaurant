const siteName = 'Little Lemon Restaurant';

const titles: Record<string, string> = {
  '/table-reservation': 'Table Reservation',
  '/reservation-success': 'Reservation Confirmed'
};

const getPageTitle = (pathname: string) => {
  if (pathname === '/') return siteName;

  return `${titles[pathname] ?? 'Under Construction'} | ${siteName}`;
};

export default getPageTitle;
