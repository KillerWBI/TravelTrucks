"use client";

//import Like from "@/public/Like.svg";
//import StarYell from "@/public/StarYell.svg";
import { useTrucksStore } from "@/store/campers";
import Image from "next/image";
import { useEffect } from "react";
import "./TrackList.css";
//<Image src={StarYell} className="logo" alt="Logo" width={16} height={16} />

export default function TrucksList() {
  const { trucks, fetchFirstPage, fetchNextPage, filters, loading } =
    useTrucksStore();

  useEffect(() => {
    fetchFirstPage();
  }, [filters, fetchFirstPage]);

  return (
    <div className="list">
      {trucks.map((t) => (
        <div key={t.id} className="card">

          {/* LEFT IMAGE */}
          <div className="image">
            <Image
              src={t.gallery?.[0]?.thumb || "/placeholder.jpg"}
              alt={t.name}
              width={300}
              height={200}
            />
          </div>

          {/* RIGHT PART */}
          <div className="content">

            {/* NAME + PRICE */}
            <div className="top">
              <h3>{t.name}</h3>
              <p className="price">€{t.price} </p>

            </div>

            {/* RATING + LOCATION */}
            <div className="meta">
              <span>{t.rating}({t.reviews.length} Reviews)</span>
              <span>{t.location}</span>
            </div>

            {/* DESCRIPTION */}
            <p className="desc">
              {t.description}
            </p>

            {/* FEATURES */}
            <div className="tags">
              {t.AC && <span>AC</span>}
              {t.kitchen && <span>Kitchen</span>}
              {t.bathroom && <span>Bathroom</span>}
              {t.gas && <span>Gas</span>}
              {t.water && <span>Water</span>}
              {t.TV && <span>TV</span>}
            </div>

            <button className="btn">Show more</button>
          </div>
        </div>
      ))}

      {loading && <p>Loading...</p>}

      <button onClick={fetchNextPage} className="btnmore">Load more</button>
    </div>
  );
}
