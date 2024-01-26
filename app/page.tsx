import { PropertiesCard } from "@/components/PropertiesCard";
import { Card, CardMedia, Typography, Box } from "@mui/material";
import React, { lazy, Suspense } from "react";

const Nav = lazy(() => import("@/components/NavBar"));
const ImageCard = lazy(() => import("@/components/ImageCard"));
const PropertyCard = lazy(() => import("@/components/PropertyCard"));
const InteractiveCard = lazy(() => import("@/components/InteractiveCard"));
// const Footer =lazy(()=> import ("@/components/Footer"));
import { LandPlot, HomeIcon, MapPin } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import PopularLocations from "@/components/PopularLocation";
import FAQCard from "@/components/FAQCard";

export default function Home() {
  const propteries = [
    {
      title: "Home",
      icon: <HomeIcon />,
    },
    {
      title: "Plots",
      icon: <MapPin />,
    },
    {
      title: "Commercial",
      icon: <LandPlot />,
    },
  ];
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>
      <Box>
        <div style={{ marginTop: "6%" }}>
          <Suspense fallback={<div>Loading...</div>}>
            <ImageCard
              imageUrl={
                "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </Suspense>
        </div>
      </Box>
      <Box
        sx={{
          padding: "5%",
          display: "flex",
          flexDirection: { lg: "row", sm: "row", xs: "column" },
          gap: "20px",
        }}
      >
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </Box>
      <Box
        sx={{
          padding: "5%",
          display: "flex",
          flexDirection: { lg: "row", sm: "row", xs: "column" },
          gap: "20px",
        }}
      >
        <InteractiveCard />
        <InteractiveCard />
        <InteractiveCard />
        <InteractiveCard />
      </Box>

      <div className="px-10 py-10">
        <h1 className="scroll-m-20 text-xl font-bold tracking-tight lg:text-3xl pb-4">
          Browse Properties
        </h1>
        <div className="grid lg:grid-cols-3 ">
          {propteries.map((item, index) => (
            <PropertiesCard key={index} title={item.title} icon={item.icon} />
          ))}
        </div>
      </div>
      <div className="px-10 py-10">
      <h1 className="scroll-m-20 text-xl font-bold tracking-tight lg:text-3xl">
         Popular Locations
        </h1>
        <PopularLocations />
      </div>
      <div style={{  display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',}}>
  <FAQCard />
</div>


     
      
      <Footer />
    </>
  );
}
