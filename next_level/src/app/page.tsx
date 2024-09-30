import "./globals.css";
import axios from "axios";

export default function Home() {
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos");
  };

  return (
    <>
      <div className="App">
        <button onClick={onClickFetchData}>データ取得</button>
      </div>
    </>
  );
}
