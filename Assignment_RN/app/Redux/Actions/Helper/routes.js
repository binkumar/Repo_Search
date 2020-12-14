import { apiKeys } from './apiKeys';

export const generateRoute = (apiKey, data) => {
  switch (apiKey) {
    default: {
      return null;
    }
    case apiKeys.githubSearch:
      return `https://api.github.com/search/repositories?q=${data}&sort=stars&order=desc`;
  }
};

export const requestHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
    'cache-control': 'no-cache'
  };
  return headers;
};
