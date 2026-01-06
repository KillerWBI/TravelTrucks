"use client";

import { useTrucksStore } from "@/store/campers";
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
            AC
          </button>

          <button
            className={`checkbox ${localFilters.automatic ? "active" : ""}`}
            onClick={() => toggle("automatic")}
          >
            Automatic
          </button>

          <button
            className={`checkbox ${localFilters.kitchen ? "active" : ""}`}
            onClick={() => toggle("kitchen")}
          >
            Kitchen
          </button>

          <button
            className={`checkbox ${localFilters.TV ? "active" : ""}`}
            onClick={() => toggle("TV")}
          >
            TV
          </button>

          <button
            className={`checkbox ${localFilters.bathroom ? "active" : ""}`}
            onClick={() => toggle("bathroom")}
          >
            Bathroom
          </button>
        </div>

        <p className="sub">Vehicle type</p>
          <div className="line-category"></div>
        <div className="grid">
          <button
            className={`checkbox ${localFilters.van ? "active" : ""}`}
            onClick={() => toggle("van")}
          >
            Van
          </button>

          <button
            className={`checkbox ${
              localFilters.fullyIntegrated ? "active" : ""
            }`}
            onClick={() => toggle("fullyIntegrated")}
          >
            Fully Integrated
          </button>

          <button
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
