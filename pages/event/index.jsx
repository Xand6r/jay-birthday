import React from "react";
import NavBar from "components/navbar";
import Landing from "./components/landing";
import Menu from "./components/menu";
import Footer from "components/footer";
import {
  fetchClassics,
  fetchDrinks,
  fetchFood,
} from "./components/menu/functions";
import Private from "../home/components/private";
import Mission from "../about/components/mission";
import { useEffect } from "react";
import { isLoggedIn } from "utils/functions";
import { useRouter } from "next/router";

export default function Index({ menuState }) {
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/");
    }
  }, []);
  return (
    <div>
      <NavBar useFadeDownAnimation={false} />
      <Landing />
      <Mission />
      <Private />
      <Menu state={menuState} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const [drinks, classics, food] = await Promise.all([
    fetchDrinks(),
    fetchClassics(),
    fetchFood(),
  ]);
  const state = {
    drinks,
    classics,
    food,
  };
  // Pass data to the page via props
  return { props: { menuState: state } };
}
