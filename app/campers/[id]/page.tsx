import { getTrackId } from "@/lib/api";
import { Metadata } from "next";
import CamperClient from "./camperpage";
import "./campers.css";

export const metadata = ({ params }: { params: { id: string } }): Metadata => ({
  title: `Camper Details | Camper #${params.id} | Camper Rental`,
  description: `View details, features, and reviews of campervan #${params.id}. Book your campervan with ease!`,
  keywords: ["camper details", "campervan", "booking", "features", "reviews"],
  openGraph: {
    title: `Camper Details #${params.id}`,
    description: `Check features, specifications and reviews of campervan #${params.id}. Book now!`,
    type: "website",
  },
});

export interface CamperData {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: { thumb: string; original: string }[];
  reviews: { reviewer_name: string; reviewer_rating: number; comment: string }[];
}

interface CampersProps {
  params: Promise<{ id: string }>;
}

export default async function Campers({ params }: CampersProps) {
  const { id } = await params;
  const response = await getTrackId(id);
  const data: CamperData = response.data;
  console.log(data)
  return (
    <>
    <CamperClient data={data}/>
    </>
  );
}
