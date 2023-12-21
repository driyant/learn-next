import Layout from "@/layout";
import { useEffect } from "react";

export default function Home() {
  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    console.log(data.data, "data from Home Component!");
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Layout>
      <p>Homepage Content</p>
    </Layout>
  );
}
