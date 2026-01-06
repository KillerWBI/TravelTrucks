"use client";

import AC from "@/public/AC.svg";
import Bathroom from "@/public/Bathroom.svg";
import Gas from "@/public/hugeicons_gas-stove.svg";
import Water from "@/public/ion_water-outline.svg";
import Kitchen from "@/public/Kitchen.svg";
import TV from "@/public/TV.svg";
import { useTrucksStore } from "@/store/campers";
import Image from "next/image";
import { useState } from "react";
import "./Category.css";

export default function Filters() {
  const setFilters = useTrucksStore((s) => s.setFilters);

  const [localFilters, setLocalFilters] = useState({
    location: "",

    // equipment
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    water: false,
    gas: false,

    // type
    van: false,
    fullyIntegrated: false,
    alcove: false,
  });

  const toggle = (key: keyof typeof localFilters) => {
    setLocalFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const apply = () => {
    const filters: Record<string, string | boolean> = {};

    if (localFilters.location) filters.location = localFilters.location;

    Object.entries(localFilters).forEach(([key, value]) => {
      if (typeof value === "boolean" && value === true) {
        filters[key] = true;
      }
    });

    setFilters(filters);
  };



  return (
    <div className="wrapper">
      <div className="block">
        <p className="label">Location</p>

        <input
          className="location"
          placeholder="Ukraine, Kyiv"
          value={localFilters.location}
          onChange={(e) =>
            setLocalFilters({ ...localFilters, location: e.target.value })
          }
        />
      </div>

      <div className="block">
        <h4 className="title">Filters</h4>

        <p className="sub">Vehicle equipment</p>
        <div className="line-category"></div>
        <div className="grid">

          <button
            className={`checkbox ${localFilters.AC ? "active" : ""}`}
            onClick={() => toggle("AC")}
          >
            <Image src={AC} className="iconcategoryPanel" alt="AC" width={20} height={20} />
            AC
          </button>

          <button
            className={`checkbox ${localFilters.automatic ? "active" : ""}`}
            onClick={() => toggle("automatic")}
          >
            <Image src={AC} className="iconcategoryPanel" alt="AC" width={20} height={20} />
            Automatic
          </button>

          <button
            className={`checkbox ${localFilters.kitchen ? "active" : ""}`}
            onClick={() => toggle("kitchen")}
          >
            <Image src={Kitchen} className="iconcategoryPanel" alt="Kitchen" width={20} height={20} />
            Kitchen
          </button>

          <button
            className={`checkbox ${localFilters.TV ? "active" : ""}`}
            onClick={() => toggle("TV")}
          >
            <Image src={TV} className="iconcategoryPanel" alt="TV" width={20} height={20} />
            TV
          </button>

          <button
            className={`checkbox ${localFilters.bathroom ? "active" : ""}`}
            onClick={() => toggle("bathroom")}
          >
            <Image src={Bathroom} className="iconcategoryPanel" alt="Bathroom" width={20} height={20} />
            Bathroom
          </button>

          <button
            className={`checkbox ${localFilters.water ? "active" : ""}`}
            onClick={() => toggle("water")}
          >
            <Image src={Water} className="iconcategoryPanel" alt="Water" width={20} height={20} />
            Water
          </button>
          <button
            className={`checkbox ${localFilters.gas ? "active" : ""}`}
            onClick={() => toggle("gas")}
          >
            <Image src={Gas} className="iconcategoryPanel" alt="Gas" width={20} height={20} />
            Gas
          </button>
        </div>

        <p className="sub">Vehicle type</p>
          <div className="line-category"></div>
        <div className="grid">
          <button
            disabled
            className={`checkbox ${localFilters.van ? "active" : ""}`}
            onClick={() => toggle("van")}
          >
            Van
          </button>

          <button
            disabled
            className={`checkbox ${
              localFilters.fullyIntegrated ? "active" : ""
            }`}
            onClick={() => toggle("fullyIntegrated")}
          >
            Fully Integrated
          </button>

          <button
            disabled
            className={`checkbox ${localFilters.alcove ? "active" : ""}`}
            onClick={() => toggle("alcove")}
          >
            Alcove
          </button>
        </div>
      </div>

      <button className="apply" onClick={apply}>
        Search
      </button>
    </div>
  );
}
