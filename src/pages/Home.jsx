import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link className="text-blue-400" to="/shared-dashboard">Go to Shared Dashboard</Link>
      <br></br>
      <Link className="text-blue-400" to="/simple-search">Go to Simple Search</Link>
    </>
  );
}
