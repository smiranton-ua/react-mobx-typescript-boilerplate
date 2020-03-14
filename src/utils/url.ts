import isArray from 'lodash/isArray';
import last from 'lodash/last';

const bindProtocol = (url: string) => {
  if (!url) {
    return '';
  }
  return url.includes('http') ? url : `${window.location.protocol}//${url}`;
};

export const coerceProtocol = (data: string | string[]): string | string[] => {
  return isArray(data) ? data.map(bindProtocol) : bindProtocol(data);
};

export const getBaseUrl = (): string => {
  const baseUrl = process.env.REACT_APP_BASE_API_URL || 'missingBaseApiUrlEnvVar';
  return last(baseUrl) !== '/' ? `${baseUrl}/` : baseUrl;
};
