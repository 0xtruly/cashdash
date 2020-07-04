export const PROFILE_LIST = [
  {
    name: 'Personal',
    icon: 'account',
  },
  {
    name: 'Security',
    icon: 'lock-open',
  },
  {
    name: 'Settings',
    icon: 'settings',
  },
  {
    name: 'Help',
    icon: 'help-circle-outline',
  },
];

export const SIGNUP_CONST = [
  { title: 'username', placeholder: 'Username', name: 'account' },
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
