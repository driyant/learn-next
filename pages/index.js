import Layout from "@/layout";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const DynamicLayout = dynamic(() => import("@/layout"), {
  loading: () => <p>Loading...</p>,
});

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
    <DynamicLayout>
      <p>Homepage Content</p>
    </DynamicLayout>
  );
}
