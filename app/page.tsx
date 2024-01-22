import { PropertiesCard } from "@/components/PropertiesCard";
import { Card, CardMedia, Typography, Box } from "@mui/material";
import React, { lazy, Suspense } from "react";

const Nav = lazy(() => import("@/components/NavBar"));
const ImageCard = lazy(() => import("@/components/ImageCard"));
const PropertyCard = lazy(() => import("@/components/PropertyCard"));
const InteractiveCard = lazy(() => import("@/components/InteractiveCard"));
import { LandPlot, HomeIcon, MapPin } from "lucide-react";

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
                "https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
          {propteries.map((item) => (
            <PropertiesCard title={item.title} icon={item.icon} />
          ))}
        </div>
      </div>
    </>
  );
}
