import Header from '../components/header/header';
import Navigation from '../components/navigation/navigation';
import Select from '../components/select/select';
import { BREEDS_OPTIONS } from '../components/config/breeds';
import { ORDER_OPTIONS } from '../components/config/order';
import { useEffect, useState } from 'react';
import { api } from '../api/api';

// const Component1 = () => {
//   useEffect(() => {
//     console.log(124);
//   }, []);

//   return null;
// };

// const useConsoleLog = (value, stte2) => {
//   useEffect(() => {
//     console.log('[value] ' + stte2);

//     return () => {
//       console.log('[value] unmount!');
//     };
//   }, [stte2]);
// };

// const useFetch = (fetchPromise, dependency) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState(null);

//   useLoaderData()
//   useEffect(() => {
//     async function startFetching() {
//       setData(null);
//       setIsLoading(true);

//       const result = await fetchPromise();

//       if (!ignore) {
//         setData(result);
//         setIsLoading(false);
//       }
//     }

//     let ignore = false;
//     startFetching();
//     return () => {
//       ignore = true;
//     };
//   }, [dependency]);

//   return {
//     isLoading,
//     data,
//   };
// };

// const Component2 = ({ value }) => {
//   const [stte2, setdtste] = useState(1);

//   // useEffect(() => {
//   //   console.log('[]: ' + value);

//   //   return () => {
//   //     console.log('[] unmount!');
//   //   };
//   // }, [value]);

//   const { isLoading, data } = useFetch(() => fetch(stte2), stte2);

//   useConsoleLog(value, stte2);

//   console.log(data);

//   return (
//     <button disabled={isLoading} onClick={() => setdtste((prev) => prev - 1)}>
//       {stte2}
//     </button>
//   );
// };

function Catalog() {
  const [state, setState] = useState(0);

  return (
    <>
      <Header />
      <div className="container">
        <div className="select-container d-flex" id="select-container">
          <Select options={BREEDS_OPTIONS} />
          <Select options={ORDER_OPTIONS} />
        </div>
        <div className="row" id="catalog-row"></div>
      </div>
      <Navigation />
    </>
  );
}

export default Catalog;
