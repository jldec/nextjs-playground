import { useTestdata } from '../lib/useTestdata';

export default function Testdata({id}: {id:string}) {
  const { data, error, isLoading } = useTestdata(id);

  return (
    <pre>
      {
        // prettier-ignore
        isLoading ? `Loading...`
          : error ? `Error: ${error.message}`
          : data  ? JSON.stringify(data, null, 2)
          : 'No data'
      }
    </pre>
  );
}
