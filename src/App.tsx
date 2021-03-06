/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import ClassesCards from './components/ClassesCards';
import Layout from './components/Layout';
import { ClassListObj } from './interface/IClass';
import { IResponse } from './interface/IResponse';
import { fetchClasses } from './utils/api';

function App() {
  const [data, setData] = React.useState<any>({});
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    fetchClasses()
      .then((resp: IResponse<ClassListObj>) => {
        setData(resp.data);
        setLoading(false);
      })
      .catch((err: any) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <h1>List Kelas</h1>
      {loading ? <div className="loader" />
        : <ClassesCards data={data} />}
    </Layout>
  );
}

export default App;
