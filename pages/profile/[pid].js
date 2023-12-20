import React from "react";
import { useRouter } from "next/router";
import Layout from "@/layout";

const ProfileDetail = () => {
  const router = useRouter();
  const id = router.query.pid;

  return (
    <Layout>
      <div>Profile - {id}</div>
    </Layout>
  );
};

export default ProfileDetail;
