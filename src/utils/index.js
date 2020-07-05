export const PROFILE_LIST = [
  {
    name: 'Personal',
    icon: 'account',
    id: 'a1',
  },
  {
    name: 'Security',
    icon: 'lock-open',
    id: 'a2',
  },
  {
    name: 'Settings',
    icon: 'settings',
    id: 'a3',
  },
  {
    name: 'Help',
    icon: 'help-circle-outline',
    id: 'a4',
  },
  {
    name: 'Logout',
    icon: 'logout-variant',
    id: 'a5',
  },
];

export const SIGNUP_CONST = [
  { title: 'firstName', placeholder: 'Firstname', name: 'account' },
  { title: 'lastName', placeholder: 'Lastname', name: 'account' },
  { title: 'email', placeholder: 'Email', name: 'email' },
  { title: 'password', placeholder: 'Password', name: 'lock-open' },
];

export const LOGIN_CONST = [
  { title: 'email', placeholder: 'Email', name: 'email' },
  { title: 'password', placeholder: 'Password', name: 'lock-open' },
];

export const CHART_DATA = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ['Rainy Days'], // optional
};
