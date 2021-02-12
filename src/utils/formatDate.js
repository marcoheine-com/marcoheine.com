export const formatDate = fullDate => {
  const date = fullDate.split(' ');
  const newDate = new Date(date[0]);

  return newDate.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
