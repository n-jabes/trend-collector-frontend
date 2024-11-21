export const fetchTrends = async () => {
  const response = await fetch('http//:localhost:5000/api/trends/topics');
  const data = await response.json();
  return data;
};

export const fetchSingleTopic = async (topic) => {
  const response = await fetch(`http//:localhost:5000/api/trends/topics/${topic}`);
  const data = await response.json();
  return data;
};
