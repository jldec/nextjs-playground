import fetcher from './fetcher';
import useSWR from 'swr';

export type Testdata = {
  id: string;
  name: string;
};

export function useTestdata(id: string) {
  return useSWR<Testdata>(`/testdata/${id}.json`, fetcher);
}
