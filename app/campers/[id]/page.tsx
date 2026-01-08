import { getTrackId } from "@/lib/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";
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
  params: { id: string };
}

export default async function Campers({ params }: CampersProps) {
  const { id } = params;

  let data: CamperData | null = null;

  try {
    const response = await getTrackId(id);
    data = response.data;
    if (!data) notFound(); // если API вернул пусто
  } catch (err) {
    console.error(err);
    notFound(); // fallback на 404, если сервер упал
  }

  return <CamperClient data={data} />;
}
