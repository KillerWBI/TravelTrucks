"use client";

import AC from "@/public/AC.svg";
import Bathroom from "@/public/Bathroom.svg";
import Gas from "@/public/hugeicons_gas-stove.svg";
import Water from "@/public/ion_water-outline.svg";
import Kitchen from "@/public/Kitchen.svg";
import StarUnpositive from "@/public/starWi.svg";
import StarPositive from "@/public/StarYell.svg";
import TV from "@/public/TV.svg";
import Image from "next/image";
import { useState } from "react";
import "./campers.css";


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

interface CamperClientProps {
  data: CamperData;
}

export default function CamperClient({ data }: CamperClientProps) {
  const [activeTab, setActiveTab] = useState<"features" | "reviews">("features");

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Image
        key={i}
        src={i <= rating ? StarPositive : StarUnpositive}
        className="iconcategory"
        alt="star"
        width={16}
        height={16}
      />
    );
  }
  return stars;
};
const firsLetter = (word: string) => {
    const firstLetter = word[0].toUpperCase();
    return firstLetter;
};

  return (
    <main className="campersmain">
      <div className="contsainer-camper">
        <div className="info-block">
         <div>
          <h2 className="name">{data.name}</h2>

          <div className="meta">
            <span className="raiting-info">
              {data.rating} ({data.reviews.length} Reviews)
            </span>
            <span className="raiting-info">{data.location}</span>
          </div>

          <span className="price">€{data.price}</span>
          </div>
          <div className="gallery">
            {data.gallery.map((item, index) => (
              <div key={index} className="image">
                <Image
                  src={item.thumb || "/placeholder.jpg"}
                  alt={data.name}
                  width={292}
                  height={300}
                  className="img-dataile"
                />
              </div>
            ))}
          </div>

          <p>{data.description}</p>
        </div>

        {/* Табы Features / Reviews */}
        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "features" ? "active" : ""}`}
              onClick={() => setActiveTab("features")}
            >
              Features
            </button>
            <button
              className={`tab ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>
          <div className="tabs-line"></div>

          <div className="tab-content">
            {activeTab === "features" && (
                <div className="features">
              <div className="tags">
              {data.AC && <span><Image src={AC} className="iconcategory" alt="AC" width={20} height={20} /> AC</span>}
              {data.kitchen && <span><Image src={Kitchen} className="iconcategory" alt="AC" width={20} height={20} />Kitchen</span>}
              {data.bathroom && <span><Image src={Bathroom} className="iconcategory" alt="AC" width={20} height={20} />Bathroom</span>}
              {data.gas && <span><Image src={Gas} className="iconcategory" alt="AC" width={20} height={20} />Gas</span>}
              {data.water && <span><Image src={Water} className="iconcategory" alt="AC" width={20} height={20} />Water</span>}
              {data.TV && <span><Image src={TV} className="iconcategory" alt="AC" width={20} height={20} />TV</span>}
            </div>
            <div>
                <h3 className="titlle">Vehicle details</h3>
                <div className="line"></div>
                <div className="character">
                    <div className="block-character">
                        <p className="character">Form</p><p className="character">{data.form}</p>
                    </div>
                    <div className="block-character">
                        <p className="character">Length</p><p className="character">{data.length}</p>
                    </div>
                    <div className="block-character">
                        <p className="character">Width</p><p className="character">{data.width}</p>
                    </div>
                    <div className="block-character">
                        <p className="character">Height</p><p className="character">{data.height}</p>
                    </div>
                    <div className="block-character">
                        <p className="character">Tank</p><p className="character">{data.tank}</p>
                    </div>
                    <div className="block-character">
                        <p className="character">Consumption</p><p className="character">{data.consumption}</p>
                    </div>
                </div>
            </div>
                </div>
            )}
            {activeTab === "reviews" && (
              <div className="reviews-list">
                {data.reviews.map((r, i) => (
                <div className="container-coment" key={i}>
                    <div className="top-cooment">
                        <div className="iconname">{firsLetter(r.reviewer_name)}</div>
                        <div className="con-n-r">
                            <p className="nameComentator">{r.reviewer_name}</p>
                            <div className="raiting">{renderStars(r.reviewer_rating)}</div>
                        </div>
                    </div>
                    <div>
                        <p className="comment">{r.comment}</p>
                    </div>
                </div>
                ))}
              </div>
            )}
            <div className="contact-us">
                <div>
                    <h3 className="TitleUs">Book your campervan now</h3>
                    <p className="comment">Stay connected! We are always ready to help you.</p>
                </div>

                <div className="ContainerForm">
                    <input className="InputInfoC" placeholder="Name*" type="text" />
                    <input className="InputInfoC" placeholder="Email*" type="text" />
                    <input className="InputInfoC" placeholder="Booking date*" type="text" />
                    <textarea placeholder="Comment" className="InputDopInfo"></textarea>
                </div>
                <button className="btn-contact">Send</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
