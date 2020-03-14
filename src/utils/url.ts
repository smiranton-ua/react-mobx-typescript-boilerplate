import isArray from 'lodash/isArray';
import last from 'lodash/last';

const bindProtocol = (url: string) => {
  if (!url) {
    return '';
  }
  return url.includes('http') ? url : `${window.location.protocol}//${url}`;
};

/**
 * Coerce http/https protocol
 * @param  data Data to parse
 * @return Coerced data
 */
export const coerceProtocol = (data: string | string[]): string | string[] => {
  return isArray(data) ? data.map(bindProtocol) : bindProtocol(data);
};

/**
 * Define base server url
 * @return Server base url
 */
export const getBaseUrl = (): string => {
  const baseUrl = process.env.REACT_APP_BASE_API_URL || 'missingBaseApiUrlEnvVar';
  return last(baseUrl) !== '/' ? `${baseUrl}/` : baseUrl;
};
