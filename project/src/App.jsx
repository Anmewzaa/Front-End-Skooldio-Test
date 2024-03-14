import { useState, useEffect } from "react";
import axios from "axios";
// components
import Department from "./components/Department";

const App = () => {
  const api_url = "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(api_url).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="box">
        {data.map((item) => (
          <div key={item.id}>
            <div className="card-in">
              <Department props={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
